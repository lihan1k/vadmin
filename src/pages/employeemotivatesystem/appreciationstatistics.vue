<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>点评统计</div>
                        </div>

                        <div class="portlet-body">
                            <form id="searchform" class="tabbable-custom searchform" style="margin-bottom: 5px;" action="?">
                                <input type="hidden" name="tabidx" value="0">
                                <input type="hidden" name="sstore" value="136">
                                <input type="hidden" name="skey" value="">
                                <input type="hidden" name="customtime" value="0">

                                <ul class="nav nav-tabs searchdate">
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('settoday', 0)">今日</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setyesterday', 1)">昨日</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setcurrweek', 2)">本周</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setprevweek', 3)">上周</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setcurrmonth', 4)">本月</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setprevmonth', 5)">上月</a></li>
                                    <li class="untime"><a href="javascript:" onclick="$('#searchform .sdate').toggle()"><i class="icon-calendar"></i></a></li>
                                </ul>

                                <div class="sdate hide customerdate" style="margin-top: 5px;">
                                    <input type="text" id="d4311" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="2017-09-19 04:00:00">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="2017-09-20 03:59:59">
                                    &nbsp;     <button style="margin-bottom:10px" id="customtime">搜索</button>
                                </div>
                                <dl class="well totaltext">
                                    <dd>
                                        <div style="font-weight: 400; font-size: 15px" class="timetip cls_timetip">汇总周期： 09.19<span style="margin-left: 8px; font-size: 13px; color: gray">（周二）04:00:00</span> <span style="color: gray">—</span>  09.20<span style="margin-left: 8px; font-size: 13px; color: gray">（周三）03:59:59</span></div>
                                    </dd>

                                </dl>
                            </form>
                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs charttabs">
                                    <li class="active"><a href="#tabstore" data-toggle="tab"><i class="icon-bar-chart"></i><span class="hidden-320">汇总</span></a></li>
                                    <li><a href="CommentsStatisticsDetail.html"><i class="icon-list"></i><span class="hidden-320">明细</span></a></li>
                                </ul>
                                <div class="tab-content">
                                    <input type="text" id="skey" value="" style="width: 168px" placeholder="职员姓名/工号">

                                    <input type="button" value="搜索" onclick="Search()">

                                    <div style="font-size: larger; text-align: center;">暂时没有数据!</div>

                                    <div class="row-fluid">
                                        <div class="span6">
                                            <div class="dataTables_info">第 1 - 0 条 共 0 条</div>
                                        </div>
                                        <div class="span6">
                                            <div class="glb_pagingsize">
                                                <select id="glb_pagingsize" value="20" param="" count="0"><option value="1000000">全部</option></select>
                                            </div>
                                            <div class="dataTables_paginate paging_bootstrap pagination">
                                                <ul>
                                                    <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a></li>

                                                    <li class="active"><a href="javascript::">1</a></li>

                                                    <li class="next disabled"><a href="javascript:"><span class="hidden-480">下一页</span> → </a></li>
                                                </ul>
                                            </div>
                                        </div>
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
        name: "appreciationstatistics",
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>