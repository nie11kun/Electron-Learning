(this["webpackJsonpmy-app-1"]=this["webpackJsonpmy-app-1"]||[]).push([[0],{8:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(1),o=n(2),a=n(4),s=n(3),i=n(0),h=n(7),p=n(11);Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).ELECTRON_IS_DEV=0;var l=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.category;return Object(i.jsx)("tr",{children:Object(i.jsx)("th",{colSpan:"2",children:e})})}}]),n}(h.Component),j=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.product,t=e.stocked?e.name:Object(i.jsx)("span",{style:{color:"red"},children:e.name});return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:e.price})]})}}]),n}(h.Component),O=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockOnly,n=[],c=null;return this.props.products.forEach((function(r){-1!==r.name.indexOf(e)&&(t&&!r.stocked||(r.category!==c&&n.push(Object(i.jsx)(l,{category:r.category},r.category)),n.push(Object(i.jsx)(j,{product:r},r.name)),c=r.category))})),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Price"})]})}),Object(i.jsx)("tbody",{children:n})]})}}]),n}(h.Component),d=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.filterText,t=this.props.inStockOnly;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{type:"text",placeholder:"Search...",value:e,onChange:this.props.onChange}),Object(i.jsxs)("p",{children:[Object(i.jsx)("input",{type:"checkbox",checked:t,onChange:this.props.onChange})," ","Only show products in stock"]})]})}}]),n}(h.Component),u=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).handleOnChange=o.handleOnChange.bind(Object(c.a)(o)),o.state={filterText:"",inStockOnly:!1},o}return Object(o.a)(n,[{key:"handleOnChange",value:function(e){"checkbox"===e.target.type?this.setState({inStockOnly:e.target.checked}):this.setState({filterText:e.target.value})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(d,{filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onChange:this.handleOnChange}),Object(i.jsx)(O,{products:this.props.products,filterText:this.state.filterText,inStockOnly:this.state.inStockOnly,onChange:this.handleOnChange})]})}}]),n}(h.Component);p.render(Object(i.jsx)(u,{products:[{category:"Sporting Goods",price:"$49.99",stocked:!0,name:"Football"},{category:"Sporting Goods",price:"$9.99",stocked:!0,name:"Baseball"},{category:"Sporting Goods",price:"$29.99",stocked:!1,name:"Basketball"},{category:"Electronics",price:"$99.99",stocked:!0,name:"iPod Touch"},{category:"Electronics",price:"$399.99",stocked:!1,name:"iPhone 5"},{category:"Electronics",price:"$199.99",stocked:!0,name:"Nexus 7"}]}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.a953068e.chunk.js.map