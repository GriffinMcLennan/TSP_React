(this.webpackJsonpcanvas=this.webpackJsonpcanvas||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(4),r=a.n(i),o=(a(14),a(3)),h=a(1),l=a(2),c=a(6),u=a(5),f=a(7),p=(a(15),function(t,e,a){var n=t.getContext("2d");n.strokeStyle="black",n.beginPath(),n.arc(e,a,10,0,2*Math.PI),n.fillStyle="red",n.fill(),n.stroke()}),v=function(t){var e=t;e.getContext("2d").clearRect(0,0,e.width,e.height)},g=function(t,e){var a=t,n=a.getContext("2d"),s=e;v(a),n.strokeStyle="black";for(var i=0;i<s.length;i++)p(a,s[i][0],s[i][1]);for(var r=0;r<s.length-1;r++)n.beginPath(),n.moveTo(s[r][0],s[r][1]),n.lineTo(s[r+1][0],s[r+1][1]),n.stroke()},d=function(t,e,a){var n=t,s=n.getContext("2d"),i=e;v(n);for(var r=2e3/i.length,o=0;o<i.length;o++)p(n,i[o][0],i[o][1]);s.strokeStyle="red";for(var h=function(t){setTimeout((function(){s.beginPath(),s.moveTo(i[t][0],i[t][1]),s.lineTo(i[t+1][0],i[t+1][1]),s.stroke(),t===i.length-2&&a()}),r*t)},l=0;l<i.length-1;l++)h(l)},m=function(t){for(var e=t[0],a=t[0],n=1;n<t.length;n++)t[n]>a&&(a=t[n]),t[n]<e&&(e=t[n]);return[e,a]},b=function(t,e,a,n){var s=n/(a-e);console.log(s);for(var i=[],r=0;r<t.length;r++)i.push((t[r]-e)*s),i[r]=n-i[r];return i},k=function(t,e,a,n,s,i){var r,h=t,l=a,c=-1,u=e.getContext("2d"),f=!1,p=m(n),v=Object(o.a)(p,2),k=v[0],y=v[1];if(k!==y)var w=b(n,k,y,720);else f=!0;console.log(n),console.log(w);for(var M=900/(n.length-1),O=0,E=3e3/l.length,j=function(t){setTimeout((function(){r=n[t],t!==l.length-1?(g(h,l[t]),(c<0||c>n[t])&&(c=n[t])):d(h,l[t],i),f?0===t?(u.beginPath(),u.moveTo(O,250)):(u.lineTo(O,250),u.stroke()):(720===w[t]&&(w[t]-=3),0===t?(u.beginPath(),u.moveTo(O,w[0])):(u.lineTo(O,w[t]),u.stroke())),O+=M,s(r,c)}),t*E)},C=0;C<l.length;C++)j(C)};var y=function(t){for(var e=[],a=0;a<t.length;a++){for(var n=[],s=0;s<t[a].length;s++)n.push(t[a][s]);e.push(n)}return e},w=function(t){for(var e=0,a=t,n=1;n<t.length;n++)e+=Math.sqrt(Math.pow(a[n][0]-a[n-1][0],2)+Math.pow(a[n][1]-a[n-1][1],2));return e=Math.round(e)},M=function(t){if(!(t.length<2)){for(var e=Math.floor(Math.random()*t.length),a=Math.floor(Math.random()*t.length);a===e;)a=Math.floor(Math.random()*t.length);var n=t[e][0],s=t[e][1];t[e][0]=t[a][0],t[e][1]=t[a][1],t[a][0]=n,t[a][1]=s}},O=function(t,e){for(var a=e,n=[],s=[],i=[],r=-1,o=y(t),h=0;h<a;h++)M(o),n.push(o),i.push(w(o)),(i[h]<r||-1===r)&&(r=i[h],s=o),o=y(t);return n.push(s),i.push(r),[n,i]},E=function(t,e,a){return e<t?1:Math.exp((t-e)/a)},j=function(t){var e=1e5,a=[],n=[],s=w(t),i=y(t);a.push(t),n.push(s);for(var r=s,o=t;e>.01;){var h=y(i);M(h);var l=w(h);E(s,l,e)>Math.random()&&(i=y(h),a.push(i),n.push(l),(s=l)<r&&(r=s,o=i)),e*=.95}return a.push(o),n.push(r),[a,n]},C=function(t){for(var e=0;e<t.length;e++){for(var a=Math.floor(Math.random()*t.length);a===e;)a=Math.floor(Math.random()*t.length);var n=t[e];t[e]=t[a],t[a]=n}},S=function(){function t(e){Object(h.a)(this,t);var a=y(e);C(a),this.path=a,this.calcFitness()}return Object(l.a)(t,[{key:"calcFitness",value:function(){this.fitness=1/(1+w(this.path))}}]),t}(),x=function(){function t(e){Object(h.a)(this,t);for(var a=[],n=0;n<100;n++)a.push(new S(e));this.paths=a}return Object(l.a)(t,[{key:"getFittest",value:function(){for(var t=this.paths[0],e=t.fitness,a=1;a<this.paths.length;a++)this.paths[a].fitness>e&&(e=this.paths[a].fitness,t=this.paths[a]);return t}},{key:"normalizeFitness",value:function(){for(var t=0,e=0;e<this.paths.length;e++)t+=this.paths[e].fitness;for(var a=0;a<this.paths.length;a++)this.paths[a].fitness=this.paths[a].fitness/t}}]),t}(),T=function(t){for(var e=0,a=Math.random();a>0;)a-=t[e].fitness,e++;return y(t[--e].path)},D=function(){function t(e){Object(h.a)(this,t),this.eliteOffset=5,this.population=new x(e),this.population.normalizeFitness(),this.sortByFitness()}return Object(l.a)(t,[{key:"evole",value:function(t){for(var e=[],a=[],n=1e10,s=[],i=0;i<t;i++){for(var r=1e11,o=[],h=0;h<this.population.paths.length;h++){var l=w(this.population.paths[h].path);l<r&&(r=l,o=this.population.paths[h].path),l<n&&(n=l,s=this.population.paths[h].path)}e.push(o),a.push(r),this.nextGeneration()}return e.push(s),a.push(n),[e,a]}},{key:"nextGeneration",value:function(){for(var t=[],e=0;e<this.eliteOffset;e++)t.push(y(this.population.paths[e].path));for(var a=0;a<this.population.paths.length-this.eliteOffset;a++){var n=T(this.population.paths);if(Math.random()>.8){var s=T(this.population.paths);n=this.crossOver(n,s)}else M(n);t.push(n)}for(var i=0;i<this.population.paths.length;i++)this.population.paths[i].path=t[i],this.population.paths[i].calcFitness();this.population.normalizeFitness(),this.sortByFitness()}},{key:"crossOver",value:function(t,e){for(var a=Math.floor(Math.random()*t.length),n=Math.floor(Math.random()*t.length),s=[];n===a;)n=Math.floor(Math.random()*t.length);if(a>n){var i=n;n=a,a=i}for(var r=new Set,o=a;o<n;o++)s.push(t[o]),r.add(""+t[o]);for(var h=0;h<e.length;h++)r.has(""+e[h])||(s.push(e[h]),r.add(""+e[h]));for(var l=0;l<t.length;l++)r.has(""+t[l])||s.push(t[l]);return s}},{key:"sortByFitness",value:function(){for(var t=this.population,e=0;e<t.paths.length-1;e++)for(var a=e+1;a<t.paths.length;a++)if(t.paths[a].fitness>t.paths[e].fitness){var n=t.paths[e].path,s=t.paths[e].fitness;t.paths[e].path=t.paths[a].path,t.paths[e].fitness=t.paths[a].fitness,t.paths[a].path=n,t.paths[a].fitness=s}}}]),t}(),A=document.getElementById("modal-root"),F=function(t){function e(){return Object(h.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createPortal(s.a.createElement("div",{style:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",display:"grid",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.3)"}},s.a.createElement("div",{style:{padding:20,background:"#fff",borderRadius:"2px",display:"inline-block",minHeight:"800px",margin:"1rem",position:"relative",minWidth:"800px",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",justifySelf:"center"}},this.props.statement,s.a.createElement("hr",null),s.a.createElement("p",null,"Place destinations on the canvas to the left and then select an algorithm!"),s.a.createElement("button",{onClick:this.props.onClose},"Close"))),A)}}]),e}(s.a.Component),P=function(t){function e(){var t,a;Object(h.a)(this,e);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={circles:[],bestPath:[],bestDistance:-1,distance:null,drawing:!1,showTutorial:!0},a.setDistances=function(t,e){a.setState({distance:t,bestDistance:e})},a.doneDrawing=function(){a.setState({drawing:!1})},a.closeTutorial=function(){a.setState({showTutorial:!1})},a}return Object(f.a)(e,t),Object(l.a)(e,[{key:"addCircle",value:function(t,e){var a=this.state.circles.slice();a.push([t,e]),M(a),this.setState({circles:a}),p(this.refs.canvas,t,e)}},{key:"resetState",value:function(){!0!==this.state.drawing?(v(this.refs.canvas),v(this.refs.canvas2),this.setState({circles:[],bestDistance:-1,distance:null,drawing:!1})):alert("Wait for animation to finish before resetting!")}},{key:"selectAlgorithm",value:function(t){if(this.state.circles.length<2)alert("Must contain at least 2 or more circles to find paths");else if(!0!==this.state.drawing){var e,a;if(v(this.refs.canvas2),this.setState({drawing:!0}),this.setDistances(null,-1),"SA"===t){var n=j(this.state.circles),s=Object(o.a)(n,2);e=s[0],a=s[1]}else if("randomSwap"===t){var i=O(this.state.circles,50),r=Object(o.a)(i,2);e=r[0],a=r[1]}else if("GA"===t){var h=new D(this.state.circles).evole(100),l=Object(o.a)(h,2);e=l[0],a=l[1]}k(this.refs.canvas,this.refs.canvas2,e,a,this.setDistances,this.doneDrawing)}else alert("Wait for animation to finish before selecting another algorithm!")}},{key:"render",value:function(){var t,e=this;return t=-1===this.state.bestDistance?"":this.state.bestDistance,s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("canvas",{ref:"canvas",width:880,height:800,onClick:function(t){return e.addCircle(t.clientX,t.clientY)}}),s.a.createElement("div",{id:"div2"},s.a.createElement("p",null,"Distance Graph:"),s.a.createElement("canvas",{ref:"canvas2",id:"distancegraph",width:900,height:720}))),s.a.createElement("div",{id:"utilities"},s.a.createElement("div",{id:"buttons"},s.a.createElement("button",{className:"btn",onClick:function(){return e.selectAlgorithm("randomSwap")}},"Random Swap"),s.a.createElement("button",{className:"btn",onClick:function(){return e.selectAlgorithm("SA")}},"Simulated Annealing"),s.a.createElement("button",{className:"btn",onClick:function(){return e.selectAlgorithm("GA")}},"Genetic Algorithm"),s.a.createElement("button",{className:"btn",onClick:function(){return e.resetState()}},"Reset")),s.a.createElement("div",{id:"scoreInfo"},s.a.createElement("p",{className:"scoreboard"},"Current Distance: ",this.state.distance),s.a.createElement("p",{className:"scoreboard"},"Best Distance: ",t))),this.state.showTutorial?s.a.createElement(F,{onClose:this.closeTutorial,statement:"Tutorial:"}):null)}}]),e}(s.a.Component);r.a.render(s.a.createElement(P,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c48de17c.chunk.js.map