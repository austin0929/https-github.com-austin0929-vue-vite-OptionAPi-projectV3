import{P as L}from"./PaginationComponent-CSR_L3v_.js";import{c as C}from"./cartStore-BixxUmmv.js";import{b as A}from"./bookmarkStore-CEGJHyJX.js";import{_ as T,a as v,c as n,d,b as t,e as _,w as p,F as m,v as b,A as f,B as S,C as B,r as g,o as l,f as P,t as u}from"./index-30fLRWtd.js";import{V as $}from"./VueLoading-B3WGteRw.js";import"./index-D4tL-Pm2.js";var E={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:k,VITE_APP_PATH:y}=E,U={components:{Pagination:L,VueLoading:$},data(){return{products:[],searchKeyword:"",selectPrice:"價格",pagination:{},isLoading:!1,categories:["漢堡","披薩","飲料","牛排","沙拉"]}},methods:{...v(A,["addBookmark"]),...v(C,["addToCart"]),getProducts(o=1){this.isLoading=!0;const{category:e=""}=this.$route.query,i=`${k}/api/${y}/products?category=${e}&page=${o}`;this.$http.get(i).then(r=>{r.data.success&&(this.searchKeyword="",this.products=r.data.products,this.pagination=r.data.pagination,console.log(this.products),setTimeout(()=>{this.isLoading=!1},800))}).catch(r=>{r.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},searchProduct(){const o=`${k}/api/${y}/products/all`;this.$http.get(o).then(e=>{this.products=e.data.products;const i=this.products.filter(r=>r.title.trim().toLowerCase().includes(this.searchKeyword.toLowerCase()));i.length>0?this.products=i:this.$swal("錯誤","抱歉，沒有找到符合條件的產品。","error")}).catch(e=>{e.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},sortedProducts(){let o="";this.products.sort((e,i)=>this.selectPrice==="1"?o=e.price-i.price:this.selectPrice==="2"?o=i.price-e.price:o)}},computed:{sortPrice(){return this.sortedProducts()}},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}},created(){this.getProducts()}},I={class:"layoutBanner mb-md-5 mb-3"},D={class:"container"},H={class:"row justify-content-center my-auto"},j={class:"col-md-4 text-center layout-Banner-Text"},K=t("h2",{class:"fw-bold mb-3 text-light h1"},"產品列表",-1),R={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},M={class:"breadcrumb d-flex justify-content-center"},N={class:"breadcrumb-item"},O=t("li",{class:"breadcrumb-item text-light","aria-current":"page"}," 產品列表 ",-1),q={class:"container"},F={class:"row"},z={class:"col-lg-3 mb-3"},G={class:"bg-info text-secondary p-4 rounded border"},J=t("h2",{class:"fw-bold h5"},"產品列表",-1),Q=t("hr",null,null,-1),W={class:"px-0"},X={class:"mb-3"},Y={class:"col-lg-9"},Z={class:"searchAndSort"},tt={class:"d-flex mb-3"},et={class:"productSelect ms-auto mb-3"},st=t("option",{selected:"",disabled:""},"價格",-1),ot=t("option",{value:"1"},"低到高",-1),it=t("option",{value:"2"},"高到低",-1),rt=[st,ot,it],ct={class:"row mb-md-5 mb-3"},at={class:"card border p-2 mb-4 position-relative"},nt=["src"],dt={class:"card-body p-0"},lt={class:"text-dark"},ut={class:"card-text text-muted mb-2 text-truncate"},_t={class:"d-flex justify-content-between align-items-center"},ht={class:"text-primary fw-bold me-2"},pt={class:"mb-0 text-muted text-end d-inline-block"},mt={class:"custom-btn-primary"},gt=["onClick"],vt=t("i",{class:"bi bi-handbag"},null,-1),bt=[vt],ft=["onClick"];function Pt(o,e,i,r,c,a){const w=g("VueLoading"),h=g("router-link"),x=g("Pagination");return l(),n(m,null,[d(w,{active:c.isLoading},null,8,["active"]),t("div",null,[t("div",I,[t("div",D,[t("div",H,[t("div",j,[K,t("nav",R,[t("ol",M,[t("li",N,[t("a",{href:"#",class:"layout-banner-txt-Hover",onClick:e[0]||(e[0]=_(()=>{},["prevent"]))},"首頁")]),O])])])])])])]),t("div",q,[t("div",F,[t("div",z,[t("div",G,[J,Q,t("ul",W,[t("li",X,[d(h,{class:"productLinkHover",to:"/products"},{default:p(()=>[P("全部產品")]),_:1})]),(l(!0),n(m,null,b(c.categories,s=>(l(),n("li",{class:"mb-3",key:s},[d(h,{class:"productLinkHover",to:`/products?category=${s}`},{default:p(()=>[P(u(s),1)]),_:2},1032,["to"])]))),128))])])]),t("div",Y,[t("div",Z,[t("div",tt,[f(t("input",{class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>c.searchKeyword=s),type:"search",placeholder:"產品搜尋",onBlur:e[2]||(e[2]=(...s)=>a.searchProduct&&a.searchProduct(...s))},null,544),[[S,c.searchKeyword,void 0,{trim:!0}]])]),t("div",et,[f(t("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[3]||(e[3]=s=>c.selectPrice=s),onChange:e[4]||(e[4]=(...s)=>a.sortPrice&&a.sortPrice(...s))},rt,544),[[B,c.selectPrice]])])]),t("div",ct,[(l(!0),n(m,null,b(c.products,s=>(l(),n("div",{class:"col-lg-4 col-md-6",key:s.id},[t("div",at,[d(h,{to:`/product/${s.id}`},{default:p(()=>[t("img",{height:"200",src:s.imageUrl,class:"card-img-top rounded mb-3 object-fit-cover cardHover",alt:"產品圖片"},null,8,nt),t("div",dt,[t("h4",lt,u(s.title),1),t("p",ut,u(s.description),1),t("div",_t,[t("div",null,[t("span",ht,"$ "+u(s.origin_price),1),t("p",pt,[t("del",null,"$"+u(s.origin_price),1)])]),t("div",mt,[t("a",{href:"#",class:"btn",onClick:_(V=>o.addToCart(s),["prevent"])},bt,8,gt)])])])]),_:2},1032,["to"]),t("div",null,[t("a",{href:"#",class:"p-2 bookmark-icon",onClick:e[5]||(e[5]=_(()=>{},["prevent"]))},[t("i",{class:"bi bi-heart-fill",onClick:_(V=>o.addBookmark(s),["prevent"])},null,8,ft)])])])]))),128))])])])]),d(x,{pages:c.pagination,onUpdatePage:a.getProducts},null,8,["pages","onUpdatePage"])],64)}const Ct=T(U,[["render",Pt]]);export{Ct as default};
