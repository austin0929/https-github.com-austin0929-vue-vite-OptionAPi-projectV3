import{m as k}from"./modalMixins-Duqc8mcG.js";import{_ as O,o,c as l,b as t,t as s,F as _,v as h,g as y,d as m,r as p,e as $}from"./index-DngF0qHh.js";import{V as w}from"./VueLoading-EhICzw3E.js";const M={props:["order"],data(){return{modal:null,tempOrder:{}}},watch:{order(){this.tempOrder=this.order}},mixins:[k]},V={class:"modal fade",id:"orderModal",tabindex:"-1",role:"dialog","aria-hidden":"true",ref:"myModal"},x={class:"modal-dialog modal-lg",role:"document"},P={class:"modal-content border-0"},L=t("div",{class:"modal-header bg-primary text-white"},[t("h5",{class:"modal-title"},[t("span",{class:"fw-bold"},"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},A={class:"row"},C={class:"col-md-6"},R=t("h3",{class:"fw-bold"},"訂單細節",-1),T={class:"table"},B=t("th",{width:"150"},"訂單編號",-1),D=t("th",null,"下單時間",-1),I=t("th",null,"付款時間",-1),S={key:0},N={key:1},U=t("th",null,"付款狀態",-1),q={key:0,class:"text-primary"},F={key:1,class:"text-muted"},H=t("th",null,"總金額",-1),j=t("h3",{class:"fw-bold"},"選購商品",-1),z={class:"table"},G=t("thead",null,[t("tr")],-1),J={class:"text-end"},K={class:"col-md-6"},Q=t("h3",{class:"fw-bold"},"用戶資料",-1),W={class:"table"},X={key:0},Y=t("th",{width:"100"},"姓名",-1),Z=t("th",null,"Email",-1),tt=t("th",null,"電話",-1),et=t("th",null,"地址",-1),st={class:"modal-footer"},ot=t("button",{type:"button",class:"btn btn-dark","data-bs-dismiss":"modal"},"取消",-1);function lt(d,n,c,g,e,u){return o(),l("div",V,[t("div",x,[t("div",P,[L,t("div",E,[t("div",A,[t("div",C,[R,t("table",T,[t("tbody",null,[t("tr",null,[B,t("td",null,s(e.tempOrder.id),1)]),t("tr",null,[D,t("td",null,s(d.$filters.date(e.tempOrder.create_at)),1)]),t("tr",null,[I,t("td",null,[e.tempOrder.paid_date?(o(),l("span",S,s(d.$filters.date(e.tempOrder.paid_date)),1)):(o(),l("span",N,"時間不正確"))])]),t("tr",null,[U,t("td",null,[e.tempOrder.is_paid?(o(),l("strong",q,"已付款")):(o(),l("span",F,"尚未付款"))])]),t("tr",null,[H,t("td",null,s(e.tempOrder.total),1)])])]),j,t("table",z,[G,t("tbody",null,[(o(!0),l(_,null,h(e.tempOrder.products,r=>(o(),l("tr",{key:r.id},[t("th",null,s(r.product.title),1),t("td",J,s(r.qty),1),t("td",null,s(r.product.unit),1)]))),128))])])]),t("div",K,[Q,t("table",W,[e.tempOrder.user?(o(),l("tbody",X,[t("tr",null,[Y,t("td",null,s(e.tempOrder.user.name),1)]),t("tr",null,[Z,t("td",null,s(e.tempOrder.user.email),1)]),t("tr",null,[tt,t("td",null,s(e.tempOrder.user.tel),1)]),t("tr",null,[et,t("td",null,s(e.tempOrder.user.address),1)])])):y("",!0)])])])]),t("div",st,[ot,t("button",{type:"button",class:"btn btn-primary",onClick:n[0]||(n[0]=(...r)=>d.hideModal&&d.hideModal(...r))},"確認")])])])],512)}const dt=O(M,[["render",lt]]);var nt={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"david555",BASE_URL:"/vue3-OptionAPi-projectV3/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_URL:b,VITE_APP_PATH:f}=nt,rt={components:{OrderModal:dt,VueLoading:w},data(){return{orders:[],tempOrder:{},isLoading:!1}},methods:{getOrders(){this.isLoading=!0;const d=`${b}/api/${f}/admin/orders`;this.$http.get(d).then(n=>{n.data.success&&(setTimeout(()=>{this.isLoading=!1},800),this.orders=n.data.orders)}).catch(n=>{n.response.data.message&&this.$swal("錯誤","無法取得資料","error")})},openModal(d){this.tempOrder={...d},this.$refs.modal.showModal()},delOrder(d){const n=`${b}/api/${f}/admin/order/${d.id}`;this.$http.delete(n).then(c=>{c.data.success&&this.getOrders()}).catch(c=>{c.response.data.message&&this.$swal("錯誤","訂單刪除失敗","error")})}},mounted(){this.getOrders()}},it={class:"table table-striped my-md-5 my-3"},at=t("thead",null,[t("tr",null,[t("th"),t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",{width:"150"},"應付金額"),t("th",{width:""},"是否付款"),t("th",null,"編輯")])],-1),ct={href:"#"},_t=["onClick"],ut={class:"text-right"},ht={key:0,class:"bg-success text-center activeRounded"},mt=t("span",null,"已付款",-1),pt=[mt],bt={key:1,class:"bg-warning text-center activeRounded"},ft=t("span",null,"未付款",-1),Ot=[ft],yt={class:"btn-group custom-btn-dark"},gt=["onClick"];function vt(d,n,c,g,e,u){const r=p("VueLoading"),v=p("OrderModal");return o(),l(_,null,[m(r,{active:e.isLoading},null,8,["active"]),t("table",it,[at,t("tbody",null,[e.orders?(o(!0),l(_,{key:0},h(e.orders,i=>(o(),l("tr",{key:i.id},[t("td",null,[t("a",ct,[t("i",{class:"bi bi-x h3 text-danger",onClick:$(a=>u.delOrder(i),["prevent"])},null,8,_t)])]),t("td",null,s(d.$filters.date(i.create_at)),1),t("td",null,[t("span",null,s(i.user.email),1)]),t("td",null,[(o(!0),l(_,null,h(i.products,a=>(o(),l("ul",{class:"list-unstyled",key:a.id},[t("li",null,s(a.product.title)+" /"+s(a.qty)+" "+s(a.product.unit),1)]))),128))]),t("td",ut,s(i.total),1),t("td",null,[i.is_paid?(o(),l("div",ht,pt)):(o(),l("div",bt,Ot))]),t("td",null,[t("div",yt,[t("button",{class:"btn btn-sm",type:"button",onClick:a=>u.openModal(i)},"檢視",8,gt)])])]))),128)):y("",!0)])]),m(v,{ref:"modal",order:e.tempOrder},null,8,["order"])],64)}const Mt=O(rt,[["render",vt]]);export{Mt as default};
