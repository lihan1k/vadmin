//处理返回信息失败
function show_error(msg){
    layer.msg(msg 
    )
}


//处理返回信息成功
function show_success(msg,url){
    layer.open({
        'title':"提示",
        'content':msg,
       'icon':1,
       'yes':function(){
           location.href =url
       }
        })
}

function success_msg(msg){
    layer.msg(msg)
}

