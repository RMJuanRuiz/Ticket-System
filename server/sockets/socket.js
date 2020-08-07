const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');


const ticketControl = new TicketControl();


// io = Backend communication
io.on('connection', (client) => {
    console.log('User connected');

    client.on('nextTicket', (data, callback) => {
        ticketGenerated = ticketControl.nextTicket();
        callback({
            ticketGenerated
        });
    });

    client.emit('currentQueueStatus', {
        actualTicket: ticketControl.getLastTicket(),
        servicingTickets: ticketControl.getServicingTickets()
    });

    client.on('attendTicket', (data, callback) => {
        if (!data.desk) {
            return callback({
                err: true,
                message: 'Desk is necessary!'
            });
        }

        let attendTicket = ticketControl.attendTicket(data.desk);
        callback(attendTicket);

        client.broadcast.emit('servicingTickets', {
            servicingTickets: ticketControl.getServicingTickets()
        });



    });

});