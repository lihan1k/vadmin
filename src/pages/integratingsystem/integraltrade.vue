<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>积分交易记录</div>
                        </div>
                        <div class="portlet-body">
                            <form id="searchform" class="searchform tabbable-custom searchform" method="get" action="?">
                                <input type="hidden" name="tabidx" value="0">
                                <input type="hidden" name="customtime" value="0">
                                <ul class="nav nav-tabs searchdate">
                                    <li class="active"><a href="#" data-toggle="tab" onclick="gosearch('settoday', 0)">今日</a>
                                    </li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setyesterday', 1)">昨日</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setcurrweek', 2)">本周</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setprevweek', 3)">上周</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setcurrmonth', 4)">本月</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setprevmonth', 5)">上月</a></li>
                                    <li class="untime"><a href="javascript:" onclick="$('#searchform .sdate').toggle()"><i
                                            class="icon-calendar"></i></a></li>
                                </ul>

                                <div class="sdate hide customerdate" style="margin-top: 5px;">
                                    <input type="text" id="d4311" style="max-width: 150px" class="Wdate" name="ssdate"
                                           onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })"
                                           value="2017-09-06 04:00:00">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" class="Wdate" name="sedate"
                                           onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })"
                                           value="2017-09-07 03:59:59">
                                    &nbsp;
                                    <button style="margin-bottom: 10px" id="customtime">搜索</button>
                                </div>
                                <dl class="well totaltext" style="margin-top: 5px;">
                                    <dd>
                                        <div style="font-weight: 400; font-size: 15px" class="timetip cls_timetip">
                                            汇总周期：
                                        </div>
                                    </dd>
                                </dl>
                                <input type="text" name="skey" class="m-wrap medium" value="" placeholder="会员【实】/卡号【实】">

                                <select name="acrod" data-val="">
                                    <option value="">交易类别</option>
                                    <option value="Common,Subscribe,Recharge">营销送卡券</option>
                                    <option value="MakeOrder,GoodsAppend">消费送卡券</option>
                                    <option value="OfflineImport,OfflineInto">会员导入</option>
                                    <option value="InterGralIn">卡券转入</option>
                                    <option value="InterGralOut">卡券转出</option>
                                    <option value="Exchange">卡券兑换</option>

                                </select>
                                <input type="button" value="搜索" id="btns">
                                <div class="tabletool" style="margin-top: 12px">
                                    <a href="javascript:" class="btn blue" onclick="objDownExcel({export:'log'});"><i
                                            class=""></i>下载 excel</a>
                                </div>
                            </form>
                            <div class="alert-success"
                                 style="padding: 8px 15px 8px 14px; margin-bottom: 2px; font-size: 14px">
                                <button class="close" data-dismiss="alert"></button>
                                <span class="label label-important"></span>点击卡券记录可查看卡券明细
                            </div>

                            <div style="font-size: larger; text-align: center;">
                                当前没有数据!
                            </div>

                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 0 条 共 0 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="0">
                                            <option value="1000000">全部</option>
                                        </select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a>
                                            </li>

                                            <li class="active"><a href="javascript::">1</a></li>

                                            <li class="next disabled"><a href="javascript:"><span
                                                    class="hidden-480">下一页</span> → </a></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="datetimeIsErr" value="0">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "integraltrade",
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>