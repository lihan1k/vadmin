<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>二维码管理</div>
                            <div class="actions">
                                <a href="#qrcodeedit" data-toggle="modal" class="btn blue"><i class="icon-pencil"></i>添加二维码</a>
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <form class="searchform">
                                <div class="tabletool">
                                    <a class="btn" href="?action=download">全部下载</a>
                                    <a class="btn" href="javascript:;" onclick="deleteQrCode()">全部删除</a>
                                </div>
                            </form>

                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th>二维码名称</th>
                                    <th>二维码</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="rows">
                                    <td>1</td>
                                    <td class="">ddd</td>
                                    <td class="deskqrcodeimg">
                                        <a href="#imgview" data-toggle="modal" class="btn blue" data-img="" data-name="ddd" onclick="showqrcode(this)" title="点击查看">查看</a>
                                    </td>
                                    <td class="">
                                        <a href="javascript:;" class="btn blue" title="下载">下载</a>
                                        <a href="javascript:;" onclick="deleteQrCode()" class="btn red" title="删除">删除</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 3 条 共 3 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="3">
                                            <option value="1000000">全部</option>
                                        </select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a>
                                            </li>

                                            <li class="active"><a href="javascript:;">1</a></li>

                                            <li class="next disabled"><a href="javascript:"><span
                                                    class="hidden-480">下一页</span> → </a></li>
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
        name:"setcode",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>