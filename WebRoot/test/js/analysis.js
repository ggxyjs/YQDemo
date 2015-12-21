var Analysis={};

Analysis.query=function(){

	Analysis.queryBlogNumToLineResult();
	Analysis.queryBlogNumTobarResult();
	Analysis.queryFansSexNumResult();
	Analysis.queryFansCityNumResult();
	Analysis.qryTop10PostToBarResult();
	Analysis.qryPostToLineResult();
	Analysis.qryTopicRepostsToChordResult();
}

Analysis.queryBlogNumToLineResult=function()
{
		var fansLineImg = echarts.init(document.getElementById("fansLineImg"));
		option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['净增粉丝数','净增关注数','净增微博数']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            axisLabel:
			            {
			            	rotate:45  //坐标值倾斜45度显示
			            },
			            data : ['2015.04.11','2015.04.14','2015.04.17','2015.04.20','2015.04.23','2015.04.27','2015.04.30']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'净增粉丝数',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'净增关注数',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'净增微博数',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			    ]
			};
			                    				                		
		var fansSumTableHtml = '<tr><td class="bor-bt"><span class="add-number"><span class="add-number-fu" style="background:#FF7F50; height:'+'66%;"></span></span></td>'
			+ '<td class="bor-bt"><span class="add-number"><span class="add-number-fu" style="background:#87CEFA; height:'+'77%;"></span></span></td>'
			+ '<td class="bor-bt"><span class="add-number"><span class="add-number-fu" style="background:#DA70D6; height:'+'33%;"></span></span></td></tr>'
			+ '<tr><td class="t-c">5000'+ '</td><td class="t-c">500' +'</td><td class="t-c">600 ' +'</td></tr>';
		$("#fansSumTable").html(fansSumTableHtml);
		$("#fansSumSpan").html('最近'+30+'天，关注数环比净增'+ 80000 +'，粉丝数环比净增'+ 64526 +'，微博数环比净增'+5656);

		fansLineImg.setOption(option);
}

//绘制柱状图
Analysis.queryBlogNumTobarResult=function()
{
		var fansBarImg = echarts.init(document.getElementById("fansBarImg"));
		var option = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	    	textStyle:
	        {
	          fontFamily:'Microsoft YaHei,Tahoma'
	        },
	        data:['净增关注数','净增粉丝数','净增微博数']
	    },
	    dataZoom: {
	        show: true,
	        start : 0
	    },
        toolbox : {
            'show':true, 
            'feature':{
                'magicType':{'show':true,'type':['line','bar','stack','tiled']},
                'restore':{'show':true},
                'saveAsImage':{'show':true}
            }
        },
	    xAxis : [
	             { 	type : 'category',
	 	            axisLabel:
	 	            {
	 	            	show:false,
	 	            	//rotate:90
	 	            },
		            data : ['2015.04.11','2015.04.14','2015.04.17','2015.04.20','2015.04.23','2015.04.27','2015.04.30']
	             }
	            
	             ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	         
	        	 {
			            name:'净增粉丝数',
			            type:'bar',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'净增关注数',
			            type:'bar',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'净增微博数',
			            type:'bar',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
	              
	         ]
	};
		fansBarImg.setOption(option);
				                    			
		var fansBarTableHtml = '';
		
			fansBarTableHtml ='<tr><td width="40%">英国报姐' + '</td><td width="20%">998'+ '</td><td width="20%">' +'246</td><td width="20%">58956' + '</td></tr>'
			+'<tr><td width="40%">英国报姐' + '</td><td width="20%">9968'+ '</td><td width="20%">' +'246</td><td width="20%">58956' + '</td></tr>'
			+'<tr><td width="40%">知乎大神' + '</td><td width="20%">798'+ '</td><td width="20%">' +'246</td><td width="20%">58956' + '</td></tr>'
			+'<tr><td width="40%">北京人不知道的北京事儿' + '</td><td width="20%">698'+ '</td><td width="20%">' +'246</td><td width="20%">58956' + '</td></tr>'
			+'<tr><td width="40%">我的朋友是个呆B' + '</td><td width="20%">298'+ '</td><td width="20%">' +'246</td><td width="20%">58956' + '</td></tr>'
			+'<tr><td width="40%">头条新闻' + '</td><td width="20%">546'+ '</td><td width="20%">' +'246</td><td width="20%">58956' + '</td></tr>';
	
		$("#fansBarTable").html(fansBarTableHtml);		
}

Analysis.queryFansSexNumResult=function(){
	
	var fansbar = echarts.init(document.getElementById("xingbiefenbu"));
	
	var labelTop = {
		    normal : {
		        label : {
		            show : true,
		            position : 'center',
		            formatter : '{b}',
		            textStyle: {
		                baseline : 'bottom'
		            }
		        },
		        labelLine : {
		            show : false
		        }
		    }
		};	
		var labelFromatter = {
		    normal : {
		        label : {
		            textStyle: {
		                baseline : 'top'
		            }
		        }
		    },
		}
		var labelBottom = {
		    normal : {
		        color: '#ccc',
		        label : {
		            show : true,
		            position : 'center'
		        },
		        labelLine : {
		            show : false
		        }
		    },
		    emphasis: {
		        color: 'rgba(0,0,0,0)'
		    }
		};
		var radius = [40, 55];
		option = {
		    legend: {
		        x : 'center',
		        y : 'center',
		        data:[
		            '英国报姐','股票大神','知乎大神','北京人不知道','我的朋友是个',
		            '头条新闻'
		        ]
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    series : [
		        {
		            type : 'pie',
		            center : ['20%', '20%'],
		            radius : radius,
		            x: '0%', // for funnel
		            //itemStyle : labelFromatter,
		            data : [
		                {name:'', value:46, itemStyle : labelBottom},
		                {name:'英国报姐', value:54,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['50%', '20%'],
		            radius : radius,
		            x:'20%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'', value:56, itemStyle : labelBottom},
		                {name:'股票大神', value:44,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['80%', '20%'],
		            radius : radius,
		            x:'40%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'', value:65, itemStyle : labelBottom},
		                {name:'知乎大神', value:35,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['20%', '75%'],
		            radius : radius,
		            x:'60%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'', value:70, itemStyle : labelBottom},
		                {name:'北京人不知道', value:30,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['50%', '75%'],
		            radius : radius,
		            x:'80%', // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'', value:73, itemStyle : labelBottom},
		                {name:'我的朋友是个', value:27,itemStyle : labelTop}
		            ]
		        },
		        {
		            type : 'pie',
		            center : ['80%', '75%'],
		            radius : radius,
		            y: '55%',   // for funnel
		            x: '0%',    // for funnel
		            itemStyle : labelFromatter,
		            data : [
		                {name:'', value:78, itemStyle : labelBottom},
		                {name:'头条新闻', value:22,itemStyle : labelTop}
		            ]
		        },
		    ]
		};
		fansbar.setOption(option);
}

Analysis.queryFansCityNumResult=function()
{
		var fansMapImg = echarts.init(document.getElementById("fansMapImg"));
		option = {
			    title : {
			        text: '粉丝分布状况',
			     	x:'center'
			    },
			    tooltip : {
			        trigger: 'item'
			    },
			    dataRange: {
			        min: 0,
			        max: 25000,
			        x: 'left',
			        y: 'bottom',
			        text:['高','低'],           // 文本，默认为数值文本
			        calculable : true
			    },
			    toolbox: {
			        show: true,
			        orient : 'vertical',
			        x: 'right',
			        y: 'center',
			        feature : {
			            mark : {show: true},
			        	restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    roamController: {
			        show: true,
			        x: 'right',
			        mapTypeControl: {
			            'china': true
			        }
			    },
			    series : [
			        {
			            name: '粉丝关注数',
			            type: 'map',
			            mapType: 'china',
			            roam: false,
			            itemStyle:{
			                normal:{label:{show:true}},
			                emphasis:{label:{show:true}}
			            },
			            data:[
			                {name: '北京',value: Math.round(Math.random()*10000)},
			                {name: '天津',value: Math.round(Math.random()*10000)},
			                {name: '上海',value: Math.round(Math.random()*10000)},
			                {name: '重庆',value: Math.round(Math.random()*10000)},
			                {name: '河北',value: Math.round(Math.random()*10000)},
			                {name: '河南',value: Math.round(Math.random()*10000)},
			                {name: '云南',value: Math.round(Math.random()*10000)},
			                {name: '辽宁',value: Math.round(Math.random()*10000)},
			                {name: '黑龙江',value: Math.round(Math.random()*10000)},
			                {name: '湖南',value: Math.round(Math.random()*10000)},
			                {name: '安徽',value: Math.round(Math.random()*10000)},
			                {name: '山东',value: Math.round(Math.random()*10000)},
			                {name: '新疆',value: Math.round(Math.random()*10000)},
			                {name: '江苏',value: Math.round(Math.random()*10000)},
			                {name: '浙江',value: Math.round(Math.random()*10000)},
			                {name: '江西',value: Math.round(Math.random()*10000)},
			                {name: '湖北',value: Math.round(Math.random()*10000)},
			                {name: '广西',value: Math.round(Math.random()*10000)},
			                {name: '甘肃',value: Math.round(Math.random()*10000)},
			                {name: '山西',value: Math.round(Math.random()*10000)},
			                {name: '内蒙古',value: Math.round(Math.random()*10000)},
			                {name: '陕西',value: Math.round(Math.random()*10000)},
			                {name: '吉林',value: Math.round(Math.random()*10000)},
			                {name: '福建',value: Math.round(Math.random()*10000)},
			                {name: '贵州',value: Math.round(Math.random()*10000)},
			                {name: '广东',value: Math.round(Math.random()*10000)},
			                {name: '青海',value: Math.round(Math.random()*10000)},
			                {name: '西藏',value: Math.round(Math.random()*10000)},
			                {name: '四川',value: Math.round(Math.random()*10000)},
			                {name: '宁夏',value: Math.round(Math.random()*10000)},
			                {name: '海南',value: Math.round(Math.random()*10000)},
			                {name: '台湾',value: Math.round(Math.random()*10000)},
			                {name: '香港',value: Math.round(Math.random()*10000)},
			                {name: '澳门',value: Math.round(Math.random()*10000)},
			                {name: '北京',value: Math.round(Math.random()*10000)},
			                {name: '天津',value: Math.round(Math.random()*10000)},
			                {name: '上海',value: Math.round(Math.random()*10000)},
			                {name: '重庆',value: Math.round(Math.random()*10000)},
			                {name: '河北',value: Math.round(Math.random()*10000)},
			                {name: '安徽',value: Math.round(Math.random()*10000)},
			                {name: '新疆',value: Math.round(Math.random()*10000)},
			                {name: '浙江',value: Math.round(Math.random()*10000)},
			                {name: '江西',value: Math.round(Math.random()*10000)},
			                {name: '山西',value: Math.round(Math.random()*10000)},
			                {name: '内蒙古',value: Math.round(Math.random()*10000)},
			                {name: '吉林',value: Math.round(Math.random()*10000)},
			                {name: '福建',value: Math.round(Math.random()*10000)},
			                {name: '广东',value: Math.round(Math.random()*10000)},
			                {name: '西藏',value: Math.round(Math.random()*10000)},
			                {name: '四川',value: Math.round(Math.random()*10000)},
			                {name: '宁夏',value: Math.round(Math.random()*10000)},
			                {name: '香港',value: Math.round(Math.random()*10000)},
			                {name: '澳门',value: Math.round(Math.random()*10000)},
			                {name: '北京',value: Math.round(Math.random()*10000)},
			                {name: '天津',value: Math.round(Math.random()*10000)},
			                {name: '上海',value: Math.round(Math.random()*10000)},
			                {name: '广东',value: Math.round(Math.random()*10000)},
			                {name: '台湾',value: Math.round(Math.random()*10000)},
			                {name: '香港',value: Math.round(Math.random()*10000)},
			                {name: '澳门',value: Math.round(Math.random()*10000)}
			            ]
			        },
			    ]
			};
			fansMapImg.setOption(option);	                    
		
		var cityUlHtml = "";

				cityUlHtml = '<li class="c-fff" style="background:#43CD80'+'"><span class="number">1'+'</span><span class="city">江苏'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+ '<li class="c-fff" style="background:#5D478B'+'"><span class="number">2'+'</span><span class="city">浙江'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#53868B'+'"><span class="number">3'+'</span><span class="city">北京'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">4'+'</span><span class="city">上海'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">5'+'</span><span class="city">广东'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">6'+'</span><span class="city">香港'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">7'+'</span><span class="city">台湾'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">8'+'</span><span class="city">江西'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">9'+'</span><span class="city">福建'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>'
				+'<li class="c-fff" style="background:#5CACEE'+'"><span class="number">10'+'</span><span class="city">湖北'+'</span><span class="quantity">'+Math.round(Math.random()*10000)+'</span></li>';
	
		$("#cityUl").html(cityUlHtml);

}

Analysis.qryTop10PostToBarResult=function()
{
			   var tBody="";
			   tBody ='<tr><td>1'+'</td><td><a class="biaoti" target=”_blank" href=localhost:8080"'+'">#奔跑2015#'+'...</a></td><td>123'+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td></tr>'
			   + '<tr><td>1'+'</td><td><a class="biaoti" target=”_blank" href=localhost:8080"'+'">#那年今日#'+'...</a></td><td>123'+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td></tr>'
			   +'<tr><td>1'+'</td><td><a class="biaoti" target=”_blank" href=localhost:8080"'+'">#NBA总决赛#'+'...</a></td><td>123'+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td></tr>'
			   +'<tr><td>1'+'</td><td><a class="biaoti" target=”_blank" href=localhost:8080"'+'">#jakakda#'+'...</a></td><td>123'+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td></tr>'
			   +'<tr><td>1'+'</td><td><a class="biaoti" target=”_blank" href=localhost:8080"'+'">#Jessica#'+'...</a></td><td>123'+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td><td>'+Math.round(Math.random()*1000)+'</td></tr>';
				
				$("#top5HuatiList").html(tBody);	
				//画柱状图
				var uls = "";
							
				uls +='<li id=1"' +'"><label id="今天的天气好' +'">#奔跑2015# '+'...</label><div class="jg_progress"><span  class="jg_graph" style="width:100'+'%;"></span></div>'
				+'<div class="topic-tcc hide" id="about_11'+'"><div class="topic">'
				+'<div class="topic-cont"><div class="topic-title">今天的天气'+'<span class="topic-date">2015.03.22'+'</span></div>'
				+'<div class="topic-main">是这样的'+" — 来自	棒约翰"+'</div>'
				+'<ul><li><span class="topic-icon"></span>'+ Math.round(Math.random()*1000)+'</li><li><span class="topic-icon two"></span>'+Math.round(Math.random()*1000) +'</li><li><span class="topic-icon three"></span>'+ Math.round(Math.random()*1000) +'</li></ul>'	
				+'</div>'
				+'</div><span class="jg_arrow"></span></div>'
				+'</li>';
				uls +='<li id=1"' +'"><label id="今天的天气好' +'">#那年今日# '+'...</label><div class="jg_progress"><span  class="jg_graph" style="width:80'+'%;"></span></div>'
				+'<div class="topic-tcc hide" id="about_11'+'"><div class="topic">'
				+'<div class="topic-cont"><div class="topic-title">今天的天气'+'<span class="topic-date">2015.03.22'+'</span></div>'
				+'<div class="topic-main">是这样的'+" — 来自	棒约翰"+'</div>'
				+'<ul><li><span class="topic-icon"></span>'+ Math.round(Math.random()*1000)+'</li><li><span class="topic-icon two"></span>'+Math.round(Math.random()*1000) +'</li><li><span class="topic-icon three"></span>'+ Math.round(Math.random()*1000) +'</li></ul>'	
				+'</div>'
				+'</div><span class="jg_arrow"></span></div>'
				+'</li>';
				uls +='<li id=1"' +'"><label id="今天的天气好' +'">#NBA总决赛#'+'...</label><div class="jg_progress"><span  class="jg_graph" style="width:60'+'%;"></span></div>'
				+'<div class="topic-tcc hide" id="about_11'+'"><div class="topic">'
				+'<div class="topic-cont"><div class="topic-title">今天的天气'+'<span class="topic-date">2015.03.22'+'</span></div>'
				+'<div class="topic-main">是这样的'+" — 来自	棒约翰"+'</div>'
				+'<ul><li><span class="topic-icon"></span>'+ Math.round(Math.random()*1000)+'</li><li><span class="topic-icon two"></span>'+Math.round(Math.random()*1000) +'</li><li><span class="topic-icon three"></span>'+ Math.round(Math.random()*1000) +'</li></ul>'	
				+'</div>'
				+'</div><span class="jg_arrow"></span></div>'
				+'</li>';
				uls +='<li id=1"' +'"><label id="今天的天气好' +'">#jakakda#'+'...</label><div class="jg_progress"><span  class="jg_graph" style="width:40'+'%;"></span></div>'
				+'<div class="topic-tcc hide" id="about_11'+'"><div class="topic">'
				+'<div class="topic-cont"><div class="topic-title">今天的天气'+'<span class="topic-date">2015.03.22'+'</span></div>'
				+'<div class="topic-main">是这样的'+" — 来自	棒约翰"+'</div>'
				+'<ul><li><span class="topic-icon"></span>'+ Math.round(Math.random()*1000)+'</li><li><span class="topic-icon two"></span>'+Math.round(Math.random()*1000) +'</li><li><span class="topic-icon three"></span>'+ Math.round(Math.random()*1000) +'</li></ul>'	
				+'</div>'
				+'</div><span class="jg_arrow"></span></div>'
				+'</li>';
				uls +='<li id=1"' +'"><label id="今天的天气好' +'">#Jessica#'+'...</label><div class="jg_progress"><span  class="jg_graph" style="width:20'+'%;"></span></div>'
				+'<div class="topic-tcc hide" id="about_11'+'"><div class="topic">'
				+'<div class="topic-cont"><div class="topic-title">今天的天气'+'<span class="topic-date">2015.03.22'+'</span></div>'
				+'<div class="topic-main">是这样的'+" — 来自	棒约翰"+'</div>'
				+'<ul><li><span class="topic-icon"></span>'+ Math.round(Math.random()*1000)+'</li><li><span class="topic-icon two"></span>'+Math.round(Math.random()*1000) +'</li><li><span class="topic-icon three"></span>'+ Math.round(Math.random()*1000) +'</li></ul>'	
				+'</div>'
				+'</div><span class="jg_arrow"></span></div>'
				+'</li>';
				
				$("#top5Huati").html(uls);
				
				$("#topicTrend").html('传播趋势图  <span style="color:blue; font-size:14px;">#奔跑2015#'  + '</span>');
				$("#topicTopo").html('传播拓扑图  <span style="color:blue; font-size:14px;">#奔跑2015#'  + '</span>');
}

Analysis.qryPostToLineResult=function()
{
	
			var topicLineImg = echarts.init(document.getElementById("topicLineImg"));
			var option = {
			    tooltip : {
			        trigger: 'axis'
			    },
			    legend: {
			    	textStyle:
			        {
			          fontFamily:'Microsoft YaHei,Tahoma'
			        },
			        data:['转发数','评论数','点赞数']
			    },
			    dataZoom: {
			        show: true,
			        start : 0
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['2015.03.23','2015.04.11','2015.05.01']
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    toolbox: {
			        show : true,
			        feature : {   
			            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    series : [
			        {
			            name:'转发数',
			            type:'line',
			            smooth:true,
			            itemStyle: {normal: {areaStyle: {type: 'default'}}},
			            data:['146','22','323']
			        },
			        {
			            name:'评论数',
			            type:'line',
			            smooth:true,
			            itemStyle: {normal: {areaStyle: {type: 'default'}}},
			            data:['121','435','323']
			        },
			        {
			            name:'点赞数',
			            type:'line',
			            smooth:true,
			            itemStyle: {normal: {areaStyle: {type: 'default'}}},
			            data:['413','654','721']
			        }
			    ]
			};
			topicLineImg.setOption(option);
			
			var topicLineTableHtml = '';
			
			topicLineTableHtml ='<tr><td  width="25%">2015.04.12' +'</td><td  width="25%">60' +'</td><td  width="25%">18' +'</td><td  width="25%">56'+'</td></tr>'
			+'<tr><td  width="25%">2015.04.16' +'</td><td  width="25%">60' +'</td><td  width="25%">88' +'</td><td  width="25%">56'+'</td></tr>'
			+'<tr><td  width="25%">2015.04.19' +'</td><td  width="25%">60' +'</td><td  width="25%">38' +'</td><td  width="25%">76'+'</td></tr>';
			
			
			
			$("#topicLineTable").html(topicLineTableHtml);
	
}

Analysis.qryTopicRepostsToChordResult=function()
{	
	
			var topicRepostsChordImg = echarts.init(document.getElementById("topicRepostsChordImg"));
			
			option = {
				    color : [
				        '#FBB367','#80B1D2','#FB8070','#CC99FF','#B0D961',
				        '#99CCCC','#BEBBD8','#FFCC99','#8DD3C8','#FF9999',
				        '#CCEAC4','#BB81BC','#FBCCEC','#CCFF66','#99CC66',
				        '#66CC66','#FF6666','#FFED6F','#ff7f50','#87cefa',
				    ],
				    title : {
				        x:'right',
				        y:'bottom'
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            restore : {show: true},
				            magicType: {show: true, type: ['force', 'chord']},
				            saveAsImage : {show: true}
				        }
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter : function (params) {
				            if (params.name && params.name.indexOf('-') != -1) {
				                return params.name.replace('-', ' ' + params.seriesName + ' ')
				            }
				            else {
				                return params.name ? params.name : params.data.id
				            }
				        }
				    },
				    legend : {
				        data : [
				            '郝云',
				            '唐禹哲',
				            '熊黛林',
				            '毕福剑 ',
				            '宁泽涛',
				            '英国报姐 ',
				            '以色列',
				            '央视财经',
				            '物流头条',
				            '六小龄童',
				            'James',
				            'Paul',
				            '小泉',
				            '来浪那多',
				            '靖安村',
				            '',
				            '支持',
				            '反对',
				            '未表态'
				        ],
				        orient : 'vertical',
				        x : 'left'
				    },
				    series : [
				        {
				            "name": "支持",
				            "type": "chord",
				            "showScaleText": false,
				            "clockWise": false,
				            "data": [
				                {"name": "郝云"},
				                {"name": "唐禹哲"},
				                {"name": "熊黛林"},
				                {"name": "毕福剑 "},
				                {"name": "宁泽涛"},
				                {"name": "英国报姐 "},
				                {"name": "以色列"},
				                {"name": "央视财经"},
				                {"name": "物流头条"},
				                {"name": "六小龄童"},
				                {"name": "James"},
				                {"name": "Paul"},
				                {"name": "小泉"},
				                {"name": "来浪那多"},
				                {"name": "靖安村"}
				            ],
				            "matrix": [
				                [0,100,0,0,0,0,100,0,0,0,0,0,0,0,0],
				                [10,0,0,0,0,10,10,0,10,0,0,10,10,10,10],
				                [0,0,0,10,0,0,0,0,0,10,10,0,0,0,0],
				                [0,0,100,0,0,100,0,0,0,0,100,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,10,0],
				                [0,100,0,10,0,0,0,0,0,0,0,0,10,0,0],
				                [10,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,10,10,0,0],
				                [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,100,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,100,10,0,0,0,0,0,0,0,0,0,0,0],
				                [0,100,0,0,0,0,0,100,0,0,0,0,0,0,0],
				                [0,100,0,0,0,100,0,100,0,0,0,0,0,0,0],
				                [0,100,0,0,100,0,0,0,0,0,0,0,0,0,100],
				                [0,100,0,0,0,0,0,0,0,0,0,0,0,10,0]
				            ]
				        },
				        {
				            "name": "反对",
				            "type": "chord",
				            "insertToSerie": "支持",
				            "data": [
				                {"name": "郝云"},
				                {"name": "唐禹哲"},
				                {"name": "熊黛林"},
				                {"name": "毕福剑 "},
				                {"name": "宁泽涛"},
				                {"name": "英国报姐 "},
				                {"name": "以色列"},
				                {"name": "央视财经"},
				                {"name": "物流头条"},
				                {"name": "六小龄童"},
				                {"name": "James"},
				                {"name": "Paul"},
				                {"name": "小泉"},
				                {"name": "来浪那多"},
				                {"name": "靖安村"}
				            ],
				            "matrix": [
				                [0,0,100,100,0,100,0,0,100,0,0,0,0,0,0],
				                [0,0,0,10,0,0,0,0,0,10,10,0,0,0,0],
				                [10,0,0,0,0,0,10,10,10,0,0,10,10,0,10],
				                [10,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,10,0,100,0,0,0,10,10,0,0],
				                [10,0,0,0,100,0,10,0,0,0,0,0,0,0,0],
				                [0,0,100,0,0,100,0,0,0,0,0,0,0,0,0],
				                [0,0,100,0,10,0,0,0,0,0,0,0,0,10,0],
				                [10,0,100,0,0,0,0,0,0,0,0,0,0,100,0],
				                [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,100,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,100,0,100,0,0,0,0,0,0,0,0,0,0],
				                [0,0,100,0,100,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,100,10,0,0,0,0,0,0],
				                [0,0,100,0,0,0,0,0,0,0,0,0,0,0,0]
				            ]
				        },
				        {
				            "name": "未表态",
				            "type": "chord",
				            "insertToSerie": "支持",
				            "data": [
				                {"name": "郝云"},
				                {"name": "唐禹哲"},
				                {"name": "熊黛林"},
				                {"name": "毕福剑 "},
				                {"name": "宁泽涛"},
				                {"name": "英国报姐 "},
				                {"name": "电商行业"},
				                {"name": "央视财经"},
				                {"name": "物流头条"},
				                {"name": "六小龄童"},
				                {"name": "James"},
				                {"name": "Paul"},
				                {"name": "小泉"},
				                {"name": "来浪那多"},
				                {"name": "靖安村"}
				            ],
				            "matrix": [
				                [0,0,0,0,100,0,0,100,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				            ]
				        }
				    ]
				};
				                    
				                   
			topicRepostsChordImg.setOption(option);                    
		
			var topicRepostsChordTbody = '';
			
			topicRepostsChordTbody ='<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>'
			+'<tr><td>微博大神'+'</td><td title="赞'+'">哈哈哈' +'</td><td>2015.03.23' +'</td></tr>';
			
			$("#topicRepostsChordTbody").html(topicRepostsChordTbody);
		
}

