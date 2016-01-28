/**
 * Created by liye on 15/11/25.
 */

function option(xData, yData){
    var option = {
        title : {
            //text: '每日热点事件数目',
            subtext: 'From 2015-10-07 to 2015-10-13'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['热点事件数目']
        },
        dataZoom : {
            show : true,
            realtime: true,
            start : 0,
            end : 100
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : function(){
                    return xData;
                }()
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} '
                }
            }
        ],
        series : [
            {
                name:'热点事件数目',
                type:'line',
                data:function(){
                    return yData;
                }(),
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };

    //click event
    var ecConfig = require('echarts/config');
    indexChart1.on(ecConfig.EVENT.CLICK, eConsole);
    function eConsole(param){
        var html = "";
        for(var idx in eventInformationData.ei){
            var row = eventInformationData.ei[idx];
            if(row.eventTime == param.name){
                html += "<div class='media'>";
                html += "<div class='pull-left'><img style='width:70px;height:70px;' src='"+row.img+"' class='media-object' alt='' /></div>";
                html += "<div class='media-body'>";
                html += "<h5 class='media-heading lead'><a href='realtimeEvent.html?eventId="+row.eventId+"'>"+row.title + "</h5></a>" ;
                html += "<h5><small>"+row.information + "</h5></small>";
                html += "<h5><a href= '"+ row.link + "'>" + "查看相关新闻    </a>";
                html += "<a href= '"+ row.vLink + "'>" + "    查看相关视频</a></h5>";
                html += "</div></div>";
            }
        }
        $("#eventDetail").html(html);
    }

    return option;
}
