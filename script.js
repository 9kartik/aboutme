!(function(resumeData) {

    var data = {
        resumeData
    };

    var controller = { // this is object scoping
        init: function() {
            view.init();
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
        }
    }
    var view = {
        displayElement : undefined,
        template : undefined,
        init: function() {
            this.displayElement = document.getElementById('view');
            this.template = document.getElementById('template').innerHTML;
            this.render();
        },

        render: function() {
            this.displayElement.innerHTML = Mustache.to_html(this.template, {...data, ...mustacheMethods});
        }
    };

    controller.init();
}(resumeData));