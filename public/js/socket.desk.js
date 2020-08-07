let socket = io();

let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('desk')) {
    window.location = 'index.html';
    throw new Error('Desk is necessary');
}

let desk = searchParams.get('desk'),
    ticketLabel = document.querySelector('small');

document.querySelector('h1').textContent += ` ${desk}`;

document.querySelector('button').addEventListener('click', () => {
    socket.emit('attendTicket', { desk }, (resp) => {

        if (resp.err) {
            alert(resp.message);
            ticketLabel.innerText = '...';
            return;
        }

        ticketLabel.innerText = `Ticket ${resp.number}`;
    });
});