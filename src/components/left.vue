<template>
    <div class="page-sidebar nav-collapse collapse">
        <ul class="page-sidebar-menu">
            <li>
                <div class="sidebar-toggler hidden-phone"></div>
            </li>
            <li class="start" v-for="(menu,index) in menuList" :key="1" v-if="index==0" @click="menuState($event,index)" :class="{active:(nowIndex===index)}">
                <router-link :to="{path:'/'}">
                    <i :class="menu.icon"></i>
                    <span class="title">{{menu.name}}</span>
                </router-link>
            </li>
            <li v-else :key="1" @click="menuState($event,index)" :class="{active:(nowIndex===index)}">
                <a href="javascript:;">
                    <i :class="menu.icon"></i>
                    <span class="title">{{menu.name}}</span>
                    <span class="selected"></span>
                    <span class="arrow"></span>
                </a>
                <transition name="fade">
                    <ul class="sub-menu" v-show="{active:(nowIndex!==index)}">
                        <li v-for="sub in menu.submenu" @click="submenuState($event,sub.subpath)" :class="{active:(subPath===sub.subpath)}">
                            <router-link :to="sub.subpath">
                                <span class="title">{{sub.subname}}</span>
                            </router-link>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "left",
        data() {
            return {
                menuList: [
                    {
                        name: "首页",
                        icon: "icon-home",
                        path: "/",
                        id:0
                    },
                    {
                        name: "门店管理",
                        icon: "icon-sitemap",
                        submenu: [
                            {subname: "门店设置", subpath: "/store/setstore"},
                            {subname: "二维码设置", subpath: "/store/setcode"},
                            {subname: "门店列表", subpath: "/store/storelist"},
                        ],
                        id:1
                    },
                    {
                        name: "会员管理",
                        icon: "icon-user",
                        submenu: [
                            {subname: "会员查询", subpath: "/member/membersearch"},
                            {subname: "会员筛选", subpath: "/member/memberscreen"},
                            {subname: "会员等级", subpath: "/member/membershiplevel"},
                            {subname: "会员精准营销", subpath: "/member/membermarketing"},
                        ],
                        id:2
                    },
                    {
                        name: "储值管理",
                        icon: "icon-bar-chart",
                        submenu: [
                            {subname: "储值赠送设置", subpath: "/storevalue/rechargerule"},
                            {subname: "会员储值汇总", subpath: "/storevalue/memberstoredsummary"},
                            {subname: "线下储值收银统计", subpath: "/storevalue/offlinestoredsilver"},
                            {subname: "储值送红包汇总", subpath: "/storevalue/redpacketssummary"},
                            {subname: "红包发送查询", subpath: "/storevalue/redpacketssent"},
                        ],
                        id:3
                    },
                    {
                        name: "积分系统",
                        icon: "icon-beaker",
                        submenu: [
                            {subname: "积分商城", subpath: "/integratingsystem/integralmall"},
                            {subname: "会员积分汇总", subpath: "/integratingsystem/memberscoresummary"},
                            {subname: "积分规则说明", subpath: "/integratingsystem/integralrule"},
                            {subname: "积分交易记录", subpath: "/integratingsystem/integraltrade"},
                        ],
                        id:4
                    },
                    {
                        name: "营销中心",
                        icon: "icon-list-alt",
                        submenu: [
                            {subname: "充值营销设置", subpath: "/marketingcenter/rechargemarketingset"},
                            {subname: "充值营销设置", subpath: "/marketingcenter/consumermarketingset"},
                        ],
                        id:5
                    },
                    {
                        name: "卡券管理",
                        icon: "icon-group",
                        submenu: [
                            {subname: "卡券汇总查询", subpath: "/cardcoupon/cardcouponsummary"},
                            {subname: "卡券明细查询", subpath: "/cardcoupon/cardcoupondetail"},
                            {subname: "卡券核销", subpath: "/cardcoupon/cardcouponverify"},
                            {subname: "卡券返还情况查询", subpath: "/cardcoupon/cardcouponrefund"},
                            {subname: "卡券作废", subpath: "/cardcoupon/cardcancellation"},
                        ],
                        id:6
                    },
                    {
                        name: "员工激励",
                        icon: "icon-group",
                        submenu: [
                            {subname: "消费提成设置", subpath: "/employeemotivatesystem/consumptionroyaltyset"},
                            {subname: "储值提成设置", subpath: "/employeemotivatesystem/storedvalueapproval"},
                            {subname: "员工提成报表查询", subpath: "/employeemotivatesystem/employeeroyaltyreporting"},
                            {subname: "打赏设置", subpath: "/employeemotivatesystem/consumptionroyaltyset"},
                            {subname: "打赏统计", subpath: "/employeemotivatesystem/rewardstatistics"},
                            {subname: "打赏点评统计", subpath: "/employeemotivatesystem/appreciationstatistics"},
                        ],
                        id:7
                    },
                    {
                        name: "运营中心",
                        icon: "icon-group",
                        submenu: [
                            {subname: "经营分析", subpath: "/operationcenter/businessanalysis"},
                            {subname: "营业日报", subpath: "/operationcenter/businessdaily"},
                            {subname: "收银统计", subpath: "/operationcenter/messagepushset"},
                        ],
                        id:8
                    },
                    {
                        name: "系统设置",
                        icon: "icon-group",
                        submenu: [
                            {subname: "自定义角色维护", subpath: "/baseset/customroleset"},
                            {subname: "职员与权限", subpath: "/baseset/userset"},
                            {subname: "消息推送设置", subpath: "/baseset/customroleset"},
                        ],
                        id:8
                    }

                ],
                nowIndex:"",
                subPath:""
            }
        },
        mounted: function () {
            this.nowIndex=JSON.parse(localStorage.getItem("nowIndex"));
            console.log(this.nowIndex);
            this.subPath=JSON.parse(localStorage.getItem("subPath"));
        },
        methods:{
            menuState:function (event,index) {
                console.log(event.currentTarget);
                this.nowIndex=index;
                console.log(index,this.nowIndex);
                localStorage.setItem("nowIndex",JSON.stringify(this.nowIndex));
            },
            submenuState:function (event,subPath) {
                console.log(event.currentTarget);
                this.subPath=subPath;
                console.log(subPath,this.subPath);
                localStorage.setItem("subPath",JSON.stringify(this.subPath));
            }
        },
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {transition: opacity 0.45s linear}
    .fade-enter, .fade-leave-active {  opacity: 0;transition:0.45s linear}
</style>