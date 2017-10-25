<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i> 门店维护</div>
                            <div class="actions">
                                <a href="#responsive" data-toggle="modal" class="btn blue" ><i class="icon-pencil"></i> 添加</a>
                                <div class="btn-group">
                                </div>
                            </div>
                        </div>
                        <div class="portlet-body">
                            <form class="searchform" method="get" action="?pagingsize=10">
                                <input type="text" name="skey" class="m-wrap" value="" placeholder="门店名称">

                                <select class="sch_business" value="" name="sbusiness"><option value="0">全部商家</option><option value="256">57度湘餐厅</option><option value="116">巴国布衣</option><option value="97">长城宾馆</option><option value="98">后湖梁记粥铺</option><option value="96">华尚金典</option><option value="210">江户前日式料理</option><option value="122">蕉雨曳</option><option value="150">良辰美景大酒店</option><option value="159">七品茶轩</option><option value="218">七七餐饮连锁</option><option value="44">炭庐餐厅</option><option value="170">天津瑞鼎泰</option><option value="357">天门德福缘</option><option value="241">味道工厂楚虾王</option><option value="126">西洋里茶餐厅</option><option value="301">爷爷的土钵菜</option><option value="15">商邦餐饮连锁</option></select>

                                <input type="submit" value="搜索">
                                <div class="tabletool">
                                    <button type="button" onclick="sortNum.save()">保存排序</button>
                                </div>
                            </form>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index ">序号</th>
                                    <th class="alleft minwidth100 hidden-480"><a href="?sortid=0&amp;pagingsize=10" class="sort">门店名称</a></th>
                                    <th class="alleft"><a href="?sortid=1&amp;pagingsize=10" class="sort">简称</a></th>
                                    <th class="hide"><a href="?sortid=2&amp;pagingsize=10" class="sort">电话</a></th>
                                    <th class="alleft hide" style="max-width:180px">地址</th>
                                    <th class="hidden-670"><a href="?sortid=3&amp;pagingsize=10" class="sort">创建时间</a></th>
                                    <th class="minwidth70 hidden-480"><a href="?sortid=4&amp;pagingsize=10&amp;sorttype=1" class="sort desc">排序码</a></th>

                                    <th>功能设置</th>

                                    <th style="width:50px"><a href="?sortid=5&amp;pagingsize=10" class="sort">状态</a></th>

                                    <th><a href="?sortid=6&amp;pagingsize=10" class="sort">授权</a></th>

                                    <th>Token</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr tag="96" bid="15">
                                    <td title="96">1</td>
                                    <td class="alleft hidden-480">老丁餐饮</td>
                                    <td class="alleft">老丁餐饮</td>
                                    <td class="phone hide"></td>
                                    <td class="alleft address hide" title=""></td>
                                    <td class="hidden-670">15-06-02 09:06</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="1">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="118DA259F96B8D7F" onclick="this.innerHTML=this.title">11***7F</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://show.yun.kingcome.cn/attached/storeimg/15/ccda10e637a9443e9edbd2d29bdeb7c4.jpeg">
                                            <input type="hidden" class="longitude" value="0">
                                            <input type="hidden" class="latitude" value="0">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="老丁餐饮">
                                            <input type="hidden" class="shortname" value="老丁餐饮">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="612" bid="256">
                                    <td title="612">2</td>
                                    <td class="alleft hidden-480">五十七度湘武广店</td>
                                    <td class="alleft">武广店</td>
                                    <td class="phone hide">027-87506662</td>
                                    <td class="alleft address hide" title="武汉市江汉区解放大道688号武商广场7楼">武汉市江汉区解放大道688号武商广场7楼</td>
                                    <td class="hidden-670">16-05-19 14:39</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="1">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="8AED27168354C4DF" onclick="this.innerHTML=this.title">8A***DF</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="36867243@qq.com">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/storeimg/256/0835919fabe547db8a4a8642c2e0d2b6.jpg">
                                            <input type="hidden" class="longitude" value="114.277839">
                                            <input type="hidden" class="latitude" value="30.585744">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="五十七度湘武广店">
                                            <input type="hidden" class="shortname" value="武广店">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="77" bid="15">
                                    <td title="77">3</td>
                                    <td class="alleft hidden-480">天赐菜馆青年城店</td>
                                    <td class="alleft">天赐</td>
                                    <td class="phone hide">18186155146</td>
                                    <td class="alleft address hide" title="光谷青年城居民小区11栋">光谷青年城居民小区11栋</td>
                                    <td class="hidden-670">15-06-02 09:01</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="2">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="55F5A7D23B9C4CFD" onclick="this.innerHTML=this.title">55***FD</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/storeimg/15/27aca3015a944414b25ea8003da8a38f.jpg">
                                            <input type="hidden" class="longitude" value="114.421199">
                                            <input type="hidden" class="latitude" value="30.498513">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="天赐菜馆青年城店">
                                            <input type="hidden" class="shortname" value="天赐">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="267" bid="96">
                                    <td title="267">4</td>
                                    <td class="alleft hidden-480">地球仪上的铁板烧</td>
                                    <td class="alleft">铁板烧</td>
                                    <td class="phone hide">3074921</td>
                                    <td class="alleft address hide" title="长征路36号华洋堂6楼食锦美食街">长征路36号华洋堂6楼食锦美食街</td>
                                    <td class="hidden-670">15-09-29 10:47</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="3">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="16FD33044EAEDED3" onclick="this.innerHTML=this.title">16***D3</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/customerrank/96/12c90140067c49b9b69deee142f82cee.jpg">
                                            <input type="hidden" class="longitude" value="115.065392">
                                            <input type="hidden" class="latitude" value="30.249606">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="地球仪上的铁板烧">
                                            <input type="hidden" class="shortname" value="铁板烧">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="107" bid="15">
                                    <td title="107">5</td>
                                    <td class="alleft hidden-480">光谷店</td>
                                    <td class="alleft">许长源用</td>
                                    <td class="phone hide">027-87661916</td>
                                    <td class="alleft address hide" title="武汉市洪山区光谷步行街">武汉市洪山区光谷步行街</td>
                                    <td class="hidden-670">15-06-02 09:13</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="3">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="4A3560AE76630A57" onclick="this.innerHTML=this.title">4A***57</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/storeimg/15/4d85eba831f844c3b8b62266fd144db7.gif">
                                            <input type="hidden" class="longitude" value="114.271156">
                                            <input type="hidden" class="latitude" value="30.5748">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="光谷店">
                                            <input type="hidden" class="shortname" value="许长源用">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="104" bid="15">
                                    <td title="104">6</td>
                                    <td class="alleft hidden-480">珞珈山店</td>
                                    <td class="alleft">刘彪珞珈</td>
                                    <td class="phone hide">022-58520702</td>
                                    <td class="alleft address hide" title="武汉市, 武昌区, 南一路">武汉市, 武昌区, 南一路</td>
                                    <td class="hidden-670">15-06-02 09:13</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="4">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="0"><font color="red">已禁用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="006055C1EDB735F1" onclick="this.innerHTML=this.title">00***F1</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/customerrank/15/8ef299d04636496daa797a3397ba3c8e.png">
                                            <input type="hidden" class="longitude" value="114.343451">
                                            <input type="hidden" class="latitude" value="30.583506">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="珞珈山店">
                                            <input type="hidden" class="shortname" value="刘彪珞珈">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="268" bid="96">
                                    <td title="268">7</td>
                                    <td class="alleft hidden-480">董记生煎</td>
                                    <td class="alleft">董记生煎</td>
                                    <td class="phone hide">3074922</td>
                                    <td class="alleft address hide" title="长征路36号华洋堂6楼食锦美食街">长征路36号华洋堂6楼食锦美食街</td>
                                    <td class="hidden-670">15-09-29 10:47</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="5">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="EC4F12AFEC1E87D7" onclick="this.innerHTML=this.title">EC***D7</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/customerrank/96/3146d706262c4f0cbab069a3ebfe5819.jpg">
                                            <input type="hidden" class="longitude" value="114.3619">
                                            <input type="hidden" class="latitude" value="30.53282">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="董记生煎">
                                            <input type="hidden" class="shortname" value="董记生煎">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="109" bid="15">
                                    <td title="109">8</td>
                                    <td class="alleft hidden-480">蓝悦渔市</td>
                                    <td class="alleft">蓝悦</td>
                                    <td class="phone hide">027-87661916</td>
                                    <td class="alleft address hide" title="武汉市, 硚口区, 中山大道, 420号">武汉市, 硚口区, 中山大道, 420号</td>
                                    <td class="hidden-670">15-06-02 09:14</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="6">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="BB3F134076C975A8" onclick="this.innerHTML=this.title">BB***A8</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/customerrank/15/d4676063588a42c3b7628b7c3835ce90.png">
                                            <input type="hidden" class="longitude" value="114.283085">
                                            <input type="hidden" class="latitude" value="30.577288">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="蓝悦渔市">
                                            <input type="hidden" class="shortname" value="蓝悦">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="112" bid="15">
                                    <td title="112">9</td>
                                    <td class="alleft hidden-480">天津大悦城店</td>
                                    <td class="alleft">大悦城店</td>
                                    <td class="phone hide">022-58520702</td>
                                    <td class="alleft address hide" title="天津市">天津市</td>
                                    <td class="hidden-670">15-06-02 09:14</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="6">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="1CE68FD6F1C46693" onclick="this.innerHTML=this.title">1C***93</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://yun.kingcome.cn/attached/customerrank/15/e0432e12d13d48ab816377e5517a260c.png">
                                            <input type="hidden" class="longitude" value="117.1867">
                                            <input type="hidden" class="latitude" value="39.1194">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="天津大悦城店">
                                            <input type="hidden" class="shortname" value="大悦城店">
                                        </div>
                                    </td>
                                </tr>

                                <tr tag="379" bid="15">
                                    <td title="379">10</td>
                                    <td class="alleft hidden-480">5-街道口店</td>
                                    <td class="alleft">王炎坤用</td>
                                    <td class="phone hide"></td>
                                    <td class="alleft address hide" title="武汉市洪山区街道口珞珈山大厦">武汉市洪山区街道口珞珈山大厦</td>
                                    <td class="hidden-670">16-01-15 17:04</td>
                                    <td class="hidden-480">
                                        <input type="number" class="sortnum" value="7">
                                    </td>

                                    <td><a href="javascrpit:" onclick="showset(this)">设置</a></td>

                                    <td class="state pointer" data-val="1"><font color="green">已启用</font></td>

                                    <td>
                                        <font color="green">已授权</font>
                                    </td>

                                    <td title="FE6FB801852AE991" onclick="this.innerHTML=this.title">FE***91</td>
                                    <td>
                                        <a href="#responsive" data-toggle="modal" onclick="objAdd(this)" class="glyphicons pen" title="查看/修改"><i></i></a>

                                        <div class="hide">
                                            <input type="hidden" class="email" value="">
                                            <input type="hidden" class="storeimg" value="http://show.yun.kingcome.cn/attached/storeimg/15/c39499bf6a384ff1a89ad6450258f07b.jpg">
                                            <input type="hidden" class="longitude" value="0">
                                            <input type="hidden" class="latitude" value="0">
                                            <input type="hidden" class="smart" value="">
                                            <input type="hidden" class="storename" value="5-街道口店">
                                            <input type="hidden" class="shortname" value="王炎坤用">
                                        </div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info" id="sample_2_info">第 1 - 10 条 共 72 条</div>
                                </div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="10" param="" count="72">
                                        </select>
                                    </div>
                                    <div class="dataTables_paginate paging_bootstrap pagination">
                                        <ul>
                                            <li class="prev disabled"><a href="javascript:">← <span class="hidden-480">上一页</span></a></li>
                                            <li class="active"><a href="javascript:">1</a></li>
                                            <li><a href="StoreList.aspx?pagingsize=10&amp;page=2">2</a></li>
                                            <li class="next"><a href="StoreList.aspx?pagingsize=10&amp;page=2"><span class="hidden-480">下一页</span> → </a></li>
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
        name:"storelist",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>