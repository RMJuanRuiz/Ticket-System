let socket = io();

// .on is for listening to information
socket.on('connect', function() {
    console.log('Connect with server');
});

socket.on('disconnect', function() {
    console.log('Connection with server lost');
});

// .emit is to send information
socket.emit('sendMessage', {
    user: 'Juan',
    message: 'Hello!'
}, function(resp) {
    console.log(resp);
});

// Listen to information
socket.on('sendMessage', function(msg) {
    console.log(msg);
});