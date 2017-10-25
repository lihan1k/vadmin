<template>
    <div class="page-content" style="min-height:925px !important">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>等级会员维护</div>
                            <div class="actions">
                                <a href="#selectTemplate" data-toggle="modal" class="btn blue"><i class="icon-pencil"></i> 选择模板</a>
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <form style="display: none" class="searchform" method="get" action="?">
                                <input type="text" name="skey" class="m-wrap medium" value="" placeholder="名称">

                                <input type="submit" value="搜索">

                            </form>

                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>

                                    <th>等级名称</th>
                                    <th class="">等级图片</th>
                                    <th class="hidden-480">累计积分升级</th>
                                    <th class="hide"><a href="?sortid=0&amp;sorttype=1" class="sort desc">会员等级</a></th>
                                    <th class="hidden-480"><a href="?sortid=1" class="sort">状态</a></th>
                                    <th>消息模板</th>

                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr tag="1181" sid="1">
                                    <td>1</td>
                                    <td class="RankName">一级</td>
                                    <td><img src="http://yun.kingcome.cn/attached/memberranktemplate/1/990d9c01c55943bd922622fec7f5843b.png" height="30" style="height:30px"></td>
                                    <td class="IntegralCount hidden-480">0</td>
                                    <td class="RankNumber hide">1</td>
                                    <td class=" hidden-480" data-val="1"><font color="green">已启用</font></td>

                                    <td><a href="MembershipLevelMsg.html">设置</a></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide">
                                            <input type="hidden" class="RankImage" value="http://yun.kingcome.cn/attached/memberranktemplate/1/990d9c01c55943bd922622fec7f5843b.png">
                                            <textarea class="Remark"></textarea>
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="1182" sid="1">
                                    <td>2</td>
                                    <td class="RankName">二级</td>
                                    <td><img src="http://yun.kingcome.cn/attached/memberranktemplate/1/52879799db3843d68c98bf16186b1bd8.png" height="30" style="height:30px"></td>
                                    <td class="IntegralCount hidden-480">500</td>
                                    <td class="RankNumber hide">2</td>
                                    <td class="hidden-480" data-val="1"><font color="green">已启用</font></td>

                                    <td><a href="MembershipLevelMsg.html">设置</a></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide">
                                            <input type="hidden" class="RankImage" value="http://yun.kingcome.cn/attached/memberranktemplate/1/52879799db3843d68c98bf16186b1bd8.png">
                                            <textarea class="Remark"></textarea>
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="1183" sid="1">
                                    <td>3</td>
                                    <td class="RankName">三级</td>
                                    <td><img src="http://yun.kingcome.cn/attached/memberranktemplate/1/a245e3ddbab94d7b85c03427c13732a0.png" height="30" style="height:30px"></td>
                                    <td class="IntegralCount hidden-480">2000</td>
                                    <td class="RankNumber hide">3</td>
                                    <td class="hidden-480" data-val="1"><font color="green">已启用</font></td>

                                    <td><a href="MembershipLevelMsg.html">设置</a></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide">
                                            <input type="hidden" class="RankImage" value="http://yun.kingcome.cn/attached/memberranktemplate/1/a245e3ddbab94d7b85c03427c13732a0.png">
                                            <textarea class="Remark"></textarea>
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="1184" sid="1">
                                    <td>4</td>
                                    <td class="RankName">四级</td>
                                    <td><img src="http://yun.kingcome.cn/attached/memberranktemplate/1/fdf7dd71bf6846bb94ea18f406a6bd92.png" height="30" style="height:30px"></td>
                                    <td class="IntegralCount hidden-480">12700</td>
                                    <td class="RankNumber hide">4</td>
                                    <td class="hidden-480" data-val="1"><font color="green">已启用</font></td>

                                    <td><a href="MembershipLevelMsg.html">设置</a></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide">
                                            <input type="hidden" class="RankImage" value="http://yun.kingcome.cn/attached/memberranktemplate/1/fdf7dd71bf6846bb94ea18f406a6bd92.png">
                                            <textarea class="Remark">三大卡拉斯科来到了</textarea>
                                        </div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 4 条 共 4 条</div></div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="4"><option value="1000000">全部</option><option value="1000000">全部</option></select>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"membershiplevel",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>