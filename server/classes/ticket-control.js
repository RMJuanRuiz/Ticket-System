const fs = require('fs');
const Ticket = require('./ticket');

class TicketControl {
    constructor() {
        this.lastTicket = 0;
        this.today = new Date().getDate();
        this.tickets = [];
        this.servicingTickets = []; // Only 4 elements

        let data = require('../data/data.json');

        if (data.today === this.today) {
            this.lastTicket = data.lastTicket;
            this.tickets = data.tickets;
            this.servicingTickets = data.servicingTickets;
        } else {
            //It's a new day of operation
            this.resetCount();
        }


    }

    nextTicket() {
        this.lastTicket += 1;
        let ticket = new Ticket(this.lastTicket, null);
        this.tickets.push(ticket);

        this.saveData();

        return `Ticket ${this.lastTicket}`;
    }

    getLastTicket() {
        return this.lastTicket;
    };

    getServicingTickets() {
        return this.servicingTickets;
    }


    attendTicket(desk) {
        if (this.tickets.length === 0) {
            return {
                err: true,
                message: 'There is not tickets!'
            };
        }

        //Take first ticket in array
        let ticketNumber = this.tickets[0].number;
        this.tickets.shift();

        let attendTicket = new Ticket(ticketNumber, desk);

        this.servicingTickets.unshift(attendTicket); // Add ticket to servicing array

        if (this.servicingTickets.length > 4) {
            this.servicingTickets.pop() // Delete last element of array
        }

        console.log('Last4:,', this.servicingTickets);

        this.saveData();

        return attendTicket;
    };


    resetCount() {
        this.lastTicket = 0;
        this.tickets = [];
        this.servicingTickets = [];

        this.saveData();
    }

    /**
     * Update JSON data file with new information
     */
    saveData() {
        let jsonData = {
            lastTicket: this.lastTicket,
            today: this.today,
            tickets: this.tickets,
            servicingTickets: this.servicingTickets
        }

        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }

}


module.exports = {
    TicketControl
}