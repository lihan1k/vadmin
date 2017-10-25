<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive" data-tablet="span12 fix-offset">
                    <!-- BEGIN EXAMPLE TABLE PORTLET-->
                    <div class="portlet box grey" id="gose">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>员工提成报表查询</div>
                            <div class="actions">
                            </div>
                        </div>
                        <div class="portlet-body">
                            <div class="tab-pane">
                                <div class="searchform">
                                    <input type="hidden" name="action" value="tserchinfo">
                                    <input type="text" name="Elat" class="m-wrap medium" placeholder="员工号/姓名" value="">
                                    <input type="submit" id="btn-seach" value="搜索">
                                </div>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>

                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "employeeroyaltyreporting",
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>