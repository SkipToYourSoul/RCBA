/**
 * Created by liye on 15/11/26.
 */

function getUrlParams() {
    var url = String(window.document.location.href);
    var params = {};
    var count = 0;
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value;
        count = count + 1;
    });
    params['length'] = count;
    return params;
}

var params = getUrlParams();
var eventId = 1;
if (params.length == 0 || params.hasOwnProperty('eventId') == false) {
    alert('参数出错');
    location.href = "index.html";
} else {
    eventId = params['eventId'];
}

var eventPanel1Chart, eventPanel2Chart1, eventPanel2Chart2, eventPanel2Chart3, eventPanel3Chart, eventPanel4Chart1, eventPanel4Chart2;
var timeSeriesData;
var hotTweetData;

//加载echarts
require.config({
    paths:{
        echarts : 'http://echarts.baidu.com/build/dist'
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/timeseries?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleTimeSeriesData,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load TimeSeries Data!");
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/eventintro?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleEventIntro,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load EventIntroduction!");
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/eventUser?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleUserData,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load EventIntroduction!");
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/eventlocation?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleLocationData,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load Location Data!");
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/hottweet?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleHotTweet,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load HotTweet Data!");
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/eventmood?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleDataOfMood,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load Mood Data!");
    }
});

$.ajax({
    type : "get",
    url : "/RCBA/eventcloud?eventId=" + eventId,
    dataType : "json",
    timeout : 0,
    success : handleDataOfCloud,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Fail to load Clouds Data!");
    }
});