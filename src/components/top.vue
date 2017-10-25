<template>
    <div class="header navbar navbar-inverse navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container-fluid">
                <a class="brand" href="../index.html"> <img src="../media/image/logo.png" alt="logo"/> </a>
                <a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse"> <img
                        src="../media/image/menu-toggler.png" alt=""/> </a>
                <ul class="nav pull-right toolnav hidden-480">
                    <li class="dropdown user"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style=" margin-top: 5px;"> <i class="icon-angle-down"></i> </a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><i class="icon-user"></i> 个人资料</a></li>
                            <li class="divider"></li>
                            <li><a href="#"><i class="icon-signout"></i> 退出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    
    export default{
        name:"top",
        data(){
            return{

            }
        },
        mounted:function(){
            
            $(".btn-navbar").click(function () {
            if ($(".toolnav").hasClass("hidden-480")) {
                $(".toolnav").removeClass("hidden-480");
            }
            else {
                $(".toolnav").addClass("hidden-480");
            }
        });
        }
    }
</script>
<style>

</style>

