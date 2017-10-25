import Vue from 'vue'
import Router from 'vue-router'
//程序启动
import App from '@/app'
//首页
import index from '@/pages/index/index'
//门店设置
import setstore from '@/pages/store/setstore'
import setcode from '@/pages/store/setcode'
import storelist from '@/pages/store/storelist'
//会员管理
import membersearch from '@/pages/member/membersearch'
import memberscreen from '@/pages/member/memberscreen'
import membershiplevel from '@/pages/member/membershiplevel'
import membermarketing from '@/pages/member/membermarketing'
//储值管理
import rechargerule from '@/pages/storevalue/rechargerule'
import memberstoredsummary from '@/pages/storevalue/memberstoredsummary'
import offlinestoredsilver from '@/pages/storevalue/offlinestoredsilver'
import redpacketssummary from '@/pages/storevalue/redpacketssummary'
import redpacketssent from '@/pages/storevalue/redpacketssent'
//积分商城
import integralmall from '@/pages/integratingsystem/integralmall'
import memberscoresummary from '@/pages/integratingsystem/memberscoresummary'
import integralrule from '@/pages/integratingsystem/integralrule'
import integraltrade from '@/pages/integratingsystem/integraltrade'
//营销中心
import rechargemarketingset from '@/pages/marketingcenter/rechargemarketingset'
import consumermarketingset from '@/pages/marketingcenter/consumermarketingset'
//卡券管理
import cardcouponsummary from '@/pages/cardcoupon/cardcouponsummary'
import cardcoupondetail from  '@/pages/cardcoupon/cardcoupondetail'
import cardcouponverify from '@/pages/cardcoupon/cardcouponverify'
import cardcouponrefund from '@/pages/cardcoupon/cardcouponrefund'
import cardcancellation from '@/pages/cardcoupon/cardcancellation'
//员工激励
import consumptionroyaltyset from '@/pages/employeemotivatesystem/consumptionroyaltyset'
import storedvalueapproval from '@/pages/employeemotivatesystem/storedvalueapproval'
import employeeroyaltyreporting from '@/pages/employeemotivatesystem/employeeroyaltyreporting'
import rewardstatistics from '@/pages/employeemotivatesystem/rewardstatistics'
import appreciationstatistics from '@/pages/employeemotivatesystem/appreciationstatistics'
//运营中心
import businessanalysis from '@/pages/operationcenter/businessanalysis'
import businessdaily from '@/pages/operationcenter/businessdaily'
import cashierstatistics from '@/pages/operationcenter/cashierstatistics'
//系统设置
import customroleset from '@/pages/baseset/customroleset'
import userset from '@/pages/baseset/userset'
import messagepushset from '@/pages/baseset/messagepushset'
//router
Vue.use(Router);


const routes = [
    { path: '/',name:"index",component: index},
    //门店管理
    { path: '/store/setstore',name:"setstore",component: setstore},
    { path: '/store/setcode',name:"setcode",component: setcode},
    { path: '/store/storelist',name:"storelist",component: storelist},
    //会员管理
    { path: '/member/membersearch',name:"membersearch",component: membersearch},
    { path: '/member/memberscreen',name:"memberscreen",component: memberscreen},
    { path: '/member/membershiplevel',name:"membershiplevel",component: membershiplevel},
    { path: '/member/membermarketing',name:"membermarketing",component: membermarketing},
    //储值管理
    { path: '/storevalue/rechargerule',name:"rechargerule",component: rechargerule},
    { path: '/storevalue/memberstoredsummary',name:"memberstoredsummary",component: memberstoredsummary},
    { path: '/storevalue/offlinestoredsilver',name:"offlinestoredsilver",component: offlinestoredsilver},
    { path: '/storevalue/redpacketssummary',name:"redpacketssummary",component: redpacketssummary},
    { path: '/storevalue/redpacketssent',name:"redpacketssent",component: redpacketssent},
    //积分商城
    { path: '/integratingsystem/integralmall',name:"integralmall",component: integralmall},
    { path: '/integratingsystem/memberscoresummary',name:"memberscoresummary",component: memberscoresummary},
    { path: '/integratingsystem/integralrule',name:"integralrule",component: integralrule},
    { path: '/integratingsystem/integraltrade',name:"integraltrade",component: integraltrade},
    //营销中心
    { path: '/marketingcenter/rechargemarketingset',name:"rechargemarketingset",component: rechargemarketingset},
    { path: '/marketingcenter/consumermarketingset',name:"consumermarketingset",component: consumermarketingset},
    //卡券管理
    { path: '/cardcoupon/cardcouponsummary',name:"cardcouponsummary",component: cardcouponsummary},
    { path: '/cardcoupon/cardcoupondetail',name:"cardcoupondetail",component: cardcoupondetail},
    { path: '/cardcoupon/cardcouponverify',name:"cardcouponverify",component: cardcouponverify},
    { path: '/cardcoupon/cardcouponrefund',name:"cardcouponrefund",component: cardcouponrefund},
    { path: '/cardcoupon/cardcancellation',name:"cardcancellation",component: cardcancellation},
    //员工激励
    { path: '/employeemotivatesystem/consumptionroyaltyset',name:"consumptionroyaltyset",component: consumptionroyaltyset},
    { path: '/employeemotivatesystem/storedvalueapproval',name:"storedvalueapproval",component: storedvalueapproval},
    { path: '/employeemotivatesystem/employeeroyaltyreporting',name:"employeeroyaltyreporting",component: employeeroyaltyreporting},
    { path: '/employeemotivatesystem/rewardstatistics',name:"rewardstatistics",component: rewardstatistics},
    { path: '/employeemotivatesystem/appreciationstatistics',name:"appreciationstatistics",component: appreciationstatistics},
    //运营中心
    { path: '/operationcenter/businessanalysis',name:"businessanalysis",component: businessanalysis},
    { path: '/operationcenter/businessdaily',name:"businessdaily",component: businessdaily},
    { path: '/operationcenter/cashierstatistics',name:"cashierstatistics",component: cashierstatistics},
    //系统设置
    { path: '/baseset/customroleset',name:"customroleset",component: customroleset},
    { path: '/baseset/userset',name:"customroleset",component: userset},
    { path: '/baseset/messagepushset',name:"customroleset",component: messagepushset},
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');