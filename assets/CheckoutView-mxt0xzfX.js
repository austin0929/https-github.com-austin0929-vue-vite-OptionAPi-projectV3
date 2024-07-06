import{V as y}from"./VueLoading-D_ar9Dhk.js";import{_ as P,c as _,d as o,b as e,f as w,w as L,F as p,v as E,t as r,x as A,r as c,o as h,y as m,e as u}from"./index-B24p_j4Q.js";var T={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:v,VITE_APP_PATH:g}=T,k={components:{VueLoading:y},data(){return{carts:[],totalPrice:{},isLoading:"",form:{user:{email:"",name:"",tel:"",address:""},message:""}}},methods:{getCart(){this.isLoading=!0;const i=`${v}/api/${g}/cart`;this.$http.get(i).then(s=>{s.data.success&&(this.carts=s.data.data.carts,this.totalPrice={total:s.data.data.total,final_total:s.data.data.final_total},setTimeout(()=>{this.isLoading=!1},1e3))}).catch(s=>{s.response.data.message&&this.$swal("錯誤","你所查看的API不存在","error")})},sendOrder(){this.isLoading=!0;const i=`${v}/api/${g}/order`;this.$http.post(i,{data:this.form}).then(s=>{if(s.data.success){const b=s.data.orderId;setTimeout(()=>{this.isLoading=!1},2e3),this.$refs.form.resetForm(),this.$router.push(`/order/${b}`)}}).catch(s=>{s.response.data.message&&this.$swal("失敗","請檢察表單資訊","error")})},isPhone(i){return/^(09)[0-9]{8}$/.test(i)?!0:"需要正確的電話號碼"}},mounted(){this.getCart()}},U={class:"layoutBanner mb-md-5 mb-3"},C={class:"container"},F={class:"row justify-content-center my-auto"},I={class:"col-md-4 text-center layout-Banner-Text"},S=e("h2",{class:"fw-bold mb-3 text-light h1"},"訂單資訊",-1),B={style:{"--bs-breadcrumb-divider":"'>'"},"aria-label":"breadcrumb"},N={class:"breadcrumb d-flex justify-content-center"},O={class:"breadcrumb-item"},R=e("li",{class:"breadcrumb-item text-light","aria-current":"page"},"訂單資訊",-1),j=A('<div class="container"><div class="row justify-content-center mb-md-5 mb-3"><div class="col-md-3 col-4"><div class="text-light text-center py-4 stepperActive">確認訂單</div></div><div class="col-md-3 col-4"><div class="text-light text-center py-4 bg-secondary">建立訂單</div></div><div class="col-md-3 col-4"><div class="text-light text-center py-4 bg-secondary">完成訂單</div></div></div></div>',1),q={class:"container"},D={class:"row"},M={class:"col-md-6"},H={class:"border p-4 mb-md-5 mb-3"},$=e("h2",{class:"h4 mb-3"},"訂購人資料",-1),z={class:"mb-3"},G=e("label",{for:"email",class:"form-label"},[u("Email "),e("span",{class:"text-danger"},"*")],-1),J={class:"mb-3"},K=e("label",{for:"name",class:"form-label"},[u("收件人姓名 "),e("span",{class:"text-danger"},"*")],-1),Q={class:"mb-3"},W=e("label",{for:"tel",class:"form-label"},[u("收件人電話 "),e("span",{class:"text-danger"},"*")],-1),X={class:"mb-3"},Y=e("label",{for:"address",class:"form-label"},[u("收件人地址 "),e("span",{class:"text-danger"},"*")],-1),Z={class:"mb-3"},ee=e("label",{for:"message",class:"form-label"},"留言",-1),se=e("div",{class:"custom-btn-primary"},[e("button",{type:"submit",class:"btn border w-100"},"送出訂單")],-1),te={class:"col-md-6"},oe={class:"p-4 border"},le=e("h2",{class:"h4 mb-3"},"訂單資訊",-1),ae={class:"table table-light"},ie=e("thead",null,[e("tr",null,[e("th",null,"產品"),e("th",{class:"text-end"},"總計")])],-1),de={class:"fw-bold"},re={class:"text-end"},ne=e("td",{class:"fw-bold"},"小計",-1),ce={class:"text-end text-primary"},me=e("td",{class:"fw-bold"},"總計",-1),ue={class:"text-end text-primary fw-bold"};function _e(i,s,b,he,t,f){const x=c("VueLoading"),d=c("VField"),n=c("ErrorMessage"),V=c("VForm");return h(),_(p,null,[o(x,{active:t.isLoading},null,8,["active"]),e("div",null,[e("div",U,[e("div",C,[e("div",F,[e("div",I,[S,e("nav",B,[e("ol",N,[e("li",O,[e("a",{href:"#",class:"layout-banner-txt-Hover",onClick:s[0]||(s[0]=w(()=>{},["prevent"]))},"首頁")]),R])])])])])])]),j,e("div",q,[e("div",D,[e("div",M,[e("div",H,[$,o(V,{ref:"form",onSubmit:f.sendOrder},{default:L(({errors:l})=>[e("div",z,[G,o(d,{id:"email",name:"信箱",type:"email",class:m(["form-control bg-light",{"is-invalid":l.信箱}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:t.form.user.email,"onUpdate:modelValue":s[1]||(s[1]=a=>t.form.user.email=a)},null,8,["class","modelValue"]),o(n,{name:"信箱",class:"invalid-feedback"})]),e("div",J,[K,o(d,{id:"name",name:"姓名",type:"text",class:m(["form-control bg-light",{"is-invalid":l.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[2]||(s[2]=a=>t.form.user.name=a)},null,8,["class","modelValue"]),o(n,{name:"姓名",class:"invalid-feedback"})]),e("div",Q,[W,o(d,{id:"tel",name:"電話",type:"text",class:m(["form-control bg-light",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:f.isPhone,modelValue:t.form.user.tel,"onUpdate:modelValue":s[3]||(s[3]=a=>t.form.user.tel=a)},null,8,["rules","class","modelValue"]),o(n,{name:"電話",class:"invalid-feedback"})]),e("div",X,[Y,o(d,{id:"address",name:"地址",type:"text",class:m(["form-control bg-light",{"is-invalid":l.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[4]||(s[4]=a=>t.form.user.address=a)},null,8,["class","modelValue"]),o(n,{name:"地址",class:"invalid-feedback"})]),e("div",Z,[ee,o(d,{id:"message",class:"form-control bg-light",name:"message",cols:"30",rows:"5",as:"textarea",modelValue:t.form.message,"onUpdate:modelValue":s[5]||(s[5]=a=>t.form.message=a)},null,8,["modelValue"])]),se]),_:1},8,["onSubmit"])])]),e("div",te,[e("div",oe,[le,e("table",ae,[ie,e("tbody",null,[(h(!0),_(p,null,E(t.carts,l=>(h(),_("tr",{key:l.id},[e("td",de,r(l.product.title)+" x "+r(l.qty),1),e("td",re,"$ "+r(l.product.origin_price),1)]))),128)),e("tr",null,[ne,e("td",ce,"$ "+r(t.totalPrice.total),1)]),e("tr",null,[me,e("td",ue,"$ "+r(t.totalPrice.final_total),1)])])])])])])])],64)}const pe=P(k,[["render",_e]]);export{pe as default};
