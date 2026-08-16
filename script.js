const phones = [
{name:"Samsung Galaxy A32",brand:"samsung",dpi:460,gen:96,red:88,x2:91,x4:89,awm:78,free:70},
{name:"Samsung A52 / A72",brand:"samsung",dpi:480,gen:97,red:90,x2:92,x4:88,awm:80,free:75},
{name:"Redmi Note 12 Pro",brand:"xiaomi",dpi:700,gen:100,red:95,x2:95,x4:92,awm:85,free:80},
{name:"Redmi Note 11",brand:"xiaomi",dpi:650,gen:94,red:86,x2:90,x4:87,awm:79,free:73},
{name:"Poco X3 Pro",brand:"xiaomi",dpi:720,gen:99,red:93,x2:94,x4:90,awm:84,free:78},
{name:"iPhone 13 / 14",brand:"iphone",dpi:0,gen:92,red:85,x2:88,x4:86,awm:75,free:70},
{name:"iPhone 11",brand:"iphone",dpi:0,gen:90,red:83,x2:86,x4:84,awm:73,free:68},
{name:"Infinix Hot 30",brand:"infinix",dpi:520,gen:95,red:87,x2:90,x4:88,awm:80,free:74},
{name:"Infinix Note 30",brand:"infinix",dpi:540,gen:96,red:88,x2:91,x4:89,awm:81,free:75},
{name:"Tecno Spark 10 Pro",brand:"tecno",dpi:500,gen:93,red:85,x2:89,x4:86,awm:77,free:72},
{name:"Tecno Pova 5",brand:"tecno",dpi:560,gen:94,red:86,x2:90,x4:87,awm:78,free:73},
{name:"Huawei Y9a",brand:"huawei",dpi:450,gen:91,red:82,x2:87,x4:84,awm:76,free:70},
{name:"PC - BlueStacks",brand:"pc",dpi:0,gen:85,red:80,x2:85,x4:82,awm:70,free:90},
{name:"PC - MSI App Player",brand:"pc",dpi:0,gen:88,red:82,x2:87,x4:84,awm:72,free:92},
];
const grid=document.getElementById('sens');
function render(list){
 grid.innerHTML='';
 list.forEach(p=>{
   grid.innerHTML+=`<div class="card" data-brand="${p.brand}"><div class="badge">قوية - هيدشوت 🔥</div><div class="phone">📱 ${p.name}</div><div class="sens"><div>العام: <span>${p.gen}</span></div><div>نقطة حمراء: <span>${p.red}</span></div><div>2X: <span>${p.x2}</span></div><div>4X: <span>${p.x4}</span></div><div>قناصة: <span>${p.awm}</span></div><div>حرة: <span>${p.free}</span></div></div><div class="dpi">DPI: ${p.dpi==0?'تلقائي':p.dpi}</div><button class="copy" onclick="copySens('${p.name}',${p.gen},${p.red},${p.x2},${p.x4},${p.awm},${p.free})">📋 نسخ الحساسية</button></div>`;
 });
}
render(phones);
function copySens(name,g,r,x2,x4,awm,free){
 const text=`حساسية ${name} - LMLIH TOP - العام:${g} حمراء:${r} 2x:${x2} 4x:${x4} قناصة:${awm} حرة:${free}`;
 navigator.clipboard.writeText(text).then(()=>alert('✅ تم نسخ حساسية '+name));
}
document.getElementById('searchInput').addEventListener('input',e=>{
 const q=e.target.value.toLowerCase();
 render(phones.filter(p=>p.name.toLowerCase().includes(q)));
});
document.querySelectorAll('.filter').forEach(btn=>{
 btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  if(f==='all') render(phones); else render(phones.filter(p=>p.brand===f));
 });
});
const modal1=document.getElementById('modal1');
const modal2=document.getElementById('modal2');
let ytClicked=false;
document.getElementById('openGems').onclick=()=>{modal1.classList.add('show');}
document.getElementById('ytLink').onclick=()=>{ytClicked=true; localStorage.setItem('ytClicked','1');}
document.getElementById('doneFollow').onclick=()=>{
 if(!ytClicked && localStorage.getItem('ytClicked')!=='1'){alert('⚠️ خاصك تضغط على زر اليوتيوب الأول وتدير متابعة عاد تقدر تكمل!');return;}
 modal1.classList.remove('show'); modal2.classList.add('show');
};
document.querySelectorAll('.close').forEach(c=>c.onclick=()=>{document.getElementById(c.dataset.close).classList.remove('show');});
const checks=[document.getElementById('t1'),document.getElementById('t2'),document.getElementById('t3')];
const bar=document.getElementById('progressBar');
checks.forEach(ch=>ch.addEventListener('change',()=>{let done=checks.filter(x=>x.checked).length; bar.style.width=(done/3*100)+'%';}));
document.getElementById('completeTasks').onclick=()=>{
 if(!checks.every(x=>x.checked)){alert('كمل المهام كاملين عاد!');return;}
 document.getElementById('finalMsg').style.display='block';
 setTimeout(()=>{window.open('https://www.youtube.com/@lmlih_top','_blank')},1500);
};