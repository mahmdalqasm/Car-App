import{_ as c,o as f,c as b,b as r,w as i,e as n,v as d,f as t,g as p,h as _,n as v,i as V,j as l,k as x}from"./index-0peN2Ti7.js";import{u as g}from"./vehicle-DhIg1tac.js";const w={class:"form-wrapper"},k={class:"form-group"},y=["disabled"],B={class:"form-group"},C=["disabled"],S={class:"form-actions"},h=["disabled"],E={__name:"CreateView",setup(I){const o=g();return f(o.resetForm),(L,e)=>{const a=l("ValidationError"),m=l("IconSpinner"),u=l("RouterLink");return x(),b("form",{onSubmit:e[2]||(e[2]=V((...s)=>t(o).storeVehicle&&t(o).storeVehicle(...s),["prevent"])),class:"form-container",novalidate:""},[r("div",w,[e[7]||(e[7]=r("h1",{class:"form-title"},"Add vehicle",-1)),r("div",k,[e[3]||(e[3]=r("label",{for:"plate_number",class:"required"},"License plate",-1)),i(r("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t(o).form.plate_number=s),id:"plate_number",name:"plate_number",type:"text",class:"form-input plate",disabled:t(o).loading},null,8,y),[[d,t(o).form.plate_number]]),n(a,{errors:t(o).errors,field:"plate_number"},null,8,["errors"])]),r("div",B,[e[4]||(e[4]=r("label",{for:"description"},"Description",-1)),i(r("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>t(o).form.description=s),id:"description",name:"description",type:"text",class:"form-input",placeholder:"My Ferrari, Big truck, Rental",disabled:t(o).loading},null,8,C),[[d,t(o).form.description]]),n(a,{errors:t(o).errors,field:"description"},null,8,["errors"])]),e[8]||(e[8]=r("div",{class:"form-separator"},null,-1)),r("div",S,[r("button",{type:"submit",class:"btn btn-primary",disabled:t(o).loading},[i(n(m,{class:"spinner"},null,512),[[_,t(o).loading]]),e[5]||(e[5]=p(" Save vehicle "))],8,h),n(u,{to:{name:"vehicles.index"},class:"btn btn-secondary"},{default:v(()=>e[6]||(e[6]=[p(" Cancel ")])),_:1})])])],32)}}},R=c(E,[["__scopeId","data-v-1f874940"]]);export{R as default};
