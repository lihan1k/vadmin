<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>卡券汇总</div>
                            <div class="actions">
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">

                            <div id="searchform" class="tabbable-custom searchform">
                                <ul class="nav nav-tabs searchdate">
                                    <li class="active"><a href="#" data-toggle="tab" data-key="today">今日</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="yesterday">昨日</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="thisweek">本周</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="lastweek">上周</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="thismonth">本月</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="lastmonth">上月</a></li>
                                    <li class="untime"><a href="javascript:" onclick="$('#searchform .sdate').toggle()"><i
                                            class="icon-calendar"></i></a></li>
                                </ul>
                                <div class="sdate hide customerdate" style="display: none;">
                                    <input type="text" id="d4311" style="max-width: 150px"
                                           onclick="; WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })"
                                           class="Wdate" name="ssdate" value="2017-09-06 17:52:29  ">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px"
                                           onclick="; WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })"
                                           class="Wdate" name="sedate" value="2017-09-06 17:52:29  ">
                                    &nbsp;<input class="" type="submit" value="搜索" onclick="tosearch(0, 1)">
                                </div>
                            </div>
                            <dl class="well totaltext">
                                <dd>
                                    <div class="cls_timetip">汇总周期：</div>
                                </dd>
                            </dl>
                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs charttabs">
                                    <li class="active"><a href="#tabdet" data-toggle="tab" class=""><i
                                            class="icon-th-list"></i><span class="hidden-320">汇总</span></a></li>
                                    <li class=""><a href="#tabzhexian" data-toggle="tab"><i
                                            class="icon-signal"></i><span class="hidden-320">近况分析</span></a></li>
                                    <li data-tabtype="customerscore" class=""><a href="#tabcust" data-toggle="tab"><i
                                            class="icon-user"></i><span class="hidden-320">会员卡券汇总</span></a></li>
                                </ul>
                                <div class="tab-content">


                                    <div class="tab-pane form-horizontal active" id="tabdet">
                                        <div class="clearfix"></div>
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label">累计卡券：</label>
                                                <div class="controls"><span class="totaltxt">20,097,784</span></div>
                                            </div>
                                            <div class="control-group">
                                                <label class="control-label">可用卡券：</label>
                                                <div class="controls"><span class="totaltxt">17,173,971</span></div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="control-group">
                                            <label class="control-label">关注送卡券：</label>
                                            <div class="controls"><span class="text subscribe">1,900</span></div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label">消费送卡券：</label>
                                            <div class="controls"><span class="text makeorder">464</span></div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label">储值送卡券：</label>
                                            <div class="controls"><span class="text recharge">70</span></div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label">兑换送卡券：</label>
                                            <div class="controls"><span class="text exchange">0</span></div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label">营销赠送卡券：</label>
                                            <div class="controls"><span class="text common">0</span></div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label">系统清零：</label>
                                            <div class="controls"><span class="text systemdeduction">0</span></div>
                                        </div>
                                        <div class="control-group">
                                            <label class="control-label">其他：</label>
                                            <div class="controls"><span class="text other">0</span></div>
                                        </div>
                                    </div>


                                    <div class="tab-pane" id="tabzhexian">
                                        <div class="tab-pane active" id="tabchart">

                                        </div>
                                    </div>

                                    <div class="tab-pane" id="tabcust">
                                        <dl class="well totaltext">
                                            <dd class="timetip">会员卡券信息</dd>
                                        </dl>
                                        <div class="searchform">
                                            <input type="text" name="skey" class="m-wrap medium" placeholder="昵称/会员卡号">
                                            <input type="button" value="搜索" id="btnSch" onclick="loadcustdata()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue"
                                                   onclick="objDownExcel({export:'log'});"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="id_tablecust">
                                            <table class="gtable">
                                                <thead>
                                                <tr>
                                                    <th class="hidden-380">序号</th>
                                                    <th>会员卡号【实】</th>
                                                    <th>昵称</th>
                                                    <th class="alright">可用卡券</th>
                                                    <th class="alright">累计卡券</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td class="hidden-380">1</td>
                                                    <td>11150591</td>
                                                    <td>胖虎</td>
                                                    <td class="alright">3,362,850</td>
                                                    <td class="alright">3,362,850</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">2</td>
                                                    <td>10005264</td>
                                                    <td>杨玉生（leo）</td>
                                                    <td class="alright">78,234</td>
                                                    <td class="alright">2,087,134</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">3</td>
                                                    <td>10258290</td>
                                                    <td></td>
                                                    <td class="alright">1,281,235</td>
                                                    <td class="alright">1,281,235</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">4</td>
                                                    <td>10118738【a139955738】</td>
                                                    <td>金康（nick.蔡黎）</td>
                                                    <td class="alright">1,202,692</td>
                                                    <td class="alright">1,203,492</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">5</td>
                                                    <td>10005256</td>
                                                    <td>淘尚</td>
                                                    <td class="alright">1,013,221</td>
                                                    <td class="alright">1,013,455</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">6</td>
                                                    <td>10000803</td>
                                                    <td>金康老姚</td>
                                                    <td class="alright">944,850</td>
                                                    <td class="alright">947,650</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">7</td>
                                                    <td>10154553【S10001】</td>
                                                    <td>何晓凤</td>
                                                    <td class="alright">903,533</td>
                                                    <td class="alright">903,563</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">8</td>
                                                    <td>11150598</td>
                                                    <td>乾乾</td>
                                                    <td class="alright">806,500</td>
                                                    <td class="alright">806,500</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">9</td>
                                                    <td>11150597</td>
                                                    <td>k Tang。</td>
                                                    <td class="alright">512,340</td>
                                                    <td class="alright">512,340</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">10</td>
                                                    <td>11150600</td>
                                                    <td>A朱翔</td>
                                                    <td class="alright">503,920</td>
                                                    <td class="alright">503,920</td>
                                                </tr>
                                                <tr>
                                                    <td class="hidden-380">11</td>
                                                    <td>10005260</td>
                                                    <td>蔡强</td>
                                                    <td class="alright">414,102</td>
                                                    <td class="alright">415,862</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <h5 style="text-align:center" class="clspg">共15452条 点击加载更多</h5></div>
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
        name: "cardcouponsummary",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .totaltxt {
        color: #1000FF;
    }

    .form-horizontal.total .control-label {
        padding-top: 0px;
    }

    .timetip {
        line-height: 30px;
        font-size: 15px;
    }

    .well.totaltext {
        padding: 3px;
    }

    .disabledtxt > li a {
        color: #9D9D9D !important;
    }

    .tabbable-custom .disabledtxt > li.active {
        border-color: #D3D3D3;
    }

    hr {
        margin: 10px 0;
    }

    .totallisttable th {
        text-align: right;
        font-weight: normal;
    }

    .totallisttable th, .totallisttable td {
        line-height: 30px;
        min-width: 70px;
    }

    .tabbable-custom .charts > li.active {
        border-bottom: 3px solid #d12610;
        border-top-width: 0px;
    }

    .tabbable-custom .charts > li.active a {
        border-width: 0px;
    }

    .tabbable-custom > .storecharts {
        border-width: 0px;
    }

    .form-horizontal.total .control-label {
        padding-top: 0px;
    }

    .cls_timetip {
        line-height: 30px;
        font-size: 15px;
    }

    .well.totaltext {
        padding: 3px;
    }

    #id_tablecust h5 {
    }

    .searchform .Wdate {
        width: 135px;
    }
</style>