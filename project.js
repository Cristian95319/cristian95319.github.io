/* Página de proyecto: lee el id del <body data-id> y pinta portada, objetivo, reto, proceso e imágenes */
{
const id=document.body.dataset.id,i=P.findIndex(p=>p.id==id),p=P[i],B="../img/";
const prev=P[(i-1+P.length)%P.length],next=P[(i+1)%P.length];
const main=document.getElementById("main");
const list=[`${B}${p.id}-cover.webp`,...p.g.map(k=>`${B}${p.id}-${k}.webp`)];
SITE.onLang((l,t)=>{
 const e=SITE.esc,name=e(p.name[l]);
 document.title=`${p.name[l]} · ${p.client} · Matías Ferreira Olazar`;
 main.innerHTML=`
 <section class="band phero"><div class="wrap">
  <a class="back" href="../index.html#${l}">${t.back}</a>
  <h1>${name}</h1>
  <div class="facts"><div><span>${t.client}</span><strong>${e(p.client)}</strong></div><div><span>${t.type}</span><strong>${e(p.type[l])}</strong></div></div>
 </div></section>
 <section class="band" style="padding-top:0;padding-bottom:14px"><div class="wrap"><button class="lead" type="button" data-g="0"><img src="${list[0]}" alt="${name} · ${e(p.client)}"></button></div></section>
 <section class="band blue"><div class="wrap three">
  <div class="glass"><h2>${t.obj}</h2><p>${e(p.obj[l])}</p></div>
  <div class="glass"><h2>${t.ch}</h2><p>${e(p.ch[l])}</p></div>
  <div class="glass"><h2>${t.pr}</h2><p>${e(p.pr[l])}</p></div>
 </div></section>
 <section class="band" style="padding-bottom:30px"><div class="wrap shots">
  ${list.slice(1).map((s,j,a)=>`<button type="button" data-g="${j+1}" class="${(a.length%2&&j==a.length-1)?"full":""}"><img src="${s}" alt="${name} ${j+1}" loading="lazy"></button>`).join("")}
 </div></section>
 <section class="band" style="padding-top:20px"><div class="wrap pager">
  <a href="${prev.id}.html#${l}"><i>←</i><div><span>${t.prev}</span><strong>${e(prev.name[l])}</strong></div></a>
  <a class="nx" href="${next.id}.html#${l}"><div><span>${t.next}</span><strong>${e(next.name[l])}</strong></div><i>→</i></a>
 </div></section>`;
});
SITE.viewer(main,()=>list);
SITE.init();
}
