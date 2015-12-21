<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>热词发现</title>
<link href="<%=basePath %>test/css/style.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>test/css/global.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>test/css/reset.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<!--header-->
	<div class="jg_header">
  		<div class="wrapper">
          <div class="jg_logo left">
          	舆情系统
          </div>
         
          <ul class="jg_nav right">
		     			<li><a href="<%=basePath %>test/Discover.jsp" class="cur">热词发现</a></li>
             			<li><a href="<%=basePath %>test/Analysis.jsp">基本分析</a></li>
              			<li><a href="<%=basePath %>test/Compare.jsp" >热度对比</a></li>
                       </ul>      
        </div>   	
	</div>
	<!--header-->
	<!--banner-->
	<div class="wrapper">
		<div class="jg_area">
			<dl>
				<dt>数据源:</dt>
				<dd>微博</dd>
			</dl>
			<dl>
				<dt>区域:</dt>
				<dd id="selectCity">全部</dd>
			</dl>

		</div>
	</div>
	<!--banner-->
	<!--cont-->
	<div class="wrapper">
		<!--热点微博-->
		<div class="jg_cont_tit">
			热门人物<span class="jg_cont_tit_fu">TOP5排行榜</span>
		</div>
		<div class="jg_cont">
			<div class="jg_cont-l left" id="top5Circle">
				<div class="circle sun">
					<h4>英国报姐</h4>
				</div>
				<div class="circle green">
					<h4>我的朋友是个呆B</h4>
					<!--弹出层-->
					<div class="microblog-tcc hide">
						<div class="microblog">
							<div class="microblog_title">微博搞笑排行榜</div>
							<ul>
								<li><span class="microblog_data">54</span> <span
									class="microblog_name">话题</span></li>
								<li><span class="microblog_data">998615</span> <span
									class="microblog_name">粉丝</span></li>
								<li class="last"><span class="microblog_data">56400</span>
									<span class="microblog_name">微博数</span></li>
							</ul>
						</div>
						<span class="jg_arrow"></span>
					</div>
					<!--弹出层-->
				</div>
				<div class="circle purple">
					<h4>知乎大神</h4>
				</div>
				<div class="circle blue">
					<h4>北京人不知道的北京事儿</h4>
				</div>
				<div class="circle yellow">
					<h4>头条新闻</h4>
				</div>
			</div>
			<div class="jg_cont-r right">
				<div class="jg_cont_data_tit">相关数据</div>
				<table class="jg_table">
					<thead>
						<tr>
							<td>次序</td>
							<td>微博名称</td>
							<td>净增关注数</td>
							<td>净增粉丝数</td>
							<td>净增微博数</td>
							<td>总净增数</td>
						</tr>
					</thead>
					<tbody id="top5List">
						<tr>
							<td>1</td>
							<td>北京人不知道的北京事儿</td>
							<td>100</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
						</tr>
						<tr>
							<td>2</td>
							<td>北京人不知道的北京事儿</td>
							<td>100</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
						</tr>
						<tr>
							<td>3</td>
							<td>北京人不知道的北京事儿</td>
							<td>100</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
						</tr>
						<tr>
							<td>4</td>
							<td>北京人不知道的北京事儿</td>
							<td>100</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
						</tr>
						<tr>
							<td>5</td>
							<td>北京人不知道的北京事儿</td>
							<td>100</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
						</tr>
					</tbody>
				</table>
				<div class="jg_cont_data_xx">
					从<span id="startDateCircle">2015-04-01</span>到<span
						id="endDateCircle">2015-04-07</span>,<strong>最近7天</strong>,在采集微博中，计算出时间区间内微博的净增关注数，净增粉丝数、净增微博数，并作为衡量热门微博的参数指标，计算出总净增数，然后进行排名，列出TOP5的热门微博的相关数据。
				</div>
				<div style="clear:both;"></div>
			</div>
		</div>
		<!--热点微博-->
		<!--热点帖子-->
		<div class="jg_cont_tit">
			热门话题<span class="jg_cont_tit_fu">TOP5排行榜</span>
		</div>
		<div class="jg_cont">
			<div class="jg_cont-l left">
				<ul class="jg_huati" id="top5Huati">
					<li><label>福建PX爆炸</label>
						<div class="jg_progress">
							<span class="jg_graph" style="width:100%;"></span>
						</div></li>
					<li><label>剑侠传奇</label>
						<div class="jg_progress">
							<span class="jg_graph" style="width:80%;"></span>
						</div></li>
					<li><label>医药改革</label>
						<div class="jg_progress">
							<span class="jg_graph" style="width:70%;"></span>
						</div> <!--弹出层-->
						<div class="topic-tcc hide" id="about">
							<div class="topic">
								<!--list-->
								<div class="topic-cont">
									<div class="topic-title">
										关于医药改革<span class="topic-date">2015.08.08</span>
									</div>
									<div class="topic-main">关于医药改革政府但是看受到官方广告刚刚还是短...</div>
									<ul>
										<li><span class="topic-icon"></span>54</li>
										<li><span class="topic-icon two"></span>244</li>
										<li><span class="topic-icon three"></span>355</li>
									</ul>
								</div>
								<!--list-->
								<!--list-->
								<div class="topic-cont">
									<div class="topic-title">
										关于医药改革<span class="topic-date">2015.08.08</span>
									</div>
									<div class="topic-main">关于医药改革政府但是看受到官方广告刚刚还是短...</div>
									<ul>
										<li><span class="topic-icon"></span>54</li>
										<li><span class="topic-icon two"></span>244</li>
										<li><span class="topic-icon three"></span>355</li>
									</ul>
								</div>
								<!--list-->
							</div>
							<span class="jg_arrow"></span>
						</div> <!--弹出层--></li>
					<li><label>卫生防疫</label>
						<div class="jg_progress">
							<span class="jg_graph" style="width:50%;"></span>
						</div></li>
					<li><label>世界卫生日</label>
						<div class="jg_progress">
							<span class="jg_graph" style="width:20%;"></span>
						</div></li>
				</ul>
			</div>
			<div class="jg_cont-r right">
				<div class="jg_cont_data_tit">相关数据</div>
				<table class="jg_table">
					<thead>
						<tr>
							<td>次序</td>
							<td>帖子摘要</td>
							<td>净增转发数</td>
							<td>净增评论数</td>
							<td>净增点赞数</td>
							<td>总净增数</td>
						</tr>
					</thead>
					<tbody id="top5HuatiList">
						<tr>
							<td>1</td>
							<td>福建PX爆炸</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
							<td>98</td>
						</tr>
						<tr>
							<td>2</td>
							<td>剑侠传奇</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
							<td>98</td>
						</tr>
						<tr>
							<td>3</td>
							<td>医药改革</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
							<td>98</td>
						</tr>
						<tr>
							<td>4</td>
							<td>卫生防疫</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
							<td>98</td>
						</tr>
						<tr>
							<td>5</td>
							<td>世界卫生日</td>
							<td>100</td>
							<td>7</td>
							<td>98</td>
							<td>98</td>
						</tr>
					</tbody>
				</table>
				<div class="jg_cont_data_xx">
					从<span id="startDateHuati">2015-04-01</span>到<span
						id="endDateHuati">2015-04-07</span>,<strong>最近7天</strong>,在监控的微博中，计算出时间区间内的帖子的净增转载数、净增评论数、净增点赞数，并作为衡量热门帖子的参数指标，计算出总净增数，然后进行排名，列出TOP5的热门帖子的相关数据。
				</div>
				<div style="clear:both;"></div>
			</div>
		</div>
		<!--热点话题-->
	</div>
	<!--cont-->
	<!-- footer -->

	<!-- footer -->
<script type="text/javascript" src="<%=basePath %>test/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/effect.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/jquery.nanoscroller.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/discover.js"></script>
<script type="text/javascript">
	  var basePath = "<%=basePath%>";
</script>
<script type="text/javascript">
	  $(function(){
        $('#about .topic').niceScroll();
     });	
</script>
</body>
</html>
