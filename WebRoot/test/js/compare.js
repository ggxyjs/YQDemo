var Compare={};

//查询按钮
Compare.query=function()
{
	Compare.queryBlogInfoNumResult();
	Compare.queryFansSexNumResult();
}

//关注数、粉丝数、微博数对比  结果处理
Compare.queryBlogInfoNumResult=function()
{
	var fansImg = echarts.init(document.getElementById("fansImg"));

	option = {
	   
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'right',
	        y : 'bottom',
	        data:['小泉','James']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    polar : [
	       {
	           indicator : [
	               { text: '关注数', max: 16000},
	               { text: '微博数', max: 16000},
	               { text: '粉丝数', max: 300000},
	            ]
	        }
	    ],
	    calculable : true,
	    series : [
	        {
	            name: '小泉 vs James',
	            type: 'radar',
	            data : [
	                {
	                    value : [9300, 13265, 25641],
	                    name : '小泉'
	                },
	                 {
	                    value : [5000, 6546, 128000],
	                    name : 'James'
	                }
	            ]
	        }
	    ]
	};
	fansImg.setOption(option);	
	var fansNumHtml = '';

	fansNumHtml = '<tr><td>小泉' + '</td><td>9300' + '</td><td>13265'  + '</td><td>25641'  + '</td></tr>'
	+'<tr><td>James' + '</td><td>5000' + '</td><td>6546'  + '</td><td>128000'  + '</td></tr>';
		
	$("#fansNum").html(fansNumHtml);
}

//人群特征对比  结果处理
Compare.queryFansSexNumResult=function()
{
		var sexHtml = '<tr><td colspan="2"><div class="echart_custom_bar right"><label class="item"><span class="icon_squ" style="background-color:#9FD7FB;" ></span>女</label><label class="item"><span class="icon_squ" style="background-color:#FF7F50;"></span>男</label></div></td></tr>';
		
		$("#sexTable").html(sexHtml);	
		var sexImg = echarts.init(document.getElementById("sexCompare"));
		
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
			            '小泉','James'
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
			            center : ['35%', '30%'],
			            radius : radius,
			            x: '0%', // for funnel
			            //itemStyle : labelFromatter,
			            data : [
			                {name:'', value:46, itemStyle : labelBottom},
			                {name:'小泉', value:54,itemStyle : labelTop}
			            ]
			        },
			        {
			            type : 'pie',
			            center : ['65%', '30%'],
			            radius : radius,
			            x:'20%', // for funnel
			            itemStyle : labelFromatter,
			            data : [
			                {name:'', value:56, itemStyle : labelBottom},
			                {name:'James', value:44,itemStyle : labelTop}
			            ]
			        },
			    ]
			};
		
		sexImg.setOption(option);
		console.log(option);
		console.log(sexImg);

		var fansexnum='';
		fansexnum = '<tr><td>小泉</td><td>6100</td> <td>8317</td> <td>48%</td><td>52%</td> </tr>'+'<tr><td>James</td><td>8100</td> <td>7131</td> <td>56%</td><td>44%</td> </tr>';
	    $("#fansSexNum").html(fansexnum);    
	  
}

