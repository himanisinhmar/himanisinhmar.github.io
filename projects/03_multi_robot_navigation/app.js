const assetURL=path=>globalThis.NDD_PORTABLE_URLS?.[path]||path;
function labURL(lab,id,embedded=false){
  const url=assetURL(lab.file);
  return url+(embedded&&!url.startsWith('blob:')?'?embed=1':'')+'#'+encodeURIComponent(id);
}
const labs={
  air:{file:'flight-lab.html',id:'delivery',title:'Interactive urban air mobility simulation replay',description:'Fifteen aerial vehicles adapt speed and altitude through intersecting routes.',hint:'Drag to rotate · scroll to zoom · scrub the timeline'},
  ground:{file:'intersection-lab.html',id:'highway_turning',title:'Interactive road intersection simulation replay',description:'Twenty vehicles coordinate crossings and turns in a continuing flow of traffic.',hint:'Scroll to zoom · choose a scenario · scrub the timeline'},
  warehouse:{file:'intersection-lab.html',id:'warehouse',title:'Interactive warehouse robot simulation replay',description:'Twenty robots share warehouse aisles while stopping at shelves and resuming their routes.',hint:'Scroll to zoom · inspect decisions and speeds · scrub the timeline'}
};
const frame=document.getElementById('lab-frame'),tabs=[...document.querySelectorAll('[data-lab]')];
function selectLab(name){
  const lab=labs[name];
  if(!lab)return;
  for(const tab of tabs){const selected=tab.dataset.lab===name;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;}
  document.getElementById('lab-panel').setAttribute('aria-labelledby','tab-'+name);
  document.getElementById('open-lab').href=labURL(lab,lab.id);
  document.getElementById('lab-description').textContent=lab.description;
  document.getElementById('lab-hint').textContent=lab.hint;
  document.getElementById('run-status').textContent='Loading recorded experiment…';
  frame.title=lab.title;frame.src=labURL(lab,lab.id,true);
}
for(const tab of tabs){
  tab.addEventListener('click',()=>selectLab(tab.dataset.lab));
  tab.addEventListener('keydown',event=>{
    const i=tabs.indexOf(tab);let next;
    if(event.key==='ArrowRight')next=tabs[(i+1)%tabs.length];
    if(event.key==='ArrowLeft')next=tabs[(i+tabs.length-1)%tabs.length];
    if(event.key==='Home')next=tabs[0];if(event.key==='End')next=tabs.at(-1);
    if(next){event.preventDefault();next.focus();selectLab(next.dataset.lab);}
  });
}
window.addEventListener('message',event=>{
  if(event.source!==frame.contentWindow||event.origin!==location.origin||event.data?.type!=='ndd-run')return;
  const {id,summary:s}=event.data,lab=labs[tabs.find(t=>t.getAttribute('aria-selected')==='true').dataset.lab];
  if(typeof id!=='string'||!s)return;
  document.getElementById('open-lab').href=labURL(lab,id);
  const details={
    delivery:'Fifteen aerial vehicles adapt speed and altitude through intersecting routes.',
    airway:'Aerial vehicles negotiate a shared bottleneck through speed and altitude adjustments.',
    highways:'Feeder routes merge into shared aerial corridors before branching toward destinations.',
    perpendicular:'Sixteen aerial vehicles approach an unsignalized crossing from four directions.',
    highway_turning:'Twenty vehicles coordinate crossings and turns in a continuing flow of traffic.',
    warehouse:'Twenty robots share warehouse aisles while stopping at shelves and resuming their routes.',
    antipodal:'Fifteen agents exchange positions across a shared central region.',
    intersection_large:'Forty agents traverse a shared intersection.'
  };
  document.getElementById('lab-description').textContent=details[id]||lab.description;
  const violation=Number(s.separation_violations)>0||(s.sampled_violating_pairs||[]).length>0||(s.recorded_collision_events||[]).length>0;
  let status='Recorded simulation · ';
  if(s.completed_trips)status+=s.completed_trips+' completed trips';
  else if(s.continuous)status+=s.completed_circuits+' circuits · '+s.completed_shelf_visits+' shelf visits';
  else status+=(s.completed_agents??'?')+'/'+s.agents+' arrived'+(s.completed===false?' within this recording':'');
  status+=' · '+(violation?'recorded separation violation':'no recorded separation violations');
  document.getElementById('run-status').textContent=status;
});
if('IntersectionObserver'in window){
  new IntersectionObserver(entries=>{for(const entry of entries)if(!entry.isIntersecting)frame.contentWindow?.postMessage({type:'ndd-pause'},location.origin==='null'?'*':location.origin);},{threshold:.05}).observe(frame);
}
document.getElementById('copy-citation').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try{const response=await fetch(assetURL('assets/citation.bib'));if(!response.ok)throw Error();const citation=await response.text();await navigator.clipboard.writeText(citation);status.textContent='BibTeX copied.';}
  catch{status.replaceChildren(document.createTextNode('Copy unavailable. '));const link=document.createElement('a');link.href=assetURL('assets/citation.bib');link.download='citation.bib';link.textContent='Download BibTeX';status.append(link);}
});
for(const video of document.querySelectorAll('video'))video.addEventListener('play',()=>{for(const other of document.querySelectorAll('video'))if(other!==video)other.pause();frame.contentWindow?.postMessage({type:'ndd-pause'},location.origin==='null'?'*':location.origin);});
if(globalThis.NDD_PORTABLE_URLS)selectLab('air');
