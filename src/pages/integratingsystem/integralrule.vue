<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="form-horizontal portlet box grey">
                    <div class="portlet-title">
                        <div class="caption"><i class="icon-pencil"></i>积分规则描述</div>
                    </div>
                    <form method="post" style="padding:10px">
                        <textarea name="content" id="content1" style="width: 99%; height: 450px; display: none;">&lt;p&gt;
                                1. 新用户首次关注即可获得80积分。
                            &lt;/p&gt;
                            &lt;p&gt;
                                2. 充值可额外获得10%积分。
                            &lt;/p&gt;
                            &lt;p&gt;
                                3. 店内消费赠送10%积分。
                            &lt;/p&gt;
                            &lt;p&gt;
                                4. 店内额外积分赠送。&lt;/p&gt;
                        </textarea>
                        <button type="submit" class="btn blue" style="margin-top:10px"><i class="icon-ok"></i>保存
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import '@/media/js/kindeditor/kindeditor-all.js'
    import '@/media/js/kindeditor/lang/zh-CN.js'
    import '@/media/js/kindeditor/plugins/code/prettify.js'
    export default {
        name: "integralrule",
        data() {
            return {}
        },
        mounted:function () {
            KindEditor.ready(function (K) {
                var editor1 = K.create('#content1', {
                    cssPath: '../media/js/kindeditor/plugins/code/prettify.css',
                    uploadJson: '../media/js/kindeditor/php/upload_json.php',
                    fileManagerJson: '../media/js/kindeditor/php/file_manager_json.php',
                    allowFileManager: true
                });
            });
        }
    }
</script>

<style>

</style>