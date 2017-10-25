<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>积分商城</div>
                            <div class="actions">
                                <a href="#responsive" data-toggle="modal" class="btn blue" onclick="objAdd()"><i class="icon-pencil"></i> 添加</a>
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <form class="searchform" method="get" action="?">
                                <input type="text" name="skey" class="m-wrap medium" value="" placeholder="名称">

                                <input type="submit" value="搜索">

                            </form>

                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th>名称/th>
                                    <th class="hidden-480">图片</th>

                                    <th>面额</th>
                                    <th>兑换分值</th>

                                    <th class="hidden-380">状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr tag="103">
                                    <td>1</td>
                                    <td class="integralgoodsname">消费100返10元</td>
                                    <td class="hidden-480">
                                        <img src="http://yun.kingcome.cn/attached/integralgoods/1/2b13b77fdd3b4bca92744c1083c83bdd_thump.jpg" class="clsimg" height="60">
                                    </td>

                                    <td class="integralgoodsprice">10</td>
                                    <td class="integralgoodsicount">30</td>

                                    <td class="state pointer hidden-380" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide rowjson">{"IntegralGoodsID":103,"BusinessID":1,"IntegralGoodsType":"卡券","IntegralGoodsTag":"1759","IntegralGoodsName":"消费100返10元","IntegralGoodsImageThumb":"http://yun.kingcome.cn/attached/integralgoods/1/2b13b77fdd3b4bca92744c1083c83bdd_thump.jpg","IntegralGoodsImage":"http://yun.kingcome.cn/attached/integralgoods/1/2b13b77fdd3b4bca92744c1083c83bdd.jpg","IntegralGoodsPrice":10.0,"IntegralGoodsICount":30,"IntegralGoodsDescription":null,"State":1,"Remark":null,"CreateTime":"2016-01-30T21:33:11.977"}</div>
                                    </td>
                                </tr>

                                <tr tag="512">
                                    <td>2</td>
                                    <td class="integralgoodsname">400积分兑换￥20</td>
                                    <td class="hidden-480">
                                        <img src="" class="clsimg" height="60">
                                    </td>

                                    <td class="integralgoodsprice">20</td>
                                    <td class="integralgoodsicount">400</td>

                                    <td class="state pointer hidden-380" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide rowjson">{"IntegralGoodsID":512,"BusinessID":1,"IntegralGoodsType":"卡券","IntegralGoodsTag":"143","IntegralGoodsName":"400积分兑换￥20","IntegralGoodsImageThumb":null,"IntegralGoodsImage":null,"IntegralGoodsPrice":20.0,"IntegralGoodsICount":400,"IntegralGoodsDescription":"400积分兑换￥20","State":1,"Remark":null,"CreateTime":"2017-05-02T14:09:09.503"}</div>
                                    </td>
                                </tr>

                                <tr tag="381">
                                    <td>3</td>
                                    <td class="integralgoodsname">消费10返5元</td>
                                    <td class="hidden-480">
                                        <img src="" class="clsimg" height="60">
                                    </td>

                                    <td class="integralgoodsprice">5</td>
                                    <td class="integralgoodsicount">500</td>

                                    <td class="state pointer hidden-380" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide rowjson">{"IntegralGoodsID":381,"BusinessID":1,"IntegralGoodsType":"卡券","IntegralGoodsTag":"1762","IntegralGoodsName":"消费10返5元","IntegralGoodsImageThumb":null,"IntegralGoodsImage":null,"IntegralGoodsPrice":5.0,"IntegralGoodsICount":500,"IntegralGoodsDescription":null,"State":1,"Remark":null,"CreateTime":"2016-10-18T16:42:00.973"}</div>
                                    </td>
                                </tr>

                                <tr tag="380">
                                    <td>4</td>
                                    <td class="integralgoodsname">消费100返10元</td>
                                    <td class="hidden-480">
                                        <img src="" class="clsimg" height="60">
                                    </td>

                                    <td class="integralgoodsprice">10</td>
                                    <td class="integralgoodsicount">1000</td>

                                    <td class="state pointer hidden-380" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide rowjson">{"IntegralGoodsID":380,"BusinessID":1,"IntegralGoodsType":"卡券","IntegralGoodsTag":"1759","IntegralGoodsName":"消费100返10元","IntegralGoodsImageThumb":null,"IntegralGoodsImage":null,"IntegralGoodsPrice":10.0,"IntegralGoodsICount":1000,"IntegralGoodsDescription":null,"State":1,"Remark":null,"CreateTime":"2016-10-18T16:41:41.66"}</div>
                                    </td>
                                </tr>

                                <tr tag="1">
                                    <td>5</td>
                                    <td class="integralgoodsname">20元代金券</td>
                                    <td class="hidden-480">
                                        <img src="http://yun.kingcome.cn/attached/integralgoods/1/cb65cdb4d4d741dab85296224c77105f_thump.jpg" class="clsimg" height="60">
                                    </td>

                                    <td class="integralgoodsprice">20</td>
                                    <td class="integralgoodsicount">2000</td>

                                    <td class="state pointer hidden-380" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide rowjson">{"IntegralGoodsID":1,"BusinessID":1,"IntegralGoodsType":"卡券","IntegralGoodsTag":"143","IntegralGoodsName":"20元代金券","IntegralGoodsImageThumb":"http://yun.kingcome.cn/attached/integralgoods/1/cb65cdb4d4d741dab85296224c77105f_thump.jpg","IntegralGoodsImage":"http://yun.kingcome.cn/attached/integralgoods/1/cb65cdb4d4d741dab85296224c77105f.jpg","IntegralGoodsPrice":20.0,"IntegralGoodsICount":2000,"IntegralGoodsDescription":"可多次兑换，兑换后当天生效30天有效","State":1,"Remark":null,"CreateTime":"2015-07-27T16:56:21.337"}</div>
                                    </td>
                                </tr>

                                <tr tag="2">
                                    <td>6</td>
                                    <td class="integralgoodsname">50元代金券</td>
                                    <td class="hidden-480">
                                        <img src="http://yun.kingcome.cn/attached/integralgoods/1/500bb0d731584a4fb0c3597877695d39_thump.jpg" class="clsimg" height="60">
                                    </td>

                                    <td class="integralgoodsprice">50</td>
                                    <td class="integralgoodsicount">5000</td>

                                    <td class="state pointer hidden-380" data-val="1"><font color="green">已启用</font></td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>
                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin" title="删除"><i></i></a>
                                        <div class="hide rowjson">{"IntegralGoodsID":2,"BusinessID":1,"IntegralGoodsType":"卡券","IntegralGoodsTag":"152","IntegralGoodsName":"50元代金券","IntegralGoodsImageThumb":"http://yun.kingcome.cn/attached/integralgoods/1/500bb0d731584a4fb0c3597877695d39_thump.jpg","IntegralGoodsImage":"http://yun.kingcome.cn/attached/integralgoods/1/500bb0d731584a4fb0c3597877695d39.jpg","IntegralGoodsPrice":50.0,"IntegralGoodsICount":5000,"IntegralGoodsDescription":"可多次兑换，兑换后当天生效30天有效","State":1,"Remark":null,"CreateTime":"2015-08-11T00:20:38.187"}</div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 6 条 共 6 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="6"><option value="1000000">全部</option></select>
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
    import '@/media/css/user-table.css'
    export default {
        name:"integralmall",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>