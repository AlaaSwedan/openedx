(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory);}else{factory(jQuery);}}(function($){$.ui=$.ui||{};$.extend($.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});$.fn.extend({scrollParent:function(includeHidden){var position=this.css("position"),excludeStaticParent=position==="absolute",overflowRegex=includeHidden?/(auto|scroll|hidden)/:/(auto|scroll)/,scrollParent=this.parents().filter(function(){var parent=$(this);if(excludeStaticParent&&parent.css("position")==="static"){return false;}
return overflowRegex.test(parent.css("overflow")+parent.css("overflow-y")+parent.css("overflow-x"));}).eq(0);return position==="fixed"||!scrollParent.length?$(this[0].ownerDocument||document):scrollParent;},uniqueId:(function(){var uuid=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++uuid);}});};})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){$(this).removeAttr("id");}});}});function focusable(element,isTabIndexNotNaN){var map,mapName,img,nodeName=element.nodeName.toLowerCase();if("area"===nodeName){map=element.parentNode;mapName=map.name;if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){return false;}
img=$("img[usemap='#"+mapName+"']")[0];return!!img&&visible(img);}
return(/^(input|select|textarea|button|object)$/.test(nodeName)?!element.disabled:"a"===nodeName?element.href||isTabIndexNotNaN:isTabIndexNotNaN)&&visible(element);}
function visible(element){return $.expr.filters.visible(element)&&!$(element).parents().addBack().filter(function(){return $.css(this,"visibility")==="hidden";}).length;}
$.extend($.expr[":"],{data:$.expr.createPseudo?$.expr.createPseudo(function(dataName){return function(elem){return!!$.data(elem,dataName);};}):function(elem,i,match){return!!$.data(elem,match[3]);},focusable:function(element){return focusable(element,!isNaN($.attr(element,"tabindex")));},tabbable:function(element){var tabIndex=$.attr(element,"tabindex"),isTabIndexNaN=isNaN(tabIndex);return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);}});if(!$("<a>").outerWidth(1).jquery){$.each(["Width","Height"],function(i,name){var side=name==="Width"?["Left","Right"]:["Top","Bottom"],type=name.toLowerCase(),orig={innerWidth:$.fn.innerWidth,innerHeight:$.fn.innerHeight,outerWidth:$.fn.outerWidth,outerHeight:$.fn.outerHeight};function reduce(elem,size,border,margin){$.each(side,function(){size-=parseFloat($.css(elem,"padding"+this))||0;if(border){size-=parseFloat($.css(elem,"border"+this+"Width"))||0;}
if(margin){size-=parseFloat($.css(elem,"margin"+this))||0;}});return size;}
$.fn["inner"+name]=function(size){if(size===undefined){return orig["inner"+name].call(this);}
return this.each(function(){$(this).css(type,reduce(this,size)+"px");});};$.fn["outer"+name]=function(size,margin){if(typeof size!=="number"){return orig["outer"+name].call(this,size);}
return this.each(function(){$(this).css(type,reduce(this,size,true,margin)+"px");});};});}
if(!$.fn.addBack){$.fn.addBack=function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));};}
if($("<a>").data("a-b","a").removeData("a-b").data("a-b")){$.fn.removeData=(function(removeData){return function(key){if(arguments.length){return removeData.call(this,$.camelCase(key));}else{return removeData.call(this);}};})($.fn.removeData);}
$.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());$.fn.extend({focus:(function(orig){return function(delay,fn){return typeof delay==="number"?this.each(function(){var elem=this;setTimeout(function(){$(elem).focus();if(fn){fn.call(elem);}},delay);}):orig.apply(this,arguments);};})($.fn.focus),disableSelection:(function(){var eventType="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(eventType+".ui-disableSelection",function(event){event.preventDefault();});};})(),enableSelection:function(){return this.unbind(".ui-disableSelection");},zIndex:function(zIndex){if(zIndex!==undefined){return this.css("zIndex",zIndex);}
if(this.length){var elem=$(this[0]),position,value;while(elem.length&&elem[0]!==document){position=elem.css("position");if(position==="absolute"||position==="relative"||position==="fixed"){value=parseInt(elem.css("zIndex"),10);if(!isNaN(value)&&value!==0){return value;}}
elem=elem.parent();}}
return 0;}});$.ui.plugin={add:function(module,option,set){var i,proto=$.ui[module].prototype;for(i in set){proto.plugins[i]=proto.plugins[i]||[];proto.plugins[i].push([option,set[i]]);}},call:function(instance,name,args,allowDisconnected){var i,set=instance.plugins[name];if(!set){return;}
if(!allowDisconnected&&(!instance.element[0].parentNode||instance.element[0].parentNode.nodeType===11)){return;}
for(i=0;i<set.length;i++){if(instance.options[set[i][0]]){set[i][1].apply(instance.element,args);}}}};}));EDRAAK.modules.push(function(){'use strict';if(!$.ui||!$.ui.keyCode){throw Error('jQuery.ui.keyCode is required for `write-a-review.js` to run.');}
var $writeReviewBtn=$('.write-review-btn');var $groupOne=$writeReviewBtn.add('.review, .view-more');var $reviewForm=$('.review-form');$writeReviewBtn.on('click',function(){$groupOne.fadeOut(220,function(){$reviewForm.fadeIn(220);});});var $starInputs=$reviewForm.find('.stars-input');$starInputs.each(function(){var $starInput=$(this);var $stars=$starInput.find('.fa');var $radioButtons=$starInput.find(':radio');var _setVisualRating=function(rating){var $toBeFilled=$stars.slice(0,rating);var $toBeEmptied=$stars.slice(rating);$toBeFilled.removeClass('fa-star-o').addClass('fa-star');$toBeEmptied.removeClass('fa-star').addClass('fa-star-o');};var _getCurrentRating=function(){var rating=$radioButtons.filter(':checked').val();return rating;};var _setCurrentRating=function(rating){$radioButtons.filter(':checked').removeProp('checked');$($radioButtons.get(rating-1)).prop('checked',true);};$stars.on('mouseenter',function(){var ratingToDisplay=$(this).data('rating');_setVisualRating(ratingToDisplay);});var _onSelectAStar=function(e){e.preventDefault();var newRating=$(this).data('rating');_setCurrentRating(newRating);_setVisualRating(newRating);};$stars.on('click',_onSelectAStar);$stars.on('keypress',function(e){if(e.keyCode===$.ui.keyCode.ENTER||e.keyCode===$.ui.keyCode.SPACE){_onSelectAStar.call(this,e);}});$starInput.on('mouseleave',function(){_setVisualRating(_getCurrentRating());});});});EDRAAK.modules.push(function(){'use strict';$(function(){var $wrapper=$(this).find('.video-wrapper');var $playBtn=$(this).find('.play-btn');$('.course-video-modal').on('shown.bs.modal',function(){var $iframe=$('<iframe></iframe>');$iframe.attr('src',$wrapper.data('src'));$wrapper.append($iframe);}).on('hidden.bs.modal',function(){$wrapper.empty();});});});!function(e){"use strict";function t(e,t,a){var i;return function(){var n=this,o=arguments,r=function(){i=null,a||e.apply(n,o)},s=a&&!i;clearTimeout(i),i=setTimeout(r,t),s&&e.apply(n,o)}}function a(e){var t=++h;return String(null==e?"rmjs-":e)+t}function i(e){var t=e.clone().css({height:"auto",width:e.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(e),a=t.outerHeight(),i=parseInt(t.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=e.data("defaultHeight");t.remove();var o=i||e.data("collapsedHeight")||n;e.data({expandedHeight:a,maxHeight:i,collapsedHeight:o}).css({maxHeight:"none"})}function n(e){if(!d[e.selector]){var t=" ";e.embedCSS&&""!==e.blockCSS&&(t+=e.selector+" + [data-readmore-toggle], "+e.selector+"[data-readmore]{"+e.blockCSS+"}"),t+=e.selector+"[data-readmore]{transition: height "+e.speed+"ms;overflow: hidden;}",function(e,t){var a=e.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=t:a.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(a)}(document,t),d[e.selector]=!0}}function o(t,a){this.element=t,this.options=e.extend({},s,a),n(this.options),this._defaults=s,this._name=r,this.init(),window.addEventListener?(window.addEventListener("load",l),window.addEventListener("resize",l)):(window.attachEvent("load",l),window.attachEvent("resize",l))}var r="readmore",s={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,beforeToggle:function(){},afterToggle:function(){}},d={},h=0,l=t(function(){e("[data-readmore]").each(function(){var t=e(this),a="true"===t.attr("aria-expanded");i(t),t.css({height:t.data(a?"expandedHeight":"collapsedHeight")})})},100);o.prototype={init:function(){var t=this,n=e(this.element);n.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),i(n);var o=n.data("collapsedHeight"),r=n.data("heightMargin");if(n.outerHeight(!0)<=o+r)return!0;var s=n.attr("id")||a(),d=t.options.startOpen?t.options.lessLink:t.options.moreLink;n.attr({"data-readmore":"","aria-expanded":!1,id:s}),n.after(e(d).on("click",function(e){t.toggle(this,n[0],e)}).attr({"data-readmore-toggle":"","aria-controls":s})),t.options.startOpen||n.css({height:o})},toggle:function(t,a,i){i&&i.preventDefault(),t||(t=e('[aria-controls="'+this.element.id+'"]')[0]),a||(a=this.element);var n=this,o=e(a),r="",s="",d=!1,h=o.data("collapsedHeight");o.height()<=h?(r=o.data("expandedHeight")+"px",s="lessLink",d=!0):(r=h,s="moreLink"),n.options.beforeToggle(t,a,!d),o.css({height:r}),o.on("transitionend",function(){n.options.afterToggle(t,a,d),e(this).attr({"aria-expanded":d}).off("transitionend")}),e(t).replaceWith(e(n.options[s]).on("click",function(e){n.toggle(this,a,e)}).attr({"data-readmore-toggle":"","aria-controls":o.attr("id")}))},destroy:function(){e(this.element).each(function(){var t=e(this);t.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),t.removeData()})}},e.fn.readmore=function(t){var a=arguments,i=this.selector;return t=t||{},"object"==typeof t?this.each(function(){if(e.data(this,"plugin_"+r)){var a=e.data(this,"plugin_"+r);a.destroy.apply(a)}t.selector=i,e.data(this,"plugin_"+r,new o(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=e.data(this,"plugin_"+r);i instanceof o&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(a,1))}):void 0}}(jQuery);;(function(){'use strict';jQuery.each(EDRAAK.modules,function(index,module){if(jQuery.isFunction(module)){try{module();}catch(e){if(window.console){console.error(e);}}}});}());