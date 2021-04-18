/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	callback: function() {
         		EC.Parallax.setup(sym);
         	}
         });
         
         $(window).scroll(function(){
                var symbol = sym.$("Top_Banner2");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("Top_Banner2").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("news_and_social");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("news_and_social").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("Portfolio");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("Portfolio").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("vignette3");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("vignette3").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("Background_Splash");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("Background_Splash").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("Profile");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("Profile").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("Bottom_Banner");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("Bottom_Banner").css({"position":"fixed"});
         
         $(window).scroll(function(){
                var symbol = sym.$("image_preview");
                symbol.css({"marginTop": ($(window).scrollTop()+0)});
         });
         sym.$("image_preview").css({"position":"fixed"});

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1").play(500);
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1Copy").playReverse(1500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         // insert code for scroll event here
         var myCalc=this.element.scrollLeft/(this.element.scrollWidth-this.element.clientWidth);
         this.stop(myCalc*this.getDuration());

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80000, function(sym, e) {
         var chicken = sym.getSymbol("bottom_border");
         chicken.play();
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15250, function(sym, e) {
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1Copy").stop
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1").stop
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1Copy2").stop
         
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1Copy").play(500);
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1").playReverse(1500);
         sym.getSymbol("Top_Banner2").getSymbol("Indicator_1Copy2").playReverse(1500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40750, function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'home_button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8750, function(sym, e) {
         this.stop("HomeIcon3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here// stop the timeline at the given position (ms or label)
         this.stop("HomeIcon1");

      });
      //Edge binding end

   })("home_button");
   //Edge symbol end:'home_button'

   //=========================================================
   
   //Edge symbol: 'home_alone'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4671, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("home_alone");
   //Edge symbol end:'home_alone'

   //=========================================================
   
   //Edge symbol: 'Portfolio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2390, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5890, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("portfolio_icon");
   //Edge symbol end:'portfolio_icon'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30500, function(sym, e) {
         sym.stop();
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   
   //Edge symbol: 'Top_Banner'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Portfolio_button}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var a = sym.getSymbol("Portfolio_button");
         
         // play the timeline from the given position (ms or label)
         a.play(3390);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Portfolio_button}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var a = sym.getSymbol("Portfolio_button");
         
         // play the timeline from the given position (ms or label)
         a.play(6890);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Portfolio_button}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         var a = sym.getSymbol("Portfolio_button");
         
         a.play(1000);
         
         var squid = sym.getSymbol("work_header3");
         squid.playReverse(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Portfolio_button}", "mouseenter", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var a = sym.getSymbol("Portfolio_button");
         
         // play the timeline from the given position (ms or label)
         a.play(3390);
         
         var squid = sym.getSymbol("work_header3");
         squid.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_alone}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var a = sym.getSymbol("home_alone");
         
         // play the timeline from the given position (ms or label)
         a.play(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_alone}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse enters an element
         // Lookup the Edge Animate Symbol Javascript Object from an element that is
         // an instance of a symbol. The symbol object can be used to invoke
         // symbol functions like play, stop etc.
         var a = sym.getSymbol("home_alone");
         
         // play the timeline from the given position (ms or label)
         a.play(4000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_alone}", "mouseleave", function(sym, e) {
         // insert code to be run when the mouse leaves an element
         var a = sym.getSymbol("home_alone");
         
         a.play(1000);
         
         var headers = sym.getSymbol("headers");
         headers.playReverse(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_alone}", "mouseenter", function(sym, e) {
         var a = sym.getSymbol("home_alone");
         a.play(2000);
         
         var headers = sym.getSymbol("headers");
         headers.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home_alone}", "click", function(sym, e) {
         $('html, body').animate({scrollTop:0}, 'slow');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_news_button2}", "mouseover", function(sym, e) {
         var news = sym.getSymbol("news_button2");
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         news.play(1500);
         
         var squid = sym.getSymbol("news_header");
         squid.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_news_button2}", "mousedown", function(sym, e) {
         var news = sym.getSymbol("news_button2");
         news.play(2000);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_news_button2}", "mouseout", function(sym, e) {
         var news = sym.getSymbol("news_button2");
         news.play(1000);
         
         var squid = sym.getSymbol("news_header");
         squid.playReverse(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_profile_icon2}", "mouseover", function(sym, e) {
         var ProfileIcon = sym.getSymbol("profile_icon2");
         ProfileIcon.play(1750);
         
         var squid = sym.getSymbol("profile_header2");
         squid.play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_profile_icon2}", "mouseout", function(sym, e) {
         var ProfileIcon = sym.getSymbol("profile_icon2");
         ProfileIcon.play(1250);
         
         var squid = sym.getSymbol("profile_header2");
         squid.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_profile_icon2}", "click", function(sym, e) {
         $('html, body').animate({scrollTop:930}, 'slow');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_news_button2}", "click", function(sym, e) {
         $('html, body').animate({scrollTop:"350"}, 'slow');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_news_button2}", "mouseup", function(sym, e) {
         var news = sym.getSymbol("news_button2");
         news.play(1500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_profile_icon2}", "mousedown", function(sym, e) {
         var ProfileIcon = sym.getSymbol("profile_icon2");
         ProfileIcon.play(2250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_profile_icon2}", "mouseup", function(sym, e) {
         var ProfileIcon = sym.getSymbol("profile_icon2");
         ProfileIcon.play(1750);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Portfolio_button}", "click", function(sym, e) {
         $('html, body').animate({scrollTop:615}, 'slow');

      });
      //Edge binding end

   })("top_banner2");
   //Edge symbol end:'top_banner2'

   //=========================================================
   
   //Edge symbol: 'news_and_social'
   (function(symbolName) {   
   
   })("news_and_social");
   //Edge symbol end:'news_and_social'

   //=========================================================
   
   //Edge symbol: 'news_and_social_1'
   (function(symbolName) {   
   
   })("portfolio");
   //Edge symbol end:'portfolio'

//=========================================================
   //Edge symbol: 'TimelineControler'
   (function(symbolName) {


      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // flag of use keyboard event.
         var useKeyBoardEvent = true;
         // key code of right/left key
         var KEY_RIGHT = 39;
         var KEY_LEFT =  37;
         // params
         var power = 2;
         var declineRate = 0.5;
         var speedWidth = 10;
         
         // try to hide the location bar at Safari,if need, comment out it. 
         // setTimeout(function() { window.scrollTo(0, 0); }, 250);
         
         var fps = 60;
         var interval = (1000/fps)|0;
         var speed = 0;
         var isKeyPress = false, isMousePress = false;
         
         var centerX,target,v;
         
         if(useKeyBoardEvent)$(window).bind("keydown",onStartControll).bind("keyup",onStopControll);  
         
         var el = $(sym.getSymbolElement());
         el.mousedown(onStartControll)
           .mouseup(onStopControll)
           .mouseout(onStopControll)
           .mousemove(onMouseMove)
           .bind("touchstart",onStartControll)
           .bind("touchmove",onMouseMove)
           .bind("touchend",onStopControll);
         
         function onStartControll(evt){
           evt.preventDefault();
           target = sym.getParentSymbol();
           centerX = el.offset().left+el.width()/2;
           if(evt.type=="keydown" && isKeyPress===false){
             speed = 
               (evt.which==KEY_RIGHT)*interval*power
                  + (evt.which==KEY_LEFT)*interval*-1*power;
             speed|=0;
             isKeyPress = true;
           }else if(evt.type=="mousedown" || evt.type=="touchstart"){
             isMousePress = true;
           }
           if(v===undefined)v=setInterval(onControll,interval);
         }
         function onStopControll(evt){
           if(evt.type=="keyup"){
             isKeyPress = false;
           }else{
             isMousePress = false;
           }
         }
         function onControll(){
           if(isKeyPress===false && isMousePress===false){
             speed = (speed*declineRate)|0;
             if(-1<speed && speed<1){
               clearInterval(v);
               v = undefined;
             }
           }
           var n = target.getPosition()+speed;
           if(-1<n && n<=target.getDuration())target.stop(n);
         }
         function onMouseMove(evt){
           evt.preventDefault();
           evt = (evt.originalEvent.touches && evt.originalEvent.touches[0]) || evt;
           if(isMousePress===true){
             speed = (((evt.clientX - centerX)/speedWidth)*power*interval)|0;
           }
         }
         

      });
      //Edge binding end

   })("timelinecontroller");
   //Edge symbol end:'timelinecontroller'

   //=========================================================
   
   //Edge symbol: 'Portfolio_1'
   (function(symbolName) {   
   
      })("profile");
   //Edge symbol end:'profile'

   //=========================================================
   
   //Edge symbol: 'social_elements'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var element = sym.$("Rectangle");
         $('<iframe width="948" height="814" src="http://mouldylunch.wordpress.com/" frameborder="0" allowfullscreen></iframe>').appendTo(sym.$('Rectangle'));
         

      });
      //Edge binding end

   })("social_elements");
   //Edge symbol end:'social_elements'

   //=========================================================
   
   //Edge symbol: 'Symbol_2'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var code ='<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/twitter" data-widget-id="469245523497476096" data-border-color="#2e2e2e">Tweets by @twitter</a>';
         code += "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';";
         code += 'if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
         
         sym.$("twitter_widgetCopy").append(code);
         

      });
      //Edge binding end

   })("Symbol_2");
   //Edge symbol end:'Symbol_2'

   //=========================================================
   
   //Edge symbol: 'Portfolio'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_next2}", "mouseover", function(sym, e) {
         var next = sym.getSymbol("next2");
         next.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next2}", "mouseout", function(sym, e) {
         var next = sym.getSymbol("next2");
         next.stop();
         next.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next2}", "mousedown", function(sym, e) {
         var next = sym.getSymbol("next2");
         next.play(500);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next2}", "mouseup", function(sym, e) {
         var next = sym.getSymbol("next2");
         next.play(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next3}", "mouseover", function(sym, e) {
         var next = sym.getSymbol("next3");
         next.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next3}", "mouseout", function(sym, e) {
         var next = sym.getSymbol("next3");
         next.stop();
         next.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next3}", "mousedown", function(sym, e) {
         var next = sym.getSymbol("next3");
         next.play(500);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next3}", "mouseup", function(sym, e) {
         var next = sym.getSymbol("next3");
         next.play(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "mouseover", function(sym, e) {
         var next = sym.getSymbol("next1");
         next.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "mouseout", function(sym, e) {
         var next = sym.getSymbol("next1");
         next.stop();
         next.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "mousedown", function(sym, e) {
         var next = sym.getSymbol("next1");
         next.play(500);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "mouseup", function(sym, e) {
         var next = sym.getSymbol("next1");
         next.play(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next1}", "click", function(sym, e) {
         var next = sym.getSymbol("two_dimensional_showcase");
         next.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next2}", "click", function(sym, e) {
         var next = sym.getSymbol("three_dimensional_showcase");
         next.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next3}", "click", function(sym, e) {
         var next = sym.getSymbol("video_animation_showcase");
         next.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous}", "mouseover", function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var prev = sym.getSymbol("previous");
         prev.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous}", "mouseout", function(sym, e) {
         var prev = sym.getSymbol("previous");
         prev.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous}", "mousedown", function(sym, e) {
         var prev = sym.getSymbol("previous");
         prev.play(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous}", "mouseup", function(sym, e) {
         var prev = sym.getSymbol("previous");
         prev.play(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous2}", "mouseover", function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var prev = sym.getSymbol("previous2");
         prev.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous2}", "mouseout", function(sym, e) {
         var prev = sym.getSymbol("previous2");
         prev.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous2}", "mousedown", function(sym, e) {
         var prev = sym.getSymbol("previous2");
         prev.play(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous2}", "mouseup", function(sym, e) {
         var prev = sym.getSymbol("previous2");
         prev.play(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous3}", "mouseover", function(sym, e) {
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var prev = sym.getSymbol("previous3");
         prev.play(0);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous3}", "mouseout", function(sym, e) {
         var prev = sym.getSymbol("previous3");
         prev.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous3}", "mousedown", function(sym, e) {
         var prev = sym.getSymbol("previous3");
         prev.play(500);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_previous3}", "mouseup", function(sym, e) {
         var prev = sym.getSymbol("previous3");
         prev.play(250);
         

      });
      //Edge binding end

   })("Portfolio");
   //Edge symbol end:'Portfolio'

   //=========================================================
   
   //Edge symbol: 'news_button'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

   })("news_button");
   //Edge symbol end:'news_button'

   //=========================================================
   
   //Edge symbol: 'profile_icon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("profile_icon");
   //Edge symbol end:'profile_icon'

   //=========================================================
   
   //Edge symbol: 'two_dimensional_showcase'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_zigg_thumb}", "mouseover", function(sym, e) {
         var over = sym.getSymbol("zigg_thumb");
         over.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zigg_thumb}", "mouseout", function(sym, e) {
         var over = sym.getSymbol("zigg_thumb");
         over.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stamp_thumb}", "mouseover", function(sym, e) {
         var over = sym.getSymbol("stamp_thumb");
         over.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stamp_thumb}", "mouseout", function(sym, e) {
         var over = sym.getSymbol("stamp_thumb");
         over.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouldylunch_thumb}", "mouseover", function(sym, e) {
         var over = sym.getSymbol("mouldylunch_thumb");
         over.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouldylunch_thumb}", "mouseout", function(sym, e) {
         var over = sym.getSymbol("mouldylunch_thumb");
         over.playReverse(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_zigg_thumb}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("image_preview").play(250);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stamp_thumb}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("image_preview").play(2000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mouldylunch_thumb}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("image_preview").play(3750);

      });
      //Edge binding end

   })("two_dimensional_showcase");
   //Edge symbol end:'two_dimensional_showcase'

   //=========================================================
   
   //Edge symbol: 'three_dimensional_showcase'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_anim_lunch_thumb}", "mouseover", function(sym, e) {
         var over = sym.getSymbol("anim_lunch_thumb");
         over.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_anim_lunch_thumb}", "mouseout", function(sym, e) {
         var over = sym.getSymbol("anim_lunch_thumb");
         over.playReverse(250);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_anim_lunch_thumb}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("image_preview").play(6000);
         

      });
      //Edge binding end

   })("three_dimensional_showcase");
   //Edge symbol end:'three_dimensional_showcase'

   //=========================================================
   
   //Edge symbol: 'video_animation_showcase'
   (function(symbolName) {   
   
   })("video_animation_showcase");
   //Edge symbol end:'video_animation_showcase'

   //=========================================================
   
   //Edge symbol: 'showcase_1_2'
   (function(symbolName) {   
   
   })("showcase_1_2");
   //Edge symbol end:'showcase_1_2'

   //=========================================================
   
   //Edge symbol: 'Symbol_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Symbol_3");
   //Edge symbol end:'Symbol_3'

   //=========================================================
   
   //Edge symbol: 'zigg_thumb'
   (function(symbolName) {   
   
      

      

   })("zigg_thumb");
   //Edge symbol end:'zigg_thumb'

   //=========================================================
   
   //Edge symbol: 'headers'
   (function(symbolName) {   
   
   })("headers");
   //Edge symbol end:'headers'

   //=========================================================
   
   //Edge symbol: 'news_header'
   (function(symbolName) {   
   
   })("news_header");
   //Edge symbol end:'news_header'

   //=========================================================
   
   //Edge symbol: 'work_header'
   (function(symbolName) {   
   
   })("work_header");
   //Edge symbol end:'work_header'

   //=========================================================
   
   //Edge symbol: 'profile_header'
   (function(symbolName) {   
   
   })("profile_header");
   //Edge symbol end:'profile_header'

   //=========================================================
   
   //Edge symbol: 'previous'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("previous");
   //Edge symbol end:'previous'

   //=========================================================
   
   //Edge symbol: 'stamp_thumb'
   (function(symbolName) {   
   
   })("stamp_thumb");
   //Edge symbol end:'stamp_thumb'

   //=========================================================
   
   //Edge symbol: 'Symbol_4'
   (function(symbolName) {   
   
   })("Symbol_4");
   //Edge symbol end:'Symbol_4'

   //=========================================================
   
   //Edge symbol: 'Symbol_5'
   (function(symbolName) {   
   
   })("Symbol_5");
   //Edge symbol end:'Symbol_5'

   //=========================================================
   
   //Edge symbol: 'Profile'
   (function(symbolName) {   
   
   })("Profile");
   //Edge symbol end:'Profile'

   //=========================================================
   
   //Edge symbol: 'image_preview'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle4}", "click", function(sym, e) {
         sym.playReverse();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1909, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var code ='<iframe width="1572" height="884" src="//www.youtube.com/embed/lAU_03dvFk0" frameborder="0" allowfullscreen></iframe>';
         sym.$("Rectangle3").append(code);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5376, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5252, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3624, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("image_preview");
   //Edge symbol end:'image_preview'

   //=========================================================
   
   //Edge symbol: 'Indicator_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("Indicator_1");
   //Edge symbol end:'Indicator_1'

   //=========================================================
   
   //Edge symbol: 'anim_lunch_thumb'
   (function(symbolName) {   
   
   })("anim_lunch_thumb");
   //Edge symbol end:'anim_lunch_thumb'

   //=========================================================
   
   //Edge symbol: 'Facebook'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var element = sym.$("fb_widget");
         $('<iframe src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookDevelopers&amp;width=440&amp;height=427&amp;colorscheme=dark&amp;show_faces=false&amp;header=true&amp;stream=true&amp;show_border=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:440px; height:427px;" allowTransparency="true"></iframe>').appendTo(sym.$('fb_widget'));

      });
      //Edge binding end

   })("Facebook");
   //Edge symbol end:'Facebook'

})(jQuery, AdobeEdge, "EDGE-2697713");