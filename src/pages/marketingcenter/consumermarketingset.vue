<template>
    <div class="page-content" >
        <div class="container-fluid">
            <div class="row-fluid" id="app">
                <div class="span12">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="icon-reorder"></i> 消费营销设置
                            </div>
                        </div>
                        <div class="portlet-body form">
                            <div class="span8">
                                <form id="submitform" method="post" class="form-horizontal" enctype="multipart/form-data">
                                    <ul>
                                        <li class="li">
                                            <div class="control-group">
                                                <div class="control-group">
                                                    <label class="control-label">服务：</label>
                                                    <div class="info-toggle-button">
                                                        <input type="checkbox" name="State" id="id_chk_enabled" class="toggle" checked />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p style="padding: 20px 10px 0px;">门店营销规则设置：</p>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">标题：</label>
                                                <div class="controls">
                                                    <input type="hidden" name="ID" value="6">
                                                    <input id="MsgTitle" name="MsgTitle" type="text" value="" class="m-wrap medium large" v-model="MsgTitle">
                                                </div>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">封面：</label>
                                                <div class="controls msgpic selectCFList">
                                                    <label class="list on">
                                                        <img src="http://yun.kingcome.cn/attached/resource/yingxiao/246495239e8342b8bfa9ce9ae8e9a60a.jpg"></label>
                                                </div>
                                                <label class="control-label"></label>
                                                <div>
                                                    <input type="button" id="sucai" style="margin-top: 10px; width: 94px; height: 34px; background: url(../../media/image/sucai.png) no-repeat center; border: none; outline: none;">
                                                    <input type="hidden" id="MsgPicUrl" name="MsgPicUrl" value="http://yun.kingcome.cn/attached/resource/yingxiao/246495239e8342b8bfa9ce9ae8e9a60a.jpg">
                                                </div>
                                            </div>
                                        </li>

                                        <li class="li">
                                            <div>
                                                <div class="form-horizontal">
                                                    <div class="control-group">
                                                        <label class="control-label">正文内容：</label>
                                                        <div class="info-toggle-button">
                                                            <input type="checkbox" name="State" id="TextSwitch" class="toggle" checked />
                                                        </div>
                                                        <label style="vertical-align: top; padding-top: 5px; margin-top: 2px; color: gray">(停用后，点击正文将自动跳转至储值历史)</label>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label">原文链接：</label>
                                                        <div class="controls">
                                                            <input type="text" id="TextUrl" value="" placeholder="https://">
                                                            <label style="vertical-align: top; padding-top: 5px; margin-top: 2px; color: gray">(建议输入微信推送原文链接)</label>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="li">
                                            <div>
                                                <div class="form-horizontal">
                                                    <div class="control-group">
                                                        <label class="control-label">评价：</label>
                                                        <div class="info-toggle-button">
                                                            <input type="checkbox" name="State" id="EvaluateSwitch" class="toggle" checked />
                                                        </div>
                                                    </div>
                                                    <div class="controls">

                                                        <a href="javascript:;" data-toggle="modal" class="addpingjia ka_add" style="float: right;">添加</a>
                                                        <table class="  table table-striped table-bordered table-hover dataTable" id="sample_3" aria-describedby="sample_3_info" style="width: 85%; margin-left: 18%;">
                                                            <thead>
                                                            <tr>
                                                                <th>序号</th>
                                                                <th>名称</th>
                                                                <th>默认分</th>
                                                                <th class="hidden-480">排序码</th>
                                                                <th>操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>口味</td>
                                                                <td>5</td>
                                                                <td>1</td>
                                                                <td><a href="javascript:;" onclick="EditPingjia(this)"
                                                                       data-sortindex="1" data-point="5" data-name="口味"
                                                                       data-id="16" class="glyphicons pen"
                                                                       title="编辑"><i></i></a><a href="javascript:;"
                                                                                                onclick="DelPingjia(this)"
                                                                                                data-id="16"
                                                                                                class="glyphicons bin"
                                                                                                title="删除"><i></i></a>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label"></label>
                                                        <div class="controls">
                                                            <label>
                                                                <input type="checkbox" id="CustomEvaluateSwitch" value="" checked="">开启自定义评价</label>
                                                        </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label"></label>
                                                        <div class="controls">
                                                            <label>
                                                                <input type="checkbox" id="GoodsEvaluateSwitch" value="" checked="">开启菜单点评
                                                            </label>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li class="li">
                                            <div>
                                                <div class="form-horizontal">
                                                    <div class="control-group">
                                                        <div class="control-group">
                                                            <label class="control-label">赠送积分：</label>
                                                            <div class="info-toggle-button">
                                                                <input type="checkbox" name="State" id="IntegralSwitch" class="toggle" checked />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="control-group" style="margin-left: 13%;">
                                                        <span><input type="radio" name="givetype_i" value="0" checked="">按订单金额赠送积分</span><span style="margin-left: 15px"><input type="radio" name="givetype_i" value="1">按实际支付金额赠送积分</span>
                                                    </div>
                                                    <div class="control-group" style="margin-left: 5%;">
                                                        <label class="control-label">每消费</label><input type="number" id="Integral_ConsumeMoney" value="" v-model="Money" style="width: 60px;"><label>元，赠送</label>
                                                        <input type="number" id="Integral" value="" v-model="score" style="width: 60px;"><label>积分</label>
                                                        <span style="color:gray">(消费金额未满足的部分，不予赠送)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="li">
                                            <div>
                                                <div class="control-group">
                                                    <div class="control-group">
                                                        <label class="control-label">赠送卡券：</label>
                                                        <div class="info-toggle-button">
                                                            <input type="checkbox" name="State" id="CardSwitch" class="toggle" checked />
                                                        </div>
                                                    </div>
                                                    <div class="control-group" style="margin-left: 13%;">
                                                <span>

                                                    <input type="radio" name="givetype_c" value="0" checked="">按订单金额赠送卡券</span>
                                                        <span style="margin-left: 15px"><input type="radio" name="givetype_c" value="1">按实际支付金额赠送卡券</span>
                                                        <br>
                                                        <span style="color:gray">(消费金额未满的部分，不予赠送)</span>
                                                    </div>
                                                    <div class="controls">
                                                        <input type="hidden" id="card_id_list" name="card_id_list" value="">
                                                        <a href="javascript:;" data-toggle="modal" class="addstore  ka_add" style="float: right;">添加</a>
                                                        <table class="  table table-striped table-bordered table-hover dataTable" id="sample_2" aria-describedby="sample_2_info" style="width: 85%; margin-left: 18%">
                                                            <thead>
                                                            <tr>
                                                                <th>序号</th>
                                                                <th>消费金额</th>
                                                                <th>卡包名称</th>
                                                                <th>卡券名称</th>
                                                                <th>操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody><tr><td>1</td><td>10</td><td>消费10返5元</td><td>消费10返5元</td><td><a href="javascript:;" onclick="EditCard(this)" data-kabaoname="消费10返5元" data-consumemoney="10" data-ids="1762" data-id="8" class="glyphicons pen" title="编辑"><i></i></a><a href="javascript:;" onclick="DelCard(this)" data-id="8" class="glyphicons bin" title="删除"><i></i></a></td></tr></tbody>
                                                        </table>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label"></label>
                                                        <div class="controls">
                                                            <label>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </form>
                                <div class="form-actions  form-horizontal">
                                    <label class="control-label"></label>
                                    <button type="button" class="btn blue btn_save" onclick="" style="float: right;">保存</button>
                                </div>
                            </div>

                            <div class="span4 form-horizontal" >
                                <div class="fright" style="width: 270px;">
                                    <!--预览-->
                                    <h4 class="ka_h3">效果预览</h4>
                                    <div class="yulan">
                                        <div class=" " style="width: 260px; margin: 7px auto;">

                                            <div id="preview">
                                                <img src="http://yun.kingcome.cn/attached/resource/yingxiao/246495239e8342b8bfa9ce9ae8e9a60a.jpg" style="max-width: 260px; max-height: 190px"><br>
                                            </div>
                                            <span v-text="MsgTitle"></span>
                                            <br>
                                            <div class="boxinfo">
                                                <ul>
                                                    <li class="pingjia"><span style="float: left;">评价|快来说说您就餐的感受吧</span><i class="img"><img src="../../media/image/pingjia.jpg"></i></li>
                                                    <li class="integral"><span style="float: left;">积分|获得消费积分 +<label style="display: inline" id="Integrals">{{score}}</label></span><i class="img"><img src="../../media/image/Integral.jpg"></i></li>
                                                    <li class="card" style="display: block;">
                                                        <span style="float: left; width: 220px; line-height: 20px;">领券|点击领取消费券包：消费10返5元</span>
                                                        <i class="img"><img src="../../media/image/card.jpg"></i>
                                                    </li>
                                                    <li><span style="float: left;">配送制作中|点击查看订单详情</span><i class="img"><img src="../../media/image/member.png"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/media/css/user-marketing.css'
    export default {
        name: "consumermarketingset",
        data() {
            return {
                MsgTitle:"感谢您的光顾",
                Money:20,
                score:10
            }
        },
        mounted:function () {
            $(function () {
                loadtogglebutton();
            })
        }
    }
</script>

<style scoped>
    #divmodal_choosepic{
        top:10%;
    }
    .portlet.box .form .form-actions {
        margin-bottom: 0px !important;
    }
    .li {
        border-bottom: 1px solid #e5e5e5;
    }

    .form-horizontal .control-label {
        width: 13%;
    }

    .m-wrap.large {
        width: 200px !important;
    }

    ul, ol {
        margin: 0 0 10px 0px;
    }

    .form-horizontal .control-group {
        margin-top: 10px;
    }

    .selectCFList label.list.on {
        border-color: #1FD31F;
    }

    .yulan {
        border: 2px solid #ccc;
        width: 270px;
        border-radius: 5px !important;
        -webkit-box-shadow: #ccc 0px 0px 10px;
        -moz-box-shadow: #ccc 0px 0px 10px;
        box-shadow: #ccc 0px 0px 10px;
        float: right;
    }

    .boxinfo {
        min-height: 40px;
        line-height: 40px;
    }

    .boxinfo ul {
        margin: 0px;
        padding: 0px;
    }

    .boxinfo ul li {
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #eee;
    }

    .controls .ka_add {
        background: #4d90fe;
        border: 1px solid #4d90fe;
        margin-bottom: 4px;
    }

    .form-horizontal .controls {
        width: 86%;
    }

    .cbox {
        vertical-align: top;
        padding-top: 5px;
        margin-top: -8px;
        margin-left: 7%;
    }

    .storelist {
        width: 70px;
        height: 30px;
        border: 1px solid #4d90fe;
        text-align: center;
        line-height: 30px;
        float: left;
        margin: 5px;
    }

    .img {
        width: 35px;
        height: 35px;
        display: block;
        float: right;
    }

    .icon-pencil, .icon-plus {
        color: #5BC0DE;
        text-decoration: none;
    }
    .del {
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        right: -1px;
        top: -1px;
        background: url(/media/image/portlet-remove-icon-white.png) center center no-repeat gray;
        opacity: 0.7;
        border-radius: 50% !important;
    }

    #selcstore a {
        display: inline-block;
        padding: 3px 6px;
        border: 1px solid #4D90FE;
        margin-top: 3px;
        text-decoration: none;
        margin-right: 5px;
    }

    .configul {
        margin: 0px;
        padding: 0px;
        margin-bottom: 20px;
    }

    .configli {
        margin-left: 16%;
        margin-bottom: 5px;
    }

    .checkshow {
        display: none;
    }
    .gtable .alleft{
        text-align: center;
    }
    @media  (min-width: 768px){
        .span4.form-horizontal{
            position: fixed;
            right: 15px;
        }
    }
</style>