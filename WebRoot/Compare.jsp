<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>热度对比</title>
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
		     			<li><a href="<%=basePath %>test/Discover.jsp" >热词发现</a></li>
             			<li><a href="<%=basePath %>test/Analysis.jsp">基本分析</a></li>
              			<li><a href="<%=basePath %>test/Compare.jsp" class="cur">热度对比</a></li>
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
       <!--热度对比-->
    	<div class="jg_area_cont">
        	<div class="jg_area_cont_title">热度对比</div>
            <div class="jg_area_cont_tit"><span class="jg_area_cont_tit_ico"></span>关注数、粉丝数、微博数对比</div>
           <div class="jg_cont b635">
                	<div class="jg_cont-l w595 left" id="fansImg" style="height: 370px;">
                    	
                    </div>
                    <div class="jg_cont-r w325 right">
                    	<div class="jg_cont_data_tit">相关数据</div>
                    	<table class="jg_table">
                        <thead>
                        	<tr>
                            	<td>微博名</td>
                                <td>关注数</td>
                                <td>粉丝数</td>
                                <td>微博数</td>
                             </tr>
                        </thead>
                        <tbody id="fansNum">    
                            
                        </tbody>    
                        </table>
                    </div>
                </div>
          </div>
         <!--热度对比-->
         <!--微博分析-->
    	<div class="jg_area_cont">
        	<div class="jg_area_cont_title">人群特征对比</div>
            <div class="jg_cont b635">
                	<div class="jg_cont-l w595 left">
                    	<div class="jg_chart_tit">
                       		 分析性别比例
                        </div>
                        
						<div id="sexCompare" style="height: 370px;"></div>
                    </div>
                    
                    <div class="jg_cont-r w325 right">
                    	<div class="jg_cont_data_tit">相关数据</div>
                    	<table class="jg_table">
                        <thead>
                        	<tr>
                            	<td>微博名</td>
                                <td>女性</td>
                                <td>男性</td>
                                <td>女性比例</td>
                                <td>男性比例</td>
                             </tr>
                        </thead>
                        <tbody id="fansSexNum">    
                            
                        </tbody>    
                        </table>
                    </div>
                </div>
          </div>
         <!--微博分析-->
     </div>   
    <!--cont-->
 
<script type="text/javascript" src="<%=basePath %>test/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=basePath %>test/s/effect.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/pop-window.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/echarts-plain-map_high.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/public.min.js"></script>
<script type="text/javascript" src="<%=basePath %>test/js/compare.js"></script>
<script type="text/javascript">
var basePath = "<%=basePath%>";
$(document).ready(function()
{
	Compare.query();
});
</script>
</body>
</html>

