!(function(resumeData) {

    var data = {
        resumeData
    };

    var controller = { // this is object scoping
        init: function() {
            view.init();
        },
        hideonclick: function(){
            function eraseme(elt){
                elt.parentNode.removeChild(elt)
                window.removeEventListener('deviceorientation', this.deviceTilted)
            }
            view.firstIntro.addEventListener('touchstart', function(evt){ eraseme(this)})
        },
        deviceTilted : function(evt){
            view.shine.setAttribute('style', 'transform:rotate('+ ((Math.atan2(evt.gamma, evt.beta) * 180/ Math.PI) + 30) + 'deg)')
        },
        ontilt: function(shiner){
            window.addEventListener('deviceorientation', this.deviceTilted)
        },
        addFavicon: function(url){
            var favicon = document.createElement('link');
            favicon.rel = "shortcut icon";
            favicon.type= "image/x-icon";
            favicon.href= url;
            document.getElementsByTagName('head')[0].appendChild(favicon);
        },
        addTitle : function(name){
            document.title = name
        }
    };

    var mustacheMethods = {
        uppercase: function () {
            return function (text, render) {
                return render(text).toUpperCase();
            }
        },
        scale : function () {
            return function (text, render) {
                var templ =  (color,txt) =>`<span class="${color}">___</span>`;
                var init = ['grey','grey','grey','grey'];
                var rate = +render(text);
                return init.map((clr,ind) => templ(ind<rate?'black':'grey')).join('')
            }
        },
        dashToDot : function(){
            return function (text, render) {
                var text = render(text);
                text =  text.replace(/ - | -|- /g, '&ensp;&bull;&ensp;')
                return text;
            }
        }
    }
    var view = {
        displayElement : undefined,
        template : undefined,
        firstIntro :undefined,
        init: function() {
            this.displayElement = document.getElementById('view');
            this.template = document.getElementById('template').innerHTML;
            this.render();
            this.firstIntro = view.displayElement.getElementsByClassName('fwmob')[0];
            this.shine = view.displayElement.getElementsByClassName('xshineAfter')[0];
        },

        render: function() {
            this.displayElement.innerHTML = Mustache.to_html(this.template, {...data, ...mustacheMethods});
        }
    };

    controller.init();
    controller.hideonclick();
    controller.ontilt();
    controller.addFavicon(data.resumeData.about.imgurl);
    controller.addTitle(data.resumeData.about.name);
}(resumeData));