<template>
    <div class="page-header-fixed page-sidebar-fixed">
        <!--头部-->
        <top></top>
        <div class="page-container row-fluid">
            <!--左侧菜单-->
            <left></left>
            <!--右侧内容-->
            <router-view></router-view>
        </div>
        <!--底部-->
        <foot></foot>
    </div>
</template>
<script>
    import Swiper from '@/media/js/swiper-3.4.2.jquery.min.js';
    import top from '@/components/top.vue'
    import left from '@/components/left.vue'
    import foot from '@/components/foot.vue'
    export default{
        name:"app",
        components:{
            top,
            left,
            foot
        }
    }
</script>
<style scoped>

</style>
