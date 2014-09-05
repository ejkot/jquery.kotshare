// JQuery social share plugin
//  -- mainclass - class for UL block
//  -- buttons - switch share button to on/off, default - all switch on
//  -- show count - show count of shares, (google+ featured)
//  -- share url - url for share
// -----------------------------------------------
// -- kotshare.css - styles for plugin
// -- sh-sprite.png - social icons
// -- ejkot software developing -----------------------
// 
(function($, window, undefined){
$.fn.kotshare = function(options) {
  var options = jQuery.extend({
	mainclass : 'social-share',
	buttons : { 'fb' : true, 'vk' : true, 'tw' : true, 'ok' : true, 'gp' : true},
	showcount : true,
	showzero : true,
	shareurl : ''
  },options);
  if (options.buttons.fb == undefined) options.buttons.fb=true;
  if (options.buttons.vk == undefined) options.buttons.vk=true;
  if (options.buttons.tw == undefined) options.buttons.tw=true;
  if (options.buttons.ok == undefined) options.buttons.ok=true;
  if (options.buttons.gp == undefined) options.buttons.gp=true;
   this.each(function(i){ 
		var my=jQuery(this).get(0);
		var ktitle=$("meta[name='twitter:title']").attr('content');
		if (ktitle==undefined) ktitle=' '; else ktitle+=' : ';
		var kdescr=$("meta[name='twitter:description']").attr('content');
		if (kdescr==undefined) kdescr=' ';
		twtext='&text='+ktitle+kdescr;
		var myhtml='';
		myhtml+='<ul class="'+options.mainclass+'">';
		if (options.buttons.fb) myhtml+='<li class="fb"><a href="http://www.facebook.com/sharer.php?u='+options.shareurl+'" id="fb-id'+i+'">FACEBOOK</a></li>';
		if (options.buttons.vk) myhtml+='<li class="vk"><a href="http://vkontakte.ru/share.php?url='+options.shareurl+'" id="vk-id'+i+'">¬ ŒÕ“¿ “≈</a></li>';
		if (options.buttons.tw) myhtml+='<li class="tw"><a href="http://twitter.com/share?url='+options.shareurl+twtext+'" id="tw-id'+i+'">TWITTER</a></li>';
		if (options.buttons.ok) myhtml+='<li class="ok"><a href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl='+options.shareurl+'" id="ok-id'+i+'">Œ </a></li>';
		if (options.buttons.gp) myhtml+='<li class="gp"><a href="https://plus.google.com/share?url='+options.shareurl+'" id="gp-id'+i+'">GOOGLE+</a></li>';
		myhtml+='</ul>';
		$(my).html(myhtml);
		if (options.buttons.fb && options.showcount) {
			$.getJSON('http://graph.facebook.com/'+options.shareurl+'?callback=?', function(data){
				if (data.shares!==undefined) var cnt=data.shares; else var cnt=0;
				if (options.showzero || cnt>0) $("#fb-id"+i).after("<b>"+cnt+"</b>");
				});
			}
		if (options.buttons.tw && options.showcount) {
			$.getJSON('http://urls.api.twitter.com/1/urls/count.json?url='+options.shareurl+'&callback=?', function(data){
				if (data.count!==undefined) var cnt=data.count; else var cnt=0;
				if (options.showzero || cnt>0) $("#tw-id"+i).after("<b>"+cnt+"</b>");
				});
			}
					var iza=i;
		if (options.buttons.vk && options.showcount) {
			$.getScript('http://vk.com/share.php?act=count&index='+i+'&url='+options.shareurl)

				if (!window.VK) window.VK = {};
				window.VK.Share = {
					count: function(idx, number) {
					cnt = number;
					if (options.showzero || cnt>0) $("#vk-id"+idx).after("<b>"+cnt+"</b>");
					}
				}				
		}
			
		if (options.buttons.ok && options.showcount) {
			$.getJSON('http://appsmail.ru/share/count/'+options.shareurl+'?callback=?', function(data){
				if (data.share_ok!==undefined) var cnt=data.share_ok; else var cnt=0;
				if (options.showzero || cnt>0) $("#ok-id"+i).after("<b>"+cnt+"</b>");
				});
			}	
			
		
		$(my).find("ul li a").on('click',function(){
		var zcnt=parseInt($(this).next("b").html());
		zcnt++;
		$(this).next("b").html(zcnt);
		
		var sizex=$(window).width();
		if (sizex>=700) sizex=700;
		window.open($(this).attr("href"),'displayWindow', 'width='+sizex+',height=400,left=200,top=100,location=no, directories=no,status=no,toolbar=no,menubar=no');
		return false;
		});
   });
  }
})(jQuery, window);