/**
 * 
 */

var nodes = [];
var links = [];

function getRepostData(){
	$.ajax({
		type : "get",
		url : "/RCBA/repost",
		dataType : "json",
		timeout : 0,
		success : handleRepostData, 
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("Loading Repost Data Failed!");
		}
	});
}

function handleRepostData(jsondata){
	var existNode = new Object();
	var idCount = 0;
	
	//root node
	var rootNode = "邓超";
	var categoryNode = new Object();
	var nodeCount = new Object();
	
	for	(var i in jsondata.re){
		
		if(jsondata.re[i].retweetFrom == jsondata.re[i].retweetTo)
			continue;
		
		if(!existNode.hasOwnProperty(jsondata.re[i].retweetFrom)){
			existNode[jsondata.re[i].retweetFrom] = idCount;
			idCount ++;
		}
		if(!existNode.hasOwnProperty(jsondata.re[i].retweetTo)){
			existNode[jsondata.re[i].retweetTo] = idCount;
			idCount ++;
		}
		
		//计算每个点出现的个数
		if(!nodeCount.hasOwnProperty(jsondata.re[i].retweetFrom))
			nodeCount[jsondata.re[i].retweetFrom] = 1;
		else
			nodeCount[jsondata.re[i].retweetFrom] = nodeCount[jsondata.re[i].retweetFrom] + 1;
		if(!nodeCount.hasOwnProperty(jsondata.re[i].retweetTo))
			nodeCount[jsondata.re[i].retweetTo] = 1;
		else
			nodeCount[jsondata.re[i].retweetTo] = nodeCount[jsondata.re[i].retweetTo] + 1;
		
		//指定category
		if(jsondata.re[i].retweetFrom == rootNode){
			if(!categoryNode.hasOwnProperty(jsondata.re[i].retweetTo))
				categoryNode[jsondata.re[i].retweetTo] = 1;
		}
	}
	
	for(var i in categoryNode){
		categoryNode[i] = nodeCount[i];
	}
	
	for	(var i in existNode){
		if(i == rootNode){
			nodes.push({
				name : i,
				value : 3,
				id : existNode[i],
				category : 0
			});
		}else if(categoryNode[i] >= Math.sqrt(idCount+1)){
			nodes.push({
				name : i,
			    value : 2,
			    id : existNode[i],
			    category : 1
		    });
		}else{
			nodes.push({
				name : i,
			    value : 1,
			    id : existNode[i],
			    category : 2
		    });
		}
	}
	
	for	(var i in jsondata.re){
		links.push({
			source : existNode[jsondata.re[i].retweetFrom],
			target : existNode[jsondata.re[i].retweetTo],
			weight : 1
		});
	}
	drawRepost();
}

function drawRepost(){
	require(
            [
                'echarts',
                'echarts/chart/force', // 使用柱状图就加载bar模块，按需加载
                'echarts/chart/chord'
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('mainRe')); 
                var option = {
                        title : {
                            text: '转发树',
                            subtext: '转发树测试',
                            x:'right',
                            y:'bottom'
                        },
                        tooltip : {
                            trigger: 'item',
                            formatter: '{a} : {b}'
                        },
                        toolbox: {
                            show : true,
                            feature : {
                                restore : {show: true},
                                magicType: {show: true, type: ['force', 'chord']},
                                saveAsImage : {show: true}
                            }
                        },
                        legend: {
                            x: 'left',
                            data:['RootNode','OpinionLeader','OrdinaryUser']
                        },
                        series : [
                            {
                                type:'force',
                                name : "Force tree",
                                ribbonType: false,
                                categories : [
                                    {
                                        name: 'RootNode'
                                    },
                                    {
                                    	name: 'OpinionLeader'
                                    },
                                    {
                                    	name: 'OrdinaryUser'
                                    }
                                ],
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        },
                                        nodeStyle : {
                                            brushType : 'both',
                                            borderColor : 'rgba(255,215,0,0.6)',
                                            borderWidth : 1
                                        }
                                    }
                                },
                                minRadius : 5,
                                maxRadius : 8,
                                coolDown: 0.995,
                                scaling : 1,
                                large: true,
                                gravity : 0.5,
                                //linkSymbol : 'arrow',
                                //linkSymbolSize : [1,5],
                                //step:1,
                                roam : true,
                                nodes : nodes,
                                links : links
                            }
                        ]
                    };
                myChart.setOption(option); 
            }
           );
}