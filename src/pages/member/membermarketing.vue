<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="index-content">
                <div class="portlet">
                    <div class="portlet-head">
                        <h3 class="portlet-title text-center font-fff">会员营销管理</h3>
                    </div>

                    <div class="swiper-container swiper-container-horizontal">
                        <div class="swiper-wrapper" style="transform: translate3d(-638px, 0px, 0px); transition-duration: 0ms;"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="5" style="width: 638px;">
                            <div class="swipebox rep_6" data-index="5">
                                <div class="subtitle">
                                    <div>卡券发放、使用量</div>
                                </div>
                                <div class="tab-panel">
                                    <div class="searchform">
                                        <div class="tabbable-custom">
                                            <ul class="nav nav-tabs searchdate">
                                                <li class="active"><a href="#" data-toggle="tab">近一周</a></li>
                                                <li><a href="#" data-toggle="tab">近一月</a></li>
                                                <li><a href="#" data-toggle="tab">上月</a></li>
                                                <li class="show-479"><a href="#" onclick="$('.rep_6 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="sdate hide">
                                            <input type="date" class="m-wrap small" name="ssdate" value="2017-08-31">
                                            -
                                            <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                            <input class="" type="submit" value="搜索" id="tag_cardrecord">
                                        </div>
                                        <div class="fleft" style="display: inline-block;">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div id="chart-cards" class="indexcharts" style="height: 300px">
                                        <h4>正在加载...</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style="width: 638px;">
                                <div class="swipebox rep_1" data-index="0">
                                    <div class="subtitle">
                                        <div>会员增长记录</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="searchform">
                                            <div style="display: inline-block;">
                                                <div class="tabbable-custom">
                                                    <ul class="nav nav-tabs searchdate">
                                                        <li class="active"><a href="#" data-toggle="tab">近一月</a></li>
                                                        <li><a href="#" data-toggle="tab">近三月</a></li>
                                                        <li><a href="#" data-toggle="tab">上月</a></li>
                                                        <li class="show-479"><a href="#" onclick="$('.rep_1 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="sdate hide">
                                                    <input type="date" class="m-wrap small" name="ssdate" value="2017-08-06" data-d="2017/9/6">
                                                    -
                                                    <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                                    &nbsp;<input class="" type="submit" value="搜索">
                                                </div>
                                                <div style="display: inline-block;">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="datalist">
                                            <table class="gtable">
                                                <thead>
                                                <tr>
                                                    <th>日期</th>
                                                    <th>新增</th>
                                                    <th>减少</th>
                                                    <th>净增</th>
                                                    <th>总数</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style="width: 638px;">
                                <div class="text-center swiper-title subtitle" style="padding: 5px 0">
                                    <div style="margin: 10px 0">本周会员增长情况</div>
                                </div>
                                <div id="chart" style="height:100%;" data-highcharts-chart="0"><div id="highcharts-3pxblfw-0" class="highcharts-container " style="position: relative; overflow: hidden; width: 638px; height: 400px; text-align: left; line-height: normal; z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><svg version="1.1" class="highcharts-root" style="font-family:&quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif;font-size:12px;" xmlns="http://www.w3.org/2000/svg" width="638" height="400" viewBox="0 0 638 400"><desc>Created with Highcharts 6.0.1</desc><defs><clipPath id="highcharts-3pxblfw-1"><rect x="0" y="0" width="466" height="353" fill="none"></rect></clipPath></defs><rect fill="#ffffff" class="highcharts-background" x="0" y="0" width="638" height="400" rx="0" ry="0"></rect><rect fill="none" class="highcharts-plot-background" x="39" y="10" width="466" height="353"></rect><g class="highcharts-plot-lines-0"><path fill="none" stroke="#808080" stroke-width="1" d="M 39 363.5 L 505 363.5" visibility="visible"></path></g><g class="highcharts-grid highcharts-xaxis-grid "><path fill="none" class="highcharts-grid-line" d="M 116.5 10 L 116.5 363" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 193.5 10 L 193.5 363" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 271.5 10 L 271.5 363" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 349.5 10 L 349.5 363" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 426.5 10 L 426.5 363" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 504.5 10 L 504.5 363" opacity="1"></path><path fill="none" class="highcharts-grid-line" d="M 38.5 10 L 38.5 363" opacity="1"></path></g><g class="highcharts-grid highcharts-yaxis-grid "><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 39 363.5 L 505 363.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 39 292.5 L 505 292.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 39 222.5 L 505 222.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 39 151.5 L 505 151.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 39 81.5 L 505 81.5" opacity="1"></path><path fill="none" stroke="#e6e6e6" stroke-width="1" class="highcharts-grid-line" d="M 39 9.5 L 505 9.5" opacity="1"></path></g><rect fill="none" class="highcharts-plot-border" x="39" y="10" width="466" height="353"></rect><g class="highcharts-axis highcharts-xaxis "><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 116.5 363 L 116.5 373" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 193.5 363 L 193.5 373" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 271.5 363 L 271.5 373" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 349.5 363 L 349.5 373" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 426.5 363 L 426.5 373" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 505.5 363 L 505.5 373" opacity="1"></path><path fill="none" class="highcharts-tick" stroke="#ccd6eb" stroke-width="1" d="M 38.5 363 L 38.5 373" opacity="1"></path><path fill="none" class="highcharts-axis-line" stroke="#ccd6eb" stroke-width="1" d="M 39 363.5 L 505 363.5"></path></g><g class="highcharts-axis highcharts-yaxis "><path fill="none" class="highcharts-axis-line" d="M 39 10 L 39 363"></path></g><g class="highcharts-series-group"><g class="highcharts-series highcharts-series-0 highcharts-line-series highcharts-color-0 " transform="translate(39,10) scale(1 1)" clip-path="url(#highcharts-3pxblfw-1)"><path fill="none" d="M 38.833333333333 317.7 L 116.5 282.4 L 194.16666666667 211.8 L 271.83333333333 282.4 L 349.5 70.60000000000002 L 427.16666666667 282.4" class="highcharts-graph" stroke="#7cb5ec" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path><path fill="none" d="M 28.833333333333 317.7 L 38.833333333333 317.7 L 116.5 282.4 L 194.16666666667 211.8 L 271.83333333333 282.4 L 349.5 70.60000000000002 L 427.16666666667 282.4 L 437.16666666667 282.4" stroke-linejoin="round" visibility="visible" stroke="rgba(192,192,192,0.0001)" stroke-width="22" class="highcharts-tracker"></path></g><g class="highcharts-markers highcharts-series-0 highcharts-line-series highcharts-color-0  highcharts-tracker" transform="translate(39,10) scale(1 1)"><path fill="#7cb5ec" d="M 42 317.7 A 4 4 0 1 1 41.99999800000017 317.69600000066663 Z" class="highcharts-point highcharts-color-0"></path><path fill="#7cb5ec" d="M 120 282.4 A 4 4 0 1 1 119.99999800000016 282.3960000006666 Z" class="highcharts-point highcharts-color-0"></path><path fill="#7cb5ec" d="M 198 211.8 A 4 4 0 1 1 197.99999800000018 211.79600000066668 Z" class="highcharts-point highcharts-color-0"></path><path fill="#7cb5ec" d="M 275 282.4 A 4 4 0 1 1 274.9999980000002 282.3960000006666 Z" class="highcharts-point highcharts-color-0"></path><path fill="#7cb5ec" d="M 353 70.60000000000002 A 4 4 0 1 1 352.9999980000002 70.59600000066669 Z" class="highcharts-point highcharts-color-0"></path><path fill="#7cb5ec" d="M 431 282.4 A 4 4 0 1 1 430.9999980000002 282.3960000006666 Z" class="highcharts-point highcharts-color-0"></path></g></g><g class="highcharts-button highcharts-contextbutton" style="cursor:pointer;" stroke-linecap="round" transform="translate(604,10)"><title>图表导出菜单</title><rect fill="#ffffff" class=" highcharts-button-box" x="0.5" y="0.5" width="24" height="22" rx="2" ry="2" stroke="none" stroke-width="1"></rect><path fill="#666666" d="M 6 6.5 L 20 6.5 M 6 11.5 L 20 11.5 M 6 16.5 L 20 16.5" class="highcharts-button-symbol" stroke="#666666" stroke-width="3"></path><text x="0" style="font-weight:normal;color:#333333;fill:#333333;" y="12"></text></g><text x="319" text-anchor="middle" class="highcharts-title" style="color:#333333;font-size:18px;fill:#333333;" y="24"><tspan>图表标题</tspan></text><g class="highcharts-legend" transform="translate(517,183)"><rect fill="none" class="highcharts-legend-box" rx="0" ry="0" x="0" y="0" width="111" height="29" visibility="visible"></rect><g><g><g class="highcharts-legend-item highcharts-line-series highcharts-color-0 highcharts-series-0" transform="translate(8,3)"><path fill="none" d="M 0 11 L 16 11" class="highcharts-graph" stroke="#7cb5ec" stroke-width="2"></path><path fill="#7cb5ec" d="M 12 11 A 4 4 0 1 1 11.999998000000167 10.996000000666664 Z" class="highcharts-point"></path><text x="21" style="color:#333333;font-size:12px;font-weight:bold;cursor:pointer;fill:#333333;" text-anchor="start" y="15"><tspan>会员增长情况</tspan></text></g></g></g></g><g class="highcharts-axis-labels highcharts-xaxis-labels "><text x="77.83333333333334" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="382" opacity="1"><tspan>周一</tspan></text><text x="155.5" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="382" opacity="1"><tspan>周二</tspan></text><text x="233.16666666666666" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="382" opacity="1"><tspan>周三</tspan></text><text x="310.83333333333337" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="382" opacity="1"><tspan>周四</tspan></text><text x="388.5" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="382" opacity="1"><tspan>周五</tspan></text><text x="466.1666666666667" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="middle" transform="translate(0,0)" y="382" opacity="1"><tspan>周六</tspan></text></g><g class="highcharts-axis-labels highcharts-yaxis-labels "><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="367" opacity="1"><tspan>0</tspan></text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="296" opacity="1"><tspan>2</tspan></text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="226" opacity="1"><tspan>4</tspan></text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="155" opacity="1"><tspan>6</tspan></text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="85" opacity="1"><tspan>8</tspan></text><text x="24" style="color:#666666;cursor:default;font-size:11px;fill:#666666;" text-anchor="end" transform="translate(0,0)" y="14" opacity="1"><tspan>10</tspan></text></g><text x="628" class="highcharts-credits" text-anchor="end" style="cursor:pointer;color:#999999;font-size:9px;fill:#999999;" y="395">Highcharts.com</text></svg></div></div>
                            </div>
                            <div class="swiper-slide" data-swiper-slide-index="2" style="width: 638px;">
                                <div class="swipebox rep_3" data-index="2">
                                    <input type="hidden" id="cid_arr" value="">
                                    <input type="hidden" id="cid_f" value=" ">
                                    <div class="subtitle">
                                        <div>会员精准营销</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="searchform" style="position: relative">
                                            <div class="tabbable-custom">
                                                <label style="display: inline-block">交互类型：</label>
                                                <label style="display: inline-block; padding: 5px 10px; text-align: justify">
                                                    <input type="radio" id="jiaohu" name="radio" value="2" style="margin: -1px 0 0" checked="">交互
                                                </label>

                                                <ul class="nav nav-tabs searchdate">
                                                    <li class="active"><a href="#" data-toggle="tab" class="active" id="Search48">48小时</a></li>
                                                    <li><a href="#" data-toggle="tab" id="S1">近一周</a></li>
                                                    <li><a href="#" data-toggle="tab" id="S2">近一月</a></li>
                                                    <li><a href="#" data-toggle="tab" id="S3">上月</a></li>
                                                    <li class="show-479"><a href="#" onclick="$('.rep_3 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                                </ul>
                                            </div>

                                            <div class="sdate hide">
                                                <input type="date" class="m-wrap small" name="ssdate" id="df48" value="2017-09-04">
                                                -
                                                <input type="date" class="m-wrap date xxsmall" id="dl48" name="sedate" value="2017-09-06">
                                            </div>
                                            <div id="dv_1" class="fleft" style="display: block;">
                                                <input type="button" name="bt_show1" style="text-align: left; width: 100px; background-image: url(/static/admin/media/image/mk-tab.png)" value="条件筛选">
                                                <select id="memberrank" name="vch_level">
                                                    <option value="">会员等级</option>
                                                    <option value="1">一级</option>
                                                    <option value="2">二级</option>
                                                    <option value="3">三级</option>
                                                    <option value="4">四级</option>
                                                    <option value="5">五级</option>
                                                </select>

                                                <input type="hidden" name="province" id="province" value="">
                                                <input type="hidden" name="city" id="city" value="">
                                                <input type="text" id="Ip_Area" name="Ip_Area" value="" placeholder="所在地区" style="width: 20%; cursor: pointer">&nbsp;
                                                <input type="button" value="搜索" onclick="toseach()" style="margin-right: 90px">
                                            </div>
                                            <input type="text" name="_type" value="2" style="display: none">
                                            <input type="text" name="sdate" value="2017-09-04" style="display: none">
                                            <input type="text" name="edate" value="2017-09-06" style="display: none">
                                            <select id="datetype" name="datetype" class="fleft" style="display: none">
                                                <option value="2">交互</option>
                                                <option value="1">消费</option>
                                                <option value="3" selected="">48小时内</option>
                                            </select>
                                            <div class="fleft" id="dv_show" style="display: none">
                                                <input type="button" name="bt_show2" value="精准查询" style="text-align: right; width: 100px; background-image: url(/static/admin/media/image/mk-tab2.png)">
                                                <input type="text" name="skey" class="m-wrap medium" placeholder="姓名,昵称,手机号,卡号">&nbsp;<input id="_bt" type="submit" value="搜索" style="margin-right: 90px">
                                            </div>
                                            <a href="" target="_blank" class="btn blue " onclick="return openMarketting('.rep_3 .ch:checked')" style="font-size: small; padding: 3px 6px; bottom: 0px; position: absolute; width: 70px; height: 20px; right: 0px; opacity: 0.8; z-index: 99999999"><i class="icon-ok"></i>发送信息</a>
                                        </div>
                                        <div class="datalist">
                                            <table class="gtable" id="vip_table">
                                                <thead>
                                                <tr>
                                                    <th><input type="checkbox" data-set=".gtable .ch" onclick="checkboxChangeState(this)">

                                                    </th>
                                                    <th>会员</th>
                                                    <th>会员等级</th>
                                                    <th>所在地区</th>
                                                    <th>最近交互时间</th>

                                                </tr>
                                                </thead>
                                                <tbody id="member_content">
                                                </tbody>

                                            </table>
                                            <button id="get_more" style="text-align: center; margin: 10px auto; display: none; width: 100%;" class="clspg">共条 点击加载更多</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide" data-swiper-slide-index="3" style="width: 638px;">
                                <div class="swipebox rep_4" data-index="3">
                                    <div class="subtitle">
                                        <div>会员消费记录</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="searchform">
                                            <div class="tabbable-custom">
                                                <ul class="nav nav-tabs searchdate">
                                                    <li class="active"><a href="#" data-toggle="tab">今日</a></li>
                                                    <li><a href="#" data-toggle="tab">近一月</a></li>
                                                    <li><a href="#" data-toggle="tab">上月</a></li>
                                                    <li class="show-479"><a href="#" onclick="$('.rep_4 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="sdate hide">
                                                <input type="date" class="m-wrap small" name="ssdate" value="2017-09-06">
                                                -
                                                <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                            </div>
                                            <div class="fleft" style="display: inline-block;">
                                                &nbsp;
                                            </div>
                                            <div class="fleft" style="display: inline-block">
                                                <input type="text" name="skey" class="m-wrap medium" placeholder="姓名,昵称,手机号,卡号">
                                                &nbsp;<input class="" type="submit" value="搜索">
                                            </div>
                                        </div>
                                        <div class="datalist">

                                            <h4>正在加载...</h4>
                                        </div>
                                        <div id="page"></div>
                                    </div>
                                </div>
                                <div class="subtitle">
                                    <div>卡券发放、使用量</div>
                                </div>
                                <div class="tab-panel">
                                    <div class="searchform">
                                        <div class="tabbable-custom">
                                            <ul class="nav nav-tabs searchdate">
                                                <li class="active"><a href="#" data-toggle="tab">近一周</a></li>
                                                <li><a href="#" data-toggle="tab">近一月</a></li>
                                                <li><a href="#" data-toggle="tab">上月</a></li>
                                                <li class="show-479"><a href="#" onclick="$('.rep_6 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="sdate hide">
                                            <input type="date" class="m-wrap small" name="ssdate" value="2017-08-31">
                                            -
                                            <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                            <input class="" type="submit" value="搜索" id="tag_cardrecord">
                                        </div>
                                        <div class="fleft" style="display: inline-block;">
                                            &nbsp;
                                        </div>
                                    </div>
                                    <div id="chart-cards" class="indexcharts" style="height: 300px">
                                        <h4>正在加载...</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide" data-swiper-slide-index="4" style="width: 638px;">
                                <div class="swipebox rep_5" data-index="4">
                                    <div class="subtitle">
                                        <div>卡券营销</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="searchform">
                                            <div class="tabbable-custom">
                                                <ul class="nav nav-tabs searchdate">
                                                    <li class="active"><a href="#" data-toggle="tab">今日</a></li>
                                                    <li><a href="#" data-toggle="tab">近一月</a></li>
                                                    <li><a href="#" data-toggle="tab">上月</a></li>
                                                    <li class="show-479"><a href="#" onclick="$('.rep_5 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="sdate hide">
                                                <input type="date" class="m-wrap small" name="ssdate" value="2017-09-06">
                                                -
                                                <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                                <input class="" type="submit" value="搜索">
                                            </div>
                                            <div class="fleft" style="display: inline-block;">
                                                &nbsp;
                                            </div>
                                        </div>
                                        <div class="datalist">
                                            <h4>正在加载...</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index="5" style="width: 638px;">
                                <div class="swipebox rep_6" data-index="5">
                                    <div class="subtitle">
                                        <div>卡券发放、使用量</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="searchform">
                                            <div class="tabbable-custom">
                                                <ul class="nav nav-tabs searchdate">
                                                    <li class="active"><a href="#" data-toggle="tab">近一周</a></li>
                                                    <li><a href="#" data-toggle="tab">近一月</a></li>
                                                    <li><a href="#" data-toggle="tab">上月</a></li>
                                                    <li class="show-479"><a href="#" onclick="$('.rep_6 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                                </ul>
                                            </div>
                                            <div class="sdate hide">
                                                <input type="date" class="m-wrap small" name="ssdate" value="2017-08-31">
                                                -
                                                <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                                <input class="" type="submit" value="搜索" id="tag_cardrecord">
                                            </div>
                                            <div class="fleft" style="display: inline-block;">
                                                &nbsp;
                                            </div>
                                        </div>
                                        <div id="chart-cards" class="indexcharts" style="height: 300px">
                                            <h4>正在加载...</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide  swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 638px;">
                                <div class="swipebox rep_1" data-index="0">
                                    <div class="subtitle">
                                        <div>会员增长记录</div>
                                    </div>
                                    <div class="tab-panel">
                                        <div class="searchform">
                                            <div style="display: inline-block;">
                                                <div class="tabbable-custom">
                                                    <ul class="nav nav-tabs searchdate">
                                                        <li class="active"><a href="#" data-toggle="tab">近一月</a></li>
                                                        <li><a href="#" data-toggle="tab">近三月</a></li>
                                                        <li><a href="#" data-toggle="tab">上月</a></li>
                                                        <li class="show-479"><a href="#" onclick="$('.rep_1 .searchform .sdate').toggle()"><i class="icon-search"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="sdate hide">
                                                    <input type="date" class="m-wrap small" name="ssdate" value="2017-08-06" data-d="2017/9/6">
                                                    -
                                                    <input type="date" class="m-wrap date xxsmall" name="sedate" value="2017-09-06">
                                                    &nbsp;<input class="" type="submit" value="搜索">
                                                </div>
                                                <div style="display: inline-block;">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="datalist">
                                            <table class="gtable">
                                                <thead>
                                                <tr>
                                                    <th>日期</th>
                                                    <th>新增</th>
                                                    <th>减少</th>
                                                    <th>净增</th>
                                                    <th>总数</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
                <div class="portlet">
                    <div class="clearfix text-center">
                        <ul class="unstyled unstyledbox pricing-footer clearfix">
                            <li class="dashboard-stat yellow">
                                <a class="more" href="/admin/index/index.html">首页</a>
                            </li>
                            <li class="dashboard-stat blue">
                                <a class="more" href="javascript:;" onclick="mySwiper.slideTo(1,300,false)">会员增长记录</a>
                            </li>
                            <li class="dashboard-stat green">
                                <a class="more" href="javascript:;" onclick="mySwiper.slideTo(2,300,false)">会员曲线图</a>
                            </li>
                            <li class="dashboard-stat red">
                                <a class="more" href="javascript:;" onclick="mySwiper.slideTo(3,300,false)">会员营销</a>
                            </li>
                            <li class="dashboard-stat pink">
                                <a class="more" href="javascript:;" onclick="mySwiper.slideTo(4,300,false)">会员消费记录</a>
                            </li>
                            <li class="dashboard-stat light-blue">
                                <a class="more" href="javascript:;" onclick="mySwiper.slideTo(5,300,false)">卡券营销</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-center" style="padding-bottom: 30px">
                    <div class=""><a href="/static/admin/"><img src="" alt="">logo</a></div>
                    <div class="">商邦信息</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"membermarketing",
        data(){
            return{

            }
        },
        mounted:function () {
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            });
        }
    }
</script>

<style>
    .container-fluid {
        font-family: "黑体" !important;
    }

    .tab-panel {
        padding: 5px;
    }

    .index-content {
        max-width: 640px;
        min-height: 700px;
        border: 1px solid #9d9c9c;;
        box-sizing: border-box;
        margin: 0 auto;
        position: relative;
        top: 5px;
    }

    .swiper-title {
        padding: 5px 0 10px 0;
        font-size: 18px;
        background: #fff4fa;
    }

    @media (min-width: 768px) {
        .index-content {
            min-height: 840px;
        }
    }

    @media (max-width: 767px) {
        .page-content {
            padding: 0 !important;
        }

        .index-content {
            border: none;
        }
    }

    .index-content .portlet-head {
        padding: 12px 0;
        background: url('http://yun.kingcome.cn/images/mobile/beijinglan_03.jpg') no-repeat center top;
        background-size: 100%;
    }

    .index-content .portlet-title {
        font-size: 27px;
        border-bottom: none;
        margin-bottom: 5px;
        margin-top: 0;
    }

    .index-content .money {
        color: red;
        font-size: 36px;
    }

    .font-fff {
        color: #fff;
    }

    .date {
        font-size: 18px;
        line-height: 30px;
    }

    .unstyledbox {
        margin-top: 7px;
    }

    .unstyledbox.pricing_content li {
        box-sizing: border-box;
        padding: 15px 10px;
        line-height: 2em;
        width: 25%;
        float: left;
        color: #888;
    }

    .swiper-button-next,
    .swiper-button-prev {
        top: 3.5%!important;
        background-size: 15px 30px!;
    }

    .swiper-slide {
        width: 100%;
    }

    .yellow {
        color: gold;
    }

    .red {
        color: red;
    }

    a:hover {
        text-decoration: none;
    }

    .clearfix.text-center {
        margin-top: 20px;
    }

    .unstyledbox.pricing-footer li {
        box-sizing: border-box;
        line-height: 2em;
        width: 32%;
        float: left;
        color: #888;
        margin: 0 0.66%;
        margin-bottom: 15px;
    }

    .unstyledbox.chart-content li {
        box-sizing: border-box;
        width: 45%;
        float: left;
        margin: 5px 2.5%;
        padding: 10px;
        border-radius: 6px !important;
    }

    .dashboard-stat .more {
        font-size: 16px;
        padding: 15px 0px 15px 0px;
    }

    .sbxx-footer.text-center {
        width: 100%;
        padding: 10px 0 20px 0;
        line-height: 30px;
        position: absolute;
        bottom: 0;
        background: #EBECED;
    }

    .highcharts-title,
    .highcharts-credits,
    .highcharts-legend-item.highcharts-line-series {
        display: none;
    }
</style>