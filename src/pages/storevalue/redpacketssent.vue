<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>红包发送查询</div>
                        </div>
                        <div class="portlet-body">
                            <form class="tabbable-custom searchform " id="searchform" method="get" action="?">
                                <input type="hidden" name="tabidx" value="0">
                                <input type="hidden" name="customtime" value="0">
                                <ul class="nav nav-tabs searchdate">
                                    <li class="active"><a href="#" data-toggle="tab" onclick="gosearch('settoday', 0)">今日</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setyesterday', 1)">昨日</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setcurrweek', 2)">本周</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setprevweek', 3)">上周</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setcurrmonth', 4)">本月</a></li>
                                    <li><a href="#" data-toggle="tab" onclick="gosearch('setprevmonth', 5)">上月</a></li>
                                    <li class="untime"><a href="javascript:" onclick="$('#searchform .sdate').toggle()"><i class="icon-calendar"></i></a></li>
                                </ul>

                                <div class="sdate hide customerdate" style="margin-top: 5px;">
                                    <input type="text" id="d4311" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', maxDate: '#F{$dp.$D(\'d4312\')}' })" class="Wdate" name="ssdate" value="2017-09-18 04:00:00">
                                    -
                                    <input type="text" id="d4312" style="max-width: 150px" onclick="WdatePicker({ errDealMode: 0, dateFmt: 'yyyy-MM-dd HH:mm:ss', minDate: '#F{$dp.$D(\'d4311\')}' })" class="Wdate" name="sedate" value="2017-09-19 03:59:59">
                                    &nbsp;
                                    <button style="margin-bottom: 10px" id="customtime">搜索</button>
                                </div>
                                <dl class="well totaltext" data-count="0">
                                    <dd>
                                        <div style="font-weight: 400; font-size: 15px" class="timetip cls_timetip">汇总周期： 09.18<span style="margin-left: 8px; font-size: 13px; color: gray">（周一）04:00:00</span> <span style="color: gray">—</span>  09.19<span style="margin-left: 8px; font-size: 13px; color: gray">（周二）03:59:59</span></div>
                                    </dd>
                                    <dd>红包汇总：成功发送(元): <span style="font-size: 20px; color: red; font-weight: bold">0</span></dd>
                                </dl>
                                <select name="sfromtype" id="src_sfromtype" data-val="">
                                    <option value="">全部来源</option>
                                    <option value="storevalue">储值</option>
                                    <option value="goodsrecommend">推荐菜</option>
                                    <option value="ordertip">打赏</option>
                                </select>
                                <select name="sputtype" id="src_sputtype" data-val="">
                                    <option value="">全部类别</option>
                                    <option value="微信红包">微信红包</option>
                                    <option value="公司结账">公司结账</option>
                                </select>
                                <input type="button" value="搜索" id="btns">
                            </form>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th>头像</th>
                                    <th>姓名</th>
                                    <th>发放金额(元)</th>
                                    <th>发放时间</th>
                                    <th class="hidden-780">发放方式</th>
                                    <th class="hidden-480">来源</th>
                                    <th class="hidden-670">来源说明</th>
                                    <th>发放状态</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr data-id="315574" data-billno="99c0e8452dfb479084ab9dda5920" data-money="3" title="">
                                    <td>1</td>
                                    <td><img src="http://wx.qlogo.cn/mmopen/Q3auHgzwzM4EofDlThBAPnPonsUicGicogZBQYOlWPRUL0HmI8cq6iadVhHZChGlmqQdq1FkPAkYtopW8jj4UULzIiawMGub7CDMhjxoE6YFXib4/0" width="40"></td>
                                    <td>易创</td>
                                    <td>3</td>
                                    <td>9-27 20:51:00</td>
                                    <td class="hidden-780">微信红包</td>
                                    <td class="hidden-480">储值</td>
                                    <td class="hidden-670">桌118【杨文旭】充值：300元</td>
                                    <td><font color="green">已发送</font></td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="row-fluid">
                                <div class="span6">
                                    <div class="dataTables_info">第 1 - 0 条 共 0 条</div></div>
                                <div class="span6">
                                    <div class="glb_pagingsize">
                                        <select id="glb_pagingsize" value="20" param="" count="0"><option value="1000000">全部</option></select>
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
                <input type="hidden" name="datetimeIsErr" value="0">
            </div>
        </div>
    </div>
</template>

<script>
    import '@/media/css/user-table.css'
    export default {
        name:"redpacketssent",
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>