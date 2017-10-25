<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey" id="gose">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>卡券返还查询</div>
                            <div class="actions">
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div class="tab-pane">
                                <div class="searchform">
                                    <input type="hidden" name="action" value="tserchinfo">
                                    <input type="text" name="Elat" class="m-wrap medium" placeholder="卡券号" value="">
                                    <input type="submit" id="btn-seach" value="搜索">
                                </div>
                            </div>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th>卡券号</th>
                                    <th class="hidden-480">状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr tag="1181" sid="1">
                                    <td>1</td>
                                    <td class="RankName">一级</td>
                                    <td class="hidden-480"><font color="green">已返还</font></td>
                                    <td>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 4 条 共 4 条</div></div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="4"><option value="1000000">全部</option></select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a></li>
                                            <li class="active"><a href="javascript::">1</a></li>
                                            <li class="next disabled"><a href="javascript:"><span class="hidden-480">下一页</span> → </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>

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
        name: "cardcouponrefund",
        data() {
            return {}
        }
    }
</script>

<style>

</style>