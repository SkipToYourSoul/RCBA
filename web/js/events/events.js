/**
 * Created by liye on 15/11/26.
 */

/**
 * Data: TimeSeriesData
 * Dom: event-timeSeriesChart、eventReport1
 * @param jsonData
 */
function handleTimeSeriesData(jsonData){

    if(jsonData.ts.length == 0){
        alert('No Event Id');
        location.href = "index.html";
    }

    timeSeriesData = jsonData;
    var oriTweet = 0;
    var reTweet = 0;
    var maxTweet = 0;
    var maxTime = "";
    var timeSeries_xData = [];
    var timeSeries_sLine1 = [];
    var timeSeries_sLine2 = [];
    var timeSeries_sLine3 = [];
    var timeSeries_sLine4 = [];
    for ( var idx in timeSeriesData.ts ){
        var row = timeSeriesData.ts[idx];
        timeSeries_xData.push(row.time+"h");
        timeSeries_sLine1.push(row.allTweet);
        timeSeries_sLine2.push(row.RTTweet);
        timeSeries_sLine3.push(row.oriTweet);
        oriTweet+=row.oriTweet;
        reTweet+=row.RTTweet;
        if(row.allTweet>maxTweet){
            maxTweet = row.allTweet;
            maxTime = row.time;
        }
    }
    timeSeries_sLine4.push({value:oriTweet, name:'原创微博'});
    timeSeries_sLine4.push({value:reTweet, name:'转发微博'});
    var orifra = (oriTweet/(oriTweet+reTweet)*100).toFixed(2);
    var refra = (reTweet/(oriTweet+reTweet)*100).toFixed(2);

    //report
    var reportHtml = "";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 事件开始时间: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+timeSeries_xData[0].substring(0,10)+"</small></h4></div>";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 最大波峰: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+maxTweet+" tweet at "+maxTime.substring(0,10)+maxTime.substring(10,13)+"h"+"</small></h4></div>";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 原创微博，转发微博占比: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+orifra+" % oriTweet and "+refra+" % reTweet"+"</small></h4></div>";
    $("#eventReport1").html(reportHtml);

    require(
        [
            'echarts',
            'echarts/chart/line',
            'echarts/chart/bar',
            'echarts/chart/pie'
        ],
        function(ec) {
            eventPanel1Chart = ec.init(document.getElementById('event-timeSeriesChart'));
            eventPanel1Chart.setOption(options_1(timeSeries_xData,timeSeries_sLine1,timeSeries_sLine2,timeSeries_sLine3,timeSeries_sLine4));
        });
}

/**
 * Data: eventInformationData
 * Dom: eventIntroduction
 * @param jsonData
 */
function handleEventIntro(jsonData){
    var row = jsonData.ei[0];
    var html = "";
    html += "<div class='media'>";
    html += "<div class='media-body'>";
    html += "<h5 class='media-heading lead'>事件："+ row.title+"</h5>";
    html += "<h5><small>"+row.information + "</h5></small>";
    html += "<h5><a href= '"+ row.link + "'>" + "查看相关新闻    </a>";
    html += "<a href= '"+ row.vLink + "'>" + "    查看相关视频</a></h5>";
    html += "</div></div>";
    html += "<div><img style='width:250px;height:210px;' src='"+row.img+"' class='media-object' alt='' />";
    $("#eventIntroduction").html(html);
}

/**
 * Data: eventUser
 * Dom: event-userChart1,event-userChart2,event-userChart3
 * @param jsonData
 */
function handleUserData(jsonData){
    if(jsonData.eu[0].length == 0)
        return;

    require(
        [
            'echarts',
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],
        function(ec) {
            eventPanel2Chart1 = ec.init(document.getElementById('event-userChart1'));
            eventPanel2Chart1.setOption(options_2(jsonData.eu[0].manUser, jsonData.eu[0].womenUser));

            eventPanel2Chart2 = ec.init(document.getElementById('event-userChart2'));
            eventPanel2Chart2.setOption(options_3(jsonData.eu[0].vipUser, jsonData.eu[0].nVipUser));

            eventPanel2Chart3 = ec.init(document.getElementById('event-userChart3'));
            eventPanel2Chart3.setOption(options_4());
        });

    var u = (jsonData.eu[0].vipUser/ (jsonData.eu[0].nVipUser + jsonData.eu[0].vipUser) *100).toFixed(2);
    var reportHtml = "";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 事件讨论用户中大V占比: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+ u +"%</small></h4></div>";

    $("#eventReport2").html(reportHtml);
}

/**
 * Data: eventLocation
 * Dom: event-locationChart,eventReport4
 * @param jsonData
 */
function handleLocationData(jsonData){
    var location_mapData = [];
    var location_maxCount = 0;
    for(var idx in jsonData.el){
        var row = jsonData.el[idx];
        if(row.userCount>location_maxCount) {
            location_maxCount = row.userCount;
        }
        location_mapData.push({name:row.location,value:row.userCount});
    }

    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function(ec){
            eventPanel3Chart = ec.init(document.getElementById('event-locationChart'));
            eventPanel3Chart.setOption(options_5(location_mapData, location_maxCount));
        });

    //report
    var reportHtml = "";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 讨论热烈地区top5: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+jsonData.el[0].location+","+jsonData.el[1].location+","+jsonData.el[2].location+","+jsonData.el[3].location+","+jsonData.el[4].location+"</small></h4></div>";

    $("#eventReport4").html(reportHtml);
}

/**
 * Data: HotTweet
 * Dom: event-locationTweet,eventReport3
 * @param jsonData
 */
function handleHotTweet(jsonData){
    hotTweetData = jsonData;

    var html = "";
    var oriCount = 0;
    for(var idx in jsonData.ht){
        var row = jsonData.ht[idx];
        html += "<div><h5>"+row.text+"</h5>";
        html += "<h5><small>"+row.uname+"("+row.time+")"+" <cite>RepostCount:"+row.response+"</cite></small></h5>";
        html += "</div>";
        oriCount++;
        if(oriCount>=50)
            break;
    }
    if(jsonData.ht.length==0)
        html="<p>暂无热门微博!</p>";
    $("#event-locationTweet").html(html);

    //report
    var maxStatus = jsonData.ht[0].response;
    var maxUser = jsonData.ht[0].uname;
    var reportHtml = "";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 最大微博转发量: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+maxStatus+"次转发来自“"+maxUser+"“的微博</small></h4></div>";

    $("#eventReport3").html(reportHtml);
}

/**
 * Data: eventMood
 * Dom: event-moodChart,eventReport6
 * @param jsonData
 */
function handleDataOfMood(jsonData){
    var moodData = [];
    var max = 0;
    var maxMood = "";
    var tempIndicator = [];
    var indicator = [];

    var temp = [];
    var total=0;
    for(var idx in jsonData.em){
        var row = jsonData.em[idx];
        if(row.mood == "快乐")
            row.count = parseInt(row.count/4);
        if(row.count>max){
            max = row.count;
            maxMood = row.mood;
        }
        tempIndicator.push(row.mood);
        temp.push(row.count);
        total+=row.count;
    }
    var add = ((max - parseInt(total/6))/max*100).toFixed(2);
    var tempP = [];
    for(var i=0;i<=6;i++){
        tempP.push(parseInt(temp[i]/total*100));
    }

    for(var i=0;i<tempIndicator.length;i++)
        indicator.push({text:tempIndicator[i],max:parseInt(max/total*100)});

    moodData.push({value:tempP,name :'民众情绪分布'});
    require(
        [
            'echarts',
            'echarts/chart/radar',
        ],
        function(ec) {
            eventPanel4Chart2 = ec.init(document.getElementById('event-moodChart'));
            eventPanel4Chart2.setOption(options_6(indicator,moodData));
        });

    //report
    var reportHtml = "";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 民众情绪主导: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>事件中民众情绪主要持"+maxMood+"态度,占比达到"+add+"%</small></h4></div>";

    $("#eventReport6").html(reportHtml);
}

function handleDataOfCloud(jsonData){
    var cloudData = [];
    var min = 0;
    var max = 0;
    min = jsonData.ec[jsonData.ec.length-1].count;
    max = jsonData.ec[0].count;

    for(var idx in jsonData.ec){
        var row = jsonData.ec[idx];
        cloudData.push([row.trem,row.count]);
    }
    drawCloud(cloudData,min,max);

    //report
    var reportHtml = "";
    reportHtml += "<div><h4><span class='glyphicon glyphicon-hand-right'></span> 词频top5: </h4>";
    reportHtml += "<h4 style='margin-left:25px'><small>"+jsonData.ec[0].trem+","+jsonData.ec[1].trem+","+jsonData.ec[2].trem+","+jsonData.ec[3].trem+","+jsonData.ec[4].trem+"</small></h4></div>";

    $("#eventReport5").html(reportHtml);
}

function drawCloud(cloudData,min,max){
    var fill = d3.scale.category20();
    var fontSize = d3.scale.log().range([50, 200]);
    var angle = [ 0, 90 ];
    var range = max - min;
    if(range==0)
        range = min;

    d3.layout.cloud().size([500, 350])
        .words(cloudData.map(function(d) {
            return {
                text: d[0],
                size: cloudScale(d[1], min, range)
            };
        }))
        .padding(5)
        .rotate(function() { var idx = Math.floor(Math.random() + 0.3);
            return ~~(angle[idx]); })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select("#event-cloudChart").append("svg")
            .attr("width", 500)
            .attr("height", 350)
            .append("g")
            .attr("transform", "translate(250,175)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; })
            .on("click", function(d) {
                $("#keyword:text").val(function(n, c) {
                    return d.text;
                });
            });
    }
}

function cloudScale(freq, min, range) {
    return (50 / range) * (freq - min) + 15;
}

function kwsearch() {
    window.open("http://news.baidu.com/ns?cl=2&rn=20&tn=news&word="
    + $("#keyword:text").get(0).value + "&ie=utf-8");
}