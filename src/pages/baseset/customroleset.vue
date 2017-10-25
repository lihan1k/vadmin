<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i> 自定义角色维护</div>
                            <div class="actions">
                                <a href="#modal_edit" data-toggle="modal" class="btn blue" onclick="objAddT()"><i
                                        class="icon-pencil"></i> 添加</a>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <form class="searchform" method="get" action="">
                                <ul class="sch_nav cd_schnav">
                                    <li data-v="" class="selected">全部</li>
                                    <li data-v="business">商家级</li>
                                    <li data-v="areamanage">片区级</li>
                                    <li data-v="store">门店级</li>
                                    <li data-v="clerk">店员级</li>
                                </ul>
                                <input type="hidden" name="srolelevel" value="">
                                <input type="text" name="skey" class="m-wrap" value="" placeholder="名称" maxlength="20">
                                <input type="submit" value="搜索">
                                <div class="tabletool hidden-480">
                                    <button type="button" onclick="sortNum.save()">保存排序</button>
                                </div>
                            </form>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th>名称</th>
                                    <th>职员数</th>
                                    <th class="hidden-480">排序码</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr tag="152" data-oid="152" data-name="show-sjcs3" data-level="business" data-state="1">
                                    <td>1</td>
                                    <td>show-sjcs3（自定义）</td>
                                    <td>0</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="" max="999999">
                                    </td>
                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#modal_edit" data-toggle="modal" onclick="objAddT(this)" class="glyphicons pen" title="修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDeleteT(this,152, 0)" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 14 条 共 14 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="14"></select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev"><a href="javascript:">← <span class="hidden-480">上一页</span></a>
                                            </li>
                                            <li class="next"><a href="javascript:"><span class="hidden-480">下一页</span> →
                                            </a></li>
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
        name: "customroleset",
        data() {
            return {

            }
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