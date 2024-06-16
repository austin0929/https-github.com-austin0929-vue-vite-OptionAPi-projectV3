import{c as m}from"./cartStore-BixxUmmv.js";import{_ as I,a as b,m as C,c as d,d as p,b as t,t as c,w as g,F as _,v,A as T,B as V,e as n,r as f,o as r,f as y}from"./index-30fLRWtd.js";import{b as A}from"./bookmarkStore-CEGJHyJX.js";import{V as B}from"./VueLoading-B3WGteRw.js";import"./index-D4tL-Pm2.js";var L={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:k,VITE_APP_PATH:x}=L,E={components:{VueLoading:B},data(){return{product:{},products:[],randomProducts:[],productImages:[],productImg:"",productId:"",productQty:1,isLoading:!1}},methods:{...b(m,["addToCart","updateQty"]),...b(A,["getBookmark","addBookmark"]),getNewProductId(i){this.productId=i,this.getProduct()},chooseProduct(i){this.product={...i},this.productImages=[...i.imagesUrl],this.productImg=i.imageUrl},getProducts(){const i=`${k}/api/${x}/products`;this.$http.get(i).then(s=>{s.data.success&&(this.products=s.data.products)}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},getProduct(){this.isLoading=!0;const i=`${k}/api/${x}/product/${this.productId}`;this.$http.get(i).then(s=>{s.data.success&&(setTimeout(()=>{this.isLoading=!1},1e3),this.product=s.data.product,this.productImg=s.data.product.imageUrl,this.productImages=s.data.product.imagesUrl)}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},getRandomProducts(){const i=this.products.slice(0),s=[];let l;for(let a=0;a<3;a++)l=Math.floor(Math.random()*i.length),s.push(i[l]),i.splice(l,1);this.randomProducts=s}},watch:{products:{handler(){this.getRandomProducts()},deep:!0}},computed:{...C(m,["carts"])},mounted(){this.productId=this.$route.params.id,this.getProduct(),this.getProducts(),this.getBookmark()}},U={class:"layoutBanner mb-md-5 mb-3"},j={class:"container"},Q={class:"row justify-content-center my-auto"},R={class:"col-md-4 text-center layout-Banner-Text"},S={class:"fw-bold mb-3 text-light h1"},N={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},D={class:"breadcrumb d-flex justify-content-center"},H={class:"breadcrumb-item"},M={class:"breadcrumb-item text-light","aria-current":"page"},O={class:"breadcrumb-item text-light","aria-current":"page"},$={class:"container"},F={class:"row justify-content-center mt-5"},z={class:"col-md-10"},q={class:"row"},G={class:"col-md-7"},J=["src"],K={class:"my-3 row"},W=["src","onClick"],X={class:"col-md-5 mt-3"},Y={class:"fw-bold h1 mb-3"},Z={class:"mb-3"},tt={class:"mb-0 text-muted text-end"},st={class:"h4 fw-bold text-end text-primary"},ot={class:"row align-items-center mb-6"},et={class:"col-5"},it={class:"input-group my-3 bg-light border"},ct={class:"input-group-prepend"},nt=t("i",{class:"bi bi-dash"},null,-1),dt=[nt],rt={class:"input-group-append"},lt=t("i",{class:"bi bi-plus"},null,-1),at=[lt],ut={class:"col-5 custom-btn-primary"},pt={class:"col-2"},_t={class:"custom-btn-info"},ht=t("i",{class:"bi bi-heart"},null,-1),mt=[ht],bt=t("div",{class:"border-primary border rounded p-3"},[t("p",null,"商品配送工作時間："),t("p",null," ※ 本商店皆以宅配方式寄出商品，於每次出貨時，寄發出貨通知信，還請多加留意。 "),t("p",null," ※ 商品配送時間一律為3-7個工作天送達商品。配送時間以每筆訂單完成付款時間開始算起， "),t("p",null," 因商品數量有限，需要時間做調度作業，敬請見諒。 ※ 若有特別需求，請於下訂單時備註說明，以利出貨作業。 ")],-1),gt={class:"row my-5"},vt={class:"col-md-4"},ft=t("h2",{class:"mb-3"},"商品規格",-1),yt={class:"px-0"},kt=t("hr",null,null,-1),xt=t("h2",{class:"text-center mb-3 mt-5"},"相關產品",-1),Pt={class:"row mb-6"},wt={class:"card border p-2 mb-4 position-relative"},It=["onClick"],Ct=["src"],Tt={class:"card-body p-0"},Vt={class:"text-dark"},At={class:"card-text text-muted mb-2 text-truncate"},Bt={class:"d-flex justify-content-between align-items-center"},Lt={class:"text-primary fw-bold me-2"},Et={class:"mb-0 text-muted text-end d-inline-block"},Ut={class:"custom-btn-primary"},jt=["onClick"],Qt=t("i",{class:"bi bi-handbag"},null,-1),Rt=[Qt],St=["onClick"];function Nt(i,s,l,a,o,P){const w=f("VueLoading"),h=f("router-link");return r(),d(_,null,[p(w,{active:o.isLoading},null,8,["active"]),t("div",null,[t("div",U,[t("div",j,[t("div",Q,[t("div",R,[t("h2",S,c(o.product.title),1),t("nav",N,[t("ol",D,[t("li",H,[p(h,{to:"/",class:"layout-banner-txt-Hover"},{default:g(()=>[y("首頁")]),_:1})]),t("li",M,[p(h,{to:"/products",class:"layout-banner-txt-Hover"},{default:g(()=>[y("產品列表")]),_:1})]),t("li",O,c(o.product.title),1)])])])])])])]),t("div",$,[t("div",F,[t("div",z,[t("div",q,[t("div",G,[t("img",{class:"img-fluid rounded object-fit-cover",style:{height:"350px",width:"100%"},src:o.productImg,alt:"單一產品放大圖"},null,8,J),t("div",K,[(r(!0),d(_,null,v(o.productImages,e=>(r(),d("img",{key:e,class:"img-fluid object-fit-cover imgSize col-3",style:{height:"80px",cursor:"pointer"},src:e,onClick:n(u=>o.productImg=e,["prevent"]),alt:"單一產品縮小圖"},null,8,W))),128))])]),t("div",X,[t("h2",Y,c(o.product.title),1),t("p",Z,c(o.product.description),1),t("p",tt,[t("del",null,"NT$ "+c(o.product.origin_price),1)]),t("p",st," NT$ "+c(o.product.price),1),t("div",ot,[t("div",et,[t("div",it,[t("div",ct,[t("button",{class:"btn btn-light border-end rounded-0 py-2",type:"button",id:"button-addon1",onClick:s[0]||(s[0]=e=>o.productQty>1?o.productQty--:1)},dt)]),T(t("input",{type:"number",class:"form-control border-0 text-center my-auto bg-light","aria-label":"Example text with button addon","aria-describedby":"button-addon1",min:"1","onUpdate:modelValue":s[1]||(s[1]=e=>o.productQty=e),readonly:""},null,512),[[V,o.productQty]]),t("div",rt,[t("button",{class:"btn btn-light rounded-0 border-start py-2",type:"button",id:"button-addon2",onClick:s[2]||(s[2]=e=>o.productQty++)},at)])])]),t("div",ut,[t("a",{href:"#",class:"text-nowrap btn w-100 py-2",onClick:s[3]||(s[3]=n(e=>i.addToCart(o.product,o.productQty),["prevent"]))},"加入購物車")]),t("div",pt,[t("div",_t,[t("a",{href:"#",class:"btn w-100 py-2",onClick:s[4]||(s[4]=n(e=>i.addBookmark(o.product),["prevent"]))},mt)])])])])]),bt,t("div",gt,[t("div",vt,[ft,t("ul",yt,[t("li",null,[t("p",null,"款式："+c(o.product.title),1)]),t("li",null,[t("p",null,"分類: "+c(o.product.category),1)]),t("li",null,[t("p",null,"內容: "+c(o.product.content),1)])])])]),kt,t("div",null,[xt,t("div",Pt,[(r(!0),d(_,null,v(o.randomProducts,e=>(r(),d("div",{class:"col-lg-4 col-md-6",key:e.id},[t("div",wt,[t("a",{href:"#",onClick:n(u=>P.chooseProduct(e),["prevent"])},[t("img",{height:"200",src:e.imageUrl,class:"card-img-top rounded mb-3 object-fit-cover cardHover",alt:"其他相關產品圖"},null,8,Ct),t("div",Tt,[t("h4",Vt,c(e.title),1),t("p",At,c(e.description),1),t("div",Bt,[t("div",null,[t("span",Lt,"$ "+c(e.origin_price),1),t("p",Et,[t("del",null,"$"+c(e.origin_price),1)])]),t("div",Ut,[t("a",{href:"#",class:"btn",onClick:n(u=>i.addToCart(e),["prevent"])},Rt,8,jt)])])])],8,It),t("div",null,[t("a",{href:"#",class:"p-2 bookmark-icon",onClick:s[5]||(s[5]=n(()=>{},["prevent"]))},[t("i",{class:"bi bi-heart-fill",onClick:n(u=>i.addBookmark(e),["prevent"])},null,8,St)])])])]))),128))])])])])])],64)}const Ft=I(E,[["render",Nt]]);export{Ft as default};
