/**
 * 	Draw the Event Timeline
 */

var timelineData = new Object();
var eventInformation;

function getTimelineData(){
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
}

function handleTimelineData(jsondata){
	
	//drawEventData
	getEventChart(jsondata);
	eventInformation = jsondata;
	
	timelineData["timeline"] = {
			"headline" : "Real-time Social Collective Behavior Analysis",
			"type" : "default",
			"text" : "<p>微博事件分析器，提供最新微博事件数据分析，支持实时数据获取。</p>"+
			"<button class='btn btn-default btn-large' onclick=newpage()>查看微博事件库</button>",
			/*"asset" : {
				"media" : ".//img/index.jpg",
				"credit" : "Online Collective Behavior Analysis",
				"caption" : "Data Mining and Analysis"
			},*/
			"date": [],
			"era": []
		};
	
	var row;
	var date,beforedate,date1,date2;
	var count = 1;
	var tag = "";
	var html = "";
	var closetime = jsondata.ei[jsondata.ei.length-1].eventTime;
	
	for(var idx in jsondata.ei){
		row = jsondata.ei[idx];
		
		date = new Date(row.eventTime);
		beforedate = date.getTime()-24*60*60*1000;
		beforedate = new Date(beforedate);
		date1 = date.getFullYear().toString()+","+(date.getMonth()+1)+","+date.getDate();
		date2 = beforedate.getFullYear().toString()+","+(beforedate.getMonth()+1)+","+beforedate.getDate();
		
		if(count%3==0)
			tag = "First EventTimeLine";
		else if(count%3==1)
			tag = "Second EventTimeLine";
		else if(count%3==2)
			tag = "Third EventTimeLine";
		
		timelineData.timeline.date.push({
			"startDate":date2,
            "endDate":date1,
            "headline":row.title,
            "text":"<p>"+row.information+"</p>"+
            		"<a class='btn btn-default btn-large' href=\"realtimeEvent.html?eventId=" + row.eventId + "\">查看事件</a>"+
            		"<a class='btn btn-default btn-large' style='margin-left:20px' href=" + row.link + ">去百度新闻查看事件</a>",
            /*"tag":tag,*/
            "classname":"optionaluniqueclassnamecanbeaddedhere"
            /*"asset": {
                "media":row.img,
                "thumbnail":row.img,
                "caption":"<a href=" + row.link + ">去百度新闻查看事件</a></div>"
            }*/
		});
		count ++;
		
		if(row.eventTime == closetime){
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
	
	drawTimeline();
	
	//draw today's event
	$("#eventdetail").html(html);
}

function drawTimeline(){
	createStoryJS({
        type:       'timeline',
        width:      'auto',
        height:     '450',
        source:     timelineData,
        embed_id:   'eventTimeLine',
        start_at_end: false,
        start_at_slide:0,
        start_zoom_adjust:0
    });
}

function newpage(){
	window.open("http://dase.ecnu.edu.cn/microblogcube");
}