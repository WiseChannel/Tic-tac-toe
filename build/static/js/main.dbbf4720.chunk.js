(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(2),r=a.n(i),c=(a(13),a(3)),l=a(4),o=a(6),u=a(5),d=a(7),h=(a(14),function(t){function e(t,a){var s;return Object(c.a)(this,e),(s=Object(o.a)(this,Object(u.a)(e).call(this,t,a))).isWiner=function(){for(var t=s.state.count%2===0?"X":"O",e=0;e<8;e++){var a=s.winnerLine[e];s.state.squares[a[0]]===t&&s.state.squares[a[1]]===t&&s.state.squares[a[2]]===t&&(alert(t+"win"),setTimeout((function(){s.setState({squares:Array(9).fill(null)}),s.setState({count:Array(9).fill(null)})}),3e3))}},s.clickHendler=function(t){console.log("work");var e=t.target.getAttribute("data"),a=s.state.squares;null===a[e]?(a[e]=s.state.count%2===0?"X":"O",s.setState({count:s.state.count+1}),s.setState({squares:a})):(alert(new Error("\u041d\u0435\u043b\u044c\u0437\u044f \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0434\u0432\u0430 \u0440\u0430\u0437\u0430")),console.error("\u041d\u0435\u043b\u044c\u0437\u044f \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0434\u0432\u0430 \u0440\u0430\u0437\u0430")),s.isWiner()},s.state={squares:Array(9).fill(null),count:0},s.winnerLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"tic-tac-toe"},n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"0"},this.state.squares[0]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"1"},this.state.squares[1]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"2"},this.state.squares[2]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"3"},this.state.squares[3]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"4"},this.state.squares[4]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"5"},this.state.squares[5]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"6"},this.state.squares[6]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"7"},this.state.squares[7]),n.a.createElement("div",{className:"ttt-grid",onClick:this.clickHendler,data:"8"},this.state.squares[8]))}}]),e}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},8:function(t,e,a){t.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dbbf4720.chunk.js.map