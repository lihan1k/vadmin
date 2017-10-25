<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="responsive span12 fix-offset" data-tablet="span12 fix-offset">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption"><i class="icon-reorder"></i>消费提成设置</div>
                        </div>
                        <div class="portlet-body">
                            <div class="form-horizontal">
                                <div class="control-group">
                                    <div class="control-group">
                                        <label class="control-label">送红包：</label>
                                        <div class="info-toggle-button">
                                            <input type="checkbox" name="State" id="id_chk_enabled" class="toggle" checked />
                                        </div>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <label class="control-label">提成方式：</label>
                                    <select id="id_putway" data-val="微信红包">
                                        <option value="微信红包">及时红包</option>
                                        <option value="公司结账">公司结账</option>
                                    </select>
                                </div>
                            </div>
                            <div class="tabletool">
                                <a href="#responsive" data-toggle="modal" class="btn blue" onclick="objAdd()" style="margin-bottom:5px"><i class="icon-pencil"></i> 添加设置</a>
                            </div>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th>编码</th>
                                    <th>名称</th>
                                    <th class="hidden-480">价格 (元)</th>
                                    <th class="hidden-380">推荐状态</th>
                                    <th>服务员提成</th>
                                    <th>区域主管提成</th>
                                    <th>销售经理提成</th>
                                    <th class="hide">日限份数(0为不限)</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
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
        name: "consumptionroyaltyset",
        data() {
            return {

            }
        },
        mounted:function () {
            $(function () {
                loadtogglebutton();
            })
        }
    }
</script>

<style>

</style>