const { connected } = require('process');

var app = require('express')();
var http =require('http').Server(app);
var io =require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    socket.broadcast.emit('newMessage','seseorang sedang konek')
    socket.on('newMessage',function(msg){
        io.emit('newMessage',msg);
        console.log('chat baru'+ msg);
    });
    socket.on('disconnect',function(msg){
        
        socket.broadcast.emit('newMessage','seseorang sedang diskonek')
    });


});
http.listen(3000,function(){
    console.log('beungeut sia jiga tutup termos')
});
