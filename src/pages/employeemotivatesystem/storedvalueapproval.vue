<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row-fluid" id="app">
                <div class="span12">
                    <div class="portlet box grey">
                        <div class="portlet-title">
                            <div class="caption">
                                <i class="icon-reorder"></i> 储值提成设置
                            </div>
                        </div>
                        <div class="portlet-body form">
                            <div id="submitform" class="form-horizontal">
                                <ul>
                                    <li class="li" style="border-bottom:none">
                                        <div class="control-group" style="margin: 0">
                                            <div class="control-group" style="margin: 0">
                                                <label class="control-label" style="width: auto">服务：</label>
                                                <div class="info-toggle-button">
                                                    <input type="checkbox" name="State" id="id_chk_enabled"
                                                           class="toggle" checked/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            提成方式：<label>
                                            <input type="radio" name="radio" value="及时红包" checked="true" id="redbag">及时红包</label>
                                            <label><input type="radio" name="radio" value="公司结账"
                                                          id="company">公司结账</label>
                                            <input type="button" style="margin-bottom: 0" onclick="saveway()"
                                                   name="name" value="保存" class="">
                                        </div>
                                        <div class="control-group">
                                            <form class="searchform" method="get" action="?">
                                                <input type="hidden" class="cls_skey" name="sid" value="">
                                                <input id="s_i" type="text" name="skey" value="" placeholder="菜品名称/编码"
                                                       style="width: 121px">
                                                <select id="s_s" name="S_Type" data-val="0">
                                                    <option value="0">菜品分类</option>

                                                    <option value="1684">热菜</option>

                                                    <option value="13293">双人餐</option>

                                                </select>
                                                <input class="cls_skey" type="submit" style="margin-bottom: 0"
                                                       value="搜索">
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tabletool">
                                <a href="#responsive" data-toggle="modal" class="btn blue" onclick="objAdd()"
                                   style="margin-bottom: 5px"><i class="icon-pencil"></i>添加设置</a>
                            </div>
                            <table class="gtable">
                                <thead>
                                <tr>
                                    <th class="index">序号</th>
                                    <th class="hidden-480">推荐储值 (元)</th>
                                    <th>服务员提成</th>
                                    <th>区域主管提成</th>
                                    <th>销售经理提成</th>
                                    <th class="hidden-380">状态</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>10003</td>
                                    <td class="_tag">1</td>
                                    <td class="_tag">4</td>
                                    <td class="_tag">0</td>
                                    <td class="tdhide">
                                        <input type="number" class="one" min="0" value="1">
                                    </td>
                                    <td class="tdhide">
                                        <input type="number" class="two" min="0" value="4">
                                    </td>
                                    <td class=" tdhide">
                                        <input type="number" class="three" min="0" value="0">
                                    </td>
                                    <td class="hide">
                                        <input type="number" class="limitnumber" value="0"></td>
                                    <td class="state pointer hidden-380" data-val="0"><font color="red">已禁用</font></td>
                                    <td>
                                        <a href="javascript:;" class="btn blue" onclick="saveset(this)"
                                           style="width: 28px; margin: auto; display: none">保存</a>
                                        <a href="javascript:;" class="glyphicons pen" title="修改" onclick="change(this)"><i></i></a>

                                        <a href="javascript:;" onclick="objDelete(this)" class="glyphicons bin"
                                           title="删除"><i></i></a>
                                    </td>
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
        name: "storedvalueapproval",
        data() {
            return {}
        },
        mounted:function () {
            $(function () {
                loadtogglebutton();
            })
        }
    }
</script>

<style scoped>
    #divmodal_choosepic {
        top: 10%;
    }

    .portlet.box .form .form-actions {
        margin-bottom: 0 !important;
    }

    .li {
        border-bottom: 1px solid #e5e5e5;
    }

    .form-horizontal .control-label {
        width: 13%;
    }

    ul, ol {
        margin: 0 0 10px 0;
    }

    .form-horizontal .control-group {
        margin-top: 10px;
    }

    .selectCFList label.list.on {
        border-color: #1FD31F;
    }

    .boxinfo ul {
        margin: 0;
        padding: 0;
    }

    .boxinfo ul li {
        height: 40px;
        line-height: 40px;
        border-top: 1px solid #eee;
    }

    .controls .ka_add {
        background: #4d90fe;
        border: 1px solid #4d90fe;
        margin-bottom: 4px;
    }

    .form-horizontal .controls {
        width: 86%;
    }

    .icon-pencil, .icon-plus {
        color: #5BC0DE;
        text-decoration: none;
    }

    #selcstore a {
        display: inline-block;
        padding: 3px 6px;
        border: 1px solid #4D90FE;
        margin-top: 3px;
        text-decoration: none;
        margin-right: 5px;
    }

    .gtable .alleft {
        text-align: center;
    }

    @media (min-width: 768px) {
        .span4.form-horizontal {
            position: fixed;
            right: 15px;
        }
    }

    .tabletool {
        margin-top: -40px;
    }

    .form-horizontal .controls {
        margin-left: 0
    }

    .glyphicons.check i:before {
        color: #21b936;
    }

    .tdhide {
        display: none;
    }

    ._tdhide {
        display: none;
    }

    .tdshow {
        display: inline-block;
    }

    .tag {
        /*请勿删除，标记作用*/
    }

    ._tag {
        /*请勿删除，标记作用*/
    }
</style>