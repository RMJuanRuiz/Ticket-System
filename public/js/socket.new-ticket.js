let socket = io();

let generateTicketBtn = document.querySelector('button'),
    lblNextTicket = document.getElementById('lblNewTicket');

socket.on('connect', () => {
    console.log('Connect with server');
});

socket.on('disconnect', () => {
    console.log('Connection with server lost');
});

socket.on('currentQueueStatus', (resp) => {
    lblNextTicket.innerText = `Last ticket: ${resp.actualTicket}`;
});

generateTicketBtn.addEventListener('click', () => {
    socket.emit('nextTicket', null, (resp) => {
        lblNextTicket.innerText = resp.ticketGenerated;
    });
});