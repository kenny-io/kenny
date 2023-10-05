import{f as m,o as p,c as u,a as e,t as r,l as _}from"./entry.3047cff7.js";const v={class:"hover:border-gray-200/50 hover:transition-colors hover:duration-1000 ease-in-out border border-gray-200/20 rounded-r-2xl rounded-l-2xl overflow-hidden relative"},b={class:"w-full h-[490px]"},x=["src"],f={class:"px-8 py-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur absolute bottom-0"},w={class:"text-2xl md:text-4xl font-bold tracking-tighter text-white"},y={class:"text-lg md:text-xl text-white/70 mt-4"},k=["href"],D={class:"mt-8 w-fit text-[#AFADAD] flex items-center gap-1 hover:gap-2 hover:transition duration-200 ease-in-out cursor-pointer"},F=e("span",{class:"text-[#918F8F] h-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4l5.6-5.6Z"})])],-1),A={key:0,class:"px-4 py-1 bg-[#39FF41] text-sm text-black uppercase rounded-2xl absolute top-7 left-8"},j=m({__name:"TheCard",props:{article:{},buttonText:{},type:{},tag:{},videoURL:{}},setup(B){const g=t=>{const o=t==null?void 0:t.split(" ");return o==null?void 0:o.slice(0,20).join(" ")};return(t,o)=>{var a,s,l,n,i,c,d,h;return p(),u("div",v,[e("div",b,[e("img",{class:"object-cover w-full",src:((s=(a=t.article)==null?void 0:a.coverImage)==null?void 0:s.url)||((l=t.article)==null?void 0:l.image)||((i=(n=t.article)==null?void 0:n.thumbnails)==null?void 0:i.high.url)||"https://res.cloudinary.com/kennyy/image/upload/v1695921469/AI_Generated_Image_13_d1aaw0.jpg",alt:"card-header-image"},null,8,x)]),e("div",f,[e("h4",w,r((c=t.article)==null?void 0:c.title),1),e("p",y,r(g((d=t.article)==null?void 0:d.description)),1),e("a",{href:((h=t.article)==null?void 0:h.url)||t.videoURL},[e("div",D,[e("span",null,r(t.buttonText),1),F])],8,k)]),t.tag?(p(),u("div",A,[e("p",null,r(t.tag),1)])):_("",!0)])}}});export{j as _};