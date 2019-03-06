/**导入页面共用部分 */
$(function(){
	header();
	left();
	bottom();
	slider();
	$('.copy_ul').remove();
	$('.link').remove();
	$('.fenye').remove();

});

function slider(){
	var htm = [];
	htm.push('<a href="#" target="_blank"><img src="public/uploads/tupian/20130819152144_269.png" alt="" /></a>');
	htm.push('<a href="#" target="_blank"><img src="public/uploads/tupian/20130724152721_808.png" alt="" /></a>');
	$("#slider").html(htm.join(" "));
}

/**头部导入*/
function header(){
	var htm = [];
	htm.push('<div class="header">');
	htm.push('<h1 class="logo"><a href="/index.html"><img src="public/uploads/20160302180340_262.png" /></a></h1>');
	htm.push(' <div class="telebox">');
	htm.push('	<ul class="tele">');
	htm.push(' <li style=" margin-right:70px;"><i class="teleeni"></i>Contact Person(Jim):<a href="" target="_blank">86-15570781238</a></li>');
	htm.push(' <li><span class="teleen"></span>Email:<a href="skype:jacky1980622?call" onclick="return skypeCheck();">jimmedical@hotmail.com</a></li>');
	htm.push(' </ul>');
	htm.push(' </div>');
	htm.push(' </div>');
	htm.push(' <div class="navbox">');
	htm.push(' <ul>');
	htm.push(' <li><a target="_self" title="Home" href="index.html">Home</a></li>');
	htm.push(' <li><a target="_self" title="Contact Us" href="about-57.html">Contact Us</a></li> ');
	htm.push(' </ul>');
	htm.push(' </div>');
	$(".headerbox").html(htm.join(" "));
}

/**左边菜单导入*/
function left(){
	var htm = [];
	
	htm.push('<ul class="left_ul">																				');
	htm.push('<h2 class="leftname"><span>Brands</span></h2>                                                     ');
	htm.push('<li><a href="porductlist-115.html">Abbott</a></li>                                                ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-117.html">BECKMAN</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-119.html">Sysmex</a></li>                                                ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-118.html">Simens-Bayer</a></li>                                          ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-126.html">Olympus</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-120.html">Hitachi</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-116.html">TOSHIBA</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-124.html">Roche</a></li>                                                 ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-125.html">Johnson</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-127.html">Nihon Kohden</a></li>                                          ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-128.html">ABX</a></li>                                                   ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-129.html">Coulter</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-131.html">Shimadzu</a></li>                                              ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-132.html">Biotemcnica</a></li>                                           ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-133.html">Erba</a></li>                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-134.html">Stago</a></li>                                                 ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="porductlist-130.html">Mindray</a></li>                                               ');
	htm.push('</ul>                                                                                             ');
	htm.push('                                                                                                  ');
	htm.push('<ul class="left_ul margin-top">                                                                   ');
	htm.push('<h2 class="leftname"><span>JIM11309surgical suction pressure regulating table</span></h2>         ');
	htm.push('</ul>                                                                                             ');
	htm.push('<ul class="left_ul margin-top">                                                                   ');
	htm.push('<h2 class="leftname"><span>Category</span></h2>                                                   ');
	htm.push('<li><a href="brandlist-23.html">Source halogen lamp/ HGB</a></li>                                 ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-22.html">Printer</a></li>                                                  ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-27.html">Needle / sample probe/ r</a></li>                                 ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-24.html">Solenoid valve</a></li>                                           ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-25.html">LCD Screen</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-26.html">Syringe Pump</a></li>                                             ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-30.html">O-rings</a></li>                                                  ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-28.html">Vacuum pump / motor </a></li>                                     ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-36.html">Piston tip</a></li>                                               ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-38.html">Diaphragm</a></li>                                                ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-39.html">Drying nozzle</a></li>                                            ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-40.html">Cooler piltier</a></li>                                           ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-33.html">Electrode</a></li>                                                ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-34.html">Cuvette</a></li>                                                  ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-35.html">Filters</a></li>                                                  ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-32.html">Panal keyboard</a></li>                                           ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-31.html">Pump tube</a></li>                                                ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-29.html">Belt</a></li>                                                     ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('<li><a href="brandlist-37.html">Circuit board</a></li>                                            ');
	htm.push('                                                                                                  ');
	htm.push('                                                                                                  ');
	htm.push('</ul>                                                                                             ');
	htm.push('                                                                                                  ');
	htm.push('<div class="news margin-top">                                                                     ');
	htm.push('<h2 class="leftname"><span>News</span></h2>                                                       ');
	htm.push('<ul  class="list_ul">                                                                             ');
	htm.push('<li><a href="/newsrr-49.html">KX-21 hematology analyze...</a></li>                                ');
	htm.push('<li><a href="/newsrr-48.html">Testing equipment mainte...</a></li>                                ');
	htm.push('<li><a href="/newsrr-47.html">Testing equipment mainte...</a></li>                                ');
	htm.push('<li><a href="/newsrr-46.html">CA1500-automatic coagula...</a></li>                                ');
	htm.push('<li><a href="/newsrr-45.html">Beckman biochemical anal...</a></li>                                ');
	htm.push('<li><a href="/newsrr-44.html">Medical equipment servic...</a></li>                                ');
	htm.push('<li><a href="/newsrr-43.html">Automatic biochemical an...</a></li>                                ');
	htm.push('<li><a href="/newsrr-42.html">2013 World biochemistry,...</a></li>                                ');
	htm.push('</ul>                                                                                             ');
	htm.push('</div>                                                                                            ');
	$(".leftbox").html(htm.join(" "));
}

/**左边菜单导入*/
function bottom(){
	var htm = [];
htm.push('<span class="hps" closure_uid_699832821="1181">Address：                         ');
htm.push('</span><span class="hps" closure_uid_699832821="1182">HeNan,FLAT/RM 1605 HO KING COMMERCIAL CENTRE 2-16                                                                                 ');
htm.push('FA YUEN STREET MONGKOK HONG KONG &nbsp;</span><span a="undefined" b="4" class="short_text" closure_uid_699832821="37" id="result_box" lang="en" ud="null">                              ');
htm.push('<span class="hps" closure_uid_699832821="1192">Phone</span><span closure_uid_699832821="1193">:：</span>                                                                                ');
htm.push('<span class="hps" closure_uid_699832821="1194">86-15570781238&nbsp; </span></span></span></span>                                                                                        ');
htm.push('<span a="undefined" b="4" class="short_text" closure_uid_699832821="37" id="result_box" lang="en" ud="null"><span class="hps"closure_uid_699832821="1196">Contact： Jim</span></span>   ');
htm.push('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                    ');
htm.push('<span a="undefined" b="4" class="short_text" closure_uid_699832821="37" id="result_box" lang="en" ud="null">                                                                            ');
htm.push('<span class="hps" closure_uid_699832821="1204">Mailbox：</span></span>                                                                                                                  ');
htm.push('<a href="mailto:jacky198062@hotmail.com">jimmedical@hotmail.com                                     ');
	$("#bottom").html(htm.join(" "));
}
