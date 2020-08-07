const { io } = require('../server');

// io = Backend communication
io.on('connection', (client) => {
    console.log('User connected');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome!'
    });

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    // Listening client information
    client.on('sendMessage', (data, callback) => {
        console.log(data);

        //Send message to all clients
        client.broadcast.emit('sendMessage', data);

        // if (msg.user) {
        //     callback({
        //         response: 'Everything is good'
        //     });
        // } else {
        //     callback({
        //         error: 'Error! Something went wrong!'
        //     })
        // }

    });
});