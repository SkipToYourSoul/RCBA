/**
 * Created by liye on 15/11/25.
 */

var eventInformationData, eventInputData;
var indexChart1;

alert("system updating!");

/*
 * 加载echarts
 */
require.config({
    paths:{
        echarts : "http://echarts.baidu.com/build/dist"
    }
});

/*
*  获取事件数据（数据表：eventinformation）
* */
$.ajax({
    type : "get",
    url : "/RCBA/eventinformation",
    dataType : "json",
    timeout : 0,
    success : handleTimelineData,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Loading Event TimeLine failed!");
    }
});

/*
 * 获取待处理的事件数据（数据表：eventinput）
 */
$.ajax({
    type : "get",
    url : "/RCBA/eventinput",
    dataType : "json",
    timeout : 0,
    success : handleHotFocusEvent,
    error : function(XMLHttpRequest, textStatus, errorThrown) {
        alert("Loading Hot Focus Event failed!");
    }
});

