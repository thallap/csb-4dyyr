(this["webpackJsonpimportant-tree"]=this["webpackJsonpimportant-tree"]||[]).push([[0],{104:function(e,t,n){"use strict";(function(e){var o=n(75),a=n(76);e.exports={nodeContentRenderer:o.a,treeNodeRenderer:a.a},t.a={nodeContentRenderer:o.a,treeNodeRenderer:a.a}}).call(this,n(150)(e))},146:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var o=n(99),a=n(100),i=n(112),r=n(109),l=n(0),d=n.n(l),c=n(11),s=n.n(c),h=n(77),p=n(189),g=n(108),b=[{title:"root",subtitle:"",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"Z0000001",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"Z0000002",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"Z0000005",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"00000009",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"Z0000010",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[{title:"00000014",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"00000015",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]}]},{title:"00000006",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]},{title:"Z0000003",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"00000007",subtitle:"NDP",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"Z0000008",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[{title:"00000011",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"00000012",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]},{title:"00000013",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]}]},{title:"00000004",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]},{title:"Z0000016",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"00000017",subtitle:"LOC",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]}]}],u=(n(146),n(147),n(110)),f=n(114),x=n(155),m=n(188),j=n(190),y=n(187),v=n(103),C=n.n(v),w=n(33),O=n.n(w),D=n(6);function N(e){var t=e.row,n=e.handleChange,o=k(),a=Object(l.useState)(null),i=Object(u.a)(a,2),r=i[0],d=i[1],c=function(e){d(null),e&&n(e)};return Object(D.jsxs)("div",{className:o.root,children:[Object(D.jsx)(x.a,{className:o.rowItem,"aria-controls":"task-menu","aria-haspopup":"true",onClick:function(e){return d(e.currentTarget)},children:Object(D.jsx)(C.a,{color:"action"})}),Object(D.jsxs)(m.a,{id:"task-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:function(){return d(null)},children:[Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"editPortfolio"})},children:"Edit Portfolio"}),Object(D.jsx)(y.a,{}),"1"===(null===t||void 0===t?void 0:t.bool)&&Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"addPortfolio"})},children:"Add a Nested Portfolio"}),Object(D.jsx)(y.a,{}),"1"===(null===t||void 0===t?void 0:t.bool)&&Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"deletetree"})},children:"Delete Portfolio Tree"}),Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"deletenode"})},children:"Delete Portfolio"})]})]})}var k=Object(f.a)((function(e){return{root:{height:"100%",borderLeft:"1px solid ".concat(O()(e.palette.divider).setAlpha(.06).toString())},rowItem:{height:"100%",width:48,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",zIndex:1,"&:hover":{"&:after":{position:"absolute",top:0,bottom:0,left:0,right:0,content:'""',backgroundColor:O()(e.palette.divider).setAlpha(.03).toString()}}}}}));N.defaultProps={row:null,handleChange:function(){}};var I=d.a.memo(N),S=n(104),L=Object(g.a)({palette:{type:"light"}});window.mui={};var H=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={searchString:"",searchFocusIndex:-1,searchFoundCount:0,treeData:b},e.handleTreeOnChange=function(t){e.setState({treeData:t})},e.handleSearchOnChange=function(t){e.setState({searchString:t.target.value})},e.setNewData=function(t){e.setState({treeData:t}),e.toggleNodeExpansion(!0)},e.selectPrevMatch=function(){var t=e.state,n=t.searchFocusIndex,o=t.searchFoundCount;e.setState({searchFocusIndex:null!==n?(o+n-1)%o:o-1})},e.selectNextMatch=function(){var t=e.state,n=t.searchFocusIndex,o=t.searchFoundCount;e.setState({searchFocusIndex:null!==n?(n+1)%o:0})},e.toggleNodeExpansion=function(t){e.setState((function(e){return{treeData:Object(h.b)({treeData:e.treeData,expanded:t})}}))},e.handleChange=function(e){("addPortfolio"===e.action||"editPortfolio"===e.action||"deletetree"===e.action||"deletenode"===e.action)&&console.log(e.title,e.action)},window.mui.setNewData=e.setNewData,e}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.treeData,o=t.searchString,a=t.searchFocusIndex,i=t.searchFoundCount;return Object(D.jsxs)("div",{className:"wrapper",children:[Object(D.jsxs)("div",{className:"bar-wrapper",children:[Object(D.jsx)("button",{onClick:this.toggleNodeExpansion.bind(this,!0),children:"Expand all"}),Object(D.jsx)("button",{className:"collapse",onClick:this.toggleNodeExpansion.bind(this,!1),children:"Collapse all"}),Object(D.jsx)("label",{style:{fontSize:"90%"},children:"Search: "}),Object(D.jsx)("input",{onChange:this.handleSearchOnChange}),Object(D.jsx)("button",{className:"previous",onClick:this.selectPrevMatch,children:"Previous"}),Object(D.jsx)("button",{className:"next",onClick:this.selectNextMatch,children:"Next"}),Object(D.jsxs)("label",{children:[a," / ",i]})]}),Object(D.jsx)(p.a,{theme:L,children:Object(D.jsx)("div",{style:{width:"100%"},children:Object(D.jsx)(h.a,{rowHeight:100,treeData:n,onChange:this.handleTreeOnChange,isVirtualized:!1,theme:S.a,searchQuery:o,searchFocusOffset:a,canDrag:function(e){return!e.node.noDragging},canDrop:function(e){var t=e.nextParent;return!t||!t.noChildren},searchFinishCallback:function(t){return e.setState({searchFoundCount:t.length,searchFocusIndex:t.length>0?a%t.length:0})},generateNodeProps:function(t){var n=t.node;return{buttons:[Object(D.jsx)(I,{row:n,handleChange:e.handleChange},"more-menu")]}}})})})]})}}]),n}(d.a.Component),E=document.getElementById("root");s.a.render(Object(D.jsx)(H,{}),E)},75:function(e,t,n){"use strict";var o=n(34),a=n(111),i=n(68),r=(n(0),n(114)),l=n(29),d=n.n(l),c=n(105),s=n.n(c),h=n(107),p=n.n(h),g=n(106),b=n.n(g),u=n(153),f=n(78),x=n(33),m=n.n(x),j=n(6);function y(e,t){return!!e.children&&"function"!==typeof e.children&&e.children.some((function(e){return e===t||y(e,t)}))}function v(e){e.scaffoldBlockPxWidth;var t,n,r=e.toggleChildrenVisibility,l=e.connectDragPreview,c=e.connectDragSource,h=e.isDragging,g=e.canDrop,x=e.canDrag,m=e.node,v=e.title,w=e.subtitle,O=(e.nationality,e.draggedNode),D=e.path,N=e.treeIndex,k=e.isSearchMatch,I=e.isSearchFocus,S=e.buttons,L=e.className,H=e.style,E=e.didDrop,P=(e.treeId,e.isOver,e.parentNode,e.rowDirection,Object(i.a)(e,["scaffoldBlockPxWidth","toggleChildrenVisibility","connectDragPreview","connectDragSource","isDragging","canDrop","canDrag","node","title","subtitle","nationality","draggedNode","path","treeIndex","isSearchMatch","isSearchFocus","buttons","className","style","didDrop","treeId","isOver","parentNode","rowDirection"])),R=C(),F=v||m.title,z=w||m.subtitle,B=w||m.nationality;x&&("function"===typeof m.children&&m.expanded?(R.loadingHandle,R.loadingCircle,Object(a.a)(new Array(12)).map((function(e,t){return Object(j.jsx)("div",{className:R.loadingCirclePoint},t)}))):c(Object(j.jsx)("div",{className:R.moveHandle,children:Object(j.jsx)(s.a,{color:"action"})}),{dropEffect:"copy"}));var V=O&&y(O,m),T=!E&&h,M=(null===m||void 0===m||null===(t=m.children)||void 0===t?void 0:t.length)>0||"function"===typeof(null===m||void 0===m?void 0:m.children),A=l(Object(j.jsxs)("div",{className:d()(R.rowContent,T&&R.rowLandingPad,T&&!g&&R.rowCancelPad,k&&R.rowSearchMatch,I&&R.rowSearchFocus,(null===m||void 0===m||null===(n=m.data)||void 0===n?void 0:n.deleted)&&R.rowContentDeleted,L),style:Object(o.a)({opacity:V?.5:1},H),children:[Object(j.jsx)("div",{className:d()(R.rowLabel),children:"function"===typeof F?F({node:m,path:D,treeIndex:N}):Object(j.jsx)(f.a,{children:F})}),Object(j.jsx)("div",{style:{height:"100%"}}),Object(j.jsx)("div",{className:d()(R.rowLabelSubtitle),children:"function"===typeof z?z({node:m,path:D,treeIndex:N}):Object(j.jsxs)(f.a,{children:[Object(j.jsx)("span",{style:{fontSize:"70%",color:"grey"},children:"Legal Entity"}),Object(j.jsx)("br",{}),z]})}),Object(j.jsx)("div",{className:d()(R.rowLabelContent),children:"function"===typeof B?B({node:m,path:D,treeIndex:N}):Object(j.jsxs)(f.a,{children:[Object(j.jsx)("span",{style:{fontSize:"70%",color:"grey"},children:"Nationality"}),Object(j.jsx)("br",{}),B]})}),Object(j.jsx)("div",{className:R.rowToolbar,children:S})]}));return Object(j.jsxs)("div",Object(o.a)(Object(o.a)({className:R.rowContainer,style:Object(o.a)({opacity:V?.5:1},H)},P),{},{children:[r&&M&&Object(j.jsx)("div",{className:R.toggleIcon,children:Object(j.jsx)(u.a,{size:"small",onClick:function(e){e.target.blur(),r({node:m,path:D,treeIndex:N})},children:m.expanded?Object(j.jsx)(b.a,{color:"action"}):Object(j.jsx)(p.a,{color:"action"})})}),Object(j.jsx)("div",{className:R.rowWrapper+(x?"":" ".concat(R.rowWrapperDragDisabled)),children:x?c(A,{dropEffect:"copy"}):A}),Object(j.jsx)("div",{className:R.lineLeft}),r&&M&&m.expanded&&!h&&Object(j.jsx)("div",{className:R.lineChildren})]}))}var C=Object(r.a)((function(e){return{rowContainer:{flex:"1 1 auto",whiteSpace:"nowrap",boxSizing:"border-box","& * ":{boxSizing:"border-box"},height:"100%",padding:e.spacing(.5)},rowWrapper:{height:"100%",boxSizing:"border-box"},rowContent:{height:"100%",display:"flex",border:"1px solid ".concat(e.palette.divider),backgroundColor:e.palette.background.paper,borderRadius:"10px",overflow:"hidden","&:hover":{border:"1px solid ".concat(m()(e.palette.divider).setAlpha(.3).toString())}},rowContentDeleted:{position:"relative",opacity:.5,"&:after":{position:"absolute",content:'""',top:0,right:0,bottom:0,left:0,backgroundColor:m()(e.palette.background.paper).setAlpha(.6).toString(),border:"1px solid ".concat(m()(e.palette.background.paper).setAlpha(.6).toString()),pointerEvents:"none"}},rowLandingPad:{border:"none",boxShadow:"none",backgroundColor:"transparent",outline:"none","& > *":{opacity:0},"&:hover":{border:"none"},"&:before":{backgroundColor:e.palette.primary.light,border:"2px dashed ".concat(e.palette.primary.dark),borderRadius:e.shape.borderRadius,content:'""',position:"absolute",top:e.spacing(.5),right:e.spacing(.5),bottom:e.spacing(.5),left:e.spacing(.5),zIndex:-1,opacity:.25}},rowCancelPad:{border:"none",boxShadow:"none",backgroundColor:"transparent",outline:"none","& > *":{opacity:0},"&:before":{backgroundColor:e.palette.secondary.light,border:"2px dashed ".concat(e.palette.secondary.dark),borderRadius:e.shape.borderRadius,content:'""',position:"absolute",top:e.spacing(.5),right:e.spacing(.5),bottom:e.spacing(.5),left:e.spacing(.5),zIndex:-1,opacity:.25}},rowSearchMatch:{border:"2px solid ".concat(e.palette.primary.main)},rowSearchFocus:{border:"2px dashed ".concat(e.palette.primary.main)},rowLabel:{display:"flex",alignItems:"center",flex:"0 1 auto",overflow:"hidden",height:"100%",marginLeft:"60px",paddingRight:"20px",borderRight:"1px solid ".concat(m()(e.palette.divider).setAlpha(.06).toString())},rowLabelSubtitle:{display:"flex",alignItems:"center",flex:"0 1 auto",paddingRight:e.spacing(1),overflow:"hidden",marginLeft:"20px"},rowLabelContent:{display:"flex",alignItems:"center",flex:"1 1 auto",paddingRight:e.spacing(1),overflow:"hidden",marginLeft:"40px"},rowToolbar:{display:"flex",alignItems:"center",flex:"0 1 auto"},isNotDraggable:{height:"100%",width:e.spacing(2)},moveHandle:{height:"100%",cursor:"move",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"30px",width:44,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},loadingHandle:{height:"100%",zIndex:1,cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},loadingCircle:{width:"80%",height:"80%",margin:"10%",position:"relative"},loadingCirclePoint:{width:"100%",height:"100%",position:"absolute",left:0,top:0,"&:before":{content:'""',display:"block",margin:"0 auto",width:"11%",height:"30%",backgroundColor:"#fff",borderRadius:"30%",animation:"pointFade 800ms infinite ease-in-out both"},"&:nth-of-type(1)":{transform:"rotate(0deg)","&:before":{animationDelay:"-800ms"}},"&:nth-of-type(7)":{transform:"rotate(0deg)","&:before":{animationDelay:"-800ms"}},"&:nth-of-type(2)":{transform:"rotate(30deg)","&:before":{animationDelay:"-666ms"}},"&:nth-of-type(8)":{transform:"rotate(210deg)","&:before":{animationDelay:"-666ms"}},"&:nth-of-type(3)":{transform:"rotate(60deg)","&:before":{animationDelay:"-533ms"}},"&:nth-of-type(9)":{transform:"rotate(240deg)","&:before":{animationDelay:"-533ms"}},"&:nth-of-type(4)":{transform:"rotate(90deg)","&:before":{animationDelay:"-400ms"}},"&:nth-of-type(10)":{transform:"rotate(270deg)","&:before":{animationDelay:"-400ms"}},"&:nth-of-type(5)":{transform:"rotate(120deg)","&:before":{animationDelay:"-266ms"}},"&:nth-of-type(11)":{transform:"rotate(300deg)","&:before":{animationDelay:"-266ms"}},"&:nth-of-type(6)":{transform:"rotate(150deg)","&:before":{animationDelay:"-266ms"}},"&:nth-of-type(12)":{transform:"rotate(330deg)","&:before":{animationDelay:"-133ms"}},"&:nth-of-type(13)":{transform:"rotate(360deg)","&:before":{animationDelay:"0ms"}}},toggleIcon:{display:"flex",alignItems:"center",justifyContent:"center",appearance:"none",border:"1px solid ".concat(e.palette.divider),overflow:"hidden",position:"absolute",borderRadius:"100%",width:28,height:28,padding:0,top:"50%",transform:"translate(-38px, -50%)",backgroundColor:e.palette.background.paper,left:"50px"},lineLeft:{height:"100%",position:"absolute",left:0,top:0,"&:after":{content:'""',position:"absolute",backgroundColor:e.palette.divider,width:e.spacing(.5),top:"50%",left:0,height:1}},lineChildren:{height:"100%",position:"absolute",left:0,top:0,"&:after":{content:'""',position:"absolute",backgroundColor:e.palette.divider,width:1,left:e.spacing(3)-2,bottom:0,height:e.spacing(.5)}}}}));v.defaultProps={isSearchMatch:!1,isSearchFocus:!1,canDrag:!1,toggleChildrenVisibility:null,buttons:[],className:"",style:{},parentNode:null,draggedNode:null,canDrop:!1,title:null,subtitle:null,rowDirection:"ltr"},t.a=v},76:function(e,t,n){"use strict";var o=n(34),a=n(68),i=n(0),r=n(114),l=n(29),d=n.n(l),c=n(6);function s(e){var t=e.children,n=e.listIndex,r=e.swapFrom,l=e.swapLength,s=e.swapDepth,p=e.scaffoldBlockPxWidth,g=e.lowerSiblingCounts,b=e.connectDropTarget,u=e.isOver,f=e.draggedNode,x=e.canDrop,m=e.treeIndex,j=(e.treeId,e.getPrevRow,e.node,e.path,e.rowDirection,Object(a.a)(e,["children","listIndex","swapFrom","swapLength","swapDepth","scaffoldBlockPxWidth","lowerSiblingCounts","connectDropTarget","isOver","draggedNode","canDrop","treeIndex","treeId","getPrevRow","node","path","rowDirection"])),y=h(),v=g.length,C=[];return g.forEach((function(e,t){var o=[];if(e>0?o=0===n?[y.lineHalfHorizontalRight,y.lineHalfVerticalBottom]:t===v-1?[y.lineHalfHorizontalRight,y.lineFullVertical]:[y.lineFullVertical]:0===n?o=[y.lineHalfHorizontalRight]:t===v-1&&(o=[y.lineHalfVerticalTop,y.lineHalfHorizontalRight]),C.push(Object(c.jsx)("div",{style:{width:p},className:d()(y.lineBlock,o)},"pre_".concat(1+t))),m!==n&&t===s){var a=[];a=n===r+l-1?y.highlightBottomLeftCorner:m===r?y.highlightTopLeftCorner:y.highlightLineVertical,C.push(Object(c.jsx)("div",{style:{width:p,left:p*t},className:d()(y.absoluteLineBlock,a)},t))}})),b(Object(c.jsxs)("div",Object(o.a)(Object(o.a)({},j),{},{className:d()(y.node),children:[C,Object(c.jsx)("div",{className:y.nodeContent,style:{left:p*v},children:i.Children.map(t,(function(e){return Object(i.cloneElement)(e,{isOver:u,canDrop:x,draggedNode:f})}))})]})))}var h=Object(r.a)((function(e){return{node:{minWidth:"100%",whiteSpace:"nowrap",position:"relative",textAlign:"left"},nodeContent:{position:"absolute",top:0,bottom:0,right:0},lineBlock:{height:"100%",display:"inline-block",position:"relative"},absoluteLineBlock:{height:"100%",display:"inline-block",position:"absolute",top:0},lineHalfHorizontalRight:{"&:before":{position:"absolute",content:'""',backgroundColor:e.palette.divider,height:1,top:"50%",right:0,width:"50%"}},lineFullVertical:{"&:after":{position:"absolute",content:'""',backgroundColor:e.palette.divider,width:1,left:"50%",top:0,height:"100%"}},lineHalfVerticalTop:{"&:after":{position:"absolute",content:'""',width:1,left:"50%",top:0,height:"50%",backgroundColor:e.palette.divider}},lineHalfVerticalBottom:{"&:after":{position:"absolute",content:'""',backgroundColor:e.palette.divider,width:1,left:"50%",top:"auto",bottom:0,height:"50%"}},"@keyframes arrow-pulse":{"0%":{transform:"translate(0, 0)",opacity:0},"30%":{transform:"translate(0, 300%)",opacity:1},"70%":{transform:"translate(0, 700%)",opacity:1},"100%":{transform:"translate(0, 1000%)",opacity:0}},highlightLineVertical:{zIndex:3,"&:before":{position:"absolute",content:'""',backgroundColor:e.palette.primary.light,width:8,marginLeft:-4,left:"50%",top:0,height:"100%"},"&:after":{content:'""',position:"absolute",height:0,marginLeft:-4,left:"50%",top:0,borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderTop:"4px solid white",animation:"$arrow-pulse 1s infinite linear both"}},highlightTopLeftCorner:{zIndex:3,"&:before":{content:'""',position:"absolute",borderTop:"8px solid ".concat(e.palette.primary.light),borderLeft:"8px solid ".concat(e.palette.primary.light),boxSizing:"border-box",height:"calc(50% + 4px)",top:"50%",marginTop:-4,right:0,width:"calc(50% + 4px)"}},highlightBottomLeftCorner:{zIndex:3,"&:before":{content:'""',position:"absolute",borderBottom:"8px solid ".concat(e.palette.primary.light),borderLeft:"8px solid ".concat(e.palette.primary.light),boxSizing:"border-box",height:"calc(100% + 4px)",top:0,right:12,width:"calc(50% - 8px)"},"&:after":{content:'""',position:"absolute",height:0,right:0,top:"100%",marginTop:-12,borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:"12px solid ".concat(e.palette.primary.light)}}}}));s.defaultProps={swapFrom:null,swapDepth:null,swapLength:null,canDrop:!1,draggedNode:null,rowDirection:"ltr"},t.a=s}},[[152,1,2]]]);
//# sourceMappingURL=main.128f14f7.chunk.js.map