/**
 * Created by liye on 15/11/26.
 */

/**
 * timeSeries option
 * @param timeSeries_xData
 * @param timeSeries_sLine1
 * @param timeSeries_sLine2
 * @param timeSeries_sLine3
 * @param timeSeries_sLine4
 * @returns {{tooltip: {trigger: string}, legend: {data: string[]}, toolbox: {show: boolean, feature: {magicType: {show: boolean, type: string[]}, restore: {show: boolean}, dataView: {show: boolean, readOnly: boolean}, saveAsImage: {show: boolean}}}, dataZoom: {show: boolean, realtime: boolean, height: number, start: number, end: number}, grid: {y2: number}, xAxis: {type: string, name: string, boundaryGap: boolean, splitLine: {show: boolean}, scale: boolean, data}[], yAxis: {type: string, name: string, splitArea: {show: boolean}}[], series: *[]}}
 */
function options_1(timeSeries_xData,timeSeries_sLine1,timeSeries_sLine2,timeSeries_sLine3,timeSeries_sLine4){
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['所有微博','原創微博','轉發微博','具体占比']
        },
        toolbox: {
            x : 'left',
            show : true,
                feature : {
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                dataView : {show: true, readOnly: true},
                saveAsImage : {show: true}
            }
        },
        //calculable : true,
        dataZoom : {
            show : true,
                realtime : true,
                height : 50 ,
                start : 0,
                end : 100
        },
        grid : {
            y2 : 100
        },
        xAxis : [
            {
                type : 'category',
                name : 'Time',
                boundaryGap : true,
                splitLine : {show : false},
                scale:true,
                data : function(){
                    return timeSeries_xData;
                }()
            }
        ],
            yAxis : [
        {
            type : 'value',
            name : 'Tweets',
            splitArea : {show : true}
        }
    ],
        series : [
        {
            name:'所有微博',
            type:'line',
            data:function(){
                return timeSeries_sLine1;
            }(),
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        },
        {
            name:'轉發微博',
            type:'line',
            data:function(){
                return timeSeries_sLine2;
            }()
        },
        {
            name:'原創微博',
            type:'line',
            data:function(){
                return timeSeries_sLine3;
            }()
        },
        {
            name:'具体占比',
            type:'pie',
            tooltip:{
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [document.getElementById('event-timeSeriesChart').offsetWidth - 150,120],
            radius : ['15%', '25%'],
            itemStyle:{
                normal:{
                    labelLine:{
                        length: 10
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '10',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:function(){
                return timeSeries_sLine4;
            }()
        }
    ]
    }

    return option;
}

function options_2(man, women){
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
            x : 'left',
            data:['男','女']
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'男女比例',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:man, name:'男'},
                    {value:women, name:'女'}
                ]
            }
        ]
    };

    return option;
}

function options_3(vip, nVip){
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
            x : 'left',
            data:['vip用户','普通用户']
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'VIP用户比例',
                type:'pie',
                radius : [20, 75],
                center : ['50%', '50%'],
                roseType : 'radius',
                data:[
                    {value:vip, name:'vip用户'},
                    {value:nVip, name:'普通用户'}
                ]
            }
        ]
    };
    return option;
}

function options_4(){
    var idx = 1;
    var option = {
        timeline : {
            data : [
                '12-01', '12-02', '12-03', '12-04', '12-05'
            ],
            label : {
                formatter : function(s) {
                    return s.slice(0, 7);
                }
            }
        },
        options : [
            {
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    data:['其他客户端','ipad客户端','Android客户端','iPhone客户端','新浪微博']
                },
                toolbox: {
                    x:'right',
                    orient:'vertical',
                    y:'bottom',
                    show : true,
                    feature : {
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1700
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                series : [
                    {
                        name:'平台分布（模拟数据）',
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        data:[
                            {value: idx * 128 + 80,  name:'其他客户端'},
                            {value: idx * 64  + 160,  name:'ipad客户端'},
                            {value: idx * 32  + 320,  name:'Android客户端'},
                            {value: idx * 16  + 640,  name:'iPhone客户端'},
                            {value: idx++ * 8  + 1280, name:'新浪微博'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'平台分布（模拟数据）',
                        type:'pie',
                        data:[
                            {value: idx * 128 + 80,  name:'其他客户端'},
                            {value: idx * 64  + 160,  name:'ipad客户端'},
                            {value: idx * 32  + 320,  name:'Android客户端'},
                            {value: idx * 16  + 640,  name:'iPhone客户端'},
                            {value: idx++ * 8  + 1280, name:'新浪微博'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'平台分布（模拟数据）',
                        type:'pie',
                        data:[
                            {value: idx * 128 + 80,  name:'其他客户端'},
                            {value: idx * 64  + 160,  name:'ipad客户端'},
                            {value: idx * 32  + 320,  name:'Android客户端'},
                            {value: idx * 16  + 640,  name:'iPhone客户端'},
                            {value: idx++ * 8  + 1280, name:'新浪微博'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'平台分布（模拟数据）',
                        type:'pie',
                        data:[
                            {value: idx * 128 + 80,  name:'其他客户端'},
                            {value: idx * 64  + 160,  name:'ipad客户端'},
                            {value: idx * 32  + 320,  name:'Android客户端'},
                            {value: idx * 16  + 640,  name:'iPhone客户端'},
                            {value: idx++ * 8  + 1280, name:'新浪微博'}
                        ]
                    }
                ]
            },
            {
                series : [
                    {
                        name:'平台分布（模拟数据）',
                        type:'pie',
                        data:[
                            {value: idx * 128 + 80,  name:'其他客户端'},
                            {value: idx * 64  + 160,  name:'ipad客户端'},
                            {value: idx * 32  + 320,  name:'Android客户端'},
                            {value: idx * 16  + 640,  name:'iPhone客户端'},
                            {value: idx++ * 8  + 1280, name:'新浪微博'}
                        ]
                    }
                ]
            }
        ]
    };
    return option;
}

/**
 * LocationMap Options
 * @param location_mapData
 * @param location_maxCount
 * @returns {{title: {subtext: string}, tooltip: {trigger: string}, dataRange: {orient: string, min: number, max: *, text: string[], splitNumber: number}, toolbox: {show: boolean, orient: string, x: string, y: string, feature: {restore: {show: boolean}, dataView: {show: boolean, readOnly: boolean}, saveAsImage: {show: boolean}}}, series: {name: string, type: string, mapType: string, mapLocation: {}, selectedMode: string, itemStyle: {normal: {label: {show: boolean}}, emphasis: {label: {show: boolean}}}, data}[], animation: boolean}}
 */
function options_5(location_mapData, location_maxCount){
    var option = {
        tooltip : {
            trigger: 'item'
        },
        dataRange: {
            orient: 'horizontal',
            min: 0,
            max: location_maxCount,
            text:['高','低'],           // 文本，默认为数值文本
            splitNumber:0
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x:'right',
            y:'center',
            feature : {
                restore : {show: true},
                dataView : {show: true, readOnly: false},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name: '各地参与讨论人数',
                type: 'map',
                mapType: 'china',
                mapLocation: {

                },
                selectedMode : 'single',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:function(){
                    return location_mapData;
                }()
            }
        ],
        animation: true
    };

    var ecConfig = require('echarts/config');
    eventPanel3Chart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
        //change location tweet
        var location = param.target;
        var locationHtml = "";
        var count = 0;
        for(var idx in hotTweetData.ht){
            var row = hotTweetData.ht[idx];
            if(row.location==location){
                locationHtml += "<div><h5>"+row.text+"</h5>";
                locationHtml += "<h5><small>"+row.uname+"("+row.time+")"+" <cite>RepostCount:"+row.response+"</cite></small></h5>";
                locationHtml += "</div>";
                count ++ ;
            }
            if(count>=10)
                break;
        }
        if(count==0)
            locationHtml = "<p>该地区暂无热门微博!</p>";
        $("#event-locationTweet").html(locationHtml);
    });

    return option;
}

/**
 * Mood Options
 * @param indicator
 * @param moodData
 * @returns {{tooltip: {trigger: string, formatter: string}, legend: {orient: string, x: string, y: string, data: string[]}, toolbox: {show: boolean, feature: {restore: {show: boolean}, dataView: {show: boolean, readOnly: boolean}, saveAsImage: {show: boolean}}}, polar: {indicator}[], calculable: boolean, series: {name: string, type: string, itemStyle: {normal: {areaStyle: {type: string}, label: {show: boolean}}}, data}[]}}
 */
function options_6(indicator,moodData){
    var option = {
        tooltip : {
            trigger: 'axis',
            formatter: "{a} <br/>{d} : {c} %"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['情绪分布']
        },
        toolbox: {
            show : true,
            feature : {
                restore : {show: true},
                dataView : {show: true, readOnly: false},
                saveAsImage : {show: true}
            }
        },
        polar : [
            {
                indicator : function(){
                    return indicator;
                }()
            }
        ],
        calculable : true,
        series : [
            {
                name: '情绪分布',
                type: 'radar',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default'
                        },
                        label:{
                            show:true
                        }
                    }
                },
                data : function(){
                    return moodData;
                }()
            }
        ]
    };

    return option;
}