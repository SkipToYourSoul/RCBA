/*
 * 计算最新最热事件，通过eventinput数据表，载入hotFocusEvent内容
 * */
function handleHotFocusEvent(jsondata){
	eventInputData = jsondata;

	var myDate = new Date();
	var before1day = myDate.getTime()-24*60*60*1000;
	before1day = new Date(before1day);
	var year1 = before1day.getFullYear().toString();
	var month1 = before1day.getMonth()+1;
	before1day = before1day.getDate();
	if(month1<10) month1 = "0"+month1.toString();
	if(before1day<10) before1day = "0" + before1day.toString();
	var querydate = year1+"-"+month1+"-"+before1day;
	
	var html = "<div class='index-tag'><p class='label label-success'> 热点事件推荐</p></div>";
	for(var idx in jsondata.ei){
		var row = jsondata.ei[idx];
		if(row.eventTime < querydate){
			html += "<div class='media'>";
			html += "<div class='pull-left'><img style='width:70px;height:70px;' src='"+row.eventImg+"' class='media-object' alt='' /></div>";
			html += "<div class='media-body'>";
			html += "<h5 class='media-heading lead'>"+row.eventName + "</h5>" ;
			html += "<h5><small>"+row.eventTime + "</h5></small>";
			html += "</div></div>";
		}
	}
	$("#hotFocusEvent").html(html);
}

/*
* 通过eventinformation数据表，载入eventTimeLine、eventDetail、eventChart的内容
* */
function handleTimelineData(jsondata){
	eventInformationData = jsondata;

	/*
	* draw timeLine
	* */
	var timelineData = new Object();
	timelineData["timeline"] = {
		"headline" : "Real-time Social Collective Behavior Analysis",
		"type" : "default",
		"text" : "<p>微博事件分析器，提供最新微博事件数据分析，支持实时数据获取。</p>"+
		"<button class='btn btn-default btn-large' onclick=newPage()>查看微博事件库</button>",
		/*"asset" : {
		 "media" : ".//img/index.jpg",
		 "credit" : "Online Collective Behavior Analysis",
		 "caption" : "Data Mining and Analysis"
		 },*/
		"date": [],
		"era": []
	};

	var count = 1;
	var closetime = jsondata.ei[jsondata.ei.length-1].eventTime;
	var html = "";

	for(var idx in jsondata.ei){
		var row = jsondata.ei[idx];
		var tag;

		var date = new Date(row.eventTime);
		var beforedate = date.getTime()-24*60*60*1000;
		var beforedate = new Date(beforedate);
		var date1 = date.getFullYear().toString()+","+(date.getMonth()+1)+","+date.getDate();
		var date2 = beforedate.getFullYear().toString()+","+(beforedate.getMonth()+1)+","+beforedate.getDate();

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

	/*
	* draw chart
	 */
	var xData = [];
	var yData = [];
	var xObject = new Object();
	for(var idx in jsondata.ei){
		var row = jsondata.ei[idx];
		if(!xObject.hasOwnProperty(row.eventTime)){
			xObject[row.eventTime] = 1;
			xData.push(row.eventTime);
		}
		else{
			xObject[row.eventTime] ++;
		}
	}
	for(var i in xObject){
		yData.push(xObject[i]);
	}

	//draw the chart
	require(
		[
			'echarts',
			'echarts/chart/line',
			'echarts/chart/bar'
		],
		function(ec){
			indexChart1 = ec.init(document.getElementById('eventChart'));
			indexChart1.setOption(option(xData,yData));
		});

	//draw today's event
	$("#eventDetail").html(html);
}

function newPage(){
	window.open("http://dase.ecnu.edu.cn/microblogcube");
}

function eventSearch(){
	//alert($("#inputSearch:text").get(0).value);
	var searchText = $("#inputSearch:text").get(0).value;
	if(searchText=="" || searchText==null)
		handleHotFocusEvent(eventInputData);

	var html = "<div class='index-tag'><p class='label label-success'> 搜索结果</p></div>";
	var count = 0;
	for (var idx in eventInformationData.ei){
		var row = eventInformationData.ei[idx];
		if (row.title.indexOf(searchText) != -1){
			html += "<div class='media'>";
			html += "<div class='pull-left'><img style='width:70px;height:70px;' src='"+row.img+"' class='media-object' alt='' /></div>";
			html += "<div class='media-body'>";
			html += "<h5 class='media-heading lead'><a href='realtimeEvent.html?eventId="+row.eventId+"'>"+row.title + "</h5></a>" ;
			html += "<h5><small>"+row.information + "</h5></small>";
			html += "<h5><a href= '"+ row.link + "'>" + "查看相关新闻    </a>";
			html += "<a href= '"+ row.vLink + "'>" + "    查看相关视频</a></h5>";
			html += "</div></div>";
			count ++;
		}
	}

	if(count > 0)
		$("#hotFocusEvent").html(html);
	else{
		alert("No Search Result!");
		handleHotFocusEvent(eventInputData);
	}
}