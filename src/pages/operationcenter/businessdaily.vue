<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>营业日报</div>
                        </div>
                        <div class="portlet-body">
                            <form class="searchform" method="get" action="?" today="1">
                                <input class="xsmall" type="date" name="date" value="2017-09-20">
                                <div class="left" style="display:inline-block">
                                    <input type="submit" value="查询"></div>
                            </form>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="minwidth100">门店</th>
                                    <th class="alright">营业额</th>
                                    <th class="hidden-380">人数</th>
                                    <th>人均</th>
                                    <th class="hidden-380">桌数</th>
                                    <th>桌均</th>
                                    <th>上座率</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr onclick="">
                                    <td class="tl">19-外滩店</td>
                                    <td class="alright">0.00&nbsp;</td>
                                    <td class="hidden-380">0</td>
                                    <td>0</td>
                                    <td class="hidden-380">0</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "businessdaily",
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>