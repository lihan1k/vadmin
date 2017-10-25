<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="icon-reorder"></i>
                                储值梯度设置-19-外滩店
                            </div>
                            <div class="actions">
                                <a href="#" class="btn green">储值营销设置</a>
                            </div>
                        </div>
                        <div class="portlet-body">

                            <dl class="well totaltext">
                                <dd>
                                    <p style="font-size: 14px;">总部储值规则概要：</p>

                                    <p style="padding-left: 2em; font-size: 14px;">
                                        充值金额(元)：
                                        200、300、100、500、1000、2000、3000、800、10000、30000

                                    </p>
                                </dd>
                            </dl>
                            <div style="clear: both;"></div>

                            <a href="#responsive" data-toggle="modal" class="btn blue" style="float: right; margin-bottom: 10px;" onclick="ruleAdd()"><i class="icon-pencil"></i>添加规则</a>

                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>充值金额</th>
                                    <th style="display: none;"><a href="?sortid=0&amp;sorttype=1" class="sort desc">赠送金额</a></th>
                                    <th>排序</th>
                                    <th style="display: none;">有效期</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr tag="1711">
                                    <td>1</td>
                                    <td class="amount">200.0</td>
                                    <td class="giveamount" style="display: none;">20.0</td>
                                    <td class="sortindex">1</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1711" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="1714">
                                    <td>2</td>
                                    <td class="amount">300.0</td>
                                    <td class="giveamount" style="display: none;">30.0</td>
                                    <td class="sortindex">2</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1714" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="1715">
                                    <td>3</td>
                                    <td class="amount">400.0</td>
                                    <td class="giveamount" style="display: none;">40.0</td>
                                    <td class="sortindex">3</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1715" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="1719">
                                    <td>4</td>
                                    <td class="amount">100.0</td>
                                    <td class="giveamount" style="display: none;">10.0</td>
                                    <td class="sortindex">4</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1719" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="1721">
                                    <td>5</td>
                                    <td class="amount">4000.0</td>
                                    <td class="giveamount" style="display: none;">60.0</td>
                                    <td class="sortindex">5</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1721" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="1722">
                                    <td>6</td>
                                    <td class="amount">2.0</td>
                                    <td class="giveamount" style="display: none;">10.0</td>
                                    <td class="sortindex">6</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1722" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="1725">
                                    <td>7</td>
                                    <td class="amount">8000.0</td>
                                    <td class="giveamount" style="display: none;">80.0</td>
                                    <td class="sortindex">7</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="1725" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="3776">
                                    <td>8</td>
                                    <td class="amount">522.0</td>
                                    <td class="giveamount" style="display: none;">0.0</td>
                                    <td class="sortindex">9</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="3776" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="2672">
                                    <td>9</td>
                                    <td class="amount">5000.0</td>
                                    <td class="giveamount" style="display: none;">0.0</td>
                                    <td class="sortindex">800</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="2672" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="2673">
                                    <td>10</td>
                                    <td class="amount">10000.0</td>
                                    <td class="giveamount" style="display: none;">0.0</td>
                                    <td class="sortindex">2000</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="2673" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                <tr tag="2674">
                                    <td>11</td>
                                    <td class="amount">15000.0</td>
                                    <td class="giveamount" style="display: none;">0.0</td>
                                    <td class="sortindex">2500</td>

                                    <td class="timeValite" style="display: none;">

                                    </td>
                                    <td class="hidden cktus">0</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="ruleAdd(this)" data-ruleid="2674" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,'RuleID')" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                        <dl class="well totaltext" style="padding-left: 30px; margin-top: 30px;">
                            <dd>
                                <p style="font-size: 14px;">温馨提示：</p>
                                <p style="font-size: 14px;">1.买单页储值规则加载消费所在店储值规则</p>
                                <p style="font-size: 14px;">2.会员中心储值规则加载归属门店储值规则</p>
                                <p style="font-size: 14px;">(解释：归属门店为初次储值充值所在门店，无门店则归属门店为总部，归属门店一旦生成不可改变)</p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:"rechargerule",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .form-horizontal .control-group {
        margin-bottom: 5px;
    }
    .control-group label {
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 0;
    }

    #GoodsPractice_tagsinput {
        width: 55em !important;
        height: 100px !important;
    }

    #GoodsPractice_tag {
        width: 50em !important;
    }

    .title {
        width: 150px !important;
    }

    .controls label {
        font-size: 14px;
        color: gray;
    }
    .payitem-align {
        vertical-align: -3px;
    }
</style>