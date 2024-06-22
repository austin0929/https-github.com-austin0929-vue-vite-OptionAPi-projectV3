import{c as p}from"./cartStore-CZ9AfBKL.js";import{_ as k,a as c,m as v,c as n,d as g,b as t,e as a,g as d,F as m,v as f,r as y,o as i,t as r}from"./index-DFVmKsU4.js";import{b as h}from"./bookmarkStore-BfMgwlsX.js";import{V as x}from"./VueLoading-C87O1mLO.js";import"./index--0veVWS5.js";const w={components:{VueLoading:x},data(){return{isLoading:!1}},methods:{...c(p,["addToCart"]),...c(h,["getBookmark","delBookmark"])},computed:{...v(h,["bookmark","bookmarkDate"])},mounted(){this.getBookmark(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},1e3)}},C={class:"layoutBanner mb-md-5 mb-3"},B={class:"container"},L={class:"row justify-content-center my-auto"},V={class:"col-md-4 text-center layout-Banner-Text"},$=t("h2",{class:"fw-bold mb-3 text-light h1"},"收藏列表",-1),j={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},S={class:"breadcrumb d-flex justify-content-center"},T={class:"breadcrumb-item"},D=t("li",{class:"breadcrumb-item text-light","aria-current":"page"},"收藏列表",-1),N={key:0,class:"container"},F={class:"row justify-content-center"},A={class:"col-md-8"},E={class:"border text-center py-3 rounded custom-btn-primary",style:{"box-shadow":"0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"}},H=t("h3",{class:"mb-3"},"收藏清單",-1),M=t("i",{class:"bi bi-box-seam h1 mb-3 d-block"},null,-1),U=t("p",{class:"mb-3"},"目前收藏清單內無產品!",-1),q={key:1,class:"container"},z={class:"mb-5",style:{"min-width":"300px","overflow-x":"auto"}},G={class:"table",style:{width:"1100px"}},I=t("thead",null,[t("tr",null,[t("th"),t("th",null,"產品"),t("th",null,"收藏日期"),t("th",{width:"150"},"價格"),t("th",{width:"200",class:"text-end"})])],-1),J={style:{"line-height":"36px"}},K={class:"text-center"},O=["onClick"],P={class:"d-flex align-items-center"},Q=["src"],R={class:"h6 mt-2 mt-lg-0"},W={class:"text-end custom-btn-primary"},X=["onClick"];function Y(e,o,Z,tt,_,et){const u=y("VueLoading");return i(),n(m,null,[g(u,{active:_.isLoading},null,8,["active"]),t("div",null,[t("div",C,[t("div",B,[t("div",L,[t("div",V,[$,t("nav",j,[t("ol",S,[t("li",T,[t("a",{href:"#",class:"layout-banner-txt-Hover",onClick:o[0]||(o[0]=a(()=>{},["prevent"]))},"首頁")]),D])])])])])])]),e.bookmark.length===0?(i(),n("div",N,[t("div",F,[t("div",A,[t("div",E,[H,M,U,t("button",{type:"button",class:"btn",onClick:o[1]||(o[1]=a(s=>this.$router.push("/products"),["prevent"]))},"挑選產品")])])])])):d("",!0),e.bookmark.length?(i(),n("div",q,[t("div",z,[t("table",G,[I,t("tbody",J,[(i(!0),n(m,null,f(e.bookmark,(s,l)=>(i(),n("tr",{key:l},[t("td",K,[t("a",{href:"#",onClick:o[2]||(o[2]=a(()=>{},["prevent"]))},[t("i",{class:"bi bi-trash",onClick:a(b=>e.delBookmark(s,l),["prevent"])},null,8,O)])]),t("td",null,[t("div",P,[t("img",{class:"object-fit-cover d-none d-lg-inline-block me-3",height:"50",width:"100",alt:"收藏產品圖",src:s.imageUrl},null,8,Q),t("h2",R,r(s.title),1)])]),t("td",null,r(e.bookmarkDate),1),t("td",null,"$ "+r(s.origin_price),1),t("td",W,[t("button",{type:"button",class:"btn",onClick:b=>e.addToCart(s)},"加入購物車",8,X)])]))),128))])])])])):d("",!0)],64)}const rt=k(w,[["render",Y]]);export{rt as default};
