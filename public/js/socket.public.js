let socket = io();

socket.on('connect', () => {
    console.log('Connect with server');
});

socket.on('disconnect', () => {
    alert('Wait a moment while the connection is recovered');
});

socket.on('currentQueueStatus', (resp) => {
    updateTicketScreen(resp.servicingTickets);
});

socket.on('servicingTickets', (resp) => {
    const audio = new Audio('../audio/new-ticket.mp3');
    audio.muted = true;
    audio.play();
    audio.muted = false;

    updateTicketScreen(resp.servicingTickets);

});

const updateTicketScreen = (array) => {
    array.forEach((element, index) => {
        document.getElementById(`lblTicket${index + 1}`).innerText = `Ticket ${element.number}`;
        document.getElementById(`lblDesk${index + 1}`).innerText = `Desk ${element.desk}`;
    });
}