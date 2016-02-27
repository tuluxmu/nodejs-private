# nodejs-private

利用网上的 N-blog 教学搭建的 blog

源码
<a href="https://github.com/tuluxmu/NodeJs-Blog/blob/master/README.md">click Here</a>

#node-chat
正在学习 sockit.io 的知识
N-chat

你可以看到不管是服务器还是客户端都有 emit 和 on 这两个函数，可以说 socket.io 的核心就是这两个函数了，通过 emit 和 on 可以轻松地实现服务器与客户端之间的双向通信。

```
emit ：用来发射一个事件或者说触发一个事件，第一个参数为事件名，第二个参数为要发送的数据，第三个参数为回调函数（一般省略，如需对方接受到信息后立即得到确认时，则需要用到回调函数）。
on ：用来监听一个 emit 发射的事件，第一个参数为要监听的事件名，第二个参数为一个匿名函数用来接收对方发来的数据，该匿名函数的第一个参数为接收的数据，若有第二个参数，则为要返回的函数。
```

socket.emit() ：向建立该连接的客户端广播
socket.broadcast.emit() ：向除去建立该连接的客户端的所有客户端广播
io.sockets.emit() ：向所有客户端广播，等同于上面两个的和

