(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(10),i=a.n(c);a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(2),l=a(3),o=a(5),h=a(4),d=a(6),m=(a(19),a(21),function(e){var t="Button";return e.activated&&(t+=" Active"),s.a.createElement("a",{className:t,style:{width:e.width,height:e.height},onClick:e.onClick},s.a.createElement("div",{className:"Button-Inner"},s.a.createElement("p",{className:"Text"},e.text)))}),u=(a(23),a(7));var p=a(1),v=(a(26),a(11)),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={index:0},a.handleFastForward=a.handleFastForward.bind(Object(p.a)(Object(p.a)(a))),a.handlePlay=a.handlePlay.bind(Object(p.a)(Object(p.a)(a))),a.handleRewind=a.handleRewind.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderImages",value:function(){this.props.styles.length;return Object(u.map)(this.props.styles,function(e){var t=v.a.init(e).slice(0,2),a="https://pc-ap.rtrcdn.com/productimages/nomodel/270x/".concat(t,"/").concat(e,".jpg");return s.a.createElement("div",{className:"ImageDisplayArea-Carousel-Image",key:e},s.a.createElement("img",{src:a}))})}},{key:"handleFastForward",value:function(){this.state.index<this.props.styles.length-1?this.setState({index:this.state.index+1}):this.setState({index:0})}},{key:"handleRewind",value:function(){this.state.index>0?this.setState({index:this.state.index-1}):this.setState({index:this.props.styles.length-1})}},{key:"handlePlay",value:function(){}},{key:"render",value:function(){var e=48*this.props.styles.length,t=48*this.state.index;return s.a.createElement("div",{className:"ImageDisplayArea"},s.a.createElement("div",{className:"ImageDisplayArea-Carousel",style:{width:e+"vw",marginLeft:"-".concat(t,"vw")}},this.renderImages()),s.a.createElement("div",{className:"ImageDisplayArea-Buttons"},s.a.createElement(m,{text:"<<",onClick:this.handleRewind}),s.a.createElement(m,{text:">",onClick:this.handlePlay}),s.a.createElement(m,{text:">>",onClick:this.handleFastForward})))}}]),t}(n.Component),f={tops:Object(u.shuffle)(["RMB33","GA33","SMY22","AN23","SLR51","ALC47","OC92","SLR61","NLS65","MRW47","CS78","NM312","PPL31","UNW3","TNT39","NM344"]),bottoms:Object(u.shuffle)(["RZ93","DL193","SBL27","TYB32","AX94","HP90","FP78","PBO8","PLL7","DJ24"])},E=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"SelectorDisplay"},s.a.createElement(b,{styles:f.tops}),s.a.createElement(b,{styles:f.bottoms}))}}]),t}(n.Component),O=(a(28),function(){return s.a.createElement("div",{className:"Mismatch"},s.a.createElement("div",{className:"Mismatch-Box"},"MIS-MATCH!"))}),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={showMismatched:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-Header"},"JENN'S WARDROBE"),s.a.createElement("div",{className:"Content"},s.a.createElement("div",{className:"Content-Left"},s.a.createElement(m,{text:"AUTO DRESS",width:170,height:95,activated:!0})),s.a.createElement("div",{className:"Content-Center"},s.a.createElement(E,null)),s.a.createElement("div",{className:"Content-Right"},s.a.createElement(m,{text:"DRESS ME",width:170,height:95,onClick:function(){return e.setState({showMismatched:!0})}}))),s.a.createElement("footer",{className:"App-Footer"}),this.state.showMismatched?s.a.createElement(O,null):null)}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(y,null)}}]),t}(n.Component);i.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.6df50728.chunk.js.map