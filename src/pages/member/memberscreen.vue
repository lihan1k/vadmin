<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>会员筛选</div>
                        </div>
                        <div class="tab-panel">
                            <div class="portlet-body">
                                <div class="portlet box grey">
                                    <div class="portlet-title">
                                        <div class="caption"><i></i>筛选条件</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="portlet-body">
                                            <div id="searchform" class="tabbable-custom"
                                                 style="height:200px;position:relative">
                                                <div id="dv_1" class="tabbable-custom searchform"
                                                     style="width:55% ; top:5%;left:16%;position:absolute">
                                                    <label style="display: inline-block">交互类型：</label>
                                                    <label style="display: inline-block; padding: 5px 10px; text-align: justify">
                                                        <input type="radio" id="jiaohu" name="radio" value="2"
                                                               style="margin: -1px 0 0" checked=""
                                                               onclick="tosearch(glbtmkey,designmode)">交互
                                                    </label>
                                                    <label style="display: inline-block">
                                                        <input type="radio" id="xiaofei" name="radio" value="1"
                                                               style="margin: -1px 0 0"
                                                               onclick="tosearch(glbtmkey, designmode)">消费</label>
                                                    <ul class="nav nav-tabs searchdate" style="border-bottom:0px">
                                                        <li class="active"><a href="#" data-toggle="tab"
                                                                              data-key="today">48小时</a></li>

                                                        <li><a href="#" data-toggle="tab" data-key="thisweek">本周</a>
                                                        </li>

                                                        <li><a href="#" data-toggle="tab" data-key="thismonth">本月</a>
                                                        </li>
                                                        <li><a href="#" data-toggle="tab" data-key="lastmonth">上月</a>
                                                        </li>
                                                        <li class="untime"><a href="javascript:"
                                                                              onclick="$('#searchform .sdate').toggle()"><i
                                                                class="icon-calendar"></i></a></li>
                                                    </ul>
                                                    <div class="sdate hide">
                                                        <input type="text" id="sDate" value="" onfocus="WdatePicker({startDate:'%y-%M-%d 00:00:00',dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d'})" style="width:130px"/>
                                                        -
                                                        <input type="text" id="eDate" value="" onfocus="WdatePicker({startDate:'%y-%M-%d 23:59:59',dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d 23:59:59'})" style="width:130px"/>
                                                    </div>

                                                    <dl class="well totaltext">
                                                        <dd>
                                                            <div class="timetip cls_timetip">汇总周期：2017-09-04 04:00（含）到
                                                                2017-09-07 04:00
                                                            </div>
                                                        </dd>
                                                    </dl>


                                                    &nbsp;<input class="" type="button" value="点击筛选"
                                                                 style="position:absolute;left:106%;bottom:-2px"
                                                                 onclick="load2(1)">

                                                    <a href="javascript:" id="exchange"
                                                       style="text-align:center;color:black; position:absolute;right:103%;top:50px;width:96px;height:39px; background-image:url(../media/image/member1.png)"><label
                                                            style="position:absolute;margin-left:12px;margin-top:5px">交互查询</label></a>
                                                </div>
                                                <div id="dv_2"
                                                     style="display: none;width:55% ; top:5%;left:16%;position:absolute">
                                                    <div class="fleft" style="display: block;">

                                                        <p>
                                                            会员类型：
                                                            <label style="display: inline-block">
                                                                <input type="checkbox" name="shiti" class="radio"
                                                                       checked="">实体卡会员</label>
                                                            <label style="display: inline-block">
                                                                <input type="checkbox" name="weixin" class="radio"
                                                                       checked="">微信会员</label>
                                                            <label style="display: inline-block">
                                                                <input type="checkbox" name="bangding" class="radio"
                                                                       checked="">绑定实体卡会员</label>
                                                        </p>
                                                        <p>
                                                            账户状态：
                                                            <label style="display: inline-block">
                                                                <input class="radio" type="checkbox" name="normal"
                                                                       value="" checked="">正常</label>
                                                            <label style="display: inline-block">
                                                                <input class="radio" type="checkbox" name="frozen"
                                                                       value="" checked="">已冻结</label>
                                                            <label style="display: inline-block">
                                                                <input class="radio" type="checkbox" name="logzen"
                                                                       value="" checked="">已注销</label>
                                                        </p>
                                                        <p>
                                                            会员等级：
                                                            <select id="memberrank" name="class" val="">
                                                                <option value="0">全部等级</option>

                                                                <option value="1">一级</option>

                                                                <option value="2">二级</option>

                                                                <option value="3">三级</option>

                                                                <option value="4">四级</option>

                                                            </select>
                                                        </p>
                                                        <p>
                                                            所在地区：
                                                            <select id="S_C">
                                                                <option value="0">全部国家</option>
                                                            </select>
                                                            <select id="S_P">
                                                                <option value="0">全部省份</option>
                                                            </select>
                                                            <select id="S_T">
                                                                <option value="0">全部地区</option>
                                                            </select>
                                                            &nbsp;<input class="" type="submit" value="点击筛选" id="btn" style="position:absolute;left:106%;bottom:-4px">
                                                            &nbsp;
                                                            <a href="javascript:" id="exchange2" style="text-align:center;color:black; position:absolute;right:103%;top:50px;width:96px;height:39px; background-image:url(../media/image/member2.png)"><label style="position:absolute;margin-left:29px;margin-top:14px">基本查询</label></a>
                                                        </p>
                                                        <input type="text" id="Ip_Area" name="Ip_Area" value="" style="width: 20%; cursor: pointer; display: none">
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="portlet box grey">
                                    <div class="portlet-title">
                                        <div class="caption" style="margin-top:5px;"><i></i>会员列表</div>
                                        <div style="float:right;margin-bottom:5px;">
                                            <a href="javascript:" class="btn blue"
                                               onclick="objDownExcel({export:'payorder'});"><i class=""></i>下载 excel</a>
                                        </div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="portlet-body">
                                            <div class="tabletool" style="margin-top: 0px">
                                                <a href="#" class="btn blue sendmsg" onclick="return(sendmsg())"><i class=""></i>发送消息</a>
                                            </div>
                                            <div class="datalist" id="tableA">
                                                <table class="gtable">
                                                    <thead>
                                                    <tr>
                                                        <th><input type="checkbox" data-set=".gtable .ch" onclick="checkboxChangeState(this)">
                                                        </th>
                                                        <th>序号</th>
                                                        <th>会员</th>
                                                        <th>会员等级</th>
                                                        <th>所在地区</th>
                                                        <th>活跃门店</th>
                                                        <th>账户状态</th>
                                                        <th>最近交互时间</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td><input type="checkbox" name="ch" class="ch" value="1193604">
                                                        </td>
                                                        <td>1</td>
                                                        <td><a target="_blank" href="#">姚家星</a>
                                                        </td>
                                                        <td>三级</td>
                                                        <td>湖北武汉</td>
                                                        <td>10-鲁磨路 23-东莞野马支付 9-龙安店 运营门店 13-成都店 12-江汉路 7-光谷店 1-杨家湾店
                                                            4-香港路店 6-华工店 20-七宝店
                                                        </td>
                                                        <td>正常</td>
                                                        <td>09-06 16:06</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                                <div style="margin-top:8px"
                                                     class="dataTables_paginate paging_bootstrap pagination">
                                                    <ul>
                                                        <li class="clspg prev "><a href="javascripr:"><span class="hidden-480">下一页</span> →</a></li>
                                                    </ul>
                                                </div>
                                                <h6 style="text-align:center;display:inline-block" class="clspg"> 第1-20条 共205条 &nbsp;</h6></div>
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
        name:"memberscreen",
        data(){
            return{

            }
        },

    }
</script>

<style scoped>
    .well.totaltext {
        padding: 10px;
        margin: 0 0 5px 0;;
    }
    .portlet {
        clear: both;
        margin-top: 0px;
        margin-bottom: 10px;
        padding: 0px;
    }

    input.radio {
        margin: -1px 0 0;
        line-height: normal;
    }

    select {
        width: 100px;
        background-color: #fff;
        border: 1px solid #ccc;
    }

    .radio {
        margin: -1px 0 0;
    }
    @media (min-width:768px ) {
        .page-content{
            min-height:927px !important
        }
    }
</style>