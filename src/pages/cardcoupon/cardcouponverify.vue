<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>卡券使用记录</div>
                        </div>
                        <div class="portlet-body">
                            <form id="searchform" action="?" method="get" class="tabbable-custom searchform" style="margin-bottom: 5px;">
                                <input type="hidden" name="tabidx" value="0">
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

                                <div class="sdate hide" style="margin-top: 5px;">
                                    <input type="text" id="d4311" style="max-width: 150px; width: 145px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="2017-09-06 04:00:00">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px; width: 145px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="2017-09-07 03:59:59">
                                    &nbsp;
                                    <button style="margin-bottom: 10px" id="customtime">搜索</button>

                                </div>
                                <div>
                                    <dl class="well totaltext">
                                        <dd>
                                            <div style="font-weight: 400; font-size: 15px" class="timetip cls_timetip">汇总周期：</div>
                                        </dd>
                                    </dl>
                                </div>
                                <input type="text" name="skey" class="m-wrap medium" value="" style="font-size: 13.6px;" placeholder="姓名/昵称/卡号/手机号/卡券编号">

                                <select style="width: 90px" name="CardType" data-val="">
                                    <option value="">卡券类型</option>
                                    <option value="CASH">代金券</option>
                                    <option value="DISCOUNT">折扣券</option>
                                    <option value="GIFT">礼品券</option>
                                </select>
                                <input class="" type="button" value="搜索" id="btnSch">
                                <div class="tabletool" style="margin-top: 12px">
                                    <a href="javascript:" class="btn blue" onclick="objDownExcel({export:'log'});"><i class=""></i>下载 excel</a>
                                </div>
                                <br>
                                <div>
                                    <div style="margin-left: 10px;">卡券使用方式:</div>
                                    <div style="margin-left: 95px;" class="loty">
                                        <label class="checkCardState">
                                            <input type="checkbox" class="e_checkbox" name="u_wx" checked="">
                                            微信核销<span> 0（张）</span>
                                        </label>
                                        <label class="checkCardState">
                                            <input type="checkbox" class="e_checkbox" name="u_ys" checked="">
                                            云助手核销<span> 0（张）</span>
                                        </label>
                                        <label class="checkCardState">
                                            <input type="checkbox" class="e_checkbox" name="u_gf" checked="">
                                            转赠<span> 0（张）</span>
                                        </label>
                                        <label class="checkCardState">
                                            <input type="checkbox" class="e_checkbox" name="u_dl" checked="">
                                            删除<span> 0（张）</span>
                                        </label>

                                    </div>
                                </div>
                            </form>
                            <b style="margin-left: 0.8em; font-size: 14px; font-family: '黑体';">代金券共核销 0张，抵扣 0 元</b>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="hidden-480">序号</th>
                                    <th class="minwidth50">会员</th>
                                    <th class="minwidth80">卡券</th>
                                    <th class="hidden-480">编号</th>
                                    <th class="minwidth40">使用方式</th>
                                    <th class="hidden-480">门店</th>
                                    <th class="hidden-480">操作时</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                            <!-- #region 分页 -->
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 0 条 共 0 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize"><option value="1000000">全部</option></select>
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
                    <!-- #endregion -->
                </div>
                <!-- END EXAMPLE TABLE PORTLET-->
                <input type="hidden" name="datetimeIsErr" value="0">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardcouponverify",
        data() {
            return {}
        }
    }
</script>

<style>

</style>