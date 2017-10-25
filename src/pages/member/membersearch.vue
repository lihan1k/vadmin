<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey" id="gose">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>会员查询</div>
                            <div class="actions">
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div class="tab-pane">
                                <div class="searchform">
                                    <input type="hidden" name="action" value="tserchinfo">
                                    <input type="text" name="Elat" class="m-wrap medium" placeholder="会员卡号/手机号"
                                           value="">
                                    <input type="submit" id="btn-seach" value="搜索">

                                    <a href="javascript:" style="float: right; margin-top: 0px;" class="btn blue"
                                       onclick="openSendPage(1270444)">发送信息</a>

                                </div>
                            </div>
                            <div class="portlet box grey">
                                <div class="portlet-title">
                                    <div class="caption"><i class="icon-reorder"></i>基本信息(查询显示)</div>
                                    <div class="actions">
                                        <a href="#md_edtiinfor" data-toggle="modal" class="btn blue">编辑</a>
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <div id="append">
                                        <!--search info start-->
                                        <div class="userbody ">
                                            <div class="info" style="padding-left: 10px;">
                                                <img src="http://wx.qlogo.cn/mmopen/PiajxSqBRaEJeGlOSK9C1aia0PBzgYLTc5uFnln0mCTAKSPwWReB3H64iaxTD0P5jsySQiamIX9LEbbAT3INRA9nfg/0">
                                                <p style="text-align:center;padding-right:83px;margin-top:8px">
                                                    <a href="javascript:" class="hardcard-a tag lockit" title="点击冻结账户" onclick="$('#responsive_lock').modal('show')" style="">冻结账户</a>
                                                </p>
                                                <p style="text-align:center;padding-right:83px;margin-top:8px">
                                                </p>
                                                <p style="text-align:center;padding-right:83px;margin-top:8px">
                                                </p>
                                            </div>
                                            <div class="info-more" style="padding-left: 10px;">
                                                <p>昵称/姓名：嗯好/嗯好</p>
                                                <p>会 员 卡：11270444</p>
                                                <p>实体卡号：</p>
                                                <p>开户时间：2017-08-02</p>
                                                <p>手 机 号：</p>
                                                <p>生　　日：</p>
                                                <p>地　　区：</p>
                                            </div>
                                            <div class="info-more" id="crgi" style="padding-left: 10px;">
                                                <p>会员等级：三级</p>
                                                <p>储值余额：97.9元</p>
                                                <p>卡券余额：3500</p>
                                                <p>归属门店：周奎</p>
                                                <p>活跃门店：运营门店 12-江汉路店 1-杨家湾店 18-民院店 10-鲁磨路</p>
                                                <p>最近交互：2017-09-06 03:37</p>
                                            </div>
                                            <div style="clear: both"></div>
                                        </div>

                                        <div class="senmoe ">
                                            <div>
                                                <a href="javascript:" onclick="$('#responsive').modal('show')">
                                                    可用优惠券（0张）</a>
                                                <a href="javascript:"
                                                   onclick="$('#responsive_pj').modal('show')">评价记录</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style="clear: both"></div>
                            </div>

                            <div class="trecord" style="width: 100%; margin-bottom: 1.5em;">
                                <div class="spl" style="vertical-align: top;">
                                    <div class="portlet-title">
                                        <div class="caption">消费记录</div>
                                    </div>
                                    <div class="portlet-body">


                                        <div id="xfgtable_wrapper" class="dataTables_wrapper form-inline" role="grid">
                                            <div class="row-fluid"></div>
                                            <table class="gtable dataTable" id="xfgtable"
                                                   aria-describedby="xfgtable_info">
                                                <thead>
                                                <tr role="row">
                                                    <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                        colspan="1" style="width: 36px;">序号
                                                    </th>
                                                    <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                        colspan="1" style="width: 67px;">门店
                                                    </th>
                                                    <th class="hidden-480 sorting_disabled" role="columnheader"
                                                        rowspan="1" colspan="1" style="width: 51px;">桌位号
                                                    </th>
                                                    <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                        colspan="1" style="width: 102px;">订单金额(元)
                                                    </th>
                                                    <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                        colspan="1" style="width: 118px;">消费时间
                                                    </th>
                                                </tr>
                                                </thead>

                                                <tbody role="alert" aria-live="polite" aria-relevant="all">
                                                <tr onclick="window.location.href=''"
                                                    class="odd">
                                                    <td class=" ">1</td>
                                                    <td class=" ">周奎</td>
                                                    <td class="hidden-480 ">桌101</td>
                                                    <td class=" ">124</td>
                                                    <td class=" ">17-09-06 15:37</td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>

                                </div>

                                <div class="spr" style="">
                                    <div class="portlet-title">
                                        <div class="caption">储值记录</div>
                                        <div class="btn-group" style="margin: -7px !important; float: right;">
                                            <a class="btn blue" href="#" data-toggle="dropdown">储值类型<i
                                                    class="icon-angle-down"></i></a>
                                            <ul class="dropdown-menu">
                                                <li value="1"><a href="javascript:">充值记录</a></li>
                                                <li value="0"><a href="javascript:">消费记录</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="portlet-body">
                                        <div>
                                            <div id="czgtable_wrapper" class="dataTables_wrapper form-inline"
                                                 role="grid">
                                                <div class="row-fluid"></div>
                                                <table class="gtable dataTable" id="czgtable"
                                                       aria-describedby="czgtable_info">
                                                    <thead>
                                                    <tr role="row">
                                                        <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                            colspan="1" style="width: 34px;">序号
                                                        </th>
                                                        <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                            colspan="1" style="width: 97px;">储值金额(元)
                                                        </th>
                                                        <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                            colspan="1" style="width: 66px;">本金(元)
                                                        </th>
                                                        <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                            colspan="1" style="width: 66px;">赠送(元)
                                                        </th>
                                                        <th class="sorting_disabled" role="columnheader" rowspan="1"
                                                            colspan="1" style="width: 111px;">时间
                                                        </th>
                                                    </tr>
                                                    </thead>

                                                    <tbody role="alert" aria-live="polite" aria-relevant="all">
                                                    <tr class="odd">
                                                        <td class=" ">1</td>
                                                        <td class=" ">-12</td>
                                                        <td class=" ">-10.91</td>
                                                        <td class=" ">-1.09</td>
                                                        <td class=" ">17-08-26 17:40</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="clear: both;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="responsive_pj" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>评价记录</h3>
                    </div>
                    <div class="modal-body">

                        <div id="pjTable_wrapper" class="dataTables_wrapper form-inline" role="grid">
                            <div class="row-fluid"></div>
                            <table class="gtable dataTable" id="pjTable" aria-describedby="pjTable_info">
                                <thead>
                                <tr role="row">
                                    <th class="hidden sorting_asc" role="columnheader" tabindex="0"
                                        aria-controls="pjTable" rowspan="1" colspan="1" aria-sort="ascending"
                                        aria-label="

                            : activate to sort column descending" style="width: 0px;">
                                        <input type="checkbox" class="hidden" data-set=".gtable .ch">
                                    </th>
                                    <th class="index hidden-670 sorting" role="columnheader" tabindex="0"
                                        aria-controls="pjTable" rowspan="1" colspan="1"
                                        aria-label="序号: activate to sort column ascending" style="width: 30px;">序号
                                    </th>
                                    <th class="hidden-480 sorting" style="width: 100px;" role="columnheader"
                                        tabindex="0" aria-controls="pjTable" rowspan="1" colspan="1"
                                        aria-label="门店: activate to sort column ascending">门店
                                    </th>
                                    <th style="width: 75px;" class="hidden sorting" role="columnheader" tabindex="0"
                                        aria-controls="pjTable" rowspan="1" colspan="1"
                                        aria-label="会员: activate to sort column ascending">会员
                                    </th>
                                    <th style="width: 100px;" class="sorting" role="columnheader" tabindex="0"
                                        aria-controls="pjTable" rowspan="1" colspan="1"
                                        aria-label="评分: activate to sort column ascending">评分
                                    </th>
                                    <th style="width: 200px;" class="sorting" role="columnheader" tabindex="0"
                                        aria-controls="pjTable" rowspan="1" colspan="1"
                                        aria-label="评价: activate to sort column ascending">评价
                                    </th>
                                    <th style="width: 80px;" class="sorting" role="columnheader" tabindex="0"
                                        aria-controls="pjTable" rowspan="1" colspan="1"
                                        aria-label="评价时间: activate to sort column ascending"><a
                                            href="javascript:void(0);" class="sort desc">评价时间</a></th>
                                </tr>
                                </thead>

                                <tbody role="alert" aria-live="polite" aria-relevant="all">
                                <tr onclick="showdetil(this)" class="odd">
                                    <td class="hidden  sorting_1">
                                        <input type="checkbox" name="ch" class="ch hidden" value="1270444">
                                        <input type="hidden" name="type" value="tsorder">
                                        <input type="hidden" name="eid" value="79944">
                                    </td>
                                    <td class="index hidden-670 ">1</td>
                                    <td class="hidden-480 ">蔡强（堂）</td>
                                    <td onclick="tomemberinfo(this)" class="hidden ">
                                        <a href="javascript:" target="_blank" data-link="/Manager/MemberCenter/EntityCardSearch_Info.aspx?costumer=1270444">【嗯好】</a>
                                    </td>
                                    <td class=" "></td>
                                    <td style="padding-left: 5%" class=" ">
                                        不错
                                    </td>
                                    <td class=" ">08-22<br>
                                        <span>11:25</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info" id="pjTable_info">第 1 - 1 条 共 1 条</div>
                                </div>
                                <div class="span6">
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="#">← <span class="hidden-480"></span></a>
                                            </li>
                                            <li class="active"><a href="#">1</a></li>
                                            <li class="next disabled"><a href="#"><span class="hidden-480"></span> →
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div id="md_edtiinfor" class="modal hide fade in" aria-hidden="false">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"></button>
                    <h3>信息编辑</h3>
                </div>
                <form class="form-horizontal" id="inforform">
                    <input type="hidden" name="cid" value="1270444">
                    <input type="hidden" name="hardcardno" value="">
                    <input type="hidden" name="hasbind" value="1">
                    <input type="hidden" name="openid" value="o_P8rsymoEHAdIH4j6Tcv3q1W9u0">
                    <div class="modal-body">
                        <div class="control-group">
                            <label class="control-label">姓名：<span class="required">*</span></label>
                            <div class="controls">
                                <input type="text" name="name" class="m-wrap" value="嗯好" maxlength="20">
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label">手机号：<span class="required">*</span></label>
                            <div class="controls">
                                <input type="text" name="tel" class="m-wrap" value="" maxlength="11">
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label">生日：<span class="required">*</span></label>
                            <div class="controls">
                                <input type="text" id="bir_time" maxlength="10" style="width:90px"
                                       onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd' })" class="Wdate"
                                       name="brithday" value="1990-01-01">
                            </div>
                        </div>
                    </div>
                </form>
                <div class="modal-footer">
                    <button type="button" class="btn blue" onclick="saveinfor()"><i class="icon-ok"></i> 保存</button>
                    <button type="button" data-dismiss="modal" class="btn">关闭</button>
                </div>

            </div>

            <!---->
            <div id="responsive_lock" class="modal hide fade in" aria-hidden="false" style="display: none;">


                <form method="post" class="form-horizontal" id="form-horizontal_lock">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>身份验证</h3>
                    </div>
                    <div class="modal-body" style="text-align: center">
                        <label>
                            账户<span><span style="color: red">*</span>  </span>
                            <input class="lode" name="lode" type="text" value=""></label>
                        <label>
                            <span>密码<span style="color: red">*</span>  </span>
                            <input class="pwd" name="pwd" type="password" value=""></label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="lockit" class="btn blue">确认</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>

            <div id="responsive_lock_reason" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>冻结账户</h3>
                    </div>
                    <div class="modal-body" style="text-align: center">
                        <label>
                            <span>冻结原因 </span><span style="color: red">*</span>
                            <input class="reason" name="lode" type="text" value=""></label>
                        <label>冻结后该会员不可进行交易</label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn blue OKlock"><i class="icon-ok"></i><span
                                class="chcct">确认冻结</span></button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>
            <div id="responsive_cancel" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal" id="from_Lockit_Mebr">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>身份验证</h3>
                    </div>
                    <div class="modal-body" style="text-align: center">
                        <label>
                            <span>账户<span style="color: red">*</span>  </span>
                            <input class="lode" name="lode" type="text" value=""></label>
                        <label>
                            <span>密码<span style="color: red">*</span>  </span>
                            <input class="pwd" name="pwd" type="password" value=""></label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="cancel" class="btn blue">确认</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>
            <div id="responsive_cancel_card" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>注销实体卡</h3>
                    </div>
                    <div class="modal-body" style="text-align: center">
                        <label>注销操作不可逆</label>
                        <label>注销后该账户信息将被删除,无法查询</label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn blue cancelcard"><i class="icon-ok"></i>确认注销</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>

            <div id="responsive_chec_pd" class="modal hide fade in modal-sm" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>身份验证</h3>
                    </div>
                    <div class="modal-body" style="text-align: center">
                        <label>
                            <span>账户  <span style="color: red">*</span></span>
                            <input class="lode" name="lode" type="text" value=""></label>
                        <label>
                            <span>密码  <span style="color: red">*</span></span>
                            <input class="pwd" name="pwd" type="password" value=""></label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="retcard" class="btn blue">确认</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>


            <div id="responsive_unbind" class="modal hide fade in modal-sm" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>身份验证</h3>
                    </div>
                    <div class="modal-body" style="text-align: center">

                        <label>
                            <span>账户  <span style="color: red">*</span></span>
                            <input class="lode" name="lode" type="text" value=""></label>
                        <label>
                            <span>密码  <span style="color: red">*</span></span>
                            <input class="pwd" name="pwd" type="password" value=""></label>
                        <label style="font-weight: bold">*解除绑定后该实体卡将无法继续使用</label>

                    </div>
                    <div class="modal-footer">
                        <button type="button" onclick="unbundCard()" class="btn blue">确认</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>

            <div id="responsive_reset_card" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <form method="post" id="form_reset_card" class="form-horizontal">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>实体卡密码重置</h3>
                    </div>
                    <div class="modal-body">
                        <div class="control-group">
                            <label class="control-label" style="margin-top: 7px;">请会员输入实体卡新密码：<span
                                    style="color: red">*</span></label>
                            <div class="controls">
                                <input type="password" id="onewpd" name="onewpd" value="" style="width: 100px;"
                                       maxlength="6">
                                <label id="Konewpd" style="color: red;"></label>
                            </div>
                        </div>
                        <div class="control-group">
                            <label class="control-label" style="margin-top: 7px;">再次输入新密码以确认：<span
                                    style="color: red">*</span></label>
                            <div class="controls">
                                <input type="password" id="newpd" name="newpd" value="" style="width: 100px;"
                                       maxlength="6">
                                <label id="Honewpd" style="color: red;"></label>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn blue resetcard">确认</button>
                        <button type="button" data-dismiss="modal" class="btn">关闭</button>
                    </div>
                </form>
            </div>


            <div id="responsive" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <form method="post" class="form-horizontal" action="checkUser">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"></button>
                        <h3>优惠券</h3>
                    </div>
                    <div class="modal-body">

                        <h5 style="text-align: center">无可用优惠券</h5>

                    </div>
                </form>
            </div>
            <div id="prevquery" class="modal hide fade in" aria-hidden="false" style="display: none;">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"></button>
                    <h3>选择会员</h3>
                </div>
                <div class="modal-body">
                    <table class="gtable">
                        <thead>
                        <tr>
                            <th>会员类型</th>
                            <th>实体卡号</th>
                            <th>会员卡号</th>
                            <th>储值余额（元）</th>
                            <th class="hidden-480 alleft"></th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"membersearch",
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

    .insho {
        display: inline-block;
        vertical-align: top;
        height: auto;
        width: 28%;
    }

    .insho li {
        margin-top: 7px;
        margin-bottom: 7px;
    }

    .senmoe {
        margin-bottom: 12px;
        text-align: center;
    }

    .senmoe a {
        padding: 0.6em 1.5em;
        background: rgb(134, 134, 134);
        color: black;
        margin-top: 2px;
        margin-left: 1em;
        display: inline-block;
    }

    #responsive_reset_card .modal-body {
        text-align: left;
    }

    #responsive_reset_card .control-label {
        width: 200px;
    }

    #responsive_reset_card .controls {
        margin-top: 6px;
    }

    .spl {
        width: 49%;
        float: left;
        margin-top: 5px;
        border: 1px solid #9d9c9c;
    }

    .spr {
        width: 49%;
        float: right;
        margin-top: 5px;
        border: 1px solid #9d9c9c;
    }

    #responsive_pj .dataTables_paginate {
        width: 270px;
    }

    .lable-title {
        font-size: 1.1em;
    }

    .hardcard-li {
        padding-left: 5px;
    }

    .hardcard-a {
        font-family: 黑体;
        font-size: 13px;
        font-weight: bold;
    }

    .hardcard-a.tag {
        color: #616161;
        padding: 7px 24px;
        border: 1px solid #F0F0F0;
        border-radius: 15px !important;
        text-decoration: none
    }

    .hardcard-a.tag:hover {
        background-color: #fafafa
    }

    @media only screen and (max-width: 450px) {
        .spl {
            width: 100%;
            margin-top: 5px;
            border: 1px solid #9d9c9c;
        }

        .spr {
            width: 100%;
            margin-top: 5px;
            border: 1px solid #9d9c9c;
        }

        .senmoe {
            text-align: left;
        }
    }

    @media only screen and (min-width: 800px) {
        .insho-mid {
            width: 30% !important;
        }
    }

    .searchTip {
        text-align: center;
        vertical-align: middle;
        line-height: 50em;
    }

    .clearfix {
        clear: both;
        zoom: 1;
    }

    .userbody {
        max-width: 900px;
        margin: 0 auto;
    }

    .userbody .info, .userbody .info-more {
        float: left;
        width: 200px;
        margin: initial;
    }

    .userbody .info-more {
        width: 300px;
    }

    .userbody .info img {
        width: 60%;
        max-width: 150px;
    }

    .userbody .info p, .userbody .info-more p {
        line-height: 30px;
        margin: initial;
    }

    .userbody .insho {
        float: left;
        width: 200px;
        margin: initial;
    }

    .userbody .insho li {
        line-height: 30px;
    }

    /*.userbody .insho li{text-indent:20px;}*/
    .senmoe {
        text-align: center;
    }

    .senmoe a {
        padding: 0 20px;
        line-height: 30px;
        display: inline-block;
        background: rgb(134, 134, 134);
        color: black;
        text-align: center;
        margin: 5px 10px;
    }

    @media screen and (max-width: 900px) {
        .userbody {
            width: 100%;
            margin: 0 auto;
        }

        .userbody .insho {
            float: initial;
            margin: 0 auto;
        }

        .userbody .info, .userbody .info-more {
            width: 100%;
        }

        .userbody .info img {
            width: 40%;
            margin: 0 auto;
            display: inherit;
        }

        .userbody .info p, .userbody .info-more p {
            line-height: 30px;
            text-indent: 30px;
        }

        .senmoe {
            text-align: left;
            padding-left: 25px;
        }
    }
</style>