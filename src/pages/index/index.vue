<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="index-content">
                <div class="portlet">
                    <div class="portlet-head">
                        <h3 class="portlet-title text-center font-fff">门店名</h3>
                        <p class="text-center font-fff">商邦信息</p>
                    </div>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide ">
                                <div class="text-center swiper-title">
                                    <div style="margin: 10px 0">当前营业额： <span class="money">0</span> 元
                                    </div>
                                    <div class="date"></div>
                                </div>
                                <div class="clearfix text-center">
                                    <ul class="unstyled unstyledbox pricing_content clearfix">
                                        <li><i class="icon-star yellow"></i>总 人 数：<span class="red">0</span>人</li>
                                        <li><i class="icon-star yellow"></i>总 桌 数：<span class="red">0</span>桌</li>
                                        <li><i class="icon-star yellow"></i>台位使用：<span class="red">0</span>%</li>
                                        <li><i class="icon-star yellow"></i>新增储值：<span class="red">0</span>元</li>
                                        <li><i class="icon-star yellow"></i>卡券使用：<span class="red">0</span>张</li>
                                        <li><i class="icon-star yellow"></i>卡券发放：<span class="red">0</span>张</li>
                                        <li><i class="icon-star yellow"></i>新增会员：<span class="red">0</span>人</li>
                                    </ul>
                                </div>
                                <div class="clearfix text-center">
                                    <ul class="unstyled unstyledbox pricing-footer">
                                        <li class="dashboard-stat yellow">
                                            <a class="more" href="#">营销中心</a>
                                        </li>
                                        <li class="dashboard-stat blue">
                                            <a class="more" href="#">会员查询</a>
                                        </li>
                                        <li class="dashboard-stat green">
                                            <a class="more" href="#">门店设置</a>
                                        </li>
                                        <li class="dashboard-stat red">
                                            <a class="more" href="#">积分系统</a>
                                        </li>
                                        <li class="dashboard-stat pink">
                                            <a class="more" href="#">卡券管理</a>
                                        </li>
                                        <li class="dashboard-stat purple">
                                            <a class="more" href="#">员工激励</a>
                                        </li>
                                        <li class="dashboard-stat orange">
                                            <a class="more" href="#">运营中心</a>
                                        </li>
                                        <li class="dashboard-stat light-blue">
                                            <a class="more" href="#">储值管理</a>
                                        </li>
                                        <li class="dashboard-stat light-green">
                                            <a class="more" href="#">系统设置</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="swiper-slide">
                                <div class="text-center swiper-title subtitle" style="padding: 5px 0">
                                    <div style="margin: 10px 0">近7天营业额走势</div>
                                </div>
                                <div id="chart" style="height: 190px"></div>
                                <div class="clearfix">
                                    <ul class="unstyled clearfix unstyledbox chart-content">
                                        <li class="dashboard-stat orange">
                                            <a href="">
                                                <div>
                                                    <div>昨日:<span class="num">{0}</span></div>
                                                    <div>总人数:<span class="num">{1}</span> </div>
                                                    <div>总桌数:<span class="num">{2}</span> </div>
                                                    <div>上座率:<span class="num">{3}%</span></div>
                                                    <div>人均:<span class="num">{4}</span> 桌均:<span class="num">{5}</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="dashboard-stat light-blue">
                                            <a href="">
                                                <div>
                                                    <div>昨日:<span class="num">{0}</span></div>
                                                    <div>总人数:<span class="num">{1}</span> </div>
                                                    <div>总桌数:<span class="num">{2}</span> </div>
                                                    <div>上座率:<span class="num">{3}%</span></div>
                                                    <div>人均:<span class="num">{4}</span> 桌均:<span class="num">{5}</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="dashboard-stat light-blue">
                                            <a href="">
                                                <div>
                                                    <div>昨日:<span class="num">{0}</span></div>
                                                    <div>总人数:<span class="num">{1}</span> </div>
                                                    <div>总桌数:<span class="num">{2}</span> </div>
                                                    <div>上座率:<span class="num">{3}%</span></div>
                                                    <div>人均:<span class="num">{4}</span> 桌均:<span class="num">{5}</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="dashboard-stat orange">
                                            <a href="" class="">
                                                <div>
                                                    <div>昨日:<span class="num">{0}</span></div>
                                                    <div>总人数:<span class="num">{1}</span> </div>
                                                    <div>总桌数:<span class="num">{2}</span> </div>
                                                    <div>上座率:<span class="num">{3}%</span></div>
                                                    <div>人均:<span class="num">{4}</span> 桌均:<span class="num">{5}</span></div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="swiper-slide"></div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="sbxx-footer text-center">
                        <div class=""><a href=""><img src="" alt="">logo</a></div>
                        <div class="">商邦信息</div>
                    </div>
                </div>
                <div class="portlet">
                    <div class="clearfix text-center">
                        <ul class="unstyled unstyledbox pricing-footer">
                            <li class="dashboard-stat yellow">
                                <a class="more" href="#">商家维护</a>
                            </li>
                            <li class="dashboard-stat blue">
                                <a class="more" href="#">商家支付设置</a>
                            </li>
                            <li class="dashboard-stat green">
                                <a class="more" href="#">推送消息配置</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from '@/media/js/swiper-3.4.2.jquery.min.js';
    import top from '@/components/top.vue'
    import left from '@/components/left.vue'
    import foot from '@/components/foot.vue'
    export default{
        name:"index",
        data(){
            return{

            }
        },
        mounted:function () {
            this.swiper();
        },
        methods:{
            swiper:function () {
                 var mySwiper= new Swiper('.swiper-container', {
                    loop: true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    simulateTouch: false
                });
                $(".swiper-container").on("click", '.swiper-button-next', function () {
                    if (mySwiper.activeIndex == 3) {
                        mySwiper.slideTo(1, 300, false)
                    }
                });
                $(".swiper-container").on("click", '.swiper-button-prev', function () {
                    if (mySwiper.activeIndex == 0) {
                        mySwiper.slideTo(2, 300, false)
                    }
                });
            }
        },
        components:{
            top,
            left,
            foot
        }
    }
</script>
<style scoped>
    .container-fluid {
        font-family: "黑体"!important;
    }

    .index-content {
        max-width: 640px;
        min-height: 700px;
        border: 1px solid #9d9c9c;
    ;
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
            padding: 0!important;
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
        top: 5%;
        background-size: 15px 30px;
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
        width: 30%;
        float: left;
        color: #888;
        margin: 0 1.66%;
        margin-bottom: 15px;
    }

    .unstyledbox.chart-content li {
        box-sizing: border-box;
        width: 45%;
        float: left;
        margin: 5px 2.5%;
        padding: 10px;
        border-radius: 6px!important;
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
