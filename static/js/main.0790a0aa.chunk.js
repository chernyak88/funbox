(this.webpackJsonpfunbox=this.webpackJsonpfunbox||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/cat.b63f45d4.png"},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(7),r=a.n(c),i=(a(13),a(2)),o=a(3),l=a(5),d=a(4),m=(a(14),a(1)),u=(a(15),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).state={selected:!1,hovered:!1},e.selectCard=e.selectCard.bind(Object(m.a)(e)),e.mouseEnter=e.mouseEnter.bind(Object(m.a)(e)),e.mouseLeave=e.mouseLeave.bind(Object(m.a)(e)),e}return Object(o.a)(s,[{key:"selectCard",value:function(){this.setState({selected:!this.state.selected})}},{key:"mouseEnter",value:function(){!0===this.state.selected&&this.setState({hovered:!0})}},{key:"mouseLeave",value:function(){this.setState({hovered:!1})}},{key:"render",value:function(){var e=this.props.options.map((function(e){return n.a.createElement("li",{key:e,className:"card__option"},e)}));return n.a.createElement("div",{className:"card-wrap"},n.a.createElement("div",{className:this.props.disabled?"card disabled":this.state.selected?"card selected":"card",onClick:this.selectCard,onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},this.state.selected&&this.state.hovered?n.a.createElement("span",{className:"card__title--small pink"},"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"):n.a.createElement("span",{className:"card__title--small"},"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e"),n.a.createElement("h2",{className:"card__title"},"\u041d\u044f\u043c\u0443\u0448\u043a\u0430"),n.a.createElement("span",{className:"card__name"},this.props.name),n.a.createElement("ul",{className:"card__options"},e),n.a.createElement("div",{className:"card__img"},n.a.createElement("img",{src:a(16),alt:"cat",className:"card__pic"})),n.a.createElement("div",{className:"card__weight"},n.a.createElement("p",null,this.props.weight),n.a.createElement("span",null,"\u041a\u0413"))),this.props.disabled?n.a.createElement("p",{className:"card__description yellow"},"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",this.props.name," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."):this.state.selected?n.a.createElement("p",{className:"card__description"},this.props.description):n.a.createElement("p",{className:"card__description"},"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",n.a.createElement("span",{className:"card__buy",onClick:this.selectCard},"\u043a\u0443\u043f\u0438.")))}}]),s}(n.a.Component)),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={title:"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?",data:[{name:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",options:["10 \u043f\u043e\u0440\u0446\u0438\u0439","\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],weight:"0,5"},{name:"\u0441 \u0440\u044b\u0431\u043e\u0439",description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",options:["40 \u043f\u043e\u0440\u0446\u0438\u0439","2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],weight:"2"},{name:"\u0441 \u043a\u0443\u0440\u043e\u0439",description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",options:["100 \u043f\u043e\u0440\u0446\u0438\u0439","5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a","\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d"],weight:"5",disabled:!0}]},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"app"},n.a.createElement("h1",null,this.state.title),n.a.createElement("div",{className:"cards"},this.state.data.map((function(e,t){return n.a.createElement(u,Object.assign({},e,{key:t}))}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0790a0aa.chunk.js.map