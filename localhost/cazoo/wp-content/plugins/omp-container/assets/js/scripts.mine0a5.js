!function(i,t){"use strict";var n=i(t),e=/mobi/i.test(navigator.userAgent),h=function(){var i={viewWidth:void 0,viewHeight:void 0,inPX:{vw:void 0,vh:void 0,vmin:void 0,vmax:void 0}},t=function(){var t=i.viewWidth;if(i.viewWidth=n.width(),t===i.viewWidth)return!1;i.viewHeight=window.innerHeight||n.height(),i.inPX.vw=.01*i.viewWidth,i.inPX.vh=.01*i.viewHeight,i.inPX.vmin=i.inPX.vh<i.inPX.vw?i.inPX.vh:i.inPX.vw,i.inPX.vmax=i.inPX.vh>i.inPX.vw?i.inPX.vh:i.inPX.vw,n.trigger("resizeWidth")};return n.resize(t),t(),i}(),r=["height","minHeight","maxHeight","width","minWidth","maxWidth"],v=function(t){for(var n,h,r,v={},o={h:"height",w:"width"},s=t.length,d=(window.navigator.userAgent,i("<div>").css({position:"absolute",top:-2e3,left:-2e3,opacity:0}).appendTo("body"));s--;)h=t[s],r="t"==h.slice(-1)?"h":"w",e&&"h"==r?v[h]=!1:(n=o[r],d.css(h,"1v"+r),v[h]="max"==h.substr(0,3)?d.css(n,1e3)[n]()<1e3:d[n]()>0,d.css(h,"").css(o[r],""));return d.remove(),v}(r),o=i("<style>"),s=function(t){o.parent().length||i(function(){o.appendTo(i("body"))}),o.text(t)},d=function(){if(!v.minHeight){var t=i('[class*="omp-vh-"]').map(function(){return i(this).attr("class").split(" ").filter(function(i){return!!i.match(/omp-vh-/)})});t=i.unique(t);s(i.map(t,function(i){return"."+i+" {min-height: "+i.split("-")[2]*h.inPX.vh+"px!important;}"}).join(" ")),n.trigger("widthResized")}};d(),i(d),i(window).on("resizeWidth",d)}(jQuery,window),function(i,t){"use strict";var n=t.document,e=i(n),h=0,r=function(){var n=i(t).width();h!==n&&(h=n,i(t).trigger("resize"))};e.on("vc-full-width-row",r)}(jQuery,window);