import{_ as m,c as f,b as t,d as a,w as c,J as g,g as v,r as n,o as u,f as r}from"./index-DngF0qHh.js";var $={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:d}=$,k={data(){return{productsStatus:!1}},methods:{logout(){const e=`${d}/logout`;this.$http.post(e).then(s=>{s.data.success&&(document.cookie="vuetoken=; expires=;",this.$swal("登出","已成功登出","success"),this.$router.push("/login"))}).catch(s=>{s.response.data.message&&this.$swal("錯誤","請重新登入","error")})}},mounted(){const e=`${d}/api/user/check`,s=document.cookie.replace(/(?:(?:^|.*;\s*)vuetoken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s,this.$http.post(e).then(o=>{this.productsStatus=o.data.success}).catch(o=>{o.response.data.message&&(this.$router.push("/login"),this.$swal("發生錯誤","請重新登入","error"))})}},w={class:"ps-2 container-fluid"},V={class:"row vh-100"},b={class:"col-2 bg-secondary text-light my-0"},P=t("h1",{class:"fw-bold h2 my-4"},"後台管理面板",-1),x={class:"list-group-item h3 mb-3"},A={class:"list-group-item h3 mb-3"},E={class:"list-group-item h3 mb-3"},y={class:"list-group-item h3 mb-3"},S={class:"col-8 offset-md-1"};function B(e,s,o,C,h,l){const i=n("router-link"),_=n("router-view");return u(),f("div",w,[t("div",V,[t("ul",b,[P,t("li",x,[a(i,{to:"/admin/products",class:"list-group-item h3"},{default:c(()=>[r("產品列表")]),_:1})]),t("li",A,[a(i,{to:"/admin/orders",class:"list-group-item h3"},{default:c(()=>[r("訂單資料")]),_:1})]),t("li",E,[a(i,{to:"/admin/coupons",class:"list-group-item h3"},{default:c(()=>[r("優惠券")]),_:1})]),t("li",y,[a(i,{to:"/admin/article",class:"list-group-item h3"},{default:c(()=>[r("文章")]),_:1})]),t("li",null,[t("button",{type:"button",class:"list-group-item h3",onClick:s[0]||(s[0]=(...p)=>l.logout&&l.logout(...p))},"登出")])]),t("div",S,[h.productsStatus?(u(),g(_,{key:0})):v("",!0)])])])}const T=m(k,[["render",B]]);export{T as default};
