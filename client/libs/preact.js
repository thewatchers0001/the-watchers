var N,d,$,Y,S,H,Z,U={},B=[],ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function V(t){var e=t.parentNode;e&&e.removeChild(t)}function j(t,e,n){var r,l,o,u={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:u[o]=e[o];if(arguments.length>2&&(u.children=arguments.length>3?N.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)u[o]===void 0&&(u[o]=t.defaultProps[o]);return A(t,u,r,l,null)}function A(t,e,n,r,l){var o={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++$};return l==null&&d.vnode!=null&&d.vnode(o),o}function L(t){return t.children}function w(t,e){this.props=t,this.context=e}function C(t,e){if(e==null)return t.__?C(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?C(t):null}function z(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return z(t)}}function F(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!T.__r++||H!==d.debounceRendering)&&((H=d.debounceRendering)||setTimeout)(T)}function T(){for(var t;T.__r=S.length;)t=S.sort(function(e,n){return e.__v.__b-n.__v.__b}),S=[],t.some(function(e){var n,r,l,o,u,p;e.__d&&(u=(o=(n=e).__v).__e,(p=n.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,M(p,o,l,n.__n,p.ownerSVGElement!==void 0,o.__h!=null?[u]:null,r,u??C(o),o.__h),K(r,o),o.__e!=u&&z(o)))})}function G(t,e,n,r,l,o,u,p,f,a){var _,h,s,i,c,b,v,y=r&&r.__k||B,g=y.length;for(n.__k=[],_=0;_<e.length;_++)if((i=n.__k[_]=(i=e[_])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?A(null,i,null,null,i):Array.isArray(i)?A(L,{children:i},null,null,null):i.__b>0?A(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(s=y[_])===null||s&&i.key==s.key&&i.type===s.type)y[_]=void 0;else for(h=0;h<g;h++){if((s=y[h])&&i.key==s.key&&i.type===s.type){y[h]=void 0;break}s=null}M(t,i,s=s||U,l,o,u,p,f,a),c=i.__e,(h=i.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,i),v.push(h,i.__c||c,i)),c!=null?(b==null&&(b=c),typeof i.type=="function"&&i.__k===s.__k?i.__d=f=q(i,f,t):f=J(t,i,s,y,c,f),typeof n.type=="function"&&(n.__d=f)):f&&s.__e==f&&f.parentNode!=t&&(f=C(s))}for(n.__e=b,_=g;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=C(r,_+1)),X(y[_],y[_]));if(v)for(_=0;_<v.length;_++)Q(v[_],v[++_],v[++_])}function q(t,e,n){for(var r,l=t.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=t,e=typeof r.type=="function"?q(r,e,n):J(n,r,r,l,r.__e,e));return e}function J(t,e,n,r,l,o){var u,p,f;if(e.__d!==void 0)u=e.__d,e.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(l),u=null;else{for(p=o,f=0;(p=p.nextSibling)&&f<r.length;f+=2)if(p==l)break e;t.insertBefore(l,o),u=o}return u!==void 0?u:l.nextSibling}function te(t,e,n,r,l){var o;for(o in n)o==="children"||o==="key"||o in e||D(t,o,null,n[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===e[o]||D(t,o,e[o],n[o],r)}function I(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||ee.test(e)?n:n+"px"}function D(t,e,n,r,l){var o;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||I(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||I(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=n,n?r||t.addEventListener(e,o?R:O,o):t.removeEventListener(e,o?R:O,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function O(t){this.l[t.type+!1](d.event?d.event(t):t)}function R(t){this.l[t.type+!0](d.event?d.event(t):t)}function M(t,e,n,r,l,o,u,p,f){var a,_,h,s,i,c,b,v,y,g,x,W,P,m=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,p=e.__e=n.__e,e.__h=null,o=[p]),(a=d.__b)&&a(e);try{e:if(typeof m=="function"){if(v=e.props,y=(a=m.contextType)&&r[a.__c],g=a?y?y.props.value:a.__:r,n.__c?b=(_=e.__c=n.__c).__=_.__E:("prototype"in m&&m.prototype.render?e.__c=_=new m(v,g):(e.__c=_=new w(v,g),_.constructor=m,_.render=_e),y&&y.sub(_),_.props=v,_.state||(_.state={}),_.context=g,_.__n=r,h=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,m.getDerivedStateFromProps(v,_.__s))),s=_.props,i=_.state,h)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,g)===!1||e.__v===n.__v){_.props=v,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(E){E&&(E.__=e)}),_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,i,c)})}if(_.context=g,_.props=v,_.__v=e,_.__P=t,x=d.__r,W=0,"prototype"in m&&m.prototype.render)_.state=_.__s,_.__d=!1,x&&x(e),a=_.render(_.props,_.state,_.context);else do _.__d=!1,x&&x(e),a=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++W<25);_.state=_.__s,_.getChildContext!=null&&(r=k(k({},r),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(c=_.getSnapshotBeforeUpdate(s,i)),P=a!=null&&a.type===L&&a.key==null?a.props.children:a,G(t,Array.isArray(P)?P:[P],e,n,r,l,o,u,p,f),_.base=e.__e,e.__h=null,_.__h.length&&u.push(_),b&&(_.__E=_.__=null),_.__e=!1}else o==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ne(n.__e,e,n,r,l,o,u,f);(a=d.diffed)&&a(e)}catch(E){e.__v=null,(f||o!=null)&&(e.__e=p,e.__h=!!f,o[o.indexOf(p)]=null),d.__e(E,e,n)}}function K(t,e){d.__c&&d.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function ne(t,e,n,r,l,o,u,p){var f,a,_,h=n.props,s=e.props,i=e.type,c=0;if(i==="svg"&&(l=!0),o!=null){for(;c<o.length;c++)if((f=o[c])&&"setAttribute"in f==!!i&&(i?f.localName===i:f.nodeType===3)){t=f,o[c]=null;break}}if(t==null){if(i===null)return document.createTextNode(s);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,s.is&&s),o=null,p=!1}if(i===null)h===s||p&&t.data===s||(t.data=s);else{if(o=o&&N.call(t.childNodes),a=(h=n.props||U).dangerouslySetInnerHTML,_=s.dangerouslySetInnerHTML,!p){if(o!=null)for(h={},c=0;c<t.attributes.length;c++)h[t.attributes[c].name]=t.attributes[c].value;(_||a)&&(_&&(a&&_.__html==a.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(te(t,s,h,l,p),_)e.__k=[];else if(c=e.props.children,G(t,Array.isArray(c)?c:[c],e,n,r,l&&i!=="foreignObject",o,u,o?o[0]:n.__k&&C(n,0),p),o!=null)for(c=o.length;c--;)o[c]!=null&&V(o[c]);p||("value"in s&&(c=s.value)!==void 0&&(c!==t.value||i==="progress"&&!c||i==="option"&&c!==h.value)&&D(t,"value",c,h.value,!1),"checked"in s&&(c=s.checked)!==void 0&&c!==t.checked&&D(t,"checked",c,h.checked,!1))}return t}function Q(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){d.__e(r,n)}}function X(t,e,n){var r,l;if(d.unmount&&d.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Q(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&X(r[l],e,typeof t.type!="function");n||t.__e==null||V(t.__e),t.__e=t.__d=void 0}function _e(t,e,n){return this.constructor(t,n)}function oe(t,e,n){var r,l,o;d.__&&d.__(t,e),l=(r=typeof n=="function")?null:n&&n.__k||e.__k,o=[],M(e,t=(!r&&n||e).__k=j(L,null,[t]),l||U,U,e.ownerSVGElement!==void 0,!r&&n?[n]:l?null:e.firstChild?N.call(e.childNodes):null,o,!r&&n?n:l?l.__e:e.firstChild,r),K(o,t)}N=B.slice,d={__e:function(t,e,n,r){for(var l,o,u;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(t)),u=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(t,r||{}),u=l.__d),u)return l.__E=l}catch(p){t=p}throw t}},$=0,Y=function(t){return t!=null&&t.constructor===void 0},w.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},n),this.props)),t&&k(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),F(this))},w.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),F(this))},w.prototype.render=L,S=[],T.__r=0,Z=0;export{w as Component,j as h,oe as render};
