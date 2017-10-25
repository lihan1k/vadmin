<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>经营分析</div>
                        </div>
                        <div class="portlet-body form">

                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs searchdate">
                                    <li class="active"><a href="#" data-toggle="tab"
                                                          onclick="$('#tabtime').val(0)">近一月</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="$('#tabtime').val(1)">近三月</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="$('#tabtime').val(2)">上月</a></li>
                                    <li class="show-479"><a href="#" onclick="$('.searchform .searchhide').toggle()"><i
                                            class="icon-search"></i></a></li>
                                </ul>
                            </div>
                            <form class="searchform" method="get" action="">
                                <input type="hidden" name="tabtime" id="tabtime" value="0">

                                <div class="searchhide hide">
                                    <div style="display: inline-block;">
                                        <input type="text" id="d4311" style="max-width: 150px"
                                               onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd', maxDate: '#F{$dp.$D(\'d4312\')}' })"
                                               class="Wdate" name="ssdate" value="2017-08-20">
                                        -
                                        <input type="text" id="d4312" style="max-width: 150px"
                                               onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd', minDate: '#F{$dp.$D(\'d4311\')}' })"
                                               class="Wdate" name="sedate" value="2017-09-20">
                                    </div>
                                    <input type="submit" value="查询">
                                </div>
                                <input type="hidden" name="sfctab">
                            </form>
                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs charttabs">
                                    <li class="active"><a href="#tabdet" data-toggle="tab" class=""><i
                                            class="icon-list"></i><span class="hidden-320"> 列表</span></a></li>
                                    <li><a href="#tabchart" data-toggle="tab"><i class="icon-bar-chart"></i><span
                                            class="hidden-320"> 图表</span></a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabdet">
                                        <table class="gtable">
                                            <thead>
                                            <tr>
                                                <th class="alcenter">时间</th>
                                                <th class="alright">营业额</th>
                                                <th>桌数</th>
                                                <th class="hidden-480">上座率</th>
                                                <th>人数</th>
                                                <th>人均</th>
                                                <th>桌均</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <td class="alcenter">9-15</td>
                                                <td class="alright">437.00</td>
                                                <td>3</td>
                                                <td class="hidden-480">6%</td>
                                                <td>5</td>
                                                <td>87</td>
                                                <td>146</td>
                                            </tr>
                                            <tr class="heji" style="font-weight: bold">
                                                <td class="alright">合计：</td>
                                                <td class="alright">4198.00</td>
                                                <td>24</td>
                                                <td class="hidden-480">5%</td>
                                                <td>54</td>
                                                <td>78</td>
                                                <td>175</td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane" id="tabchart">
                                        <div id="chart" style="min-width: 80%; height: 100%"></div>
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
        name: "businessanalysis",
        data() {
            return {}
        }
    }
</script>

<style>

</style>