<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>收银统计</div>
                            <div class="actions">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div id="searchform" class="tabbable-custom" style="margin-bottom: 5px;">
                                <ul class="nav nav-tabs searchdate">
                                    <li class="active"><a href="#" data-toggle="tab" data-key="today">今日</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="yesterday">昨日</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="thisweek">本周</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="lastweek">上周</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="thismonth">本月</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="lastmonth">上月</a></li>
                                    <li class="untime"><a href="javascript:" onclick="$('#searchform .sdate').toggle()"><i class="icon-calendar"></i></a></li>
                                </ul>
                                <div class="sdate hide customerdate" style="margin-top: 5px; display: none;">
                                    <input type="text" id="d4311" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="">
                                    &nbsp;<input class="" type="submit" value="搜索" onclick="customTimeSearch()">
                                </div>
                            </div>
                            <dl class="well totaltext">
                                <dd>
                                    <div class="timetip cls_timetip">汇总周期：09.18（周一）04:00:00 —— 09.19（周二）03:59:59</div>
                                </dd>
                            </dl>
                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs charttabs">
                                    <li class="active"><a href="#tabdet" data-toggle="tab" class="" id="tab1"><i class="icon-th-list"></i>汇总</a></li>
                                    <li><a href="#tabzhexian" data-toggle="tab" id="tab2"><i class="icon-signal"></i>明细</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active form-horizontal" id="tabdet">

                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label"><b>微信：</b> </label>
                                                <div class="controls"><span class="totaltxt ljxzcz">0.00</span>元</div>
                                            </div>
                                            <div class="control-group" style="display: inline-block;">
                                                <label class="control-label">新增本金：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt xzbj">0.00</span>元 </div>
                                            </div>
                                            <div class="control-group" style="display: inline-block">
                                                <label class="control-label">新增赠送：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt xzzs">0.00</span>元</div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label"><b>支付宝：</b></label>
                                                <div class="controls"><span class="totaltxt ljxfcz">0.00</span>元</div>
                                            </div>
                                            <div class="control-group" style="display: inline-block;">
                                                <label class="control-label">消费本金：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt xfbj">0.00</span>元 </div>
                                            </div>
                                            <div class="control-group" style="display: inline-block">
                                                <label class="control-label">消费赠送：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt xfzs">0.00</span>元</div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label"><b>累计转储值：</b></label>
                                                <div class="controls"><span class="totaltxt ljCzTrans">0.00</span>元</div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label"><b>会员导入：</b></label>
                                                <div class="controls"><span class="totaltxt">1338825.21</span>元</div>
                                            </div>
                                            <div class="control-group" style="display: inline-block;">
                                                <label class="control-label">消费本金：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt">1736.00</span>元 </div>
                                            </div>
                                            <div class="control-group" style="display: inline-block">
                                                <label class="control-label">消费赠送：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt">1338676.21</span>元</div>
                                            </div>
                                        </div>

                                        <hr>
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label"><b>当前储值余额：</b></label>
                                                <div class="controls"><span class="totaltxt dqye">6716541.60</span> 元</div>
                                            </div>
                                            <div class="control-group" style="display: inline-block;">
                                                <label class="control-label">当前本金余额：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt dqbjye">5276677.80</span> 元 </div>
                                            </div>
                                            <div class="control-group" style="display: inline-block">
                                                <label class="control-label">当前赠送余额：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt dqzsye">1439863.80</span> 元</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabzhexian">
                                        <div class="searchform" id="Search_Detaoo">
                                            <input type="text" name="skey" id="id_rc_skeys" class="m-wrap" placeholder="姓名/昵称/卡号/手机号">
                                            <select id="id_rc_store" name="sstore"><option value="0">全部门店</option><option value="136">杨文习</option></select>
                                            <input type="button" value="搜索" onclick="DetialSearch()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel('exportexcel_StoreDetial');"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>

                                        <div id="cashier_detial">
                                        </div>
                                    </div>
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
        name: "cashierstatistics",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .form-horizontal .control-label{
        width: 130px;
    }
    .form-horizontal .controls{
        margin-top: 7px;
    }
</style>