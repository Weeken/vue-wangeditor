!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("wangeditor")):"function"==typeof define&&define.amd?define(["wangeditor"],e):A.main=e(A.wangeditor)}(this,function(A){"use strict";A=A&&A.hasOwnProperty("default")?A.default:A,function(A,e){if("undefined"==typeof document)return e;A=A||"";var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.appendChild(n),n.styleSheet?n.styleSheet.cssText=A:n.appendChild(document.createTextNode(A))}('@font-face{font-family:w-icon;src:url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAA1EAAwAAAAADPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABHAAAAYAAAAGA4Zbj9k9TLzIAAAKcAAAAYAAAAGAPEgdsY21hcAAAAvwAAADEAAAAxL7TwtlnYXNwAAADwAAAAAgAAAAIAAAAEGdseWYAAAPIAAAGeAAABnjO8r8caGVhZAAACkAAAAA2AAAANhCeVXdoaGVhAAAKeAAAACQAAAAkB8ID5mhtdHgAAAqcAAAAlAAAAJQiAABCbG9jYQAACzAAAABMAAAATBDoElhtYXhwAAALfAAAACAAAAAgACsAVm5hbWUAAAucAAABhgAAAYaZSgn7cG9zdAAADSQAAAAgAAAAIAADAAAAAQAAAAoAHgAsAAFsYXRuAAgABAAAAAAAAAABAAAAAWxpZ2EACAAAAAEAAAABAAQABAAAAAEACgAAAAEAFAAHACYAkAC0APwBDgEkATwAAQAHAAkACwAMABcAGAAaACQABQAMABgAKAA6AFwAIAAFABYAFAAXABcAIwAHABQAEwAXABQAEQALAB8ACAAUABEAEQAIABUAFwALACIAEAARAAsACAAWAAQADAAUABYAEgAIABgAGAAPABMADQAgAAYACAATAAkACwARAAIABgAUAB4ABgAbABUACAATAAoAHgAHABMAEQAIABYADQALAAQACgAYACYAMgAhAAYAGQATABMACwARACEABgAPABEAGAALABYAHQAFAA8AEQALAAYAHQAKAA8AEQALAAQACwASABUAGAAcAAEABAAfAAYADgAWAA8AEwAQAAEABAAjAAgACwAWABIADwATAAgAEQABAAQAIgAJABwAFwAPABoAHAANAAUABwABAAQAIwACACQAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADqggPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAqAAAACYAIAAEAAYAAQAgAC0AMQAzADcAYQBpAHAAdQB56STpiuoP6lvqb+qC//3//wAAAAAAIAAtADEAMwA3AGEAYwBrAHIAd+kk6YnqD+pb6m/qgf/9//8AAf/j/9f/1P/T/9D/p/+m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) format("woff");font-weight:400;font-style:normal}[class*=" w-icon-"],[class^=w-icon-]{font-family:w-icon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;letter-spacing:0;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;font-feature-settings:"liga",normal,"dlig";-webkit-font-variant-ligatures:discretionary-ligatures;font-variant-ligatures:discretionary-ligatures}.w-e-droplist{z-index:5}.w-e-menu{z-index:2!important}.w-e-text-container{z-index:1!important}.w-e-text-container .w-e-text h1{font-size:24px;margin:22px 0;font-weight:700}.w-e-text-container .w-e-text h2{font-size:22px;margin:20px 0;font-weight:700}.w-e-text-container .w-e-text h3{font-size:20px;margin:18px 0;font-weight:700}.w-e-text-container .w-e-text h4{font-size:18px;margin:16px 0;font-weight:700}.w-e-text-container .w-e-text h5{font-size:16px;margin:14px 0;font-weight:700}.w-e-text-container .w-e-text table td,.w-e-text-container .w-e-text table th{text-align:center}.w-e-text-container .w-e-text ul li{list-style-type:disc}.w-e-text-container .w-e-text ol li{list-style-type:decimal}.w-e-text-container .w-e-text b{font-weight:800}.w-e-text-container .w-e-text a{color:#2196f3;text-decoration:underline}.w-e-toolbar{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-lines:multiple}.w-icon-enlarge:before{content:"\\e989"}.w-icon-shrink:before{content:"\\e98a"}.w-icon-filter:before{content:"\\ea5b"}.w-icon-clear-formatting:before{content:"\\ea6f"}.w-icon-file-empty:before{content:"\\e924"}.w-icon-file-class-code:before{content:"\\ea81"}.fullscreen-editor{position:fixed!important;height:100%!important;left:0!important;top:0!important;background-color:#fff;z-index:3}.fullscreen-editor,.fullscreen-editor .w-e-toolbar{width:100%!important}.fullscreen-editor .w-e-text-container{width:100%!important;height:95%!important}.code_pannel{position:absolute;top:0;left:50%;z-index:4;height:280px;width:600px;padding:5px 10px;margin-left:-300px;background:#fff;-webkit-box-shadow:1px 1px 8px rgba(0,0,0,.3);box-shadow:1px 1px 8px rgba(0,0,0,.3);display:none;overflow:hidden}.code_pannel #closePannel{position:absolute;top:10px;right:10px;width:15px;height:15px;color:#999;cursor:pointer}.code_pannel #closePannel:hover{color:#000}.code_pannel>h2{width:100%;height:30px;font-size:14px;line-height:30px;color:#333;border-bottom:1px solid #f1f1f1}.code_pannel #pannelInput{width:100%;height:30px;margin-top:5px;padding:0 10px;border:0;border-bottom:1px solid #f1f1f1;background:#fff;outline:0;font-size:14px;line-height:50px}.code_pannel #pannelTextarea{width:100%;height:145px;margin-top:10px;padding:5px;border:1px solid #f1f1f1;background:#fff;outline:0;font-size:14px;line-height:20px}.code_pannel #pannelInput:focus,.code_pannel #pannelTextarea:focus{border-color:#1e88e5}.code_pannel #pannelSubmit{float:right;font-size:14px;color:#1e88e5;border:0;padding:5px 10px;background:#fff;cursor:pointer;border-radius:3px;margin:5px 0}.code_pannel #pannelSubmit:hover{background:#f1f1f1}',void 0);var e={render:function(){var A=this.$createElement;return(this._self._c||A)("div",{attrs:{id:this.id}})},staticRenderFns:[],name:"VueWangeditor",mixins:[{methods:{initFullscreen:function(){var A=this,e='<i title="全屏" class="w-icon-enlarge"></i>',t=!1,n=this.createBtn(e);this.toolbar.appendChild(n),n.addEventListener("click",function(i){A.editorEle.className=t?"":"fullscreen-editor",n.innerHTML=t?e:'<i title="全屏" class="w-icon-shrink"></i>',t=!t},!1)}}},{methods:{initClearStyle:function(){var A=this,e=this.createBtn('<i title="一键过滤文字样式" class="w-icon-filter"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){var t=A.clearStyle();A.setContent(t),A.editor.txt.html(t)},!1)},clearStyle:function(){var A=this.textWrap.getElementsByTagName("*");return Array.from(A).map(function(A){A.style&&A.removeAttribute("style"),A.className&&A.removeAttribute("class")}),this.editor.txt.html().replace(/ style=\"(.*?)\"/gi,"").replace(/ style=\'(.*?)\'/gi,"").replace(/ class=\"(.*?)\"/gi,"").replace(/ class=\'(.*?)\'/gi,"").replace(/ lang=\"(.*?)\"/gi,"").replace(/ face=\"(.*?)\"/gi,"").replace(/ size=\"(.*?)\"/gi,"").replace(/ align=\"(.*?)\"/gi,"").replace(/ color=\"(.*?)\"/gi,"").replace(/ border=\"(.*?)\"/gi,"").replace(/<style>[\s\S]*?<\/style>/gi,"").replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/<!--[\s\S]*?-->/gi,"")}}},{methods:{clearFormat:function(){return this.content_.split(/(<[^>]*>([\s\S]*?)|<[^>]*><\/[^>]*>)/).filter(function(A){return""!==A&&!A.includes("</")}).filter(function(A){return!A.includes("<")||A.startsWith("<img")}).map(function(A){return"<p>"+A+"</p>"}).join("")},initClearFormat:function(){var A=this,e=this.createBtn('<i title="一键清除文字格式" class="w-icon-clear-formatting"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){var t=A.clearFormat();A.setContent(t),A.editor.txt.html(t)},!1)}}},{methods:{initClearAll:function(){var A=this,e=this.createBtn('<i title="一键清空编辑器" class="w-icon-file-empty"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){A.clearAll()},!1)},clearAll:function(){this.editor.txt.clear(),this.setContent("<p><br></p>")}}},{methods:{initInsertCode:function(){var A=this,e=this.createBtn('<i title="插入带类名的代码块" class="w-icon-file-class-code"></i>');this.toolbar.appendChild(e),e.addEventListener("click",function(e){e.stopPropagation(),e.preventDefault();var t=document.querySelector("#codePannel");t?t.style.display="block":A.createPannel(),A.bindEvents()},!1)},bindEvents:function(){var A=this,e=document.querySelector("#codePannel"),t=document.querySelector("#closePannel"),n=document.querySelector("#pannelInput"),i=document.querySelector("#pannelTextarea"),o=document.querySelector("#pannelSubmit");t.addEventListener("click",function(A){A.stopPropagation(),e.style.display="none",n.value=""},!1),o.addEventListener("click",function(t){t.stopPropagation(),n.value&&i.value?(A.insertCode(n.value,i.value),e.style.display="none",n.value="",i.value=""):(e.style.display="none",n.value="",i.value="")},!1)},createPannel:function(){var A=document.createElement("div"),e=document.createElement("i"),t=document.createElement("h2"),n=document.createElement("input"),i=document.createElement("textarea"),o=document.createElement("button");A.id="codePannel",e.id="closePannel",n.id="pannelInput",i.id="pannelTextarea",n.setAttribute("placeholder","className"),i.setAttribute("placeholder","code"),o.id="pannelSubmit",o.innerText="插入",t.innerText="插入带类名的代码：",e.className="w-e-icon-close w-e-panel-close",A.appendChild(e),A.appendChild(t),A.appendChild(n),A.appendChild(i),A.appendChild(o),A.className="code_pannel",this.container.appendChild(A),A.style.display="block"},replaceHtmlSymbol:function(A){return null==A?"":A.replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;")},insertCode:function(A,e){this.editor.cmd.do("insertHTML",'<pre class="'+A+'"><code class="'+A+'">'+this.replaceHtmlSymbol(e)+"</code></pre><p><br></p>")}}}],props:{options:{type:Object,default:function(A){return{}}},id:String,value:String},data:function(){return{isInit:!1,editor:{},content_:"",text:""}},watch:{content_:function(A){this.editor.txt.html(A),this.$emit("input",A),this.text=this.editor.txt.text(),this.$emit("update:text",this.text)},value:function(A){this.isInit||(this.editor.txt.html(A),this.isInit=!0),this.content_=A}},computed:{editorEle:function(){if(document.querySelector("#"+this.id))return document.querySelector("#"+this.id)},toolbar:function(){if(document.querySelector("#"+this.id+" .w-e-toolbar"))return document.querySelector("#"+this.id+" .w-e-toolbar")},container:function(){if(document.querySelector("#"+this.id+" .w-e-text-container"))return document.querySelector("#"+this.id+" .w-e-text-container")},textWrap:function(){if(document.querySelector("#"+this.id+" .w-e-text"))return document.querySelector("#"+this.id+" .w-e-text")}},methods:{setContent:function(A){this.content_=A},createBtn:function(A){var e=document.createElement("div");return e.className="w-e-menu",e.style.zIndex="10001",e.innerHTML=A,e},initSize:function(){this.options.width&&(this.container.style.width=this.options.width,this.toolbar.style.width=this.options.width),this.options.height&&(this.container.style.height=this.options.height)}},mounted:function(){var e=this;this.editor=new A("#"+this.id),this.editor.customConfig.onchange=function(A){e.setContent(A)},Object.keys(this.options).map(function(A){e.editor.customConfig[A]=e.options[A]}),this.editor.create(),this.initSize(),this.options.menus&&this.options.menus.includes("clearStyle")&&this.initClearStyle(),this.options.menus&&this.options.menus.includes("clearFormat")&&this.initClearFormat(),this.options.menus&&this.options.menus.includes("clearAll")&&this.initClearAll(),this.options.menus&&this.options.menus.includes("insertCode")&&this.initInsertCode(),this.options.menus&&this.options.menus.includes("fullscreen")&&this.initFullscreen()}};return e.install=function(A){A.component(e.name,e)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(e),e});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXdhbmdlZGl0b3Itc2ltcGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvZWRpdG9yLnZ1ZSIsIi4uL3NyYy9wbHVnaW5zL2Z1bGxzY3JlZW4uanMiLCIuLi9zcmMvcGx1Z2lucy9jbGVhclN0eWxlLmpzIiwiLi4vc3JjL3BsdWdpbnMvY2xlYXJGb3JtYXQuanMiLCIuLi9zcmMvcGx1Z2lucy9jbGVhckFsbC5qcyIsIi4uL3NyYy9wbHVnaW5zL2luc2VydENvZGUuanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxkaXYgOmlkPVwiaWRcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRSBmcm9tICd3YW5nZWRpdG9yJ1xuaW1wb3J0ICcuL2VkaXRvci5jc3MnXG5pbXBvcnQgeyBmdWxsc2NyZWVuIH0gZnJvbSAnLi9wbHVnaW5zL2Z1bGxzY3JlZW4nXG5pbXBvcnQgeyBjbGVhclN0eWxlIH0gZnJvbSAnLi9wbHVnaW5zL2NsZWFyU3R5bGUnXG5pbXBvcnQgeyBjbGVhckZvcm1hdCB9IGZyb20gJy4vcGx1Z2lucy9jbGVhckZvcm1hdCdcbmltcG9ydCB7IGNsZWFyQWxsIH0gZnJvbSAnLi9wbHVnaW5zL2NsZWFyQWxsJ1xuaW1wb3J0IHsgaW5zZXJ0Q29kZSB9IGZyb20gJy4vcGx1Z2lucy9pbnNlcnRDb2RlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVnVlV2FuZ2VkaXRvcicsXG4gIG1peGluczogW2Z1bGxzY3JlZW4sIGNsZWFyU3R5bGUsIGNsZWFyRm9ybWF0LCBjbGVhckFsbCwgaW5zZXJ0Q29kZV0sXG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogIF8gPT4geyByZXR1cm4ge30gfVxuICAgIH0sXG4gICAgaWQ6IFN0cmluZyxcbiAgICB2YWx1ZTogU3RyaW5nXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0luaXQ6IGZhbHNlLFxuICAgICAgZWRpdG9yOiB7fSxcbiAgICAgIGNvbnRlbnRfOiAnJyxcbiAgICAgIHRleHQ6ICcnXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGNvbnRlbnRfICh2YWwpIHtcbiAgICAgIC8vIHJldHVybiB0aGUgY29udGVudCB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgICBpZiAodmFsID09PSAnJyB8fCAnPHA+PGJyPjwvcD4nKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yLnR4dC5odG1sKHZhbClcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsKVxuICAgICAgdGhpcy50ZXh0ID0gdGhpcy5lZGl0b3IudHh0LnRleHQoKVxuICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnRleHQnLCB0aGlzLnRleHQpXG4gICAgfSxcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICAgIC8vIGluaXQgY29udGVudF9cbiAgICAgICAgdGhpcy5lZGl0b3IudHh0Lmh0bWwodmFsKVxuICAgICAgICB0aGlzLmlzSW5pdCA9IHRydWVcbiAgICAgIH1cbiAgICAgIHRoaXMuY29udGVudF8gPSB2YWxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZWRpdG9yRWxlICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApXG4gICAgICB9XG4gICAgfSxcbiAgICB0b29sYmFyICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfSAudy1lLXRvb2xiYXJgKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10b29sYmFyYClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRhaW5lciAoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10ZXh0LWNvbnRhaW5lcmApKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfSAudy1lLXRleHQtY29udGFpbmVyYClcbiAgICAgIH1cbiAgICB9LFxuICAgIHRleHRXcmFwICgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfSAudy1lLXRleHRgKSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH0gLnctZS10ZXh0YClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZXRDb250ZW50IChodG1sKSB7XG4gICAgICB0aGlzLmNvbnRlbnRfID0gaHRtbFxuICAgIH0sXG4gICAgY3JlYXRlQnRuIChidG5IdG1sKSB7XG4gICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGJ0bi5jbGFzc05hbWUgPSAndy1lLW1lbnUnXG4gICAgICBidG4uc3R5bGUuekluZGV4ID0gJzEwMDAxJ1xuICAgICAgYnRuLmlubmVySFRNTCA9IGJ0bkh0bWxcbiAgICAgIHJldHVybiBidG5cbiAgICB9LFxuICAgIGluaXRTaXplICgpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSB0aGlzLm9wdGlvbnMud2lkdGhcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLndpZHRoID0gdGhpcy5vcHRpb25zLndpZHRoXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhlaWdodCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuaGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBFKCcjJyArIHRoaXMuaWQpXG5cbiAgICAvLyBpbml0IGNoYW5nZSBldmVudFxuICAgIHRoaXMuZWRpdG9yLmN1c3RvbUNvbmZpZy5vbmNoYW5nZSA9IGh0bWwgPT4ge1xuICAgICAgdGhpcy5zZXRDb250ZW50KGh0bWwpXG4gICAgfVxuXG4gICAgLy8gaW5pdCBwcm9wcyBvcHRpb25zXG4gICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5tYXAocHJvcGVydHkgPT4ge1xuICAgICAgdGhpcy5lZGl0b3IuY3VzdG9tQ29uZmlnW3Byb3BlcnR5XSA9IHRoaXMub3B0aW9uc1twcm9wZXJ0eV1cbiAgICB9KVxuXG4gICAgLy8gY3JlYXRlIHRoZSBlZGl0b3JcbiAgICB0aGlzLmVkaXRvci5jcmVhdGUoKVxuXG4gICAgdGhpcy5pbml0U2l6ZSgpXG5cbiAgICAvLyBjbGVhclN0eWxlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZW51cyAmJiB0aGlzLm9wdGlvbnMubWVudXMuaW5jbHVkZXMoJ2NsZWFyU3R5bGUnKSkge1xuICAgICAgdGhpcy5pbml0Q2xlYXJTdHlsZSgpXG4gICAgfVxuXG4gICAgLy8gY2xlYXJGb3JtYXRcbiAgICBpZiAodGhpcy5vcHRpb25zLm1lbnVzICYmIHRoaXMub3B0aW9ucy5tZW51cy5pbmNsdWRlcygnY2xlYXJGb3JtYXQnKSkge1xuICAgICAgdGhpcy5pbml0Q2xlYXJGb3JtYXQoKVxuICAgIH1cblxuICAgIC8vIGNsZWFyQWxsXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZW51cyAmJiB0aGlzLm9wdGlvbnMubWVudXMuaW5jbHVkZXMoJ2NsZWFyQWxsJykpIHtcbiAgICAgIHRoaXMuaW5pdENsZWFyQWxsKClcbiAgICB9XG5cbiAgICAvLyBpbnNlcnRDb2RlXG4gICAgaWYgKHRoaXMub3B0aW9ucy5tZW51cyAmJiB0aGlzLm9wdGlvbnMubWVudXMuaW5jbHVkZXMoJ2luc2VydENvZGUnKSkge1xuICAgICAgdGhpcy5pbml0SW5zZXJ0Q29kZSgpXG4gICAgfVxuXG4gICAgLy8gZnVsbHNjcmVlblxuICAgIGlmICh0aGlzLm9wdGlvbnMubWVudXMgJiYgdGhpcy5vcHRpb25zLm1lbnVzLmluY2x1ZGVzKCdmdWxsc2NyZWVuJykpIHtcbiAgICAgIHRoaXMuaW5pdEZ1bGxzY3JlZW4oKVxuICAgIH1cblxuICB9XG59XG48L3NjcmlwdD5cbiIsImV4cG9ydCBjb25zdCBmdWxsc2NyZWVuID0ge1xuICBtZXRob2RzOiB7XG4gICAgaW5pdEZ1bGxzY3JlZW4gKCkge1xuICAgICAgbGV0IGVubGFyZ2UgPSAnPGkgdGl0bGU9XCLlhajlsY9cIiBjbGFzcz1cInctaWNvbi1lbmxhcmdlXCI+PC9pPidcbiAgICAgIGxldCBzaHJpbmsgPSAnPGkgdGl0bGU9XCLlhajlsY9cIiBjbGFzcz1cInctaWNvbi1zaHJpbmtcIj48L2k+J1xuICAgICAgbGV0IGlzRnVsbHNjcmVlbiA9IGZhbHNlXG4gICAgICBsZXQgZnVsbHNjcmVlbkJ0biA9IHRoaXMuY3JlYXRlQnRuKGVubGFyZ2UpXG4gICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoZnVsbHNjcmVlbkJ0bilcbiAgICAgIGZ1bGxzY3JlZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcbiAgICAgICAgdGhpcy5lZGl0b3JFbGUuY2xhc3NOYW1lID0gaXNGdWxsc2NyZWVuID8gJycgOiAnZnVsbHNjcmVlbi1lZGl0b3InXG4gICAgICAgIGZ1bGxzY3JlZW5CdG4uaW5uZXJIVE1MID0gaXNGdWxsc2NyZWVuID8gZW5sYXJnZSA6IHNocmlua1xuICAgICAgICBpc0Z1bGxzY3JlZW4gPSAhaXNGdWxsc2NyZWVuXG4gICAgICB9LCBmYWxzZSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjbGVhclN0eWxlID0ge1xuICBtZXRob2RzOiB7XG4gICAgaW5pdENsZWFyU3R5bGUgKCkge1xuICAgICAgbGV0IGNsZWFyU3R5bGVCdG4gPSB0aGlzLmNyZWF0ZUJ0bignPGkgdGl0bGU9XCLkuIDplK7ov4fmu6TmloflrZfmoLflvI9cIiBjbGFzcz1cInctaWNvbi1maWx0ZXJcIj48L2k+JylcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChjbGVhclN0eWxlQnRuKVxuICAgICAgY2xlYXJTdHlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF8gPT4ge1xuICAgICAgICBsZXQgaHRtbCA9IHRoaXMuY2xlYXJTdHlsZSgpXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChodG1sKVxuICAgICAgICB0aGlzLmVkaXRvci50eHQuaHRtbChodG1sKVxuICAgICAgfSwgZmFsc2UpXG4gICAgfSxcbiAgICBjbGVhclN0eWxlICgpIHtcbiAgICAgIC8vIGVkaXRvci50eHQuaHRtbCgp6I635Y+W55qE5YaF5a655peg5rOV5riF6ZmkPHN0eWxlPuagh+etvueahOagt+W8j1xuICAgICAgLy8g5omA5Lul6KaB5riF6ZmkPHN0eWxlPuagh+etvlxuICAgICAgLy8gZWRpdG9yLnR4dC5odG1sKCnmnInml7blgJnojrflj5bnmoRIVE1M5Lya5bim5qC35byP77yM5omA5Lul6L+Y5piv5YaN6L+H5ruk5LiA5qyhXG4gICAgICBsZXQgYXJyID0gdGhpcy50ZXh0V3JhcC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXG4gICAgICBBcnJheS5mcm9tKGFycikubWFwKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5zdHlsZSkge1xuICAgICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIOWboOS4uuacieeahHN0eWxl5bGe5oCn5rKh5pyJ6L+H5ruk5Yiw77yM5omA5Lul6KaB55So5LiK6Z2i55qEcmVtb3ZlQXR0cmlidXRl5Y675o6JXG4gICAgICByZXR1cm4gdGhpcy5lZGl0b3IudHh0Lmh0bWwoKS8vIHRleHRXcmFwLmlubmVySFRNTFxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gc3R5bGU9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBzdHlsZT1cXCcoLio/KVxcJy9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBjbGFzcz1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIGNsYXNzPVxcJyguKj8pXFwnL2lnLCAnJylcbiAgICAgICAgICAgICAvLyB3b3Jk5paH5qGj5aSN5Yi26L+H5p2l55qE5qC35byPXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBsYW5nPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gZmFjZT1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIHNpemU9XFxcIiguKj8pXFxcIi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLyBhbGlnbj1cXFwiKC4qPylcXFwiL2lnLCAnJylcbiAgICAgICAgICAgICAucmVwbGFjZSgvIGNvbG9yPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC8gYm9yZGVyPVxcXCIoLio/KVxcXCIvaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC88c3R5bGU+W1xcc1xcU10qPzxcXC9zdHlsZT4vaWcsICcnKVxuICAgICAgICAgICAgIC5yZXBsYWNlKC88bzpwPltcXHNcXFNdKj88XFwvbzpwPi9pZywgJycpXG4gICAgICAgICAgICAgLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSo/LS0+L2lnLCAnJylcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjbGVhckZvcm1hdCA9IHtcbiAgbWV0aG9kczoge1xuICAgIGNsZWFyRm9ybWF0ICgpIHtcbiAgICAgIGxldCBzdHIgPSB0aGlzLmNvbnRlbnRfXG4gICAgICBsZXQgYXJyID0gc3RyLnNwbGl0KC8oPFtePl0qPihbXFxzXFxTXSo/KXw8W14+XSo+PFxcL1tePl0qPikvKVxuXG4gICAgICAvLyDljrvpmaTnqbrlrZfnrKbkuLLvvIznu5PmnZ/moIfnrb5cbiAgICAgIGxldCBuZXdDb250ZW50ID0gYXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09ICcnICYmICFpdGVtLmluY2x1ZGVzKCc8LycpXG4gICAgICB9KS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIC8vIOWOu+aOiei1t+Wni+agh+etvlxuICAgICAgICByZXR1cm4gIWl0ZW0uaW5jbHVkZXMoJzwnKSB8fCBpdGVtLnN0YXJ0c1dpdGgoJzxpbWcnKVxuICAgICAgfSkubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gYDxwPiR7aXRlbX08L3A+YFxuICAgICAgfSkuam9pbignJylcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0NvbnRlbnQpXG4gICAgICByZXR1cm4gbmV3Q29udGVudFxuICAgIH0sXG4gICAgaW5pdENsZWFyRm9ybWF0ICgpIHtcbiAgICAgIGxldCBjbGVhckZvcm1hdEJ0biA9IHRoaXMuY3JlYXRlQnRuKCc8aSB0aXRsZT1cIuS4gOmUrua4hemZpOaWh+Wtl+agvOW8j1wiIGNsYXNzPVwidy1pY29uLWNsZWFyLWZvcm1hdHRpbmdcIj48L2k+JylcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChjbGVhckZvcm1hdEJ0bilcbiAgICAgIGNsZWFyRm9ybWF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXyA9PiB7XG4gICAgICAgIGxldCBmb3JtYXRDb250ZW50ID0gdGhpcy5jbGVhckZvcm1hdCgpXG4gICAgICAgIHRoaXMuc2V0Q29udGVudChmb3JtYXRDb250ZW50KVxuICAgICAgICB0aGlzLmVkaXRvci50eHQuaHRtbChmb3JtYXRDb250ZW50KVxuICAgICAgfSwgZmFsc2UpXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY2xlYXJBbGwgPSB7XG4gIG1ldGhvZHM6IHtcbiAgICBpbml0Q2xlYXJBbGwgKCkge1xuICAgICAgbGV0IGNsZWFyQWxsQnRuID0gdGhpcy5jcmVhdGVCdG4oJzxpIHRpdGxlPVwi5LiA6ZSu5riF56m657yW6L6R5ZmoXCIgY2xhc3M9XCJ3LWljb24tZmlsZS1lbXB0eVwiPjwvaT4nKVxuICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGNsZWFyQWxsQnRuKVxuICAgICAgY2xlYXJBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfID0+IHtcbiAgICAgICAgdGhpcy5jbGVhckFsbCgpXG4gICAgICB9LCBmYWxzZSlcbiAgICB9LFxuICAgIGNsZWFyQWxsICgpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnR4dC5jbGVhcigpXG4gICAgICB0aGlzLnNldENvbnRlbnQoJzxwPjxicj48L3A+JylcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbnNlcnRDb2RlID0ge1xuICBtZXRob2RzOiB7XG4gICAgaW5pdEluc2VydENvZGUgKCkge1xuICAgICAgbGV0IGluc2VydENvZGVCdG4gPSB0aGlzLmNyZWF0ZUJ0bignPGkgdGl0bGU9XCLmj5LlhaXluKbnsbvlkI3nmoTku6PnoIHlnZdcIiBjbGFzcz1cInctaWNvbi1maWxlLWNsYXNzLWNvZGVcIj48L2k+JylcbiAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChpbnNlcnRDb2RlQnRuKVxuICAgICAgaW5zZXJ0Q29kZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBsZXQgcGFubmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvZGVQYW5uZWwnKVxuICAgICAgICBpZiAoIXBhbm5lbCkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlUGFubmVsKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKVxuICAgICAgfSwgZmFsc2UpXG4gICAgfSxcbiAgICBiaW5kRXZlbnRzICgpIHtcbiAgICAgIGxldCBwYW5uZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29kZVBhbm5lbCcpXG4gICAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VQYW5uZWwnKVxuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhbm5lbElucHV0JylcbiAgICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYW5uZWxUZXh0YXJlYScpXG4gICAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhbm5lbFN1Ym1pdCcpXG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIHBhbm5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgIH0sIGZhbHNlKVxuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICYmIHRleHRhcmVhLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5pbnNlcnRDb2RlKGlucHV0LnZhbHVlLCB0ZXh0YXJlYS52YWx1ZSlcbiAgICAgICAgICBwYW5uZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFubmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSAnJ1xuICAgICAgICB9XG4gICAgICB9LCBmYWxzZSlcbiAgICB9LFxuICAgIGNyZWF0ZVBhbm5lbCAoKSB7XG4gICAgICBsZXQgcGFubmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICBwYW5uZWwuaWQgPSAnY29kZVBhbm5lbCdcbiAgICAgIGNsb3NlLmlkID0gJ2Nsb3NlUGFubmVsJ1xuICAgICAgaW5wdXQuaWQgPSAncGFubmVsSW5wdXQnXG4gICAgICB0ZXh0YXJlYS5pZCA9ICdwYW5uZWxUZXh0YXJlYSdcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY2xhc3NOYW1lJylcbiAgICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnY29kZScpXG4gICAgICBzdWJtaXQuaWQgPSAncGFubmVsU3VibWl0J1xuICAgICAgc3VibWl0LmlubmVyVGV4dCA9ICfmj5LlhaUnXG4gICAgICBoMi5pbm5lclRleHQgPSAn5o+S5YWl5bim57G75ZCN55qE5Luj56CB77yaJ1xuICAgICAgY2xvc2UuY2xhc3NOYW1lID0gJ3ctZS1pY29uLWNsb3NlIHctZS1wYW5lbC1jbG9zZSdcbiAgICAgIHBhbm5lbC5hcHBlbmRDaGlsZChjbG9zZSlcbiAgICAgIHBhbm5lbC5hcHBlbmRDaGlsZChoMilcbiAgICAgIHBhbm5lbC5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgIHBhbm5lbC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSlcbiAgICAgIHBhbm5lbC5hcHBlbmRDaGlsZChzdWJtaXQpXG4gICAgICBwYW5uZWwuY2xhc3NOYW1lID0gJ2NvZGVfcGFubmVsJ1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQocGFubmVsKVxuICAgICAgcGFubmVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfSxcbiAgICByZXBsYWNlSHRtbFN5bWJvbChodG1sKSB7XG4gICAgICBpZiAoaHRtbCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPC9nbSwgJyZsdDsnKS5yZXBsYWNlKC8+L2dtLCAnJmd0OycpLnJlcGxhY2UoL1wiL2dtLCAnJnF1b3Q7JylcbiAgICB9LFxuICAgIGluc2VydENvZGUgKGNsYXNzTmFtZSwgY29kZSkge1xuICAgICAgdGhpcy5lZGl0b3IuY21kLmRvKCdpbnNlcnRIVE1MJywgYDxwcmUgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj48Y29kZSBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiR7dGhpcy5yZXBsYWNlSHRtbFN5bWJvbChjb2RlKX08L2NvZGU+PC9wcmU+PHA+PGJyPjwvcD5gKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFZ1ZVdhbmdlZGl0b3IgZnJvbSAnLi9lZGl0b3IudnVlJ1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuVnVlV2FuZ2VkaXRvci5pbnN0YWxsID0gZnVuY3Rpb24gKFZ1ZSkge1xuICBWdWUuY29tcG9uZW50KFZ1ZVdhbmdlZGl0b3IubmFtZSwgVnVlV2FuZ2VkaXRvcilcbn1cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKFZ1ZVdhbmdlZGl0b3IpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZVdhbmdlZGl0b3JcbiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJlbmxhcmdlIiwiaXNGdWxsc2NyZWVuIiwiZnVsbHNjcmVlbkJ0biIsInRoaXMiLCJjcmVhdGVCdG4iLCJ0b29sYmFyIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZWRpdG9yRWxlIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiY2xlYXJTdHlsZUJ0biIsImh0bWwiLCJfdGhpcyIsImNsZWFyU3R5bGUiLCJzZXRDb250ZW50IiwiZWRpdG9yIiwidHh0IiwiYXJyIiwidGV4dFdyYXAiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImZyb20iLCJtYXAiLCJpdGVtIiwic3R5bGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiY29udGVudF8iLCJzcGxpdCIsImZpbHRlciIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsImpvaW4iLCJjbGVhckZvcm1hdEJ0biIsImZvcm1hdENvbnRlbnQiLCJjbGVhckZvcm1hdCIsImNsZWFyQWxsQnRuIiwiY2xlYXJBbGwiLCJjbGVhciIsImluc2VydENvZGVCdG4iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInBhbm5lbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImRpc3BsYXkiLCJjcmVhdGVQYW5uZWwiLCJiaW5kRXZlbnRzIiwiY2xvc2UiLCJpbnB1dCIsInRleHRhcmVhIiwic3VibWl0IiwidmFsdWUiLCJpbnNlcnRDb2RlIiwiY3JlYXRlRWxlbWVudCIsImgyIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJjb250YWluZXIiLCJjb2RlIiwiY21kIiwiZG8iLCJyZXBsYWNlSHRtbFN5bWJvbCIsIk9iamVjdCIsIlN0cmluZyIsInZhbCIsIiRlbWl0IiwidGV4dCIsImlzSW5pdCIsImJ0bkh0bWwiLCJidG4iLCJ6SW5kZXgiLCJvcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJFIiwiY3VzdG9tQ29uZmlnIiwib25jaGFuZ2UiLCJrZXlzIiwicHJvcGVydHkiLCJjcmVhdGUiLCJpbml0U2l6ZSIsIm1lbnVzIiwiaW5pdENsZWFyU3R5bGUiLCJpbml0Q2xlYXJGb3JtYXQiLCJpbml0Q2xlYXJBbGwiLCJpbml0SW5zZXJ0Q29kZSIsImluaXRGdWxsc2NyZWVuIiwiVnVlV2FuZ2VkaXRvciIsImluc3RhbGwiLCJWdWUiLCJjb21wb25lbnQiLCJuYW1lIiwid2luZG93IiwidXNlIl0sIm1hcHBpbmdzIjoiMmxRQVlnQkEsMEhBQ1IsdUVDVkVDLEVBQVUsNENBRVZDLEdBQWUsRUFDZkMsRUFBZ0JDLEtBQUtDLFVBQVVKLFFBQzlCSyxRQUFRQyxZQUFZSixLQUNYSyxpQkFBaUIsUUFBUyxjQUNqQ0MsVUFBVUMsVUFBWVIsRUFBZSxHQUFLLHNCQUNqQ1MsVUFBWVQsRUFBZUQsRUFOOUIsOENBT0tDLElBQ2YscURDVENVLEVBQWdCUixLQUFLQyxVQUFVLHVEQUM5QkMsUUFBUUMsWUFBWUssS0FDWEosaUJBQWlCLFFBQVMsZ0JBQ2xDSyxFQUFPQyxFQUFLQyxlQUNYQyxXQUFXSCxLQUNYSSxPQUFPQyxJQUFJTCxLQUFLQSxLQUNwQiw4QkFNQ00sRUFBTWYsS0FBS2dCLFNBQVNDLHFCQUFxQixrQkFDdkNDLEtBQUtILEdBQUtJLElBQUksWUFDZEMsRUFBS0MsU0FDRkMsZ0JBQWdCLFNBRW5CRixFQUFLZCxhQUNGZ0IsZ0JBQWdCLFdBSWxCdEIsS0FBS2EsT0FBT0MsSUFBSUwsT0FDZmMsUUFBUSxxQkFBc0IsSUFDOUJBLFFBQVEscUJBQXNCLElBQzlCQSxRQUFRLHFCQUFzQixJQUM5QkEsUUFBUSxxQkFBc0IsSUFFOUJBLFFBQVEsb0JBQXFCLElBQzdCQSxRQUFRLG9CQUFxQixJQUM3QkEsUUFBUSxvQkFBcUIsSUFDN0JBLFFBQVEscUJBQXNCLElBQzlCQSxRQUFRLHFCQUFzQixJQUM5QkEsUUFBUSxzQkFBdUIs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
