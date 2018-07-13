webpackJsonp([0],[,function(e,t,o){"use strict";(function(t){e.exports={view:function(e){return[t(".navbar.navbar__"+e.attrs.color,[t(".row.justify-content-between.align-items-center",[t(".col-auto.align-self-center",[t('img.navbar__logo[src="images/avatar-'+e.attrs.color+'.png"]',{onclick:function(){window.location="#!/home"}})]),t(".col-auto.align-self-right",[t("nav",[t("ul",[t("li",t('a[href="/brands"]',{oncreate:t.route.link},"Brands")),t("li",t('a[href="/agents"]',{oncreate:t.route.link},"Agents")),t("li",t('a[href="https://wholesale.brixtoltextiles.com/"][target="_blank"]',"B2B"))])])])])])]}}}).call(t,o(0))},,function(e,t,o){o(4),e.exports=o(6)},function(e,t,o){"use strict";o(5)},function(e,t){},function(e,t,o){"use strict";(function(e){var t=s(o(1)),a=s(o(10)),n=s(o(21)),r=s(o(22)),i=s(o(23)),l=s(o(29));function s(e){return e&&e.__esModule?e:{default:e}}e.route(document.body.querySelector("#root"),"/splash",{"/splash":n.default,"/home":{render:function(){return[e(a.default)]}},"/brands":{render:function(){return[e(i.default)]}},"/brands/:brand":{render:function(){return[e(i.default)]}},"/agents":{render:function(){return[e(t.default,{color:"black"}),e(r.default)]}},"/showroom":{render:function(){return[e(l.default)]}}})}).call(t,o(0))},,,,function(e,t,o){"use strict";(function(t){var a,n=o(11),r=(a=n)&&a.__esModule?a:{default:a};o(13),o(14),o(15),o(16),o(17),o(18),o(19),o(20);var i={caption:"We are a multi-brand fashion agency in Stockholm, Sweden. We manage and act on behalf of internationally recognized apparel brands.",video:{webm:"video/cover.webm",mp4:"video/cover.mp4"}};e.exports=function(){return{view:function(){return[t(".container-fluid.p-0",[t(r.default,i),t(".row.justify-content-center.align-content-center.brands",[t(".col-10.col-md-2.align-self-center",[t('a[href="/brands/brixtol-textiles"]',{oncreate:t.route.link},[t('img[src="images/brixtol-textiles-logo.png"]')])]),t(".col-10.col-md-2.align-self-center",[t('a[href="/brands/havaianas"]',{oncreate:t.route.link},[t('img[src="images/havaianas-logo.png"]')])]),t(".col-10.col-md-2.align-self-center",[t('a[href="/brands/teva"]',{oncreate:t.route.link},[t('img[src="images/teva-logo.png"]')])]),t(".col-10.col-md-2.align-self-center",[t('a[href="/brands/shoe-the-bear"]',{oncreate:t.route.link},[t('img[src="images/shoe-the-bear-logo.png"]')])]),t(".col-10.col-md-2.align-self-center",[t('a[href="/brands/superga"]',{oncreate:t.route.link},[t('img[src="images/superga-logo.png"]')])])])])]}}}}).call(t,o(0))},function(e,t,o){"use strict";(function(t){var a=r(o(1)),n=r(o(12));function r(e){return e&&e.__esModule?e:{default:e}}e.exports={oncreate:function(){new n.default(".rellax")},view:function(e){return[t(".hero",[t(a.default,{color:"white"}),t(".overlay.rellax",[t(".hero__caption",[t('img.hero__logo[src="images/logo-white.png"]')],e.attrs.caption)]),t(".hero__video",[t('video[poster="//"][playsinline][autoplay][muted][loop]',[t('source[src="'+e.attrs.video.webm+'"][type="video/webm"]'),t('source[src="'+e.attrs.video.mp4+'"][type="video/mp4"]')])])])]}}}).call(t,o(0))},,function(e,t,o){e.exports=o.p+"video/cover.mp4"},function(e,t,o){e.exports=o.p+"video/cover.webm"},function(e,t,o){e.exports=o.p+"video/cover.ogv"},function(e,t){e.exports="../images/brixtol-textiles-logo.png"},function(e,t){e.exports="../images/havaianas-logo.png"},function(e,t){e.exports="../images/teva-logo.png"},function(e,t){e.exports="../images/shoe-the-bear-logo.png"},function(e,t){e.exports="../images/superga-logo.png"},function(e,t,o){"use strict";(function(t){e.exports=function(e){var o=null,a=0;return{routeToMain:function(){a++,e.state.dataLoaded&&(clearTimeout(o),t.route.set("/home"))},oninit:function(){var e=this;this.dataLoaded=!1,Promise.all([]).then(function(){e.dataLoaded=!0,a&&e.routeToMain()})},oncreate:function(){o=setTimeout(this.routeToMain,2e3)},view:function(){return[t(".container-fluid",[t(".holder.row",[t(".col.align-self-center.justify-content-center",[t('img.loading[src="images/logo-black.png"]')])])])]}}}}).call(t,o(0))},function(e,t,o){"use strict";(function(t){var o={agents:[{name:"Emil Holmström",role:"Founder",email:"emil@sunday-seven.com",phone:"+46 (0)735 608 242"},{name:"Gustav Kjellander",role:"Founder",email:"gustav@sunday-seven.com",phone:"+46 (0) 709 851 826"},{name:"Sebastian Holmström",role:"Head of Sales",email:"sebastian@sunday-seven.com",phone:"+46 (0) 731 826 057"},{name:"Johan Lennartson",role:"Sales Agent",email:"johan@sunday-seven.com",phone:"+46 (0) 721 771 977"}]};e.exports=function(){return{view:function(){return[t(".agents",[t(".container-fluid",[t(".row.justify-content-center.align-content-center",[t(".col-10.pb-5",[t("h2","General Enquiries"),t(".row",[o.agents.map(function(e){return[t(".col-3.agent",[t("h1",e.name),t("h5",e.role),t("span",e.phone),t('a[href="mailto:'+e.email+'"]',e.email)])]})])]),t(".col-6.px-6",[t('img.img-logo.pt-5[src="images/logo-black.png"]',{style:{opacity:.1}})])])])])]}}}}).call(t,o(0))},function(e,t,o){"use strict";(function(t){var a,n=o(1),r=(a=n)&&a.__esModule?a:{default:a};o(24),o(25),o(26),o(27),o(28);var i={"brixtol-textiles":[{name:"BRIXTOL TEXTILES",website:"//www.brixtoltextiles.com",instagram:"//www.instagram.com/brixtoltextiles",video:"1zsr2ip-M-Q",cover:"brixtol-textiles-cover.jpg",logoWhite:"brixtol-textiles-logo-white.png",logoBlack:"brixtol-textiles-logo.png",description:"Brixtol Textiles started in a small kitchen in Stockholm, Sweden 2011 by two friends, Gustav Kjellander and Emil Holmström. The idea of parting with tradition and breaking the convention fuelled the birth of the brand and it became the manifestation of an idea in the shape of quality clothing inspired by a combination of British workwear and the 1960's mod culture."}],havaianas:[{name:"HAVAIANAS",website:"//www.brixtoltextiles.com",instagram:"//www.instagram.com/brixtoltextiles",video:"-Wg2MI9fY3Y",cover:"havaianas-cover.jpg",logoWhite:"havaianas-logo-white.png",logoBlack:"havaianas-logo.png",description:"The name Havaianas is Portuguese for Hawaiians. The first pair of Havaianas was born in 1962, based on the traditional Japanese sandal known as the Zori, whose soles are made of rice straw. The texture of Havaianas' rubber soles are like rice grains, one of the many details that make Havaianas unmistakable."}],"shoe-the-bear":[{name:"SHOE THE BEAR",website:"//shoethebear.com",instagram:"//www.instagram.com/shoethebear/",video:"-VWGY6OB13Q",cover:"shoe-the-bear-cover.jpg",logoWhite:"shoe-the-bear-logo-white.png",logoBlack:"shoe-the-bear-logo.png",description:"Shoe the bear began in 2007 with founders thomas frederiksen and jakob fuglsang fusing street art with canvas sneakers. Today, the brand is a frontrunner for scandinavian fashion footwear. It is sold and showcased by prestigious retailers from iceland to israel over north america to japan."}],teva:[{name:"TEVA",website:"//www.teva-eu.com",instagram:"//www.instagram.com/teva/",video:"IiXZd19D_UE",cover:"teva-cover.jpg",logoWhite:"teva-logo-white.png",logoBlack:"teva-logo.png",description:'The Teva Original came from humble beginnings -- an old Velcro watch strap attached to a flip flop -- but it has grown into an icon that speaks to the masses. People around the world have accepted the invitation to adventure and adopted the "strap in and go", spontaneous, go-anywhere, do-anything mentality that the Original stands for. Everything that we do, and everything we make is in service of the adventurous spirit, because we know that unscripted moments are the ones that turn into the best memories.'}],superga:[{name:"SUPERGA",website:"//www.superga.com",instagram:"//www.instagram.com/superga/",video:"uzR5VHXEKZA",cover:"superga-cover.jpg",logoWhite:"superga-logo-white.png",logoBlack:"superga-logo-black.png",description:"In 1911 in Torino Italy, Walter Martiny started the production of rubber-soled footwear branded with the Superga logo. In 1925, his designs expanded to include footwear with vulcanized rubber soles and the Superga 2750 style was born! After the war, Superga restarted operations specializing solely in the production of high-quality footwear. In the 1970’s, Superga diversified to add sport shoes with technical attributes"}]};e.exports=function(){return{view:function(){var e=t.route.param("brand")?t.route.param("brand"):"brixtol-textiles";return[t(".brand__carousel",[i[e].map(function(o){return t(".brand",[t(".brand__cover",{style:{backgroundImage:"url(images/"+o.cover+")"}},[t(".brand__overlay",[t(r.default,{color:"white"}),t(".brand__logo",[t('img[src="images/'+o.logoWhite+'"]')])])]),t(".brand__navigation",[t(".row.justify-content-center.align-content-center.no-gutter",[t(".col-auto.align-self-center",[t('img[src="images/brixtol-textiles-logo.png"]',{class:"brixtol-textiles"==e?"active":"",onclick:function(){t.route.set("/brands/brixtol-textiles")}})]),t(".col-auto.align-self-center",[t('img[src="images/havaianas-logo.png"]',{class:"havaianas"==e?"active":"",onclick:function(){t.route.set("/brands/havaianas")}})]),t(".col-auto.align-self-center",[t('img[src="images/teva-logo.png"]',{class:"teva"==e?"active":"",onclick:function(){t.route.set("/brands/teva")}})]),t(".col-auto.align-self-center",[t('img[src="images/shoe-the-bear-logo.png"]',{class:"shoe-the-bear"==e?"active":"",onclick:function(){t.route.set("/brands/shoe-the-bear")}})]),t(".col-auto.align-self-center",[t('img[src="images/superga-logo.png"]',{class:"superga"==e?"active":"",onclick:function(){t.route.set("/brands/superga")}})])])]),t(".brand__information",[t(".row.justify-content-center.align-content-center",[t(".col-11.col-md-5.align-self-right.description",[t("h1",o.name),t("p",o.description),t("ul.social",[t("li",t('a[href="'+o.website+'"][target="_blank"]',"Website")),t("li",t('a[href="'+o.instagram+'"][target="_blank"]',"Instagram"))])]),t(".col-12.col-md-6.align-self-center",[t(".brand__video",[t.trust('<iframe id="ytplayer" type="text/html" width="100%" height="395" src="https://www.youtube.com/embed/'+o.video+'?autoplay=0&loop=1&playsinline=1&rel=0&showinfo=0&color=white" frameborder="0" allowfullscreen>')])])])])])})])]}}}}).call(t,o(0))},function(e,t){e.exports="../images/brixtol-textiles-cover.jpg"},function(e,t){e.exports="../images/havaianas-cover.jpg"},function(e,t){e.exports="../images/shoe-the-bear-cover.jpg"},function(e,t){e.exports="../images/teva-cover.jpg"},function(e,t){e.exports="../images/superga-cover.jpg"},function(e,t,o){"use strict";(function(t){var a=r(o(1)),n=r(o(30));function r(e){return e&&e.__esModule?e:{default:e}}e.exports=function(){return{oninit:function(){console.log("initialized")},view:function(){return[t("row.no-gutter",[t("col-12",[t(".showroom",[t(".showroom__cover",{style:{backgroundImage:'url("images/showroom.jpg")'}},[t(".showroom__overlay",[t(a.default,{color:"white"})])])])])]),t("row.no-gutter",[t("col-4",[t("h1","Hantervergatan")])]),t(n.default)]}}}}).call(t,o(0))},function(e,t,o){"use strict";(function(t){var a,n=o(31),r=(a=n)&&a.__esModule?a:{default:a};var i=window.google,l=[{featureType:"all",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{gamma:.01},{lightness:20}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{saturation:-31},{lightness:-33},{weight:2},{gamma:.8}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#050505"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{color:"#fef3f3"},{weight:"3.01"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#0a0a0a"},{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{color:"#fffbfb"},{weight:"3.01"},{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{lightness:30},{saturation:30}]},{featureType:"poi",elementType:"geometry",stylers:[{saturation:20}]},{featureType:"poi.attraction",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{lightness:20},{saturation:-20}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:10},{saturation:-30}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{saturation:25},{lightness:25}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#a1a1a1"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#292929"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#202020"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"simplified"},{hue:"#0006ff"},{saturation:"-100"},{lightness:"13"},{gamma:"0.00"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#686868"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"off"},{color:"#8d8d8d"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{visibility:"on"},{color:"#353535"},{lightness:"6"}]},{featureType:"road.arterial",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{weight:"3.45"}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#d0d0d0"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{lightness:"2"},{visibility:"on"},{color:"#999898"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#383838"}]},{featureType:"road.local",elementType:"labels.text.stroke",stylers:[{color:"#faf8f8"}]},{featureType:"water",elementType:"all",stylers:[{lightness:-20}]}];(0,r.default)("//maps.google.com/maps/api/js?key=AIzaSyCLnQ7EWVCmNvUZvfLeTvx2cyHOzvS-QY0",{success:function(){var e=new i.maps.LatLng(59.329063,18.0418543),t=new i.maps.Map(document.getElementById("showroom-map"),{center:e,zoom:13,mapTypeId:i.maps.MapTypeId.ROADMAP,mapTypeControl:!1,zoomControl:!1,styles:l});new i.maps.Marker({position:e,map:t})}}),e.exports={view:function(){return[t(".footer",[t(".row.no-gutter",[t(".col-12",[t("#showroom-map")])])])]}}}).call(t,o(0))}],[3]);