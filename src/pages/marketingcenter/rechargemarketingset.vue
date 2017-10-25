<template>
    <div class="page-content" >
        <div class="container-fluid">
            <div class="row-fluid" id="app">
                <div class="span12">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="icon-reorder"></i> 充值营销设置
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
                                                        <img src="http://yun.kingcome.cn/attached/resource/yingxiao/70faf0589fcc466986d19650a873429f.png">
                                                    </label>
                                                </div>
                                                <label class="control-label"></label>
                                                <div>
                                                    <input type="button" id="sucai" style="margin-top: 10px; width: 94px; height: 34px; background: url(../../media/image/sucai.png) no-repeat center; border: none; outline: none;">
                                                    <input type="hidden" id="MsgPicUrl" name="MsgPicUrl" value="http://yun.kingcome.cn/attached/resource/yingxiao/70faf0589fcc466986d19650a873429f.png">
                                                </div>
                                            </div>
                                        </li>

                                        <li class="li">
                                            <div>
                                                <div class="form-horizontal">
                                                    <div class="control-group">
                                                        <div class="control-group">
                                                            <label class="control-label">正文内容：</label>
                                                            <div class="info-toggle-button">
                                                                <input type="checkbox" name="State" id="TextSwitch" class="toggle" checked />
                                                            </div>
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
                                                        <label class="control-label">赠送金额：</label>
                                                        <div class="info-toggle-button">
                                                            <input type="checkbox" name="State" id="MoneySwitch" class="toggle" checked />
                                                        </div>
                                                    </div>
                                                    <div class="controls">
                                                        <table class=" table table-striped table-bordered table-hover dataTable" id="sample_4" aria-describedby="sample_2_info" style="width: 85%; margin-left: 16%">
                                                            <thead>
                                                            <tr>
                                                                <th style="text-align: center">序号</th>
                                                                <th style="text-align: center">储值规则</th>
                                                                <th style="text-align: center">赠送金额</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td style="text-align:center">1</td>
                                                                <td style="text-align:center">充值 200元</td>
                                                                <td style="text-align:center">
                                                                    <input type="text" class="setStoreMoney" style="width:100px;" data-id="1711" value="" v-model="setStoreMoney">
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
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
                                                    <div class="controls">
                                                        <table class=" table table-striped table-bordered table-hover dataTable" id="sample_2" aria-describedby="sample_2_info" style="width: 85%; margin-left: 16%">
                                                            <thead>
                                                            <tr>
                                                                <th style="text-align: center">序号</th>
                                                                <th style="text-align: center">储值规则</th>
                                                                <th style="text-align: center">赠送积分</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td style="text-align:center">1</td>
                                                                <td style="text-align:center">充值 200元</td>
                                                                <td style="text-align:center">
                                                                    <input type="text" class="setStore" style="width:100px;" v-model="score">
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="li">
                                            <div>
                                                <div class="control-group">
                                                    <div class="control-group">
                                                        <div class="control-group">
                                                            <label class="control-label">赠送卡券：</label>
                                                            <div class="info-toggle-button">
                                                                <input type="checkbox" name="State" id="CardSwitch" class="toggle" checked />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="controls">
                                                        <input type="hidden" id="card_id_list" name="card_id_list">
                                                        <table class=" table table-striped table-bordered table-hover dataTable" id="sample_3" aria-describedby="sample_2_info" style="margin-left: 16%">
                                                            <thead>
                                                            <tr>
                                                                <th style="text-align: center">序号</th>
                                                                <th style="text-align: center">储值规则</th>
                                                                <th style="text-align: center">券包名称</th>
                                                                <th style="text-align: center">卡券名称</th>
                                                                <th style="text-align: center">操作</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td style="text-align:center">1</td>
                                                                <td style="text-align:center">充值 200元</td>
                                                                <td style="text-align:center"></td>
                                                                <td style="text-align:center">8折优惠券*1</td>
                                                                <td style="text-align:center">
                                                                    <a href="javascript:;" onclick="configCard(this)" class="glyphicons pen" title="编辑"><i></i></a>
                                                                    <a href="javascript:;" onclick="clearConfig(this)" class="glyphicons bin" title="删除"><i></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr></tr>
                                                            <tr>
                                                                <td style="text-align:center">2</td>
                                                                <td style="text-align:center">充值 300元</td>
                                                                <td style="text-align:center"></td>
                                                                <td style="text-align:center"></td>
                                                                <td style="text-align:center">
                                                                    <a href="javascript:;" onclick="configCard(this)" title="添加"><i class="icon-plus"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr></tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="li">
                                            <div>
                                                <div class="control-group">
                                                    <div class="control-group">
                                                        <div class="control-group">
                                                            <label class="control-label">规则说明：</label>
                                                            <div class="info-toggle-button">
                                                                <input type="checkbox" name="State" id="Rule" class="toggle" checked />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="control-group">
                                                        <label class="control-label"></label>
                                                        <div class="controls">
                                                            <textarea id="Remark" class="m-wrap" style="height:100px">本会员卡仅适本连锁餐饮使用。</textarea>
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
                            <div class="span4 form-horizontal">
                                <div class="fright" style="width: 270px;">
                                    <!--预览-->
                                    <h4 class="ka_h3">效果预览</h4>
                                    <div class="yulan">
                                        <div class=" " style="width: 260px; margin: 7px auto;">

                                            <div id="preview">
                                                <img src="http://yun.kingcome.cn/attached/resource/yingxiao/70faf0589fcc466986d19650a873429f.png" style="max-width: 260px; max-height: 190px"><br>
                                            </div>
                                            <span v-text="MsgTitle"></span>
                                            <br>
                                            <div class="boxinfo">
                                                <ul>
                                                    <li class="pingjia" style="height: 46px; line-height: 20px;">
                                                        <span style="float: left; width: 210px;">
                                                            <span style="float: left;">
                                                                会员|成功充值<span id="hh">200</span>元，
                                                            </span>
                                                            <span style="float: left; display: block;" class="money">
                                                                赠送<span id="money" v-text="setStoreMoney"></span>元
                                                            </span>
                                                            <span style="float: left;">充值后储值余额为</span>
                                                            <span style="float: left; display: block;" class="moneys">
                                                                <span id="moneys"></span>元
                                                            </span>
                                                            <span style="float: left; display: none;" class="moneyss"> 200元</span>
                                                        </span>
                                                        <i class="img"><img src="../../media/image/member.png"></i>
                                                    </li>
                                                    <li class="card" style="display: none;">
                                                        <span style="float: left;">领券|领取储值券包：</span>
                                                        <i class="img"><img src="../../media/image/card.jpg"></i>
                                                    </li>
                                                    <li class="integraltip">
                                                        <span style="float: left;">
                                                            积分|获得储值积分+<span id="score" v-text="score"></span>
                                                        </span>
                                                        <i class="img">
                                                            <img src="../../media/image/Integral.jpg"></i>
                                                    </li>
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
        name: "rechargemarketingset",
        data() {
            return {
                MsgTitle:"恭喜您充值成功",
                setStoreMoney:20,
                score:20
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
        margin-bottom: 0 !important;
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
        margin: 0 0 10px 0;
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
        -webkit-box-shadow: #ccc 0 0 10px;
        -moz-box-shadow: #ccc 0 0 10px;
        box-shadow: #ccc 0 0 10px;
        float: right;
    }

    .boxinfo {
        min-height: 40px;
        line-height: 40px;
    }

    .boxinfo ul {
        margin: 0;
        padding: 0;
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
    .form-horizontal .controls{
        margin-left: 0;
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
        margin: 0;
        padding: 0;
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