import{d as w,a as i,r as l,z as P}from"./index-0peN2Ti7.js";const m=w("parking",()=>{const r=i({}),s=i([]),g=P(),o=i([]),a=l({}),t=i(!1),e=l({vehicle_id:null,zone_id:null});function d(){r.value={}}function c(n){return window.axios.get(`parkings/${n.id}`).then(h=>{r.value=h.data.data})}function p(){return window.axios.get("parkings/history").then(n=>{s.value=n.data.data})}function k(){e.vehicle_id=null,e.zone_id=null,a.value={}}function f(){if(!t.value)return t.value=!0,a.value={},window.axios.post("parkings/start",e).then(()=>{g.push({name:"parkings.active"})}).catch(n=>{n.response.status===422&&(a.value=n.response.data.errors)}).finally(()=>t.value=!1)}function u(){return window.axios.get("parkings").then(n=>{o.value=n.data.data})}function v(n){window.axios.put(`parkings/${n.id}`).then(u)}return{form:e,errors:a,loading:t,resetForm:k,startParking:f,parkings:o,getActiveParkings:u,stopParking:v,stoppedParkings:s,getStoppedParkings:p,parking:r,getParking:c,resetParkingDetails:d}});export{m as u};
