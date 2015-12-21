<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>属性分析</title>
<link href="<%=basePath %>test/css/style.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>test/css/global.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath %>test/css/reset.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<!--header-->
	<div class="jg_header">
  		<div class="wrapper">
          <div class="jg_logo left">舆情系统</div>
         
          <ul class="jg_nav right">
  			<li><a href="<%=basePath %>test/Discover.jsp" >热词发现</a></li>
     		<li><a href="<%=basePath %>test/Analysis.jsp" class="cur">基本分析</a></li>
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
		<!--热度走势-->
		<div class="jg_area_cont">
			<div class="jg_area_cont_title">
				热度走势<span class="jg_area_time" id="fansTime">时间:<a
					href="javascript:analysis.queryBlogNum();" class="cur">最近7天</a><a
					href="javascript:analysis.queryBlogNum();">最近30天</a><a
					href="javascript:analysis.queryBlogNum();">最近60天</a></span>
			</div>
			<!--cont01-->
			<div class="jg_area_cont_tit">
				<span class="jg_area_cont_tit_ico"></span>整体趋势
			</div>
			<div class="jg_cont b635">
				<div class="jg_cont-l w594 left" id="fansLineImg"
					style="width: 630px;height: 345px;padding-left: 0px;padding-right: 0px;">

				</div>
				<div class="jg_cont-r w325 right">
					<div class="jg_chart_tit">累计总数</div>
					<div class="jg_chart_table">
						<table border="0">
							<tr>
								<td>
									<table class="leijizongshu" id="fansSumTable">
									</table>
								</td>
							</tr>
						</table>
					</div>
					<div class="jg_cont_data_xx bor-no" id="fansSumSpan"></div>
				</div>

			</div>
			<!--cont01-->
			<!--cont02-->
			<div class="jg_area_cont_tit">
				<span class="jg_area_cont_tit_ico"></span>明细分布
			</div>
			<div class="jg_cont b635">
				<div class="jg_cont-l w594 left" id="fansBarImg"
					style="width: 630px;height: 345px;padding-left: 0px;padding-right: 0px;">

				</div>
				<div class="jg_cont-r w325 right">
					<div class="jg_cont_data_tit">相关数据</div>
					<table class="jg_table">
						<thead>
							<tr>
								<td width="34%">微博名称</td>
								<td width="22%">净增关注数</td>
								<td width="22%">净增粉丝数</td>
								<td width="22%">净增微博数</td>
							</tr>
						</thead>
					</table>
					<div class="jg_table_k" style="max-height:320px; overflow-y:auto;">
						<table class="jg_table">
							<tbody id="fansBarTable">

							</tbody>
						</table>
					</div>
				</div>

			</div>
			<!--cont02-->
		</div>
		<!--热度走势-->
		<!--人群特征-->
		<div class="jg_area_cont">
			<div class="jg_area_cont_title">
				属性分析<span class="jg_area_time">时间:<font id="nowTime"></font></span>
			</div>
			<!--cont01-->
			<!--cont01-->
            <div class="jg_area_cont_tit"><span class="jg_area_cont_tit_ico"></span>粉丝性别分布</div>
            <div class="jg_cont">
                	<div class="jg_cont-l left">
                    	<div class="jg_chart_tit">
                        整体分布
                        </div>
                        <div class="jg_chart_table">
                        	<table border="0">
                                  <tr>
                                    <td>
                                    <div class="jg_gender_chart">
                                    <div class="jg_gender_chart-l left">
                                    	<span class="jg_gender">男</span>
                                        <span class="jg_percentage">70%</span>
                                     </div>
                                     <div class="jg_gender_chart-r left seven">&nbsp;
                                     </div>
                                    </div>
                                    </td>
                                    <td>
                                     <div class="jg_gender_chart right women">
                                     <div class="jg_gender_chart-l left">
                                    	<span class="jg_gender">女</span>
                                        <span class="jg_percentage">30%</span>
                                     </div>
                                     <div class="jg_gender_chart-r three left">&nbsp;
                                     </div>
                                    </div>
                                    </td>
                                  </tr>
                                  
                                </table>
						</div>
                    </div>
                    <div class="jg_cont-r right" >
                   		<div class="jg_chart_tit">
                        	分布明细
                        </div>
                        <div class="jg_chart_table">
							<div id="xingbiefenbu" style="height:300px;">
                        	
							</div>
						</div>	
                  </div>
          </div>
          <!--cont01-->
			<!--cont02-->
			<div class="jg_area_cont_tit">
				<span class="jg_area_cont_tit_ico"></span>粉丝区域分布
			</div>
			<div class="jg_cont b635">
				<div class="jg_cont-l w594 left" id="fansMapImg"
					style="width: 630px;height: 545px;padding-left: 0px;padding-right: 0px;">

				</div>
				<div class="jg_cont-r w325 right">
					<div class="jg_cont_data_tit">粉丝数TOP10</div>
					<ul class="jg_top10" id="cityUl">
					</ul>
				</div>
			</div>
			<!--cont02-->
		</div>
		<!--人群特征-->
		<!--微博分析-->
		<div class="jg_area_cont">
			<div class="jg_area_cont_title">
				微博分析<span class="jg_area_time" id="blogTime">时间:<a
					href="javascript:analysis.queryBlogData();" class="cur">最近7天</a><a
					href="javascript:analysis.queryBlogData();">最近30天</a><a
					href="javascript:analysis.queryBlogData();">最近60天</a></span>
			</div>
			<!--cont01-->
			<div class="jg_area_cont_tit">
				<span class="jg_area_cont_tit_ico"></span>帖子排行TOP5
			</div>
			<div class="jg_cont">
				<div class="jg_cont-l left">

					<ul class="jg_huati" id="top5Huati">

					</ul>
				</div>
				<div class="jg_cont-r right">
					<div class="jg_cont_data_tit">相关数据</div>
					<table class="jg_table">
						<thead>
							<tr>
								<td>序号</td>
								<td>帖子摘要</td>
								<td>转发数</td>
								<td>评论数</td>
								<td>点赞数</td>
								<td>总数</td>
							</tr>
						</thead>
						<tbody id="top5HuatiList">

						</tbody>
					</table>
				</div>
			</div>
			<!--cont01-->
			<!--cont02-->
			<div class="jg_area_cont_tit">
				<span class="jg_area_cont_tit_ico"></span><span id="topicTrend">传播趋势图</span>
			</div>
			<!--cont02-->
			<!--cont03-->
			<div class="jg_cont b635">
				<div class="jg_cont-l w594 left" id="topicLineImg"
					style="width: 630px;height: 345px;padding-left: 0px;padding-right: 0px;">
				</div>
				<div class="jg_cont-r w325 right">
					<div class="jg_cont_data_tit">相关数据</div>
					<table class="jg_table">
						<thead>
							<tr>
								<td width="25%">时间</td>
								<td width="25%">转发数</td>
								<td width="25%">评论数</td>
								<td width="25%">点赞数</td>
							</tr>
						</thead>
					</table>
					<div class="jg_table_k" style="max-height:320px; overflow-y:auto;">
						<table class="jg_table">
							<tbody id="topicLineTable">

							</tbody>
						</table>
					</div>
				</div>

			</div>
			<!--cont03-->
			<div class="jg_area_cont_tit">
				<span class="jg_area_cont_tit_ico"></span><span id="topicTopo">传播拓扑图</span>
			</div>
			<div class="jg_cont b635">
				<div class="jg_cont-l w594 left" id="topicRepostsChordImg"
					style="width: 630px;height: 450px;padding-left: 0px;padding-right: 0px;">
				</div>
				<div class="jg_cont-r w325 right">
					<div class="jg_cont_data_tit">相关数据</div>
					<table class="jg_table">
						<thead>
							<tr>
								<td width="30%">转发人</td>
								<td width="40%">转发内容</td>
								<td width="30%">时间</td>
							</tr>
						</thead>
					</table>
					<div class="jg_table_k" style="max-height:400px; overflow-y:auto;">
						<table class="jg_table">
							<tbody id="topicRepostsChordTbody">

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!--微博分析-->


	</div>
	<!--cont-->

	<!--弹出层-->
<script type="text/javascript" src="<%=basePath %>test/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/effect.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/pop-window.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/jquery.nanoscroller.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/echarts-all.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/public.min.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/analysis.js"></script>
<script type="text/javascript">
var basePath = "<%=basePath%>";
$(document).ready(function()
{		
	Analysis.query();
});
</script>
</body>
</html>
