$(document).ready(function() {
 var from = $.cookie('user');//从 cookie 中读取用户名，存于变量 from
  var to = 'all';//设置默认接收对象为"所有人"
  //发送用户上线信号
  //we assume that these are ajax operation.
  socket.emit('online', {user: from});
  socket.on('online',function(data){
    var sys='';
    if(data.user==from){
       sys='<div style="color:#f00">系统('+now()+'):'+'你进入了聊天室！</div>'

    }
    else{
       sys='<div style="color:#f00">系统('+now()+'):'+data.user+'进入了聊天室！</div>'

    }
    $('#contents').append(sys);
    RefreshList(data);
    SayToSb();
  });
});
