<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i> 消息推送设置</div>
                        </div>
                        <div class="portlet-body">
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th><a href="?sortid=0&amp;sorttype=1" class="sort desc">名称</a></th>
                                    <th class="hidden-380">人数</th>
                                    <th class="minwidth60">操作</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr onclick="location.href='MessagePushRule.html'">
                                    <td>1</td>
                                    <td>客户消息通知</td>
                                    <td class="hidden-380">2</td>
                                    <td>
                                        <a href="#" class="glyphicons pen" title="修改"><i></i></a>
                                    </td>
                                </tr>
                                <tr onclick="location.href='MessagePushRule.html'">
                                    <td>2</td>
                                    <td>买单成功通知</td>
                                    <td class="hidden-380">59</td>
                                    <td>
                                        <a href="#" class="glyphicons pen" title="修改"><i></i></a>
                                    </td>
                                </tr>
                                <tr onclick="location.href='MessagePushRule.html'">
                                    <td>3</td>
                                    <td>评价消息推送</td>
                                    <td class="hidden-380">73</td>
                                    <td>
                                        <a href="#" class="glyphicons pen" title="修改"><i></i></a>
                                    </td>
                                </tr>

                                <tr onclick="location.href='MessagePushRule.html'">
                                    <td>4</td>
                                    <td>实时退菜信息推送</td>
                                    <td class="hidden-380">20</td>
                                    <td>
                                        <a href="#" class="glyphicons pen" title="修改"><i></i></a>
                                    </td>
                                </tr>

                                <tr onclick="location.href='MessagePushRule.html'">
                                    <td>5</td>
                                    <td>预订房提醒</td>
                                    <td class="hidden-380">35</td>
                                    <td>
                                        <a href="#" class="glyphicons pen" title="修改"><i></i></a>
                                    </td>
                                </tr>

                                <tr onclick="location.href='MsgTPush_BusinessState.aspx'">
                                    <td>6</td>
                                    <td>营业状态消息推送</td>
                                    <td class="hidden-380">2</td>
                                    <td>
                                        <a href="javascript:" class="glyphicons pen" title="修改"><i></i></a>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 5 条 共 5 条</div></div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="sortid=0&sorttype=0" count="5">

                                        </select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a></li>
                                            <li class="active"><a href="javascript:;">1</a></li>
                                            <li class="next disabled"><a href="javascript:"><span class="hidden-480">下一页</span> → </a></li>
                                        </ul>
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
        name: "messagepushset",
        data() {
            return {}
        }
    }
</script>

<style>

</style>