$(function(){
	//表格高亮
	function trHighLight(id){
		$(id).live({
			mouseenter:function(){
				$(this).addClass('high-light');
			},
			mouseleave:function(){
				$(this).removeClass('high-light');
			}
		});
	}
	trHighLight('.jg_table tbody tr');
	//显示隐藏
	$('.green').click(function(){
		$('.microblog-tcc').show();
		});
	$(document).bind("click",function(e){ 
		var target = $(e.target); 
		if(target.closest(".green").length == 0){ 
			$(".microblog-tcc").hide(); 
		} 
	}) ;
	//time
	$('.jg_area_time a').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		})
	

});