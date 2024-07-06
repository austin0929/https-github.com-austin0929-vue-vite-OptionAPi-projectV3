import{C as b}from"./cartStore-DAzxVWyi.js";import{m as g,a as f,_ as p,o as l,c as r,b as t,d as a,w as n,e as c,f as d,t as k,g as $,r as _,F as w}from"./index-B24p_j4Q.js";import{B as x}from"./bookmarkStore-CYqAAoJX.js";import{_ as y}from"./logo-C9dGiK-K.js";import"./index-DoQuGAlw.js";const C={computed:{...g(b,["carts"]),...g(x,["bookmark"])},methods:{...f(x,["getBookmark"]),...f(b,["getCart"])},watch:{$route(){const o=document.querySelector(".navbar-collapse");o.classList.contains("show")&&o.classList.remove("show")}},mounted(){this.getBookmark(),this.getCart()}},N={class:"container mb-6"},F={class:"bg-black fixed-top py-3"},S={class:"navbar navbar-expand-lg navbar-light container px-3 px-0"},H=t("img",{src:y,width:"30",alt:"logo圖"},null,-1),T=t("button",{class:"navbar-toggler bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),A={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},D={class:"navbar-nav"},V=t("span",{class:"navBarHover"},"關於我們",-1),M=t("span",{class:"navBarHover"},"產品列表",-1),j=t("span",{class:"navBarHover"},"部落格",-1),q={class:"icon-Hover"},L={class:"bi bi-heart position-relative"},R={key:0,style:{"padding-left":"6px"},class:"position-absolute top-0 start-100 translate-middle badge rounded-pill"},z=t("span",{class:"visually-hidden"},"unread messages",-1),E={class:"icon-Hover"},G={class:"bi bi-cart3 position-relative"},I={key:0,style:{"padding-left":"6px"},class:"position-absolute top-0 start-100 translate-middle badge rounded-pill"},J=t("span",{class:"visually-hidden"},"unread messages",-1);function K(o,s,h,u,v,m){const e=_("router-link");return l(),r("div",N,[t("div",F,[t("nav",S,[a(e,{to:"/",class:"navbar-brand text-light fw-bold"},{default:n(()=>[H,c(" FishDaddy")]),_:1}),T,t("div",A,[t("div",D,[a(e,{to:"/about",class:"nav-item nav-link me-4 text-light"},{default:n(()=>[V]),_:1}),a(e,{to:"/products",class:"nav-item nav-link me-4 text-light"},{default:n(()=>[M]),_:1}),a(e,{to:"/blogs",class:"nav-item nav-link me-4 text-light"},{default:n(()=>[j]),_:1}),t("div",q,[t("a",{href:"#",class:"nav-item custom-nav-link me-5",onClick:s[0]||(s[0]=d(i=>o.$router.push("/bookmark"),["prevent"]))},[t("i",L,[!o.bookmark.length==0?(l(),r("span",R,[c(k(o.bookmark.length)+" ",1),z])):$("",!0)])])]),t("div",E,[t("a",{href:"#",class:"nav-item custom-nav-link",onClick:s[1]||(s[1]=d(i=>o.$router.push("/cart"),["prevent"]))},[t("i",G,[!o.carts.length==0?(l(),r("span",I,[c(k(o.carts.length)+" ",1),J])):$("",!0)])])])])])])])])}const O=p(C,[["render",K]]),P={methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})}}},Q={class:"bg-dark py-5 mt-md-5 mt-3"},U={class:"container"},W={class:"d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"},X=t("img",{src:y,width:"30",alt:"logo圖"},null,-1),Y={class:"d-flex list-unstyled mb-0 h4"},Z=t("i",{class:"bi bi-facebook"},null,-1),tt=[Z],st=t("i",{class:"bi bi-instagram"},null,-1),ot=[st],et=t("i",{class:"bi bi-line"},null,-1),at=[et],nt={class:"d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"},it={class:"mb-md-0 mb-1"},lt=t("p",{class:"mb-0"},"02-4512-4787",-1),rt=t("p",{class:"mb-0"},"FishDaddy@mail.com",-1),ct=t("p",{class:"mb-0"},"© 2024 FishDaddy All Rights Reserved.",-1),dt=t("i",{class:"bi bi-caret-up-square text-primary",style:{"font-size":"3rem"}},null,-1),_t=[dt];function mt(o,s,h,u,v,m){const e=_("router-link");return l(),r(w,null,[t("div",Q,[t("div",U,[t("div",W,[a(e,{class:"text-white h5 fw-bold",to:"/"},{default:n(()=>[X,c(" FishDaddy")]),_:1}),t("ul",Y,[t("li",null,[t("a",{href:"#",class:"text-white mx-3",onClick:s[0]||(s[0]=d(()=>{},["prevent"]))},tt)]),t("li",null,[t("a",{href:"#",class:"text-white mx-3",onClick:s[1]||(s[1]=d(()=>{},["prevent"]))},ot)]),t("li",null,[t("a",{href:"#",class:"text-white ms-3",onClick:s[2]||(s[2]=d(()=>{},["prevent"]))},at)])])]),t("div",nt,[t("div",it,[a(e,{to:"/login",class:"mb-0 text-light navBarHover"},{default:n(()=>[c("後台登入")]),_:1}),lt,rt]),ct])])]),t("button",{type:"button",class:"scrollTop",onClick:s[3]||(s[3]=(...i)=>m.scrollTop&&m.scrollTop(...i))},_t)],64)}const pt=p(P,[["render",mt]]),ht={components:{NavBar:O,FooterSection:pt}};function ut(o,s,h,u,v,m){const e=_("NavBar"),i=_("router-view"),B=_("FooterSection");return l(),r(w,null,[a(e),a(i),a(B)],64)}const $t=p(ht,[["render",ut]]);export{$t as default};
