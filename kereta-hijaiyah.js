/* Kereta Hijaiyah - game hijaiyah untuk anak (hurufa.com)
   Pemakaian di Blogger:
   <div id="kereta-hijaiyah"></div>
   <script src="https://cdn.jsdelivr.net/gh/NAMAKAMU/hurufa-games@main/kereta-hijaiyah.js"></script>
   File suara huruf-01-alif.mp3 dst. harus berada di folder yang sama dengan file ini. */
(function(){
var me=document.currentScript;
var BASE=(me&&me.src||'').replace(/[^\/]*$/,'');
var FILES=['huruf-01-alif.mp3', 'huruf-02-ba.mp3', 'huruf-03-ta.mp3', 'huruf-04-tsa.mp3', 'huruf-05-jim.mp3', 'huruf-06-hha.mp3', 'huruf-07-kho.mp3', 'huruf-08-dal.mp3', 'huruf-09-dzal.mp3', 'huruf-10-ro.mp3', 'huruf-11-za.mp3', 'huruf-12-sin.mp3', 'huruf-13-syin.mp3', 'huruf-14-shod.mp3', 'huruf-15-dhod.mp3', 'huruf-16-tho.mp3', 'huruf-17-zho.mp3', 'huruf-18-ain.mp3', 'huruf-19-ghoin.mp3', 'huruf-20-fa.mp3', 'huruf-21-qof.mp3', 'huruf-22-kaf.mp3', 'huruf-23-lam.mp3', 'huruf-24-mim.mp3', 'huruf-25-nun.mp3', 'huruf-26-wau.mp3', 'huruf-27-ha.mp3', 'huruf-28-hamzah.mp3', 'huruf-29-ya.mp3'];
if(!document.getElementById('kh-font')){var lk=document.createElement('link');lk.id='kh-font';lk.rel='stylesheet';lk.href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Noto+Naskh+Arabic:wght@700&display=swap';document.head.appendChild(lk)}
var st=document.createElement('style');st.textContent=`
.kh-intro,.kh-game,.kh-ghost,.kh-intro *,.kh-game *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
.kh-intro,.kh-game{font-family:'Baloo 2',system-ui,sans-serif;color:#24413a;line-height:1.3;user-select:none;-webkit-user-select:none}
.kh-hide{display:none!important}
html.kh-lock,html.kh-lock body{overflow:hidden!important;height:100%!important}
.kh-ar{font-family:'Noto Naskh Arabic','Amiri','Traditional Arabic',serif;font-weight:700}
.kh-intro{max-width:520px;margin:16px auto;border-radius:26px;overflow:hidden;text-align:center;background:linear-gradient(#a9dcf7,#eaf8ff 70%);box-shadow:0 6px 0 #cfe3ea}
.kh-intro svg{display:block;width:100%;height:auto}
.kh-ibody{padding:4px 18px 22px}
.kh-ititle{margin:0;font-size:30px;font-weight:800;line-height:1.1}
.kh-iar{font-size:28px;color:#2f7a4f;margin:2px 0 4px}
.kh-idesc{margin:4px 0 14px;font-size:15px;opacity:.85}
.kh-lv{display:flex;gap:8px;justify-content:center;margin:0 0 14px;flex-wrap:wrap}
.kh-lvb{border:3px solid #dbe9ee;background:#fff;border-radius:999px;padding:6px 16px;font:inherit;font-weight:700;font-size:17px;color:#24413a;cursor:pointer;margin:0;line-height:1.2}
.kh-lvb.kh-on{border-color:#5aa46a;background:#effaf0}
.kh-start{display:block;width:100%;border:0;margin:0;background:#f0a33a;color:#fff;font-family:inherit;font-weight:800;font-size:34px;letter-spacing:1px;border-radius:24px;padding:20px 10px;box-shadow:0 7px 0 #c97f1c;cursor:pointer;line-height:1.1;animation:khbeat 1.6s ease-in-out infinite}
.kh-start:active{transform:translateY(4px);box-shadow:0 3px 0 #c97f1c;animation:none}
@keyframes khbeat{50%{transform:scale(1.03)}}
.kh-game{position:fixed;inset:0;z-index:2147483000;background:#eaf8ff;display:flex;flex-direction:column;overflow:hidden;touch-action:manipulation;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)}
.kh-head{display:flex;align-items:center;gap:8px;padding:10px 12px 6px;flex:none}
.kh-head h2{font-size:19px;margin:0;font-weight:800;line-height:1;color:#24413a;font-family:inherit}
.kh-st{margin-left:auto;font-weight:700;font-size:15px;background:#fff;border-radius:999px;padding:4px 12px;box-shadow:0 2px 0 #cfe3ea}
.kh-ib{border:0;margin:0;padding:0;background:#fff;border-radius:50%;width:40px;height:40px;font-size:18px;box-shadow:0 2px 0 #cfe3ea;cursor:pointer;color:#24413a;line-height:40px;text-align:center;flex:none}
.kh-dots{display:flex;flex-wrap:wrap;gap:3px;justify-content:center;padding:0 12px 6px;direction:rtl;flex:none}
.kh-dots i{width:8px;height:8px;border-radius:50%;background:#d6e7ee;display:block}
.kh-dots i.kh-d{background:#5aa46a}
.kh-dots i.kh-n{background:#fff;outline:2px solid #f0a33a}
.kh-scene{position:relative;flex:0 0 47%;overflow:hidden;background:linear-gradient(#a9dcf7,#eaf8ff 75%);border-radius:22px;margin:0 8px}
.kh-sun{position:absolute;top:16px;right:24px;width:50px;height:50px;border-radius:50%;background:#ffd25e;box-shadow:0 0 0 10px #ffe9a866,0 0 0 22px #fff3c544}
.kh-cloud{position:absolute;width:90px;height:28px;background:#fff;border-radius:30px;animation:khdrift linear infinite}
.kh-cloud::before,.kh-cloud::after{content:'';position:absolute;background:#fff;border-radius:50%}
.kh-cloud::before{width:40px;height:40px;left:14px;top:-20px}
.kh-cloud::after{width:30px;height:30px;left:46px;top:-12px}
@keyframes khdrift{from{transform:translateX(-140px)}to{transform:translateX(110vw)}}
.kh-land{position:absolute;left:0;right:0;bottom:16px;width:100%;height:62%}
.kh-rails{position:absolute;left:0;right:0;bottom:0;height:20px;background:linear-gradient(#7a5a3c,#7a5a3c) 0 4px/100% 4px no-repeat,repeating-linear-gradient(90deg,#a07a52 0 10px,transparent 10px 26px) 0 7px/100% 9px no-repeat,#c9b48a}
.kh-tpos{position:absolute;left:0;right:0;bottom:15px;display:flex;justify-content:center;pointer-events:none}
.kh-train{display:flex;direction:rtl;align-items:flex-end;gap:9px;pointer-events:auto;will-change:transform}
.kh-loco{position:relative;width:var(--lw,110px);flex:none}
.kh-loco svg{display:block;width:100%;height:auto;overflow:visible}
.kh-lw{transform-box:fill-box;transform-origin:center}
.kh-puff{position:absolute;left:79%;top:2%;width:22px;height:22px;margin:-11px;border-radius:50%;background:#fff;opacity:0;pointer-events:none;animation:khpuff 2s ease-out forwards}
@keyframes khpuff{0%{transform:scale(.3);opacity:.9}100%{transform:translate(-50px,-80px) scale(2.2);opacity:0}}
.kh-car{position:relative;width:var(--cw,64px);flex:none;cursor:pointer}
.kh-car::before{content:'';position:absolute;right:-11px;bottom:calc(var(--cw,64px)*.22);width:13px;height:5px;background:#4b4b4b;border-radius:2px}
.kh-body{height:calc(var(--cw,64px)*1.2);border-radius:10px 10px 6px 6px;background:var(--c);display:flex;flex-direction:column;align-items:center;padding-top:calc(var(--cw,64px)*.1);box-shadow:inset 0 -6px 0 #0002}
.kh-plate{width:82%;aspect-ratio:1/1;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;transition:transform .2s}
.kh-ltr{font-family:'Noto Naskh Arabic','Amiri',serif;font-weight:700;font-size:calc(var(--cw,64px)*.56);line-height:1;transform:translateY(-6%);color:#1f3a33}
.kh-lat{font-size:calc(var(--cw,64px)*.19);font-weight:700;color:#fff;margin-top:2px;text-shadow:0 1px 0 #0003;line-height:1.1;white-space:nowrap}
.kh-empty .kh-plate{background:#fffbea;border:3px dashed #e3a33a;animation:khglow 1.4s ease-in-out infinite}
.kh-empty .kh-ltr{color:#e3a33a;font-family:'Baloo 2',sans-serif;font-size:calc(var(--cw,64px)*.42);opacity:.75}
.kh-empty .kh-lat{opacity:0}
.kh-over .kh-plate{transform:scale(1.12);background:#fff1c6}
@keyframes khglow{50%{box-shadow:0 0 0 5px #ffd25e88}}
.kh-pop .kh-plate{animation:khpop .45s}
@keyframes khpop{40%{transform:scale(1.25)}}
.kh-wheels{display:flex;justify-content:space-around;margin-top:calc(var(--cw,64px)*-.12)}
.kh-wh{display:block;width:calc(var(--cw,64px)*.3);aspect-ratio:1/1;border-radius:50%;background:#3a3a3a;border:3px solid #222;position:relative}
.kh-wh::before,.kh-wh::after{content:'';position:absolute;left:10%;right:10%;top:50%;height:3px;margin-top:-1.5px;background:#bdbdbd}
.kh-wh::after{transform:rotate(90deg)}
.kh-moving .kh-wh,.kh-moving .kh-lw{animation:khspin .45s linear infinite}
@keyframes khspin{to{transform:rotate(360deg)}}
.kh-tray{flex:1;display:flex;flex-direction:column;justify-content:center;padding:10px 10px 14px;text-align:center;min-height:0}
.kh-hint{font-size:14px;font-weight:600;opacity:.75;margin-bottom:8px}
.kh-tiles{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;direction:rtl;min-height:78px}
.kh-tile{width:78px;height:78px;border-radius:18px;background:#fff;border:0;margin:0;padding:0;box-shadow:0 5px 0 #c7dbe2;display:flex;align-items:center;justify-content:center;font-family:'Noto Naskh Arabic','Amiri',serif;font-weight:700;font-size:46px;color:#1f3a33;cursor:grab;touch-action:none;transition:transform .15s,opacity .2s;line-height:1}
.kh-tile span{transform:translateY(-6%)}
.kh-tile:active{transform:translateY(3px);box-shadow:0 2px 0 #c7dbe2}
.kh-lifted{opacity:.25}
.kh-gone{visibility:hidden}
.kh-shake{animation:khshake .4s}
.kh-nudge{animation:khnudge 1s ease-in-out infinite;box-shadow:0 5px 0 #c7dbe2,0 0 0 4px #ffd25e}
@keyframes khshake{20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}
@keyframes khnudge{50%{transform:translateY(-8px)}}
.kh-ghost{position:fixed!important;z-index:2147483100;pointer-events:none;transform:scale(1.1);box-shadow:0 10px 20px #0003}
.kh-busy .kh-tiles{pointer-events:none;opacity:.6}
.kh-banner{position:absolute;left:50%;top:20%;transform:translate(-50%,-20px) scale(.8);background:#fff;padding:8px 22px;border-radius:999px;font-weight:800;font-size:24px;color:#2f7a4f;box-shadow:0 4px 0 #cfe3ea;opacity:0;transition:.35s;pointer-events:none;white-space:nowrap}
.kh-banner.kh-show{opacity:1;transform:translate(-50%,0) scale(1)}
.kh-conf{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:30}
.kh-ov{position:absolute;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;background:#eaf8ffee;padding:20px}
.kh-card{background:#fff;border-radius:26px;padding:22px 20px;max-width:380px;width:100%;text-align:center;box-shadow:0 8px 0 #cfe3ea}
.kh-card h3{margin:0;font-size:26px;font-weight:800;line-height:1.15;color:#24413a;font-family:inherit}
.kh-card p{margin:6px 0 12px;font-size:15px;opacity:.85}
.kh-big{font-size:34px;margin:4px 0;letter-spacing:2px}
.kh-go{display:block;width:100%;border:0;margin:0 0 10px;background:#f0a33a;color:#fff;font-family:inherit;font-weight:800;font-size:24px;border-radius:18px;padding:12px;box-shadow:0 5px 0 #c97f1c;cursor:pointer}
.kh-go2{display:block;width:100%;border:0;margin:0;background:#eef5f7;color:#24413a;font-family:inherit;font-weight:700;font-size:17px;border-radius:16px;padding:9px;cursor:pointer}
`;document.head.appendChild(st);
var host=document.getElementById('kereta-hijaiyah');
if(!host){host=document.createElement('div');host.id='kereta-hijaiyah';me&&me.parentNode?me.parentNode.insertBefore(host,me):document.body.appendChild(host)}
host.innerHTML=`
<div class="kh-intro" id="kh-intro">
<svg viewBox="0 0 520 190" aria-hidden="true">
<circle cx="455" cy="48" r="26" fill="#ffd25e"/>
<g fill="#fff"><ellipse cx="110" cy="50" rx="42" ry="14"/><circle cx="96" cy="40" r="17"/><circle cx="122" cy="44" r="12"/><ellipse cx="320" cy="34" rx="34" ry="11"/><circle cx="310" cy="26" r="13"/></g>
<path d="M0 120 Q120 70 260 110 T520 100 V190 H0Z" fill="#b9e0a5"/>
<path d="M0 150 Q160 115 330 145 T520 140 V190 H0Z" fill="#94cc7f"/>
<rect x="0" y="172" width="520" height="18" fill="#c9b48a"/><rect x="0" y="174" width="520" height="4" fill="#7a5a3c"/>
<g transform="translate(108 92)">
<rect x="0" y="0" width="62" height="70" rx="9" fill="#d9604f"/><rect x="7" y="7" width="48" height="44" rx="8" fill="#fff"/>
<text x="31" y="44" font-size="34" text-anchor="middle" font-family="Noto Naskh Arabic,serif" font-weight="700" fill="#1f3a33">ت</text>
<circle cx="16" cy="74" r="8" fill="#333"/><circle cx="46" cy="74" r="8" fill="#333"/><rect x="62" y="56" width="10" height="5" fill="#4b4b4b"/>
<rect x="72" y="0" width="62" height="70" rx="9" fill="#4f9a8b"/><rect x="79" y="7" width="48" height="44" rx="8" fill="#fff"/>
<text x="103" y="44" font-size="34" text-anchor="middle" font-family="Noto Naskh Arabic,serif" font-weight="700" fill="#1f3a33">ب</text>
<circle cx="88" cy="74" r="8" fill="#333"/><circle cx="118" cy="74" r="8" fill="#333"/><rect x="134" y="56" width="10" height="5" fill="#4b4b4b"/>
<rect x="144" y="0" width="62" height="70" rx="9" fill="#f0a33a"/><rect x="151" y="7" width="48" height="44" rx="8" fill="#fff"/>
<text x="175" y="44" font-size="34" text-anchor="middle" font-family="Noto Naskh Arabic,serif" font-weight="700" fill="#1f3a33">ا</text>
<circle cx="160" cy="74" r="8" fill="#333"/><circle cx="190" cy="74" r="8" fill="#333"/>
<g transform="translate(212 -10)">
<rect x="4" y="2" width="48" height="9" rx="3" fill="#1f4d42"/><rect x="8" y="10" width="40" height="54" rx="4" fill="#2f7a63"/><rect x="15" y="18" width="26" height="17" rx="3" fill="#dff3ff"/>
<rect x="46" y="34" width="64" height="30" rx="13" fill="#2f7a63"/><ellipse cx="72" cy="34" rx="8" ry="6" fill="#e0b93f"/>
<rect x="89" y="16" width="12" height="20" fill="#1f4d42"/><rect x="86" y="11" width="18" height="7" rx="2" fill="#1f4d42"/>
<circle cx="111" cy="46" r="4.5" fill="#ffe27a"/><rect x="5" y="62" width="110" height="8" rx="2" fill="#1f2b28"/><polygon points="110,62 120,78 104,78" fill="#d9604f"/>
<circle cx="30" cy="78" r="12" fill="#333"/><circle cx="70" cy="80" r="9" fill="#333"/><circle cx="93" cy="80" r="9" fill="#333"/>
<circle cx="96" cy="0" r="9" fill="#fff" opacity=".9"/><circle cx="84" cy="-14" r="12" fill="#fff" opacity=".7"/>
</g>
</g>
</svg>
<div class="kh-ibody">
<h2 class="kh-ititle">Kereta Hijaiyah</h2>
<div class="kh-iar kh-ar">قِطَارُ الْحُرُوفِ</div>
<p class="kh-idesc">Isi gerbong yang kosong supaya kereta bisa berangkat mengantar huruf alif sampai ya.</p>
<div class="kh-lv" data-kh-lv></div>
<button class="kh-start" id="kh-start" type="button">▶ MULAI</button>
</div>
</div>
<div class="kh-game kh-hide" id="kh-game">
<div class="kh-head">
<button class="kh-ib" id="kh-exit" type="button" aria-label="Keluar">✕</button>
<h2>Kereta Hijaiyah</h2>
<div class="kh-st" id="kh-st">Stasiun 1</div>
<button class="kh-ib" id="kh-snd" type="button" aria-label="Suara">🔊</button>
</div>
<div class="kh-dots" id="kh-dots"></div>
<div class="kh-scene" id="kh-scene">
<div class="kh-sun"></div>
<div class="kh-cloud" style="top:30px;animation-duration:70s;animation-delay:-20s"></div>
<div class="kh-cloud" style="top:64px;animation-duration:95s;animation-delay:-60s"></div>
<div class="kh-cloud" style="top:14px;animation-duration:85s;animation-delay:-5s"></div>
<svg class="kh-land" viewBox="0 0 800 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
<path d="M0 170 Q120 90 260 150 T520 140 T800 130 V300 H0Z" fill="#b9e0a5"/>
<path d="M0 220 Q160 160 330 210 T640 200 T800 190 V300 H0Z" fill="#94cc7f"/>
<g fill="#6b4a2f"><rect x="96" y="170" width="10" height="44"/><rect x="676" y="160" width="10" height="44"/><rect x="420" y="178" width="8" height="34"/></g>
<g fill="#4f9a5b"><circle cx="101" cy="160" r="30"/><circle cx="681" cy="150" r="32"/><circle cx="424" cy="172" r="22"/></g>
<g fill="#66b36f"><circle cx="86" cy="150" r="16"/><circle cx="696" cy="140" r="16"/></g>
<path d="M0 262 Q200 236 400 256 T800 250 V300 H0Z" fill="#7fbf6c"/>
<g fill="#fff"><circle cx="40" cy="268" r="4"/><circle cx="210" cy="262" r="4"/><circle cx="560" cy="266" r="4"/><circle cx="740" cy="262" r="4"/><circle cx="330" cy="272" r="4"/></g>
<g fill="#ffcf4a"><circle cx="40" cy="268" r="1.8"/><circle cx="210" cy="262" r="1.8"/><circle cx="560" cy="266" r="1.8"/><circle cx="740" cy="262" r="1.8"/><circle cx="330" cy="272" r="1.8"/></g>
<g fill="#f28fa0"><circle cx="150" cy="276" r="4"/><circle cx="470" cy="278" r="4"/><circle cx="640" cy="280" r="4"/></g>
</svg>
<div class="kh-rails"></div>
<div class="kh-tpos"><div class="kh-train" id="kh-train"></div></div>
<div class="kh-banner" id="kh-banner"></div>
</div>
<div class="kh-tray">
<div class="kh-hint" id="kh-hint">Seret atau ketuk huruf yang hilang</div>
<div class="kh-tiles" id="kh-tiles"></div>
</div>
<div class="kh-ov kh-hide" id="kh-end">
<div class="kh-card">
<div class="kh-ar" style="font-size:28px;color:#2f7a4f">مَا شَاءَ اللّٰه</div>
<h3>Semua huruf sudah sampai!</h3>
<p>Kamu sudah mengantar semua huruf hijaiyah dari alif sampai ya.</p>
<div class="kh-big" id="kh-stars"></div>
<p id="kh-startxt"></p>
<div class="kh-lv" data-kh-lv></div>
<button class="kh-go" id="kh-again" type="button">Main lagi</button>
<button class="kh-go2" id="kh-quit" type="button">Keluar</button>
</div>
</div>
<canvas class="kh-conf" id="kh-conf"></canvas>
</div>
`;
var L=[['ا','Alif'],['ب','Ba'],['ت','Ta'],['ث','Tsa'],['ج','Jim'],['ح','Ḥa'],['خ','Kho'],['د','Dal'],['ذ','Dzal'],['ر','Ro'],['ز','Za'],['س','Sin'],['ش','Syin'],['ص','Shod'],['ض','Dhod'],['ط','Tho'],['ظ','Zho'],['ع','\'Ain'],['غ','Ghoin'],['ف','Fa'],['ق','Qof'],['ك','Kaf'],['ل','Lam'],['م','Mim'],['ن','Nun'],['و','Wau'],['ه','Ha'],['ء','Hamzah'],['ي','Ya']];
var SIM=[['ب','ت','ث','ن','ي'],['ج','ح','خ'],['د','ذ'],['ر','ز','و'],['س','ش'],['ص','ض'],['ط','ظ'],['ع','غ','ء'],['ف','ق'],['ه','م'],['ك','ل','ا']];
var COLORS=['#f0a33a','#4f9a8b','#d9604f','#7bb35a','#5f86c6','#c6879a','#e0b93f'];
var PRAISE=[['أَحْسَنْتَ','Ahsanta!'],['مَا شَاءَ اللّٰه','Masya Allah!'],['بَارَكَ اللّٰهُ فِيكَ','Barakallahu fiik!']];
var CONF_COL=['#f0a33a','#5aa46a','#d9604f','#5f86c6','#ffd25e','#c6879a','#4f9a8b'];
function $(id){return document.getElementById(id)}
var game=$('kh-game'),intro=$('kh-intro'),train=$('kh-train'),tilesEl=$('kh-tiles'),scene=$('kh-scene');
var level=1,chunks=[],round=0,stars=0,wrongs=0,cur=[],empty=[],busy=true,sound=true,puffTimer=null,timers=[],home=null;

/* ---------- levels ---------- */
function renderLevels(){
  var names=['Mudah','Sedang','Sulit'];
  document.querySelectorAll('[data-kh-lv]').forEach(function(box){
    box.innerHTML=names.map(function(n,i){return '<button type="button" class="kh-lvb'+(level===i+1?' kh-on':'')+'" data-l="'+(i+1)+'">'+n+'</button>'}).join('');
  });
}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.kh-lvb');if(b){level=+b.getAttribute('data-l');renderLevels()}});
renderLevels();

/* ---------- audio: letter clips + noise-only effects (no music, no tones) ---------- */
var ctx=null,master,nbuf,clipBuf={};
function initAudio(){
  if(ctx){if(ctx.state!=='running')ctx.resume();return}
  try{ctx=new (window.AudioContext||window.webkitAudioContext)()}catch(e){return}
  master=ctx.createGain();master.gain.value=sound?1:0;master.connect(ctx.destination);
  nbuf=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate);
  var d=nbuf.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  // unlock on iOS
  var s=ctx.createBufferSource();s.buffer=ctx.createBuffer(1,1,22050);s.connect(ctx.destination);s.start(0);
  FILES.forEach(function(f,i){
    fetch(BASE+f).then(function(r){return r.arrayBuffer()}).then(function(ab){ctx.decodeAudioData(ab,function(buf){clipBuf[i]=buf},function(){})}).catch(function(){});
  });
  startWind();
}
function playLetter(i){
  if(!ctx||!clipBuf[i])return;
  var s=ctx.createBufferSource();s.buffer=clipBuf[i];var g=ctx.createGain();g.gain.value=1.1;s.connect(g).connect(master);s.start();
}
function burst(o){
  if(!ctx)return;var t=ctx.currentTime+(o.at||0),dur=o.dur||.2;
  var s=ctx.createBufferSource();s.buffer=nbuf;s.loop=true;
  var fl=ctx.createBiquadFilter();fl.type=o.type||'bandpass';fl.Q.value=o.Q||1;fl.frequency.setValueAtTime(o.f||1000,t);
  if(o.f2)fl.frequency.exponentialRampToValueAtTime(o.f2,t+dur);
  var g=ctx.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(o.vol||.3,t+(o.atk||.005));g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  s.connect(fl).connect(g).connect(master);s.start(t,Math.random()*1.5);s.stop(t+dur+.05);
}
var sfx={
  wind:function(){burst({type:'bandpass',f:300,f2:1800,Q:.8,vol:.4,atk:.18,dur:.6})},
  thud:function(){burst({type:'lowpass',f:150,Q:.7,vol:.9,dur:.22});burst({at:.1,type:'lowpass',f:130,vol:.5,dur:.18})},
  tuk:function(){burst({type:'lowpass',f:900,vol:.4,dur:.08})},
  clack:function(at,v){burst({at:at,type:'bandpass',f:1900,Q:1.3,vol:.22*v,dur:.05});burst({at:at+.07,type:'bandpass',f:1700,Q:1.3,vol:.16*v,dur:.05});burst({at:at,type:'lowpass',f:280,vol:.3*v,dur:.07})},
  steam:function(){burst({type:'highpass',f:2600,vol:.22,atk:.06,dur:1.2});burst({type:'bandpass',f:1300,Q:2.2,vol:.2,atk:.1,dur:1})},
  sigh:function(){burst({type:'highpass',f:3000,vol:.12,atk:.03,dur:.6})},
  confetti:function(){for(var i=0;i<6;i++)burst({at:i*.05,type:'highpass',f:4000,vol:.08,dur:.06})}
};
function rolling(total,accel){var t=0;while(t<total){var k=t/total;sfx.clack(t,accel?.6+.4*k:1-.5*k);t+=accel?(.55-.42*k):(.13+.42*k)}}
var windOn=false;
function startWind(){
  if(!ctx||windOn)return;windOn=true;
  var s=ctx.createBufferSource();s.buffer=nbuf;s.loop=true;
  var f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=420;
  var wg=ctx.createGain();wg.gain.value=.035;
  var lfo=ctx.createOscillator();lfo.frequency.value=.12;var lg=ctx.createGain();lg.gain.value=.025;lfo.connect(lg).connect(wg.gain);lfo.start();
  s.connect(f).connect(wg).connect(master);s.start();
}
/* praise via device Arabic voice (optional) */
var arVoice=null;
function loadVoices(){try{arVoice=speechSynthesis.getVoices().filter(function(v){return /^ar/i.test(v.lang)})[0]||null}catch(e){}}
if('speechSynthesis' in window){loadVoices();speechSynthesis.onvoiceschanged=loadVoices}
function speak(txt){
  if(!sound||!arVoice)return;
  try{speechSynthesis.cancel();var u=new SpeechSynthesisUtterance(txt);u.lang=arVoice.lang;u.voice=arVoice;u.rate=.8;speechSynthesis.speak(u)}catch(e){}
}

/* ---------- confetti ---------- */
var cv=$('kh-conf'),cx=cv.getContext('2d'),parts=[],raf=null,dpr=1;
function sizeConf(){dpr=Math.min(2,window.devicePixelRatio||1);cv.width=game.clientWidth*dpr;cv.height=game.clientHeight*dpr}
function confetti(x,y,count,spread,power){
  for(var i=0;i<count;i++){
    var a=-Math.PI/2+(Math.random()-.5)*spread,v=power*(.5+Math.random()*.7);
    parts.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:Math.random()*6,vr:(Math.random()-.5)*.3,w:6+Math.random()*6,h:8+Math.random()*8,c:CONF_COL[i%CONF_COL.length],t:0,round:Math.random()<.3});
  }
  if(!raf)raf=requestAnimationFrame(tick);
}
function rainConfetti(n){for(var i=0;i<n;i++){parts.push({x:Math.random()*game.clientWidth,y:-20-Math.random()*game.clientHeight*.6,vx:(Math.random()-.5)*2,vy:2+Math.random()*3,r:Math.random()*6,vr:(Math.random()-.5)*.3,w:6+Math.random()*6,h:8+Math.random()*8,c:CONF_COL[i%CONF_COL.length],t:0,round:Math.random()<.3})}if(!raf)raf=requestAnimationFrame(tick)}
function tick(){
  cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,cv.width,cv.height);
  var H=game.clientHeight;
  parts=parts.filter(function(p){return p.y<H+30&&p.t<600});
  parts.forEach(function(p){
    p.t++;p.vy+=.18;p.vx*=.985;p.vy*=.985;if(p.vy>4.5)p.vy=4.5;p.x+=p.vx+Math.sin(p.t/12)*.6;p.y+=p.vy;p.r+=p.vr;
    cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;
    if(p.round){cx.beginPath();cx.arc(0,0,p.w/2,0,7);cx.fill()}else{cx.scale(1,Math.cos(p.t/8));cx.fillRect(-p.w/2,-p.h/2,p.w,p.h)}
    cx.restore();
  });
  raf=parts.length?requestAnimationFrame(tick):null;
  if(!raf)cx.clearRect(0,0,cv.width,cv.height);
}

/* ---------- layout ---------- */
function maxChunk(){return Math.max.apply(null,chunks.map(function(c){return c.length}))}
function sizeUp(){
  if(!chunks.length)return;
  var W=scene.clientWidth,H=scene.clientHeight,avail=Math.min(W,960)-20,n=maxChunk();
  var lw=Math.min(124,avail*.27,H*.5);
  var cw=Math.max(38,Math.min(90,(avail-lw)/n-9,H*.42));
  game.style.setProperty('--lw',lw+'px');game.style.setProperty('--cw',cw+'px');
  sizeConf();
}
window.addEventListener('resize',function(){if(!game.classList.contains('kh-hide'))sizeUp()});
function makeChunks(n){
  var st=Math.ceil(L.length/n),base=Math.floor(L.length/st),extra=L.length%st,out=[],p=0;
  for(var i=0;i<st;i++){var sz=base+(i<extra?1:0);var c=[];for(var k=0;k<sz;k++)c.push(p+k);out.push(c);p+=sz}
  return out;
}

var LOCO='<div class="kh-loco"><svg viewBox="0 0 120 92"><rect x="4" y="6" width="48" height="9" rx="3" fill="#1f4d42"/><rect x="8" y="14" width="40" height="50" rx="4" fill="#2f7a63"/><rect x="15" y="21" width="26" height="17" rx="3" fill="#dff3ff"/><rect x="46" y="34" width="64" height="30" rx="13" fill="#2f7a63"/><rect x="60" y="34" width="4" height="30" fill="#e0b93f"/><rect x="82" y="34" width="4" height="30" fill="#e0b93f"/><ellipse cx="72" cy="34" rx="8" ry="6" fill="#e0b93f"/><rect x="89" y="16" width="12" height="20" fill="#1f4d42"/><rect x="86" y="11" width="18" height="7" rx="2" fill="#1f4d42"/><circle cx="111" cy="46" r="4.5" fill="#ffe27a" stroke="#c99a1e" stroke-width="1.5"/><rect x="5" y="62" width="110" height="8" rx="2" fill="#1f2b28"/><polygon points="110,62 120,78 104,78" fill="#d9604f"/><g class="kh-lw"><circle cx="30" cy="76" r="13" fill="#3a3a3a" stroke="#222" stroke-width="3"/><path d="M19 76H41M30 65V87M22 68L38 84M38 68L22 84" stroke="#bdbdbd" stroke-width="2.4"/></g><g class="kh-lw"><circle cx="70" cy="80" r="9" fill="#3a3a3a" stroke="#222" stroke-width="3"/><path d="M62 80H78M70 72V88" stroke="#bdbdbd" stroke-width="2.4"/></g><g class="kh-lw"><circle cx="93" cy="80" r="9" fill="#3a3a3a" stroke="#222" stroke-width="3"/><path d="M85 80H101M93 72V88" stroke="#bdbdbd" stroke-width="2.4"/></g></svg></div>';

function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.random()*(i+1)|0;var t=a[i];a[i]=a[j];a[j]=t}return a}
function uniq(a){return a.filter(function(x,i){return a.indexOf(x)===i})}

function buildRound(){
  cur=chunks[round];var size=cur.length;
  var miss=level===1?1:level===2?2:(size<=4?2:3);if(miss>=size)miss=size-1;
  var pos=shuffle(cur.map(function(_,i){return i})).slice(0,miss);
  empty=pos.slice();wrongs=0;
  train.innerHTML=LOCO+cur.map(function(g,i){
    var isE=empty.indexOf(i)>-1;
    return '<div class="kh-car'+(isE?' kh-empty':'')+'" data-i="'+i+'" style="--c:'+COLORS[g%COLORS.length]+'"><div class="kh-body"><div class="kh-plate"><span class="kh-ltr">'+(isE?'?':L[g][0])+'</span></div><div class="kh-lat">'+L[g][1]+'</div></div><div class="kh-wheels"><i class="kh-wh"></i><i class="kh-wh"></i></div></div>';
  }).join('');
  train.querySelectorAll('.kh-car').forEach(function(c){c.addEventListener('click',function(){var i=+c.getAttribute('data-i');if(empty.indexOf(i)<0&&!busy){playLetter(cur[i]);bounce(c)}})});
  var answers=empty.map(function(i){return L[cur[i]][0]});
  var want=level===3?3:2,pool=[];
  answers.forEach(function(a){SIM.forEach(function(g){if(g.indexOf(a)>-1)pool=pool.concat(g)})});
  var all=L.map(function(l){return l[0]});
  pool=shuffle(uniq(pool).filter(function(x){return answers.indexOf(x)<0&&all.indexOf(x)>-1}));
  var others=shuffle(all.filter(function(x){return answers.indexOf(x)<0&&pool.indexOf(x)<0}));
  var opts=shuffle(answers.concat(pool.concat(others).slice(0,want)));
  tilesEl.innerHTML=opts.map(function(o){return '<button type="button" class="kh-tile" data-l="'+o+'"><span>'+o+'</span></button>'}).join('');
  tilesEl.querySelectorAll('.kh-tile').forEach(bindTile);
  $('kh-st').textContent='Stasiun '+(round+1)+'/'+chunks.length;
  $('kh-hint').textContent=miss>1?'Seret atau ketuk huruf-huruf yang hilang':'Seret atau ketuk huruf yang hilang';
  renderDots();
}
function renderDots(){
  var done=0;for(var r=0;r<round;r++)done+=chunks[r].length;var now=done+(chunks[round]?chunks[round].length:0);
  $('kh-dots').innerHTML=L.map(function(_,i){return '<i class="'+(i<done?'kh-d':i<now?'kh-n':'')+'"></i>'}).join('');
}
function bounce(c){c.classList.remove('kh-pop');void c.offsetWidth;c.classList.add('kh-pop')}

/* ---------- input ---------- */
function carAt(x,y){var el=document.elementFromPoint(x,y);return el&&el.closest?el.closest('.kh-car'):null}
function bindTile(t){
  var sx,sy,ghost=null,over=null,pid=null,ox=0,oy=0;
  t.addEventListener('pointerdown',function(e){
    if(busy||t.classList.contains('kh-gone'))return;
    e.preventDefault();initAudio();pid=e.pointerId;sx=e.clientX;sy=e.clientY;ghost=null;
    try{t.setPointerCapture(pid)}catch(_){}
  });
  t.addEventListener('pointermove',function(e){
    if(pid!==e.pointerId)return;
    if(!ghost&&Math.hypot(e.clientX-sx,e.clientY-sy)>8){
      var r=t.getBoundingClientRect();ghost=t.cloneNode(true);ghost.classList.add('kh-ghost');
      ghost.style.left=r.left+'px';ghost.style.top=r.top+'px';ox=e.clientX-r.left;oy=e.clientY-r.top;
      game.appendChild(ghost);t.classList.add('kh-lifted');
    }
    if(ghost){
      ghost.style.left=(e.clientX-ox)+'px';ghost.style.top=(e.clientY-oy)+'px';
      var c=carAt(e.clientX,e.clientY);if(over&&over!==c)over.classList.remove('kh-over');
      over=c&&c.classList.contains('kh-empty')?c:null;if(over)over.classList.add('kh-over');
    }
  });
  function end(e){
    if(pid!==e.pointerId)return;pid=null;
    if(over)over.classList.remove('kh-over');
    if(ghost){
      var c=carAt(e.clientX,e.clientY);ghost.remove();ghost=null;t.classList.remove('kh-lifted');over=null;
      if(c&&c.classList.contains('kh-empty')){var i=+c.getAttribute('data-i');if(L[cur[i]][0]===t.getAttribute('data-l'))place(t,i,false);else wrong(t)}
      return;
    }
    if(e.type==='pointercancel')return;
    var hit=empty.filter(function(i){return L[cur[i]][0]===t.getAttribute('data-l')})[0];
    if(hit!==undefined)place(t,hit,true);else wrong(t);
  }
  t.addEventListener('pointerup',end);t.addEventListener('pointercancel',end);
}
function place(t,i,fly){
  var car=train.querySelector('.kh-car[data-i="'+i+'"]');
  empty.splice(empty.indexOf(i),1);t.classList.add('kh-gone');t.classList.remove('kh-nudge');
  function finish(){
    car.classList.remove('kh-empty');car.querySelector('.kh-ltr').textContent=L[cur[i]][0];bounce(car);
    sfx.tuk();sfx.wind();playLetter(cur[i]);
    if(!empty.length)roundDone();
  }
  if(!fly)return finish();
  var a=t.getBoundingClientRect(),b=car.querySelector('.kh-plate').getBoundingClientRect();
  var g=t.cloneNode(true);g.classList.remove('kh-gone');g.classList.add('kh-ghost');
  g.style.left=a.left+'px';g.style.top=a.top+'px';g.style.transition='transform .38s cubic-bezier(.3,.8,.4,1)';
  game.appendChild(g);
  requestAnimationFrame(function(){requestAnimationFrame(function(){g.style.transform='translate('+(b.left+b.width/2-a.left-a.width/2)+'px,'+(b.top+b.height/2-a.top-a.height/2)+'px) scale('+(b.width/a.width)+')'})});
  later(function(){g.remove();finish()},400);
}
function wrong(t){
  wrongs++;sfx.thud();t.classList.remove('kh-shake');void t.offsetWidth;t.classList.add('kh-shake');
  if(wrongs>=2&&empty.length){
    var first=Math.min.apply(null,empty);var right=tilesEl.querySelector('.kh-tile[data-l="'+L[cur[first]][0]+'"]:not(.kh-gone)');
    if(right)right.classList.add('kh-nudge');
  }
}

/* ---------- train motion ---------- */
function later(fn,ms){timers.push(setTimeout(fn,ms))}
function clearTimers(){timers.forEach(clearTimeout);timers=[];clearInterval(puffTimer)}
function smoke(rate){
  clearInterval(puffTimer);
  puffTimer=setInterval(function(){var lo=train.querySelector('.kh-loco');if(!lo)return;var p=document.createElement('i');p.className='kh-puff';lo.appendChild(p);setTimeout(function(){p.remove()},2100)},rate);
}
function setBusy(b){busy=b;game.classList.toggle('kh-busy',b)}
function arrive(){
  setBusy(true);buildRound();sizeUp();
  var dist=scene.clientWidth+train.offsetWidth;
  train.style.transition='none';train.style.transform='translateX('+(-dist)+'px)';void train.offsetWidth;
  train.classList.add('kh-moving');smoke(260);
  train.style.transition='transform 2.6s cubic-bezier(.15,.7,.3,1)';train.style.transform='translateX(0)';
  rolling(2.4,false);
  later(function(){train.classList.remove('kh-moving');smoke(1100);sfx.sigh();setBusy(false)},2650);
}
function roundDone(){
  setBusy(true);if(wrongs===0)stars++;
  var p=PRAISE[Math.random()*PRAISE.length|0];
  later(function(){
    showBanner(p[1]);speak(p[0]);
    var r=train.getBoundingClientRect(),g=game.getBoundingClientRect();
    confetti(r.left-g.left+r.width/2,r.top-g.top,70,1.6,13);sfx.confetti();
  },450);
  later(function(){sfx.steam();smoke(200)},1700);
  later(function(){
    var dist=scene.clientWidth+train.offsetWidth;
    train.classList.add('kh-moving');
    train.style.transition='transform 2.8s cubic-bezier(.55,0,.85,.4)';train.style.transform='translateX('+dist+'px)';
    rolling(2.7,true);
  },2400);
  later(function(){hideBanner();round++;if(round>=chunks.length)finish();else arrive()},5300);
}
function showBanner(t){var b=$('kh-banner');b.textContent=t;b.classList.add('kh-show')}
function hideBanner(){$('kh-banner').classList.remove('kh-show')}
function finish(){
  train.classList.remove('kh-moving');clearInterval(puffTimer);renderDots();
  var total=chunks.length,s='';for(var i=0;i<total;i++)s+=i<stars?'⭐':'☆';
  $('kh-stars').textContent=s;
  $('kh-startxt').textContent=stars===total?'Sempurna, tanpa salah sama sekali!':stars+' dari '+total+' stasiun tanpa salah.';
  renderLevels();$('kh-end').classList.remove('kh-hide');
  speak('مَا شَاءَ اللّٰه');sfx.wind();sfx.confetti();
  var W=game.clientWidth,H=game.clientHeight;
  rainConfetti(160);later(function(){confetti(W*.2,H*.7,70,1.2,15);confetti(W*.8,H*.7,70,1.2,15)},300);
}

/* ---------- fullscreen start / exit ---------- */
function goFull(){
  if(!home){home=document.createComment('kh');game.parentNode.insertBefore(home,game)}
  document.body.appendChild(game);
  game.classList.remove('kh-hide');document.documentElement.classList.add('kh-lock');
  var rq=game.requestFullscreen||game.webkitRequestFullscreen;
  if(rq){try{var pr=rq.call(game);if(pr&&pr.catch)pr.catch(function(){})}catch(e){}}
  try{screen.orientation&&screen.orientation.lock&&screen.orientation.lock('portrait').catch(function(){})}catch(e){}
}
function startGame(){
  clearTimers();parts=[];
  $('kh-end').classList.add('kh-hide');
  chunks=makeChunks(scene.clientWidth<560?4:7);round=0;stars=0;
  sizeUp();arrive();
}
$('kh-start').addEventListener('click',function(){
  initAudio();goFull();speak('بِسْمِ اللّٰه');
  setTimeout(startGame,350); // wait for fullscreen layout
});
$('kh-again').addEventListener('click',function(){initAudio();startGame()});
function quit(){
  clearTimers();setBusy(true);hideBanner();parts=[];
  if(document.fullscreenElement||document.webkitFullscreenElement){try{(document.exitFullscreen||document.webkitExitFullscreen).call(document)}catch(e){}}
  game.classList.add('kh-hide');document.documentElement.classList.remove('kh-lock');
  if(home)home.parentNode.insertBefore(game,home);
  renderLevels();
}
$('kh-exit').addEventListener('click',quit);$('kh-quit').addEventListener('click',quit);
$('kh-snd').addEventListener('click',function(){
  sound=!sound;this.textContent=sound?'🔊':'🔇';initAudio();
  if(master)master.gain.value=sound?1:0;if(!sound&&'speechSynthesis' in window)speechSynthesis.cancel();
});
})();
