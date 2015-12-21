$(document).ready(function() {
	//初始加载1
	var url = basePath+"pages/TodayOverView/qryTop5Blog.do";
	$.ajax({
	   type: "POST",
	   url:  url,	
	   async: true, 
	   success: function(result){
		   if(result.isOK="true"){
			   //覆盖时间范围
			   $("#startDateCircle").html(result.startDate);
			   $("#endDateCircle").html(result.endDate);
			   //画数据列表
			   //先置空
		   		$("#top5List").html("");
		   		var tBody="";
		   		//遍历数据
				$(result.data).each(
						function(idx, item) {
							tBody+='<tr><td>'+(idx+1)+'</td><td><a class="biaoti" target=”_blank" href="'+item.userUrl+'">'+item.custName+'</a></td><td>'+item.incGuanZhuNum+'</td><td>'+item.incFengSiNum+'</td><td>'+item.incWeiBoNum+'</td><td>'+item.incNum+'</td></tr>'
				});
				$("#top5List").html(tBody);
				
				//画圆圈
				$("#top5Circle").html("");
				var circleDiv ="";
				var circleClass="circle sun";
				$(result.data).each(
						function(idx, item) {
							if(idx=="0"){
								circleClass="circle sun";
							}else if(idx=="1"){
								circleClass="circle green";
							}else if(idx=="3"){
								circleClass="circle purple";
							}else if(idx=="2"){
								circleClass="circle blue";
							}else if(idx=="4"){
								circleClass="circle yellow";
							}
							circleDiv+='<div class="'+circleClass+'" ><h4>'+item.custName+'</h4> <div class="microblog-tcc hide">'
							+'<div class="microblog"><div class="microblog_title">'+item.custName+' '+item.createDate+''+'</div>'
							+'<ul><li><span class="microblog_data">'+item.guanZhuNum+'</span><span class="microblog_name">关注数</span><li><span class="microblog_data">'+item.fengSiNum+'</span><span class="microblog_name">粉丝数</span><li class="last"><span class="microblog_data">'+item.weiBoNum+'</span><span class="microblog_name">微博数</span></li> '
							+'</ul>'
							+'</div>'
							+'<span class="jg_arrow"></span> </div></div>';	
					
							
				});
				   
				$("#top5Circle").html(circleDiv);
		   }
		   return true;
	   }
	});
	
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		$(".microblog-tcc").hide();
		 if(target.closest(".sun").length ==1||target.closest(".green").length ==1||target.closest(".purple").length ==1
				 ||target.closest(".blue").length ==1||target.closest(".yellow").length ==1){
			target.siblings(".microblog-tcc").show();
		}else{
			target.siblings(".microblog-tcc").hide(); 
		}
	}) ;
	//初始化加载2
	var url2 = basePath+"pages/TodayOverView/qryTop5Post.do";
	$.ajax({
		   type: "POST",
		   url:  url2,	
		   async: true, 
		   success: function(result){
			   if(result.isOK="true"){
				   //覆盖时间范围
				   $("#startDateHuati").html(result.startDate);
				   $("#endDateHuati").html(result.endDate);
				   //画数据列表
				   //先清空
				   $("#top5HuatiList").html();
				   var tBody="";
					$(result.data).each(
							function(idx, item) {
								var vDetail=item.cDetail.length>12 ? item.cDetail.substr(0,11) : item.cDetail;
								tBody+='<tr><td>'+(idx+1)+'</td><td><a class="biaoti" target=”_blank" href="'+item.cDetailUrl+'">'+vDetail+'...</a></td><td>'+item.incForwardNum+'</td><td>'+item.incCommentNum+'</td><td>'+item.incPraiseNum+'</td><td>'+item.incScore+'</td></tr>'
					});
					$("#top5HuatiList").html(tBody);
					//画柱状图
					$("#top5Huati").html();
					var uls = "";
					var width="100";
					$(result.data).each(
							function(idx, item) {
								var vDetail=item.cDetail.length>7 ? item.cDetail.substr(0,6) : item.cDetail;
								if(idx=="0"){
									width ="100";
								}else if(idx=="1"){
									width ="80";
								}else if(idx=="2"){
									width ="70";
								}else if(idx=="3"){
									width ="50";
								}else if(idx=="4"){
									width ="20";
								}
								uls+='<li><label>'+vDetail+'...</label><div class="jg_progress"><span class="jg_graph" style="width:'+width+'%;"></span></div>'
											+'<div class="topic-tcc hide" id="about_"'+idx+'><div class="topic">'
											+'<div class="topic-cont"><div class="topic-title">'+vDetail+'<span class="topic-date">'+item.cDate+'</span></div>'
											+'<div class="topic-main">'+item.cDetail+" — 来自	"+item.cFromChannel+'</div>'
											+'<ul><li><span class="topic-icon"></span>'+item.praiseNum+'</li><li><span class="topic-icon two"></span>'+item.commentNum+'</li><li><span class="topic-icon three"></span>'+item.forwardNum+'</li></ul>'	
											+'</div>'
											+'</div><span class="jg_arrow"></span></div>'
											+'</li>'
					});
					$("#top5Huati").html(uls);
			   }
			   return true;
		   }
		});
	
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		$(".topic-tcc").hide();
		 if(target.parent(".jg_progress").siblings(".topic-tcc").length ==1){
			 target.parent(".jg_progress").next().show();
			 target.parent(".jg_progress").next().find(".topic").niceScroll();
		}else{
			target.parent(".jg_progress").next().hide(); 
		}
	}) ;
});