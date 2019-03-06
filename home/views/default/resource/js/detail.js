/**详情页数据渲染 */
$(function(){
	loadDetail();
});

function loadDetail(){
	var htm = [];
	var i = getQueryString("id");
	var obj = dataDetail[i-1];
	htm.push('<h1 class="h1_name">																							');
	htm.push('	<span class="name">Exhibit Center</span>                                                                    ');
	htm.push('	<span class="more1">Current Location：<a href="#">Products</a>&nbsp;&gt;&nbsp;                              ');
	htm.push('		<a href="#">'+obj.parent+'</a> &nbsp;&gt;&nbsp;                                                                 ');
	htm.push('		<a href="#">'+obj.name+'</a>                                                     ');
	htm.push('	</span>                                                                                                     ');
	htm.push('</h1>                                                                                                         ');
	htm.push('<div class="page_porducts">                                                                                   ');
	htm.push('	<div class="page_porduct clearfix">                                                                         ');
	htm.push('		<div class="page_porimg pl">                                                                            ');
	htm.push('			<span>                                                                                              ');
	htm.push('				<a href="'+obj.img+'" class="MagicThumb" id="zoom1"          ');
	htm.push('				rel=" zoom-width:400px;zoom-height:400px;disable-expand: true;selectors-effect:pounce;">        ');
	htm.push('					<img src="'+obj.img+'" />                             ');
	htm.push('				</a>                                                                                            ');
	htm.push('			</span>                                                                                             ');
	htm.push('		</div>                                                                                                  ');
	htm.push('	  <div class="page_right pl">                                                                               ');
	htm.push('			<p class="p1"><strong>Accessory Name：</strong>'+obj.name+'</p>              ');
	htm.push('			<p class="p2"><strong>Accessories Model：</strong>'+obj.model+'</p>                                              ');
	htm.push('			<p class="p2"><strong>Accessories Price：</strong>'+obj.price+'</p>                                             ');
	htm.push('			<p class="p3"><strong>Accessories Abstract：</strong>'+obj.abstract+'</p>        ');
	htm.push('		</div>                                                                                                  ');
	htm.push('		<div class="clear"></div>                                                                               ');
	htm.push('	</div>                                                                                                      ');
	htm.push('	                                                                                                            ');
	htm.push('	<div class="page_pord_cont">                                                                                ');
	htm.push('		<h1 class="page_h1">Accessories Description</h1>                                                        ');
	htm.push('		<div class="page_pord_text">                                                                            ');
	htm.push('			<p>'+obj.name+'</p>                                                          ');
	htm.push('		</div>                                                                                                  ');
	htm.push('	</div>                                                                                                      ');
	htm.push('</div>                                                                                                        ');
	$(".porducts").html(htm.join(' '));
}

/**获得URL参数*/
function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

/**详情数据*/
var dataDetail = [
{id:1,parent:"Abbott",name:"JIM10629abbott CD1800 sample needle",model:"",
img:"public/uploads/product/tw_20131107140800_573.jpg",price:"0",
abstract:"JIM10629abbott CD1800 sample needle"},
{id:2,parent:"Abbott",name:"JIM10609abbott 1ml plastic syringe check",model:"",
img:"public/uploads/product/tw_20131107121527_983.jpg",price:"0",
abstract:"JIM10609abbott 1ml plastic syringe check valve"}



];
