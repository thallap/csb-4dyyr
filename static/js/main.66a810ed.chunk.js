(this["webpackJsonpimportant-tree"]=this["webpackJsonpimportant-tree"]||[]).push([[0],{141:function(e,t,o){},146:function(e,t,o){"use strict";o.r(t);var n=o(96),a=o(97),i=o(108),r=o(105),l=o(0),d=o.n(l),c=o(11),s=o.n(c),h=o(75),p=o(185),g=o(104),b=[{title:"root",subtitle:"",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"Z0000001",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"Z0000002",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"Z0000005",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"00000009",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"Z0000010",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[{title:"00000014",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"00000015",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]}]},{title:"00000006",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]},{title:"Z0000003",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[{title:"00000007",subtitle:"NDP",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"Z0000008",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[{title:"00000011",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"00000012",subtitle:"BRU",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]},{title:"00000013",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]}]},{title:"00000004",subtitle:"LOC",bool:"0",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],children:[]}]},{title:"Z0000016",subtitle:"DIV",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]},{title:"00000017",subtitle:"LOC",bool:"1",nationality:"CHE",dateranges:[["2015-05-12","2016-05-12"]],expanded:!0,children:[]}]}],u=(o(141),o(142),o(106)),f=o(181),x=o(148),m=o(184),j=o(186),y=o(180),v=o(100),C=o.n(v),w=o(33),O=o.n(w),D=o(6);function N(e){var t=e.row,o=e.handleChange,n=k(),a=Object(l.useState)(null),i=Object(u.a)(a,2),r=i[0],d=i[1],c=function(e){d(null),e&&o(e)};return Object(D.jsxs)("div",{className:n.root,children:[Object(D.jsx)(x.a,{className:n.rowItem,"aria-controls":"task-menu","aria-haspopup":"true",onClick:function(e){return d(e.currentTarget)},children:Object(D.jsx)(C.a,{color:"action"})}),Object(D.jsxs)(m.a,{id:"task-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:function(){return d(null)},children:[Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"editPortfolio"})},children:"Edit Portfolio"}),Object(D.jsx)(y.a,{}),"1"===(null===t||void 0===t?void 0:t.bool)&&Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"addPortfolio"})},children:"Add a Nested Portfolio"}),Object(D.jsx)(y.a,{}),"1"===(null===t||void 0===t?void 0:t.bool)&&Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"deletetree"})},children:"Delete Portfolio Tree"}),Object(D.jsx)(j.a,{onClick:function(){return c({title:null===t||void 0===t?void 0:t.title,action:"deletenode"})},children:"Delete Portfolio"})]})]})}var k=Object(f.a)((function(e){return{root:{height:"100%",borderLeft:"1px solid ".concat(O()(e.palette.divider).setAlpha(.06).toString())},rowItem:{height:"100%",width:48,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",zIndex:1,"&:hover":{"&:after":{position:"absolute",top:0,bottom:0,left:0,right:0,content:'""',backgroundColor:O()(e.palette.divider).setAlpha(.03).toString()}}}}}));N.defaultProps={row:null,handleChange:function(){}};var I=d.a.memo(N),S=o(34),L=o(107),H=o(68),E=o(29),P=o.n(E),R=o(101),F=o.n(R),z=o(103),B=o.n(z),V=o(102),T=o.n(V),M=o(183),A=o(182);function W(e,t){return!!e.children&&"function"!==typeof e.children&&e.children.some((function(e){return e===t||W(e,t)}))}function Z(e){e.scaffoldBlockPxWidth;var t,o,n=e.toggleChildrenVisibility,a=e.connectDragPreview,i=e.connectDragSource,r=e.isDragging,l=e.canDrop,d=e.canDrag,c=e.node,s=e.title,h=e.subtitle,p=(e.nationality,e.draggedNode),g=e.path,b=e.treeIndex,u=e.isSearchMatch,f=e.isSearchFocus,x=e.buttons,m=e.className,j=e.style,y=e.didDrop,v=(e.treeId,e.isOver,e.parentNode,e.rowDirection,Object(H.a)(e,["scaffoldBlockPxWidth","toggleChildrenVisibility","connectDragPreview","connectDragSource","isDragging","canDrop","canDrag","node","title","subtitle","nationality","draggedNode","path","treeIndex","isSearchMatch","isSearchFocus","buttons","className","style","didDrop","treeId","isOver","parentNode","rowDirection"])),C=U(),w=s||c.title,O=h||c.subtitle,N=h||c.nationality;d&&("function"===typeof c.children&&c.expanded?(C.loadingHandle,C.loadingCircle,Object(L.a)(new Array(12)).map((function(e,t){return Object(D.jsx)("div",{className:C.loadingCirclePoint},t)}))):i(Object(D.jsx)("div",{className:C.moveHandle,children:Object(D.jsx)(F.a,{color:"action"})}),{dropEffect:"copy"}));var k=p&&W(p,c),I=!y&&r,E=(null===c||void 0===c||null===(t=c.children)||void 0===t?void 0:t.length)>0||"function"===typeof(null===c||void 0===c?void 0:c.children),R=a(Object(D.jsxs)("div",{className:P()(C.rowContent,I&&C.rowLandingPad,I&&!l&&C.rowCancelPad,u&&C.rowSearchMatch,f&&C.rowSearchFocus,(null===c||void 0===c||null===(o=c.data)||void 0===o?void 0:o.deleted)&&C.rowContentDeleted,m),style:Object(S.a)({opacity:k?.5:1},j),children:[Object(D.jsx)("div",{className:P()(C.rowLabel),children:"function"===typeof w?w({node:c,path:g,treeIndex:b}):Object(D.jsx)(A.a,{children:w})}),Object(D.jsx)("div",{style:{height:"100%"}}),Object(D.jsx)("div",{className:P()(C.rowLabelSubtitle),children:"function"===typeof O?O({node:c,path:g,treeIndex:b}):Object(D.jsxs)(A.a,{children:[Object(D.jsx)("span",{style:{fontSize:"70%",color:"grey"},children:"Legal Entity"}),Object(D.jsx)("br",{}),O]})}),Object(D.jsx)("div",{className:P()(C.rowLabelContent),children:"function"===typeof N?N({node:c,path:g,treeIndex:b}):Object(D.jsxs)(A.a,{children:[Object(D.jsx)("span",{style:{fontSize:"70%",color:"grey"},children:"Nationality"}),Object(D.jsx)("br",{}),N]})}),Object(D.jsx)("div",{className:C.rowToolbar,children:x})]}));return Object(D.jsxs)("div",Object(S.a)(Object(S.a)({className:C.rowContainer,style:Object(S.a)({opacity:k?.5:1},j)},v),{},{children:[n&&E&&Object(D.jsx)("div",{className:C.toggleIcon,children:Object(D.jsx)(M.a,{size:"small",onClick:function(e){e.target.blur(),n({node:c,path:g,treeIndex:b})},children:c.expanded?Object(D.jsx)(T.a,{color:"action"}):Object(D.jsx)(B.a,{color:"action"})})}),Object(D.jsx)("div",{className:C.rowWrapper+(d?"":" ".concat(C.rowWrapperDragDisabled)),children:d?i(R,{dropEffect:"copy"}):R}),Object(D.jsx)("div",{className:C.lineLeft}),n&&E&&c.expanded&&!r&&Object(D.jsx)("div",{className:C.lineChildren})]}))}var U=Object(f.a)((function(e){return{rowContainer:{flex:"1 1 auto",whiteSpace:"nowrap",boxSizing:"border-box","& * ":{boxSizing:"border-box"},height:"100%",padding:e.spacing(.5)},rowWrapper:{height:"100%",boxSizing:"border-box"},rowContent:{height:"100%",display:"flex",border:"1px solid ".concat(e.palette.divider),backgroundColor:e.palette.background.paper,borderRadius:"10px",overflow:"hidden","&:hover":{border:"1px solid ".concat(O()(e.palette.divider).setAlpha(.3).toString())}},rowContentDeleted:{position:"relative",opacity:.5,"&:after":{position:"absolute",content:'""',top:0,right:0,bottom:0,left:0,backgroundColor:O()(e.palette.background.paper).setAlpha(.6).toString(),border:"1px solid ".concat(O()(e.palette.background.paper).setAlpha(.6).toString()),pointerEvents:"none"}},rowLandingPad:{border:"none",boxShadow:"none",backgroundColor:"transparent",outline:"none","& > *":{opacity:0},"&:hover":{border:"none"},"&:before":{backgroundColor:e.palette.primary.light,border:"2px dashed ".concat(e.palette.primary.dark),borderRadius:e.shape.borderRadius,content:'""',position:"absolute",top:e.spacing(.5),right:e.spacing(.5),bottom:e.spacing(.5),left:e.spacing(.5),zIndex:-1,opacity:.25}},rowCancelPad:{border:"none",boxShadow:"none",backgroundColor:"transparent",outline:"none","& > *":{opacity:0},"&:before":{backgroundColor:e.palette.secondary.light,border:"2px dashed ".concat(e.palette.secondary.dark),borderRadius:e.shape.borderRadius,content:'""',position:"absolute",top:e.spacing(.5),right:e.spacing(.5),bottom:e.spacing(.5),left:e.spacing(.5),zIndex:-1,opacity:.25}},rowSearchMatch:{border:"2px solid ".concat(e.palette.primary.main)},rowSearchFocus:{border:"2px dashed ".concat(e.palette.primary.main)},rowLabel:{display:"flex",alignItems:"center",flex:"0 1 auto",overflow:"hidden",height:"100%",marginLeft:"60px",paddingRight:"20px",borderRight:"1px solid ".concat(O()(e.palette.divider).setAlpha(.06).toString())},rowLabelSubtitle:{display:"flex",alignItems:"center",flex:"0 1 auto",paddingRight:e.spacing(1),overflow:"hidden",marginLeft:"20px"},rowLabelContent:{display:"flex",alignItems:"center",flex:"1 1 auto",paddingRight:e.spacing(1),overflow:"hidden",marginLeft:"40px"},rowToolbar:{display:"flex",alignItems:"center",flex:"0 1 auto"},isNotDraggable:{height:"100%",width:e.spacing(2)},moveHandle:{height:"100%",cursor:"move",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"30px",width:44,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},loadingHandle:{height:"100%",zIndex:1,cursor:"default",display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},loadingCircle:{width:"80%",height:"80%",margin:"10%",position:"relative"},loadingCirclePoint:{width:"100%",height:"100%",position:"absolute",left:0,top:0,"&:before":{content:'""',display:"block",margin:"0 auto",width:"11%",height:"30%",backgroundColor:"#fff",borderRadius:"30%",animation:"pointFade 800ms infinite ease-in-out both"},"&:nth-of-type(1)":{transform:"rotate(0deg)","&:before":{animationDelay:"-800ms"}},"&:nth-of-type(7)":{transform:"rotate(0deg)","&:before":{animationDelay:"-800ms"}},"&:nth-of-type(2)":{transform:"rotate(30deg)","&:before":{animationDelay:"-666ms"}},"&:nth-of-type(8)":{transform:"rotate(210deg)","&:before":{animationDelay:"-666ms"}},"&:nth-of-type(3)":{transform:"rotate(60deg)","&:before":{animationDelay:"-533ms"}},"&:nth-of-type(9)":{transform:"rotate(240deg)","&:before":{animationDelay:"-533ms"}},"&:nth-of-type(4)":{transform:"rotate(90deg)","&:before":{animationDelay:"-400ms"}},"&:nth-of-type(10)":{transform:"rotate(270deg)","&:before":{animationDelay:"-400ms"}},"&:nth-of-type(5)":{transform:"rotate(120deg)","&:before":{animationDelay:"-266ms"}},"&:nth-of-type(11)":{transform:"rotate(300deg)","&:before":{animationDelay:"-266ms"}},"&:nth-of-type(6)":{transform:"rotate(150deg)","&:before":{animationDelay:"-266ms"}},"&:nth-of-type(12)":{transform:"rotate(330deg)","&:before":{animationDelay:"-133ms"}},"&:nth-of-type(13)":{transform:"rotate(360deg)","&:before":{animationDelay:"0ms"}}},toggleIcon:{display:"flex",alignItems:"center",justifyContent:"center",appearance:"none",border:"1px solid ".concat(e.palette.divider),overflow:"hidden",position:"absolute",borderRadius:"100%",width:28,height:28,padding:0,top:"50%",transform:"translate(-38px, -50%)",backgroundColor:e.palette.background.paper,left:"50px"},lineLeft:{height:"100%",position:"absolute",left:0,top:0,"&:after":{content:'""',position:"absolute",backgroundColor:e.palette.divider,width:e.spacing(.5),top:"50%",left:0,height:1}},lineChildren:{height:"100%",position:"absolute",left:0,top:0,"&:after":{content:'""',position:"absolute",backgroundColor:e.palette.divider,width:1,left:e.spacing(3)-2,bottom:0,height:e.spacing(.5)}}}}));Z.defaultProps={isSearchMatch:!1,isSearchFocus:!1,canDrag:!1,toggleChildrenVisibility:null,buttons:[],className:"",style:{},parentNode:null,draggedNode:null,canDrop:!1,title:null,subtitle:null,rowDirection:"ltr"};var J=Z;function Q(e){var t=e.children,o=e.listIndex,n=e.swapFrom,a=e.swapLength,i=e.swapDepth,r=e.scaffoldBlockPxWidth,d=e.lowerSiblingCounts,c=e.connectDropTarget,s=e.isOver,h=e.draggedNode,p=e.canDrop,g=e.treeIndex,b=(e.treeId,e.getPrevRow,e.node,e.path,e.rowDirection,Object(H.a)(e,["children","listIndex","swapFrom","swapLength","swapDepth","scaffoldBlockPxWidth","lowerSiblingCounts","connectDropTarget","isOver","draggedNode","canDrop","treeIndex","treeId","getPrevRow","node","path","rowDirection"])),u=$(),f=d.length,x=[];return d.forEach((function(e,t){var l=[];if(e>0?l=0===o?[u.lineHalfHorizontalRight,u.lineHalfVerticalBottom]:t===f-1?[u.lineHalfHorizontalRight,u.lineFullVertical]:[u.lineFullVertical]:0===o?l=[u.lineHalfHorizontalRight]:t===f-1&&(l=[u.lineHalfVerticalTop,u.lineHalfHorizontalRight]),x.push(Object(D.jsx)("div",{style:{width:r},className:P()(u.lineBlock,l)},"pre_".concat(1+t))),g!==o&&t===i){var d=[];d=o===n+a-1?u.highlightBottomLeftCorner:g===n?u.highlightTopLeftCorner:u.highlightLineVertical,x.push(Object(D.jsx)("div",{style:{width:r,left:r*t},className:P()(u.absoluteLineBlock,d)},t))}})),c(Object(D.jsxs)("div",Object(S.a)(Object(S.a)({},b),{},{className:P()(u.node),children:[x,Object(D.jsx)("div",{className:u.nodeContent,style:{left:r*f},children:l.Children.map(t,(function(e){return Object(l.cloneElement)(e,{isOver:s,canDrop:p,draggedNode:h})}))})]})))}var $=Object(f.a)((function(e){return{node:{minWidth:"100%",whiteSpace:"nowrap",position:"relative",textAlign:"left"},nodeContent:{position:"absolute",top:0,bottom:0,right:0},lineBlock:{height:"100%",display:"inline-block",position:"relative"},absoluteLineBlock:{height:"100%",display:"inline-block",position:"absolute",top:0},lineHalfHorizontalRight:{"&:before":{position:"absolute",content:'""',backgroundColor:e.palette.divider,height:1,top:"50%",right:0,width:"50%"}},lineFullVertical:{"&:after":{position:"absolute",content:'""',backgroundColor:e.palette.divider,width:1,left:"50%",top:0,height:"100%"}},lineHalfVerticalTop:{"&:after":{position:"absolute",content:'""',width:1,left:"50%",top:0,height:"50%",backgroundColor:e.palette.divider}},lineHalfVerticalBottom:{"&:after":{position:"absolute",content:'""',backgroundColor:e.palette.divider,width:1,left:"50%",top:"auto",bottom:0,height:"50%"}},"@keyframes arrow-pulse":{"0%":{transform:"translate(0, 0)",opacity:0},"30%":{transform:"translate(0, 300%)",opacity:1},"70%":{transform:"translate(0, 700%)",opacity:1},"100%":{transform:"translate(0, 1000%)",opacity:0}},highlightLineVertical:{zIndex:3,"&:before":{position:"absolute",content:'""',backgroundColor:e.palette.primary.light,width:8,marginLeft:-4,left:"50%",top:0,height:"100%"},"&:after":{content:'""',position:"absolute",height:0,marginLeft:-4,left:"50%",top:0,borderLeft:"4px solid transparent",borderRight:"4px solid transparent",borderTop:"4px solid white",animation:"$arrow-pulse 1s infinite linear both"}},highlightTopLeftCorner:{zIndex:3,"&:before":{content:'""',position:"absolute",borderTop:"8px solid ".concat(e.palette.primary.light),borderLeft:"8px solid ".concat(e.palette.primary.light),boxSizing:"border-box",height:"calc(50% + 4px)",top:"50%",marginTop:-4,right:0,width:"calc(50% + 4px)"}},highlightBottomLeftCorner:{zIndex:3,"&:before":{content:'""',position:"absolute",borderBottom:"8px solid ".concat(e.palette.primary.light),borderLeft:"8px solid ".concat(e.palette.primary.light),boxSizing:"border-box",height:"calc(100% + 4px)",top:0,right:12,width:"calc(50% - 8px)"},"&:after":{content:'""',position:"absolute",height:0,right:0,top:"100%",marginTop:-12,borderTop:"12px solid transparent",borderBottom:"12px solid transparent",borderLeft:"12px solid ".concat(e.palette.primary.light)}}}}));Q.defaultProps={swapFrom:null,swapDepth:null,swapLength:null,canDrop:!1,draggedNode:null,rowDirection:"ltr"};var _={nodeContentRenderer:J,treeNodeRenderer:Q},q=Object(g.a)({palette:{type:"light"}});window.mui={};var G=function(e){Object(i.a)(o,e);var t=Object(r.a)(o);function o(){var e;return Object(n.a)(this,o),(e=t.call(this)).state={searchString:"",searchFocusIndex:-1,searchFoundCount:0,treeData:b},e.handleTreeOnChange=function(t){e.setState({treeData:t})},e.handleSearchOnChange=function(t){e.setState({searchString:t.target.value})},e.setNewData=function(t){e.setState({treeData:t}),e.toggleNodeExpansion(!0)},e.selectPrevMatch=function(){var t=e.state,o=t.searchFocusIndex,n=t.searchFoundCount;e.setState({searchFocusIndex:null!==o?(n+o-1)%n:n-1})},e.selectNextMatch=function(){var t=e.state,o=t.searchFocusIndex,n=t.searchFoundCount;e.setState({searchFocusIndex:null!==o?(o+1)%n:0})},e.toggleNodeExpansion=function(t){e.setState((function(e){return{treeData:Object(h.b)({treeData:e.treeData,expanded:t})}}))},e.handleChange=function(e){("addPortfolio"===e.action||"editPortfolio"===e.action||"deletetree"===e.action||"deletenode"===e.action)&&console.log(e.title,e.action)},window.mui.setNewData=e.setNewData,e}return Object(a.a)(o,[{key:"render",value:function(){var e=this,t=this.state,o=t.treeData,n=t.searchString,a=t.searchFocusIndex,i=t.searchFoundCount;return Object(D.jsxs)("div",{className:"wrapper",children:[Object(D.jsxs)("div",{className:"bar-wrapper",children:[Object(D.jsx)("button",{onClick:this.toggleNodeExpansion.bind(this,!0),children:"Expand all"}),Object(D.jsx)("button",{className:"collapse",onClick:this.toggleNodeExpansion.bind(this,!1),children:"Collapse all"}),Object(D.jsx)("label",{style:{fontSize:"90%"},children:"Search: "}),Object(D.jsx)("input",{onChange:this.handleSearchOnChange}),Object(D.jsx)("button",{className:"previous",onClick:this.selectPrevMatch,children:"Previous"}),Object(D.jsx)("button",{className:"next",onClick:this.selectNextMatch,children:"Next"}),Object(D.jsxs)("label",{children:[a," / ",i]})]}),Object(D.jsx)(p.a,{theme:q,children:Object(D.jsx)("div",{style:{width:"100%"},children:Object(D.jsx)(h.a,{rowHeight:100,treeData:o,onChange:this.handleTreeOnChange,isVirtualized:!1,theme:_,searchQuery:n,searchFocusOffset:a,canDrag:function(e){return!e.node.noDragging},canDrop:function(e){var t=e.nextParent;return!t||!t.noChildren},searchFinishCallback:function(t){return e.setState({searchFoundCount:t.length,searchFocusIndex:t.length>0?a%t.length:0})},generateNodeProps:function(t){var o=t.node;return{buttons:[Object(D.jsx)(I,{row:o,handleChange:e.handleChange},"more-menu")]}}})})})]})}}]),o}(d.a.Component),K=document.getElementById("root");s.a.render(Object(D.jsx)(G,{}),K)}},[[146,1,2]]]);
//# sourceMappingURL=main.66a810ed.chunk.js.map