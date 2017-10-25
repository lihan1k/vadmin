<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>打赏统计</div>
                        </div>
                        <div class="portlet-body">
                            <form id="searchform" class="tabbable-custom searchform" style="margin-bottom: 5px;" action="?">
                                <input type="hidden" name="tabidx" value="0">
                                <input type="hidden" name="Sid" value="1136">
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
                                    <input type="text" id="d4311" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="2017-09-19">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="2017-09-20">
                                    &nbsp;<input type="submit" value="搜索">
                                </div>
                                <dl class="well totaltext">
                                    <dd>
                                        <div class="timetip cls_timetip">汇总周期：2017-09-19 04:00:00（含）至 2017-09-20 04:00:00</div>
                                    </dd>
                                </dl>
                                <dl class="well totaltext">
                                    <dd>
                                        <p class="_p" style="font-weight: 800">打赏次数合计：0次 &nbsp; 红包发放合计：0元</p>
                                        <p class="_p">打赏金额合计：0元 &nbsp; 商家补助合计：0元</p>
                                    </dd>
                                </dl>
                                <div class="tab-pane">
                                    <div class="searchform">
                                        <input type="text" name="skey" class="m-wrap medium" placeholder="员工名称/工号" value="">
                                        <input type="submit" value="搜索" id="btnSch">
                                    </div>

                                </div>
                            </form>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index ">序号</th>
                                    <th class="alleft minwidth100 hidden-480">员工</th>
                                    <th class="alleft">工号</th>
                                    <th class="alleft">打赏金额(元)</th>
                                    <th class="alleft">商家补助(元)</th>
                                    <th class="alleft">打赏次数(次)</th>
                                    <th class="alleft">红包发放(元)</th>
                                </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 0 条 共 0 条</div></div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="ssdate=2017-09-19&amp;sedate=2017-09-20" count="0"><option value="1000000">全部</option></select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a></li>

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
    </div>
</template>

<script>
    export default {
        name: "rewardstatistics",
        data() {
            return {}
        }
    }
</script>

<style>

</style>