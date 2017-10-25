<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>储值送红包汇总</div>
                            <div class="actions">
                                <a href="javascript:" class="btn blue hide" onclick="objDownExcel();"><i class=""></i>下载 excel</a>
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
                                <div class="sdate hide customerdate" style="margin-top: 5px;" id="timeblock">
                                    <input type="text" id="d4311" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="2017-09-18 00:00:00">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="2017-09-18 23:59:59">
                                    &nbsp;<input class="" type="submit" value="搜索" onclick="tosearch()">
                                </div>
                            </div>
                            <dl class="well totaltext">
                                <dd>
                                    <div class="timetip cls_timetip">汇总周期：09.18（周一）00:00:00 — 09.18（周一）23:59:59</div>
                                </dd>
                            </dl>
                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs charttabs">
                                    <li class="active"><a href="#tabdet" data-toggle="tab" class=""><i class="icon-th-list"></i><span class="hidden-320">汇总</span></a></li>
                                    <li><a href="#tabzhexian" data-toggle="tab"><i class="icon-signal"></i><span class="hidden-320">近况分析</span></a></li>
                                    <li><a href="#tabstore" data-toggle="tab"><i class="icon-bar-chart"></i><span class="hidden-320">门店红包汇总</span></a></li>
                                    <li><a href="#waiterRedPack" data-toggle="tab"><i class="icon-user"></i><span class="hidden-320">服务员红包汇总</span></a></li>
                                    <li><a href="#customerRedPack" data-toggle="tab"><i class="icon-user"></i><span class="hidden-320">会员红包汇总</span></a></li>
                                    <li><a href="#redPacklog" data-toggle="tab"><i class="icon-list"></i><span class="hidden-320">红包发放记录</span></a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active form-horizontal" id="tabdet">
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label">储值送红包累计：</label>
                                                <div class="controls"><span class="totaltxt">515.00 元/122 个</span></div>
                                            </div>

                                            <div class="control-group">
                                                <label class="control-label">会员红包累计：</label>
                                                <div class="controls"><span class="totaltxt">0 元/0 个</span></div>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">服务员红包累计：</label>
                                                <div class="controls"><span class="totaltxt">825.00 元/257 个</span></div>
                                            </div>
                                        </div>
                                        <hr>

                                        <div class="dateSummary">
                                            <div class="control-group">
                                                <label class="control-label">储值送红包：</label>
                                                <div class="controls" style="margin-top: 6px;"><span class="txtOneline">0 元/0 个</span></div>
                                            </div>

                                            <div class="control-group">
                                                <label class="control-label">会员红包：</label>
                                                <div class="controls" style="margin-top: 6px;"><span class="txtCustomer">0 元/0 个</span></div>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">服务员红包：</label>
                                                <div class="controls" style="margin-top: 6px;"><span class="txtEmplyee">0 元/0 个</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane" id="tabzhexian">
                                        <div id="id_charts_zhexian"></div>
                                        <div id="id_charts_bing"></div>
                                    </div>
                                    <div class="tab-pane" id="tabstore">
                                        <div class="tabbable-custom">
                                            <ul class="nav nav-tabs databs charts">
                                                <li class="active"><a href="#tabchart" data-toggle="tab">图表</a></li>
                                                <li><a href="#tabtype" data-toggle="tab">列表</a></li>
                                                <li>
                                                    <label style="margin-left: 30px; margin-top: 5px">
                                                        <input type="checkbox" id="id_chk_nhideomon" style="vertical-align: -3px" onchange="shownoview(this)">
                                                        隐藏金额为0元数据</label></li>
                                            </ul>
                                            <div>
                                                <div style="float: left;">
                                                    <label style="margin-left: 10px; margin-top: 5px;">吃货圈红包:<span class="chqAmount"></span>元</label>
                                                </div>
                                                <div class="actions" style="float: right;">
                                                    <a href="javascript:" id="downStore" class="btn blue hide" onclick="objDownExcel({export:'StoreRecard'});"><i class=""></i>下载 excel</a>
                                                    <div class="btn-group">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="clear: both;"></div>
                                            <div class="tab-content storecharts">
                                                <div class="tab-pane active" id="tabchart">
                                                    <div id="charts-1" style="min-width: 80%; height: 100%"></div>
                                                </div>
                                                <div class="tab-pane" id="tabtype">
                                                    <div id="id_table"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="tab-pane" id="waiterRedPack">
                                        <div class="searchform">
                                            <input type="text" name="skey" class="m-wrap medium" placeholder="服务员姓名,会员卡号">
                                            <input type="button" value="搜索" id="btnSch" onclick="waiterTblLoad()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel({export:'waiter'});"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="waiterTable" style="height: 100%"></div>
                                    </div>


                                    <div class="tab-pane" id="customerRedPack">
                                        <div class="searchform">
                                            <input type="text" name="skey" class="m-wrap medium" placeholder="姓名,会员卡号,手机">
                                            <input type="button" value="搜索" id="Button1" onclick="customerTblLoad()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel({export:'customer'});"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="customerTable" style="height: 100%"></div>
                                    </div>


                                    <div class="tab-pane" id="redPacklog">
                                        <div class="searchform">
                                            <input type="text" name="skey" id="id_rc_skey" class="m-wrap medium" placeholder="姓名,会员卡号">
                                            <select id="id_rc_store" name="sstore"><option value="0">全部门店</option><option value="136">杨文习</option></select>
                                            <input type="button" value="搜索" id="Button2" onclick="redlogTblLoad(1)">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel({export:'log'});"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="redlogTable" style="height: 100%"></div>
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
        name:"redpacketssummary",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>