<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="form-horizontal portlet box grey">
                    <div class="portlet-title">
                        <div class="caption"><i class="icon-pencil"></i>门店设置</div>
                    </div>
                    <div class="tabbable-custom portlet-body">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#tabbase" data-toggle="tab"><i class=""></i>基本信息</a></li>
                            <li><a href="#tabfunc" data-toggle="tab" onclick="b_pt_start=1"><i class=""></i>功能设置</a>
                            </li>
                            <li><a href="#tabpos" data-toggle="tab" onclick="b_pt_start=1"><i class=""></i>POS机买单设置</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane active" id="tabbase">
                                <form class="form" method="post">
                                    <input type="hidden" name="action" value="save">
                                    <div class="control-group">
                                        <label class="control-label">门店名称：</label>
                                        <div class="controls"><span class="vlm">19-外滩店</span></div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">电话：</label>
                                        <div class="controls">
                                            <input type="text" name="Phone" class="m-wrap" value="13554536302"
                                                   autofocus="">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">地址：</label>
                                        <div class="controls">
                                            <input type="text" name="Address" class="m-wrap large"
                                                   value="武汉市东湖新技术开发区民院路38号龙安港汇城A单元618">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Email：</label>
                                        <div class="controls">
                                            <input type="text" name="Email" class="m-wrap" value="">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">定位：</label>
                                        <div class="controls">
                                            <button type="button" onclick="showmap()">定位</button>
                                            <span id="id_loctip"> (114.4044,30.5068)</span>
                                            <input type="hidden" id="id_Longitude" name="Longitude" class="m-wrap"
                                                   value="114.4044">
                                            <input type="hidden" id="id_Latitude" name="Latitude" class="m-wrap"
                                                   value="30.5068">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">图片：</label>
                                        <div class="controls">
                                            <input type="button" value="选择图片"
                                                   onclick="document.getElementById('id_file').click()">
                                            <input type="file" id="id_file" name="file_picture" class="hide"><img
                                                src="http://show.yun.kingcome.cn/attached/storeimg/1/da70787365864f5c8c839d9f3dc03c4b.png"
                                                id="id_img" height="80" style="height: 80px">
                                            <input type="hidden" name="tmpimgurl" id="id_filehd"
                                                   value="http://show.yun.kingcome.cn/attached/storeimg/1/da70787365864f5c8c839d9f3dc03c4b.png">
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">描述：</label>
                                        <div class="controls">
                                            <textarea name="Smart" class="m-wrap large"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-actions" style="padding-left: 145px">
                                        <button type="submit" class="btn blue"><i class="icon-ok"></i>保存</button>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane" id="tabfunc">
                                <div class="control-group">
                                    <label class="control-label title" for="id_chk_qr">下单服务员确认：</label>
                                    <div class="controls">
                                        <label>
                                            <input type="checkbox" id="id_chk_qr">（选中后顾客在下单时需服务员输入账号密码进行确认）</label>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label title" for="id_dis_disct">买单前不显示会员优惠：</label>
                                    <div class="controls">
                                        <label>
                                            <input type="checkbox" id="id_dis_disct" false="">（选中后在点餐、确认订单及当前消费页【买单前】不会显示会员优惠信息）</label>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label title" for="id_chk_xf">下单前付款：</label>
                                    <div class="controls">
                                        <label>
                                            <input type="checkbox" id="id_chk_xf">（选中后顾客在下单前需进行订单支付）</label>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <label class="control-label title" for="id_chk_gq">估清菜品显示：</label>
                                    <div class="controls">
                                        <label>
                                            <input type="checkbox" id="id_chk_gq"
                                                   checked="">（选中后在点餐页会显示沽清菜，并标记【沽清】）</label>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">菜品做法：</label>
                                    <div class="controls">
                                        <input id="GoodsPractice" type="text" class="m-wra tags medium"
                                               value="七分熟,八分熟,全熟" style="display: none;">
                                    </div>

                                </div>
                                <div class="control-group">

                                    <label class="control-label">菜品口味：</label>

                                    <div class="controls">
                                        <input id="GoodsTaste" type="text" class="m-wra tags medium" value="微辣,特辣,清淡"
                                               style="display: none;">
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane" id="tabpos" style="min-height: 350px; position: relative;">


                                <div style="clear: both; margin-top: 20px;">
                                    <span style="font-size: 1.1em; vertical-align: -4px;">POS收款支付方式：</span>
                                    &nbsp;&nbsp;
                                    <input type="checkbox" value="cash" checked="checked"
                                           class="payitem-input PayOrderWay" onclick=""><span
                                        class="payitem-align">现金</span>
                                    &nbsp;&nbsp;
                                    <input type="checkbox" value="wxpay" checked="checked"
                                           class="payitem-input PayOrderWay" onclick=""><span
                                        class="payitem-align">微信</span>

                                    &nbsp;&nbsp;<input type="checkbox" value="alipay" checked="checked"
                                                       class="payitem-input PayOrderWay" onclick=""><span
                                        class="payitem-align">支付宝</span>
                                    &nbsp;&nbsp;<input type="checkbox" value="koubei" class="payitem-input PayOrderWay"
                                                       onclick=""><span class="payitem-align">支付宝口碑</span>
                                    &nbsp;&nbsp;<input type="checkbox" value="unionpay" checked="checked"
                                                       class="payitem-input PayOrderWay" onclick=""><span
                                        class="payitem-align">刷卡</span>
                                </div>
                                <div class="form-actions" style="padding-left: 100px; margin-top: 210px;">
                                    <a class="btn blue" onclick="savePOSConfig()"><i class="icon-ok"></i>保存</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
      name:"setstore",
      data(){
          return{

          }
      }
  }
</script>

<style>

</style>