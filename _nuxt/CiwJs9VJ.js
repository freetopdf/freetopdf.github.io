import{g as r}from"./D6OHkpxG.js";import{_ as m,g as c,h as f,r as h,c as g,o as p,a as d,m as y,j as v,b as x,w,d as b,t as S}from"./CVECWm9d.js";const _={class:"adsense-container"},A=["data-ad-client","data-ad-slot","data-ad-format","data-full-width-responsive"],T={key:0,class:"ad-placeholder"},M={class:"text-caption text-grey-lighten-1"},C={__name:"GoogleAdsense",props:{adClient:{type:String,default:()=>r().clientId},adSlot:{type:String,required:!0},adFormat:{type:String,default:"auto"},fullWidthResponsive:{type:String,default:"true"}},setup(o){const a=o,n=c(!1),i=r(),l=c(i.testMode||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1");f(()=>{if(console.log("🔍 AdSense Debug:",{testMode:i.testMode,hostname:window.location.hostname,isTestMode:l.value,adSlot:a.adSlot}),l.value){console.log("✅ Showing test ad for slot:",a.adSlot),u();return}if(console.log("🌐 Loading real AdSense ad for slot:",a.adSlot),typeof window<"u"&&window.adsbygoogle)try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),setTimeout(()=>{const e=document.querySelector(".adsbygoogle");e&&!e.innerHTML.trim()&&(console.log("⚠️ AdSense ad failed to load, showing placeholder"),n.value=!0)},3e3)}catch(e){console.error("AdSense error:",e),n.value=!0}else console.log("⚠️ AdSense script not loaded, showing placeholder"),n.value=!0});const u=()=>{const e=`
    <div style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
      border: 2px solid rgba(255,255,255,0.1);
      min-height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    ">
      <div style="font-size: 28px; font-weight: bold; margin-bottom: 12px;">
        🎯 AdSense Test Ad
      </div>
      <div style="font-size: 16px; margin-bottom: 15px; opacity: 0.9;">
        Slot ID: <strong>${a.adSlot}</strong>
      </div>
      <div style="
        background: rgba(255,255,255,0.15);
        padding: 12px;
        border-radius: 8px;
        font-size: 13px;
        line-height: 1.4;
        backdrop-filter: blur(10px);
      ">
        <div style="margin-bottom: 8px;">📍 Localhost Test Mode</div>
        <div style="font-size: 11px; opacity: 0.8;">
          Real ads will appear here when deployed to production domain
        </div>
      </div>
    </div>
  `,t=document.querySelector(".adsense-container");if(t){const s=t.querySelector("ins");s&&(s.innerHTML=e)}};return(e,t)=>{const s=h("v-icon");return p(),g("div",_,[d("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":o.adClient,"data-ad-slot":o.adSlot,"data-ad-format":o.adFormat,"data-full-width-responsive":o.fullWidthResponsive},null,8,A),v(n)?(p(),g("div",T,[x(s,{size:"32",color:"grey-lighten-1"},{default:w(()=>t[0]||(t[0]=[b("mdi-advertisement")])),_:1,__:[0]}),t[1]||(t[1]=d("p",{class:"text-body-2 text-grey-lighten-1 mt-2"},"Advertisement Loading...",-1)),d("p",M,"Slot: "+S(o.adSlot),1)])):y("",!0)])}}},z=m(C,[["__scopeId","data-v-aa2b698b"]]);export{z as _};
