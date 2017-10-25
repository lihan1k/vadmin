<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>线下储值收银统计</div>
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
                                    <li class="active"><a href="#tabdet" data-toggle="tab" class="" id="tab1"><i class="icon-th-list"></i>按店</a></li>
                                    <li><a href="#tabzhexian" data-toggle="tab" id="tab2"><i class="icon-signal"></i>明细</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active form-horizontal" id="tabdet">

                                        <form class="searchform" id="search">

                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel('exportexcel_sumstore');"><i class=""></i>下载 excel</a>
                                            </div>

                                        </form>
                                        <div id="CashierTable">
                                            <table class="gtable">
                                                <thead>
                                                <tr>
                                                    <th>序号</th>
                                                    <th>门店</th>
                                                    <th><span class="sort">合计(元)</span></th>
                                                    <th><span class="sort">刷卡(元)</span></th>
                                                    <th><span class="sort">现金(元)</span></th>
                                                    <th><span class="sort">支付宝(元)</span></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td><a href="javascript:;" onclick="objDetail(136)">19-外滩店</a></td>
                                                    <td data-sortval="1">0</td>
                                                    <td data-sortval="<a href='javascript:;' onclick='objDetail(136)'>19-外滩店</a>">
                                                        0
                                                    </td>
                                                    <td data-sortval="0">0</td>
                                                    <td data-sortval="0">0</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <table id="summarytbl" class="gtable btmtbl_t">
                                            <tbody>
                                            <tr>
                                                <td style="width: 59px;"></td>
                                                <td id="Totals" style="width: 120px;"><b>合计:<b></b></b></td>
                                                <td style="width: 150px;"><b>0.00</b></td>
                                                <td style="width: 150px;"><b>0.00</b></td>
                                                <td style="width: 150px;"><b>0.00</b></td>
                                                <td style="width: 177px;"><b>0.00</b></td>
                                            </tr>
                                            </tbody>
                                        </table>
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
        name:"offlinestoredsilver",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>