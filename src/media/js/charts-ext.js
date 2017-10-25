(function () {
    function BeyCharts() {
        //默认配置
        var defaultOptions = {
            credits: {
                enabled: true,
                text: "kingcome.cn",
                href: "http://www.kingcome.cn"
            }
        };

        var defaultLineOptions = {
            chart: {
                //默认竖图,反转x,y轴  
                inverted: true,
                marginRight: 30
            },
            title: {
                //默认无标题
                text: null
            },
            xAxis: {
                labels: {
                    formatter: function () {
                        return this.value;
                    },
                },
                showLastLabel: true
            },
            yAxis: {
                opposite: true,
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                },
                lineWidth: 2,
                min: 0
            },
            legend: {
                //默认不显示图例
                enabled: false
            },
            tooltip: {
                pointFormat: '{point.y}'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                },
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    }
                }
            }
        };

        var defaultPieOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: null
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            }
        };


        var defaultBarOptions = {
            chart: {
                type: 'bar'
            },
            title: {
                text: null
            },
            xAxis: {
                title: {
                    text: null
                }
            },
            yAxis: {
                opposite: true,
                min: 0,
                title: {
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                pointFormat: '{point.y}'
            },
            legend: {
                enabled: false
            }
        };

        init();

        function init() {
            //hasHighCharts();
            //new Highcharts.Chart(options);
            //render(options);
        }

        function highRender(opts) {
            return new Highcharts.Chart($.extend(true, {}, defaultOptions, opts));
        }
        ///基本渲染
        function render(opts) {
            ///暂时有折线图和柱形图
            var singleSetting = {};
            switch (opts.chart.type) {
                case "line":
                    singleSetting = $.extend(true, {}, defaultLineOptions, opts);
                    break;
                case "pie":
                    singleSetting = $.extend(true, {}, defaultPieOptions, opts);
                    break;
                case "bar":
                    singleSetting = $.extend(true, {}, defaultBarOptions, opts);
                    break;
                default:
                    singleSetting = $.extend(true, {}, opts);
                    break;
            }
            return highRender(singleSetting);
        }

        //渲染一个通用的折线图
        function renderLine(ele, categories, series, xtitle, ytitle, opts) {
            if (typeof ele == "string") {
                ele = $("#" + ele)[0];
            } else {
                ele = ele[0];
            }
            if (categories.length < 10) {
                $(ele).height(400);
            } else {
                $(ele).height(100 + categories.length * 30);
            }

            var setting = {
                chart: {
                    type: "line",
                    renderTo: ele
                },
                xAxis: {
                    title: { text: xtitle },
                    categories: categories
                },
                yAxis: {
                    title: { text: ytitle }
                },
                series: series
            };
            return render($.extend(true, {}, setting, opts || {}));
        }
        //渲染一个条折线的折线图
        function renderSingleLineData(ele, categories, data, xtitle, ytitle, opts) {
            var series = [{ type: "area", data: data }];
            return renderLine(ele, categories, series, xtitle, ytitle, opts || {});
        }
        //渲染一个条折线的折线图
        function renderSingleLineJson(ele, jdata, xtitle, ytitle, opts) {
            var categories = [];
            var data = [];
            $.each(jdata, function () {
                if ($.isArray(this)) {
                    categories.push(this[0]);
                    data.push(this[1]);
                } else {
                    categories.push(this.Key);
                    data.push(this.Value);
                }
            });
            //var series = [{ data: data }];
            return renderSingleLineData(ele, categories, data, xtitle, ytitle, opts || {});
        }
        //
        function renderPie(ele, series, opts) {
            if (typeof ele == "string") {
                ele = $("#" + ele)[0];
            } else {
                ele = ele[0];
            }
            var setting = {
                chart: {
                    renderTo: ele,
                    type: "pie"
                },
                series: series
            };
            return render($.extend(true, {}, setting, opts || {}));
        }

        function renderSinglePie(ele, jdata, opts) {
            var data = [];
            $.each(jdata, function () {
                if ($.isArray(this)) {
                    data.push(this);
                } else {
                    var item = [this.Key, Math.floor(this.Value*1)];
                    data.push(item);
                }
            });
            series = [{
                type: 'pie',
                data: data
            }]
            renderPie(ele, series, opts || {})
        }

        //条形图 begin
        //渲染一个通用的条形图
        function renderBar(ele, categories, series, xtitle, ytitle, opts) {
            if (typeof ele == "string") {
                ele = $("#" + ele)[0];
            } else {
                ele = ele[0];
            }
            if (categories.length < 10) {
                $(ele).height(400);
            } else {
                $(ele).height(100 + categories.length * 30);
            }
            var setting = {
                chart: {
                    type: "bar",
                    renderTo: ele
                },
                xAxis: {
                    title: { text: xtitle },
                    categories: categories
                },
                yAxis: {
                    title: { text: ytitle }
                },
                series: series
            };
            return render($.extend(true, {}, setting, opts || {}));
        }
        //渲染一个单条的条形图
        function renderSingleBar(ele, jdata, xtitle, ytitle, opts) {
            var categories = [];
            var data = [];
            $.each(jdata, function () {
                if ($.isArray(this)) {
                    categories.push(this[0]);
                    data.push(this[1]);
                } else {
                    categories.push(this.Key);
                    data.push(this.Value);
                }
            });
            series = [{
                data: data,
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    align: 'right',
                    x: -4,
                    y: -2,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
            return renderBar(ele, categories, series, xtitle, ytitle, opts);
        }

        //条形图 end

        function hasHighCharts() {
            if (!HighCharts) {
                if (window.console) {
                    console.log("请先载入HighCharts.js");
                } else {
                    throw "请先载入HighCharts.js";
                }
            }
        }

        // Public API
        $.extend(this, {
            // Properties
            "highRender": highRender,
            "render": render,
            "renderLine": renderLine,
            "renderSingleLineData": renderSingleLineData,
            "renderSingleLineJson": renderSingleLineJson,
            "renderPie": renderPie,
            "renderSinglePie": renderSinglePie,
            "renderBar": renderBar,
            "renderSingleBar": renderSingleBar
        });
    }

    $.extend(true, window, { Bey: { Charts: BeyCharts } });
}());