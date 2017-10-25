<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>会员储值汇总</div>
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
                                    <li><a href="#" data-toggle="tab" data-key="thismonth">本月</a></li>
                                    <li><a href="#" data-toggle="tab" data-key="lastmonth">上月</a></li>
                                    <li class="untime"><a href="javascript:" onclick="$('#searchform .sdate').toggle()"><i class="icon-calendar"></i></a></li>
                                </ul>
                                <div class="sdate hide">
                                    <input type="text" id="d4311" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="2017-09-18 10:34:10">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="2017-09-18 10:34:10">
                                    &nbsp;<input class="" type="submit" value="搜索" onclick="tosearch(0, 1)">
                                </div>
                            </div>
                            <dl class="well totaltext">
                                <dd>
                                    <div class="timetip cls_timetip"></div>
                                </dd>
                            </dl>
                            <div class="tabbable-custom">
                                <ul class="nav nav-tabs charttabs">
                                    <li class="active"><a href="#tabdet" data-toggle="tab" class=""><i class="icon-th-list"></i>汇总</a></li>
                                    <li><a href="#tabzhexian" data-toggle="tab"><i class="icon-signal"></i>图表</a></li>
                                    <li><a href="#tabstore" data-toggle="tab"><i class="icon-bar-chart"></i>按店</a></li>
                                    <li><a href="#tabcust" data-toggle="tab"><i class="icon-user"></i>储值汇总</a></li>
                                    <li><a href="#tabrecord" data-toggle="tab"><i class="icon-list"></i>充值记录</a></li>
                                    <li><a href="#tabxfrecord" data-toggle="tab"><i class="icon-list-alt"></i>消费记录</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active form-horizontal" id="tabdet">
                                        <div class="form-horizontal total">
                                            <div class="control-group">
                                                <label class="control-label"><b>累计新增储值：</b> </label>
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
                                                <label class="control-label"><b>累计消费储值：</b></label>
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
                                                <div class="controls"><span class="totaltxt dqye">6618972.59</span> 元</div>
                                            </div>
                                            <div class="control-group" style="display: inline-block;">
                                                <label class="control-label">当前本金余额：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt dqbjye">5179116.01</span> 元 </div>
                                            </div>
                                            <div class="control-group" style="display: inline-block">
                                                <label class="control-label">当前赠送余额：</label>
                                                <div class="controls" style="width: 130px;"><span class="totaltxt dqzsye">1439856.58</span> 元</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabzhexian">
                                        <div id="id_charts_zhexian"></div>
                                    </div>
                                    <div class="tab-pane" id="tabstore">
                                        <div class="tabbable-custom">
                                            <ul class="nav nav-tabs databs charts">
                                                <li class="active" style="display: none"><a href="#tabtype" data-toggle="tab">列表</a></li>
                                                <li style="display: none"><a href="#tabchart" data-toggle="tab">图表</a></li>
                                                <li>
                                                    <label style="margin-left: 30px; margin-top: 5px; display: none">
                                                        <input type="checkbox" id="id_chk_nhideomon" style="vertical-align: -3px" onchange="showstoreview(this)">
                                                        隐藏为0金额</label></li>
                                            </ul>
                                            <div class="tab-content storecharts">
                                                <div class="tab-pane active" id="tabtype">

                                                    <div class="tabletool" style="margin-top: -10px">
                                                        <a href="javascript:" class="btn blue" onclick="objDownExcel('exportexcel_sumstore');"><i class=""></i>下载 excel</a>
                                                    </div>
                                                    <div id="id_table"></div>
                                                </div>
                                                <div class="tab-pane " id="tabchart" style="display: none;">

                                                    <div id="charts-1" style="min-width: 80%; height: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabcust">
                                        <div class="searchform">
                                            <input type="text" name="skey" class="m-wrap medium" placeholder="输入姓名,卡号,手机">
                                            <input type="button" value="搜索" onclick="loadcustdata()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel();"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="id_tablecust"></div>
                                    </div>

                                    <div class="tab-pane" id="tabrecord">
                                        <div class="searchform">

                                            <input type="text" name="skey" id="id_rc_skey" class="m-wrap small" placeholder="输入姓名,卡号,手机">
                                            <select id="id_rc_store">
                                                <option value="0">全部门店</option>
                                                <option value="-1">总部</option>
                                            </select>

                                            <select id="id_rechargetype">
                                                <option value="">充值类型</option>
                                                <option value="offline,online,online_czzf,offline_hardcard">常规充值</option>
                                                <option value="reserveorder">预订转储值</option>
                                                <option value="offline_importinit,offline_syncsub">会员导入</option>
                                                <option value="offline_bind,offline_transfer">储值转入</option>
                                            </select>

                                            <select id="id_sourcetype">
                                                <option value="">充值来源</option>
                                                <option value="绑定实体卡,tsorder,deliver,fastfood">微信</option>
                                                <option value="云助手充值,转储值">云助手</option>
                                                <option value="智能POS">智能POS</option>
                                                <option value="实体卡会员导入,会员找回">其他</option>
                                            </select>

                                            <input type="button" value="搜索" onclick="isselectall = 0; loadrecord()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel('exportexcel_record');"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="id_tablerecord"></div>
                                        <dl class="well totaltext cls_rc_ectip" style="margin-top: 10px">
                                            <dd class="timetip">当前汇总时段外</dd>
                                        </dl>
                                        <div id="id_tablerecordescape" class="cls_rc_ectip"></div>
                                    </div>


                                    <div class="tab-pane" id="tabxfrecord">
                                        <div class="searchform">

                                            <input type="text" name="skey" id="id_rc_skey1" class="m-wrap small" placeholder="输入姓名,卡号,手机">
                                            <select id="id_rc_store1">
                                                <option value="0">全部门店</option>
                                                <option value="-1">总部</option>
                                            </select>

                                            <select id="xfblltype">
                                                <option value="">消费类型</option>
                                                <option value="云助手消费,会员解绑">常规消费</option>
                                                <option value="转储值,绑定实体卡,reserveorder">储值转出</option>
                                                <option value="tsorder,智能POS">堂食结账</option>
                                                <option value="fastfood">快餐结账</option>
                                                <option value="deliver">外卖结账</option>
                                            </select>

                                            <select id="xffromtype">
                                                <option value="">消费来源</option>
                                                <option value="wx">微信</option>
                                                <option value="pos">智能POS</option>
                                                <option value="yzs">云助手</option>
                                                <option value="other">其他</option>
                                            </select>

                                            <input type="button" value="搜索" onclick="isselectall = 0; loadtabxfrecord()">
                                            <div class="tabletool" style="margin-top: 12px">
                                                <a href="javascript:" class="btn blue" onclick="objDownExcel('exportexcel_xfrecord');"><i class=""></i>下载 excel</a>
                                            </div>
                                        </div>
                                        <div id="id_tabxfrecord"></div>
                                        <dl class="well totaltext cls_rc_ectip1" style="margin-top: 10px">
                                            <dd class="timetip">当前汇总时段外</dd>
                                        </dl>
                                        <div id="id_tabxfrecordescape" class="cls_rc_ectip1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="responsive" class="modal hide fade" aria-hidden="true" style="display: none;">
                <form id="submitform" method="post" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3 class="opertype">发票状态</h3>
                    </div>
                    <input type="hidden" name="rowid" value="">
                    <div class="modal-body">
                        <div class="control-group">
                            <label class="control-label">发票状态：</label>
                            <div class="controls">
                                <label style="font-size: 1.1em">
                                    <input type="radio" name="TaxTicket" value="已开">
                                    已开
                                </label>

                                <label style="margin-left: 5px; font-size: 1.1em">
                                    <input type="radio" name="TaxTicket" value="未开">
                                    未开
                                </label>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label">发票备注：</label>
                            <div class="controls">
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn blue savegoods" onclick="objSaveT(this)"><i class="icon-ok"></i>保存</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:"memberstoredsummary",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .taxticket {
        color: red;
        text-decoration: underline;
    }

    .tickedblue {
        color: #0362fd;
    }
    .totaltxt {
        color: #000;
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

    .searchform .Wdate {
        width: 160px;
    }
    .taxticket {
        color: red;
        text-decoration: underline;
    }

    .tickedblue {
        color: #0362fd;
    }
</style>