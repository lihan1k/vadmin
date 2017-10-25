<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>职员维护</div>
                            <div class="actions">
                                <a href="#responsive" data-toggle="modal" class="btn blue" onclick="objAdd()"><i class="icon-pencil"></i>添加</a>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <form class="searchform" method="get" action="?pagingsize=10">

                                <ul class="sch_nav cd_schnav">
                                    <li data-v="" class="selected">全部</li>
                                    <li data-v="store">门店级</li>
                                    <li data-v="clerk">店员级</li>
                                </ul>
                                <input type="hidden" name="srolelevel" value="">
                                <input type="text" name="skey" class="m-wrap" value="" placeholder="姓名 微信 账号 角色" maxlength="20">
                                <input type="submit" value="搜索">
                            </form>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index minwidth30 hidden-380">序号</th>
                                    <th class="minwidth70 hidden-380">姓名</th>
                                    <th class="hidden-480">工号</th>
                                    <th class="">微信</th>
                                    <th class="">账号</th>
                                    <th class="hidden-480">角色</th>
                                    <th class="hidden-380">客服</th>
                                    <th class="minwidth50">状态</th>
                                    <th class="minwidth70" colspan="2">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr tag="13190" data-id="13190" data-agentid="1" data-bid="1" data-sid="136"
                                    data-sareaid="-1" data-level="clerk" data-roleid="13">
                                    <td class="hidden-380">1</td>
                                    <td class="hidden-380" title="毕思瑶">毕思瑶</td>
                                    <td class="hidden-480">60092</td>
                                    <td>
                                        <a href="javascript:" onclick="unbindwx(13190)" title="点击解绑 毕思瑶">毕思瑶</a>
                                    </td>
                                    <td class="">60092</td>
                                    <td class="hidden-480">服务员</td>

                                    <td class="svstate hidden-380" data-key="id" data-val="0" style="cursor:pointer">
                                        <font color="red">已禁用</font></td>
                                    <td class="state pointer" data-key="id" data-val="1"><font color="green">已启用</font>
                                    </td>
                                    <td style="max-width:30px;text-align:right">
                                        <a href="javascript:;" onclick="unbindwx(13190)" class="glyphicons lock"
                                           title="解绑"><i></i></a>
                                    </td>
                                    <td class="alleft">
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)"
                                           class="glyphicons pen" title="修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this,13190)" class="glyphicons bin"
                                           title="删除"><i></i></a>
                                        <div class="hide cd_infor">
                                            <textarea name="name">毕思瑶</textarea>
                                            <textarea name="pwd">60092</textarea>
                                            <textarea name="code">60092</textarea>
                                            <textarea name="workno">60092</textarea>
                                            <textarea name="openid">o_P8rs4-w2llmshnyrjvPGwcZz6g</textarea>
                                            <textarea name="wxnickname">毕思瑶</textarea>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 10 条 共 23 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="10" param="" count="23"></select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a>
                                            </li>

                                            <li class="active"><a href="javascript:">1</a></li>

                                            <li><a href="UserSet.aspx?pagingsize=10&amp;page=2">2</a></li>

                                            <li><a href="UserSet.aspx?pagingsize=10&amp;page=3">3</a></li>

                                            <li class="next"><a href="UserSet.aspx?pagingsize=10&amp;page=2"><span
                                                    class="hidden-480">下一页</span> → </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END EXAMPLE TABLE PORTLET-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userset",
        data() {
            return {}
        }
    }
    $(function () {
        var $fm, $fm_lv;
        $(function () {
            $fm = $(".searchform");
            $fm_lv = $fm.find('[name="srolelevel"]');

            $(".cd_schnav li").click(function () {
                $fm_lv.val($(this).data("v"));
                //$fm.submit();
                if(!$(this).hasClass("selected")){
                    $(this).addClass("selected").siblings(".selected").removeClass("selected")
                }
            })
        })
    })
</script>

<style scoped>
    .MenuList label {
        display: inline-block
    }

    .form-horizontal .control-label {
        width: 100px
    }

    legend {
        margin-bottom: 0px;
    }

    .sch_nav {
        margin: 0px;
        margin-bottom: 10px;
        font-size: 0px
    }

    .sch_nav li {
        display: inline-block;
        font-size: 13px;
        text-align: center;
        width: 80px;
        line-height: 28px;
        border: 1px solid #dbdbdb;
        border-right-width: 0px;
        cursor: pointer;
    }

    .sch_nav li:last-child {
        border-right-width: 1px
    }

    .sch_nav li:hover {
        background-color: #f7f7f7
    }

    .sch_nav li.selected {
        background-color: #f0f0f0
    }

    @media (max-width: 450px) {
        .sch_nav li {
            width: 60px;
        }
    }

    @media (max-width: 350px) {
        .sch_nav li {
            width: 50px;
        }
    }

    #id_menulist input[type="checkbox"], #id_rolelist input[type="checkbox"] {
        height: 16px;
        width: 16px;
        margin-right: 2px;
        vertical-align: -3px;
        margin-top: 5px
    }

    #id_menulist label b {
        font-size: 15px
    }

    .ui-sectree {
        padding-left: 10px;
        margin-bottom: 5px;
        border-left: 2px solid #ccc;
        margin-left: 6px
    }

    .ui-sectree label {
        width: 125px;
        height: 21px;
        overflow: hidden
    }

    @media (min-width: 1200px) {
        #modal_edit {
            width: 760px;
            margin-left: -380px
        }
    }

    @media (min-height: 870px) {
        #modal_edit .modal-body {
            max-height: 650px;
        }
    }
</style>