/* Langit Waktu Shalat - hurufa.com | t.me/hurufacom
   Pasang di Blogger (Tampilan HTML):
   <div id="lw">Memuat game...</div>
   <script src="https://cdn.jsdelivr.net/gh/hrfsetengahhari/hrf-games@main/langit-waktu-shalat.js"></script>
*/
(function(){
  if(!document.getElementById('lw-font')){var l=document.createElement('link');l.id='lw-font';l.rel='stylesheet';
    l.href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@600;700;800&display=swap';document.head.appendChild(l);}
  if(!document.getElementById('lw-css')){var st=document.createElement('style');st.id='lw-css';st.textContent="/* Satu dunia visual: langit pagi lembut, kartu putih membulat, tiap waktu shalat punya warna langitnya. */\n#lw{\n  --ink:#1F2B4D; --soft:#5C6890; --line:#DCE6F2; --card:#FFFFFF; --bgt:#DDF0FB; --bgb:#FFF6E3;\n  --sun:#FFC93C; --sund:#F2A200; --ok:#22A671; --okbg:#E3F7EE; --no:#E4573D; --nobg:#FDEBE6;\n  --subuh:#5B7FD6; --zuhur:#1E9BE0; --asar:#EE9A2B; --magrib:#E0563F; --isya:#3D3688; --netral:#6B7A99;\n  --jam:#F08A1C; --menit:#1E7FD0;\n  --fd:\"Baloo 2\",\"Nunito\",\"Trebuchet MS\",system-ui,sans-serif; --fb:\"Nunito\",\"Trebuchet MS\",system-ui,sans-serif;\n  position:relative; overflow:hidden; color:var(--ink); font-family:var(--fb); font-weight:600; font-size:17px; line-height:1.45;\n  text-align:left; letter-spacing:normal; background:linear-gradient(180deg,var(--bgt),var(--bgb)) var(--bgt);\n  -webkit-tap-highlight-color:transparent; user-select:none; -webkit-user-select:none; border-radius:18px;\n}\n#lw, #lw *{box-sizing:border-box}\n#lw [hidden]{display:none!important}\n#lw h1,#lw h2,#lw h3{font-family:var(--fd);margin:0;padding:0;line-height:1.1;text-wrap:balance;color:inherit;border:0;background:none;text-transform:none;letter-spacing:normal}\n#lw p{margin:0;padding:0}\n#lw svg{max-width:100%;overflow:hidden}\n#lw button{font:inherit;color:inherit;background:none;border:0;margin:0;padding:0;cursor:pointer;text-transform:none;letter-spacing:normal;line-height:inherit;text-align:inherit;border-radius:0;min-width:0;box-shadow:none}\n#lw button:focus-visible,#lw input:focus-visible{outline:3px solid var(--ink);outline-offset:3px}\n#lw table{border-collapse:separate;border-spacing:0 6px;width:100%;font-size:15px;margin:0;border:0}\n#lw th,#lw td{border:0;padding:9px 8px;vertical-align:top;text-align:left;background:none}\n#lw.lw-fs{position:fixed;inset:0;z-index:9990;overflow:auto;border-radius:0}\n#lw:fullscreen{overflow:auto;border-radius:0}\n#lw:-webkit-full-screen{overflow:auto;border-radius:0}\n\n#lw .lw-bgsky{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}\n#lw .lw-c{position:absolute;left:0;width:150px;height:46px;border-radius:99px;background:#fff;opacity:.6;box-shadow:38px -20px 0 6px #fff,84px -8px 0 -2px #fff;animation:lw-float 48s linear infinite}\n#lw .lw-c:nth-child(1){top:6%;animation-delay:-8s}\n#lw .lw-c:nth-child(2){top:40%;animation-duration:64s;animation-delay:-30s;opacity:.45}\n#lw .lw-c:nth-child(3){top:72%;animation-duration:56s;animation-delay:-44s;opacity:.5}\n@keyframes lw-float{from{transform:translateX(-240px)}to{transform:translateX(900px)}}\n#lw .lw-wrap{position:relative;z-index:1;max-width:540px;margin:0 auto;padding:14px 16px 28px;display:flex;flex-direction:column;gap:14px}\n#lw .lw-col{display:flex;flex-direction:column;gap:12px}\n#lw .lw-enter>*{animation:lw-rise .4s both}\n#lw .lw-enter>*:nth-child(2){animation-delay:.06s}\n#lw .lw-enter>*:nth-child(3){animation-delay:.12s}\n#lw .lw-enter>*:nth-child(4){animation-delay:.18s}\n@keyframes lw-rise{from{opacity:0;transform:translateY(16px)}}\n\n#lw .lw-top{display:flex;align-items:center;gap:8px}\n#lw .lw-top h1{font-size:21px;font-weight:800;flex:1}\n#lw .lw-chip{display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;flex:none;border-radius:999px;background:var(--card);box-shadow:0 3px 0 var(--line)}\n#lw .lw-chip svg{width:22px;height:22px}\n\n#lw .lw-card{background:var(--card);border-radius:22px;padding:16px;box-shadow:0 6px 0 rgba(31,43,77,.08)}\n#lw .lw-scene{display:block;width:100%;height:auto}\n#lw .lw-frame{border-radius:18px;overflow:hidden;border:4px solid #fff;box-shadow:0 0 0 2px var(--line)}\n#lw .lw-short{aspect-ratio:320/140}\n#lw .lw-short .lw-scene{height:100%}\n#lw .lw-drift{animation:lw-drift 7s ease-in-out infinite alternate}\n@keyframes lw-drift{from{transform:translateX(-7px)}to{transform:translateX(9px)}}\n#lw .lw-twk{animation:lw-twk 2.6s ease-in-out infinite}\n@keyframes lw-twk{50%{opacity:.12}}\n#lw .lw-spin{animation:lw-spin 26s linear infinite}\n@keyframes lw-spin{to{transform:rotate(360deg)}}\n#lw .lw-fly{animation:lw-fly 16s linear infinite}\n@keyframes lw-fly{from{transform:translateX(-130px)}to{transform:translateX(330px)}}\n#lw .lw-pulse{animation:lw-pulse 3.5s ease-in-out infinite}\n@keyframes lw-pulse{50%{opacity:.55}}\n#lw .lw-sway{animation:lw-sway 4s ease-in-out infinite alternate}\n@keyframes lw-sway{from{transform:rotate(-2deg)}to{transform:rotate(2deg)}}\n#lw .lw-wave{animation:lw-wave 5s linear infinite}\n@keyframes lw-wave{from{transform:translateX(0)}to{transform:translateX(-40px)}}\n#lw .lw-bob2{animation:lw-bob2 3s ease-in-out infinite}\n@keyframes lw-bob2{50%{transform:translateY(3px) rotate(2deg)}}\n\n#lw .lw-h2{font-size:24px;font-weight:800}\n#lw .lw-sub{color:var(--soft);font-weight:700;font-size:15px}\n#lw .lw-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:5px;border-radius:999px;background:#EEF3FA}\n#lw .lw-tab{min-height:42px;border-radius:999px;font-family:var(--fd);font-weight:800;font-size:16px;color:var(--soft);text-align:center;transition:background .2s,color .2s}\n#lw .lw-tab.lw-act{background:var(--card);color:var(--ink);box-shadow:0 3px 0 var(--line)}\n#lw .lw-simhead{display:flex;align-items:center;gap:10px}\n#lw .lw-clockmini{display:flex;flex-direction:column;align-items:center;gap:4px;flex:none}\n#lw .lw-clockmini .lw-ana{width:52px;height:52px}\n#lw .lw-simlab{flex:1;min-height:64px;border-radius:16px;padding:8px 12px;background:var(--c);color:#fff;display:flex;flex-direction:column;justify-content:center;transition:background .3s}\n#lw .lw-simlab b{font-family:var(--fd);font-size:20px;font-weight:800;line-height:1.1}\n#lw .lw-simlab span{font-size:13.5px;font-weight:700;line-height:1.25}\n#lw .lw-slide{position:relative}\n#lw input[type=range]{-webkit-appearance:none;appearance:none;display:block;width:100%;height:46px;background:transparent;margin:0;padding:0;border:0;touch-action:pan-y}\n#lw input[type=range]::-webkit-slider-runnable-track{height:16px;border-radius:99px;background:linear-gradient(90deg,#111948,#5B7FD6 12%,#56B5F1 30%,#56B5F1 50%,#F2B04A 60%,#E0563F 65%,#27286B 72%,#060A26)}\n#lw input[type=range]::-moz-range-track{height:16px;border-radius:99px;background:linear-gradient(90deg,#111948,#5B7FD6 12%,#56B5F1 30%,#56B5F1 50%,#F2B04A 60%,#E0563F 65%,#27286B 72%,#060A26)}\n#lw input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:40px;height:40px;margin-top:-12px;border-radius:50%;background:var(--sun);border:4px solid #fff;box-shadow:0 3px 0 var(--sund),0 0 0 2px var(--sund)}\n#lw input[type=range]::-moz-range-thumb{width:34px;height:34px;border-radius:50%;background:var(--sun);border:4px solid #fff;box-shadow:0 3px 0 var(--sund),0 0 0 2px var(--sund)}\n#lw .lw-plain::-webkit-slider-runnable-track{background:linear-gradient(90deg,#060A26,#5B7FD6 25%,#56B5F1 40%,#56B5F1 65%,#E0563F 77%,#060A26 85%)}\n#lw .lw-plain::-moz-range-track{background:linear-gradient(90deg,#060A26,#5B7FD6 25%,#56B5F1 40%,#56B5F1 65%,#E0563F 77%,#060A26 85%)}\n#lw .lw-ends{display:flex;justify-content:space-between;font-size:13px;font-weight:800;color:var(--soft);margin-top:-4px}\n#lw .lw-hand{position:absolute;width:40px;height:48px;pointer-events:none;top:20px;animation:lw-handx 1.8s ease-in-out infinite}\n@keyframes lw-handx{0%,100%{transform:translateX(-10px)}50%{transform:translateX(40px)}}\n#lw .lw-ans .lw-hand{position:absolute;right:-6px;bottom:-14px;top:auto;width:34px;height:40px;animation:lw-handtap 1s ease-in-out infinite}\n@keyframes lw-handtap{50%{transform:translate(-4px,-6px) scale(.92)}}\n\n#lw .lw-rank{display:flex;align-items:center;gap:12px}\n#lw .lw-bigstar{width:46px;height:46px;flex:none;animation:lw-bob 3s ease-in-out infinite}\n@keyframes lw-bob{50%{transform:translateY(6px)}}\n#lw .lw-rank b{font-family:var(--fd);font-size:20px;font-weight:800;display:block;line-height:1.1}\n#lw .lw-rank small{color:var(--soft);font-weight:700;font-size:14px}\n#lw .lw-bar{height:12px;border-radius:99px;background:#EEF3FA;overflow:hidden;margin-top:6px}\n#lw .lw-bar i{display:block;height:100%;border-radius:99px;background:var(--sun)}\n#lw .lw-sec{font-size:20px;font-weight:800;padding:6px 4px 0}\n#lw .lw-secsub{font-size:14.5px;color:var(--soft);font-weight:700;padding:0 4px;margin-top:-8px}\n#lw .lw-quad{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#lw .lw-tile{min-height:70px;border-radius:18px;background:var(--card);padding:10px 12px;box-shadow:0 5px 0 var(--c);border:2px solid var(--c);font-family:var(--fd);font-weight:800;font-size:17px;line-height:1.15;display:flex;align-items:center;gap:10px;transition:transform .08s,box-shadow .08s}\n#lw .lw-tile:active{transform:translateY(3px);box-shadow:0 2px 0 var(--c)}\n#lw .lw-tile svg{width:30px;height:30px;flex:none;stroke:var(--c);fill:none;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}\n#lw .lw-menu{display:flex;flex-direction:column;gap:12px}\n#lw .lw-mode{display:flex;align-items:center;gap:14px;width:100%;padding:12px 14px;border-radius:22px;background:var(--card);box-shadow:0 6px 0 rgba(31,43,77,.12);transition:transform .08s,box-shadow .08s}\n#lw .lw-mode:active{transform:translateY(4px);box-shadow:0 2px 0 rgba(31,43,77,.12)}\n#lw .lw-badge{flex:none;width:50px;height:50px;border-radius:17px;display:grid;place-items:center;font-family:var(--fd);font-weight:800;font-size:25px;color:#fff;background:var(--c)}\n#lw .lw-txt{flex:1;display:flex;flex-direction:column;gap:1px;min-width:0}\n#lw .lw-mode h3{font-size:20px;font-weight:800}\n#lw .lw-mode small{color:var(--soft);font-size:14px;font-weight:700}\n#lw .lw-age{font-size:12.5px;font-weight:800;color:var(--c);letter-spacing:.02em;text-transform:uppercase}\n#lw .lw-stars{display:inline-flex;gap:2px;flex:none}\n#lw .lw-stars svg{width:19px;height:19px}\n#lw .lw-on{fill:var(--sun);stroke:var(--sund)}\n#lw .lw-off{fill:#EEF2F8;stroke:#D2DAE8}\n#lw .lw-note{font-size:14px;color:var(--soft);text-align:center;padding:0 6px}\n\n#lw .lw-btn{display:inline-flex;justify-content:center;align-items:center;gap:8px;min-height:56px;padding:0 22px;border-radius:999px;font-family:var(--fd);font-weight:800;font-size:20px;text-align:center;background:var(--sun);color:var(--ink);box-shadow:0 5px 0 var(--sund);transition:transform .08s,box-shadow .08s}\n#lw .lw-btn:active{transform:translateY(3px);box-shadow:0 2px 0 var(--sund)}\n#lw .lw-ghost{background:var(--card);box-shadow:0 5px 0 var(--line)}\n#lw .lw-ghost:active{box-shadow:0 2px 0 var(--line)}\n#lw .lw-wide{width:100%}\n#lw .lw-row{display:flex;gap:10px;flex-wrap:wrap}\n#lw .lw-row>.lw-btn{flex:1}\n\n#lw .lw-progress{display:flex;gap:5px}\n#lw .lw-progress i{flex:1;height:10px;border-radius:99px;background:#fff;box-shadow:inset 0 0 0 2px var(--line);transition:background .3s}\n#lw .lw-progress i.lw-done{background:var(--ok);box-shadow:none}\n#lw .lw-progress i.lw-now{background:var(--sun);box-shadow:none}\n#lw .lw-askrow{display:flex;align-items:flex-start;gap:8px}\n#lw .lw-ask{flex:1;font-family:var(--fd);font-weight:800;font-size:22px;line-height:1.2;text-align:center;text-wrap:balance}\n#lw .lw-say{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:#EEF3FA}\n#lw .lw-say svg{width:22px;height:22px}\n#lw .lw-hint{text-align:center;color:var(--soft);font-weight:700}\n#lw .lw-answers{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}\n#lw .lw-ans{position:relative;grid-column:span 2;min-height:60px;border-radius:18px;background:var(--card);padding:6px 4px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-family:var(--fd);font-weight:800;font-size:19px;text-align:center;line-height:1.1;box-shadow:0 5px 0 var(--c);border:2px solid var(--c);transition:transform .08s,box-shadow .08s}\n#lw .lw-five .lw-ans:nth-child(4){grid-column:2/span 2}\n#lw .lw-ans:active{transform:translateY(3px);box-shadow:0 2px 0 var(--c)}\n#lw .lw-dot{width:26px;height:8px;border-radius:99px;background:var(--c)}\n#lw .lw-pic .lw-ans{min-height:104px;padding:8px}\n#lw .lw-pic .lw-ana{width:86px;height:86px}\n#lw .lw-ans.lw-wrong{opacity:.45;border-color:var(--line);box-shadow:0 5px 0 var(--line);pointer-events:none}\n#lw .lw-ans.lw-wrong .lw-dot{background:var(--line)}\n#lw .lw-ans.lw-good{background:var(--okbg);border-color:var(--ok);box-shadow:0 5px 0 var(--ok);animation:lw-pop .3s}\n#lw .lw-ans.lw-bad{background:var(--nobg);border-color:var(--no);box-shadow:0 5px 0 var(--no);animation:lw-shake .35s}\n#lw .lw-ans.lw-wig{animation:lw-wig .9s ease-in-out infinite;border-color:var(--sund);box-shadow:0 5px 0 var(--sund)}\n#lw .lw-ans.lw-guide{border-color:var(--sund);box-shadow:0 5px 0 var(--sund),0 0 0 5px rgba(255,201,60,.45)}\n@keyframes lw-wig{0%,100%{transform:rotate(0)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}\n#lw .lw-shake{animation:lw-shake .35s}\n@keyframes lw-shake{20%{transform:translateX(-7px)}40%{transform:translateX(7px)}60%{transform:translateX(-5px)}80%{transform:translateX(4px)}}\n#lw .lw-fb{border-radius:18px;padding:13px 16px;display:flex;flex-direction:column;gap:4px;text-align:center}\n#lw .lw-ok{background:var(--okbg);color:#0E6B46}\n#lw .lw-no{background:var(--nobg);color:#9C2E1A}\n#lw .lw-fb b{font-family:var(--fd);font-size:22px;font-weight:800}\n#lw .lw-pop{animation:lw-pop .35s}\n@keyframes lw-pop{from{transform:scale(.88)}60%{transform:scale(1.04)}to{transform:scale(1)}}\n#lw .lw-sp{position:fixed;width:14px;height:14px;pointer-events:none;z-index:9999;background:var(--sun);clip-path:polygon(50% 0,62% 36%,100% 38%,70% 60%,80% 100%,50% 76%,20% 100%,30% 60%,0 38%,38% 36%);animation:lw-sp .8s ease-out forwards}\n@keyframes lw-sp{to{transform:translate(var(--dx),var(--dy)) scale(.3) rotate(200deg);opacity:0}}\n\n#lw .lw-mystery{aspect-ratio:320/200;display:grid;place-items:center;position:relative;overflow:hidden;background:linear-gradient(180deg,#C9DAEA,#E7EEF6)}\n#lw .lw-short .lw-mystery{aspect-ratio:auto;height:100%}\n#lw .lw-mystery b{font-family:var(--fd);font-size:60px;font-weight:800;color:#fff;text-shadow:0 4px 0 #A9BED6;position:relative;animation:lw-bob 2.4s ease-in-out infinite}\n#lw .lw-mystery::before,#lw .lw-mystery::after{content:\"\";position:absolute;background:#fff;border-radius:99px;opacity:.85;animation:lw-drift 6s ease-in-out infinite alternate}\n#lw .lw-mystery::before{width:58%;height:34%;left:-8%;top:16%;box-shadow:60px 26px 0 8px #fff}\n#lw .lw-mystery::after{width:52%;height:30%;right:-10%;bottom:10%;box-shadow:-70px -18px 0 4px #fff;animation-direction:alternate-reverse}\n\n#lw .lw-list{display:flex;flex-direction:column;gap:9px}\n#lw .lw-item{display:flex;align-items:center;gap:12px;width:100%;padding:7px 12px 7px 8px;border-radius:18px;background:var(--card);border:3px solid transparent;box-shadow:0 4px 0 rgba(31,43,77,.1);transition:transform .15s,background .2s}\n#lw .lw-num{flex:none;width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#EEF3FA;font-family:var(--fd);font-weight:800;font-size:20px}\n#lw .lw-thumb{flex:none;width:44%;max-width:170px;border-radius:12px;overflow:hidden}\n#lw .lw-lab{flex:1;font-family:var(--fd);font-weight:800;font-size:19px;color:var(--soft)}\n#lw .lw-item.lw-sel{border-color:var(--sund);background:#FFF8DD;transform:scale(1.02)}\n#lw .lw-item.lw-good{border-color:var(--ok);background:var(--okbg)}\n#lw .lw-item.lw-good .lw-num{background:var(--ok);color:#fff}\n#lw .lw-item.lw-good .lw-lab{color:#0E6B46}\n\n#lw .lw-memo{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}\n#lw .lw-mc{width:calc((100% - 30px)/4);aspect-ratio:3/4;perspective:700px}\n#lw .lw-in{position:relative;display:block;width:100%;height:100%;transition:transform .45s;transform-style:preserve-3d}\n#lw .lw-mc.lw-open .lw-in{transform:rotateY(180deg)}\n#lw .lw-face{position:absolute;inset:0;border-radius:14px;overflow:hidden;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:grid;place-items:center}\n#lw .lw-back{background:var(--zuhur);box-shadow:inset 0 0 0 4px #fff,0 4px 0 rgba(31,43,77,.14);font-family:var(--fd);font-weight:800;font-size:34px;color:#fff}\n#lw .lw-front{transform:rotateY(180deg);background:#fff;border:3px solid var(--c);box-shadow:0 4px 0 var(--c)}\n#lw .lw-front svg{width:100%;height:100%}\n#lw .lw-nm{font-family:var(--fd);font-weight:800;font-size:17px;color:var(--c);text-align:center;line-height:1.1}\n#lw .lw-nm small{display:block;font-family:var(--fb);font-size:12px;color:var(--soft)}\n#lw .lw-mc.lw-done .lw-in{animation:lw-pop .4s}\n#lw .lw-mc.lw-done .lw-front{border-color:var(--ok);box-shadow:0 4px 0 var(--ok)}\n#lw .lw-statline{display:flex;justify-content:center;gap:8px;flex-wrap:wrap}\n#lw .lw-pill{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:0 13px;border-radius:99px;background:#EEF3FA;font-weight:800;font-size:15px;font-variant-numeric:tabular-nums}\n#lw button.lw-pill{background:var(--card);box-shadow:0 3px 0 var(--line)}\n#lw .lw-hot{background:#FFF1C9}\n#lw .lw-lives{display:inline-flex;gap:5px}\n#lw .lw-lives i{width:14px;height:14px;border-radius:50%;background:var(--magrib)}\n#lw .lw-lives i.lw-offd{background:#D9E0EC}\n#lw .lw-kbar{height:16px;border-radius:99px;background:#fff;box-shadow:inset 0 0 0 2px var(--line);overflow:hidden}\n#lw .lw-kbar i{display:block;height:100%;border-radius:99px;background:var(--ok);transition:width .1s linear}\n#lw .lw-kbar i.lw-low{background:var(--no)}\n#lw .lw-score{font-family:var(--fd);font-weight:800;font-size:34px;line-height:1;text-align:center}\n#lw .lw-score small{display:block;font-family:var(--fb);font-size:13px;color:var(--soft)}\n\n#lw .lw-learn h2{font-size:34px;font-weight:800;color:var(--c)}\n#lw .lw-tag{display:inline-flex;align-items:center;min-height:32px;padding:0 12px;border-radius:99px;background:var(--c);color:#fff;font-weight:800;font-size:14.5px}\n#lw .lw-facts{margin:0;display:flex;flex-direction:column;gap:6px}\n#lw .lw-facts div{display:flex;gap:10px;padding:8px 12px;border-radius:14px;background:#F3F7FC}\n#lw .lw-facts dt{flex:none;width:96px;font-weight:800;color:var(--c)}\n#lw .lw-facts dd{margin:0;flex:1}\n#lw .lw-dots{display:flex;justify-content:center;gap:8px}\n#lw .lw-dots i{width:11px;height:11px;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 2px var(--line)}\n#lw .lw-dots i.lw-on2{background:var(--ink);box-shadow:none}\n#lw .lw-scroll{overflow-x:auto}\n#lw th{font-size:12.5px;text-transform:uppercase;letter-spacing:.03em;color:var(--soft);padding:0 8px}\n#lw td{background:#F3F7FC}\n#lw td:first-child{border-radius:12px 0 0 12px;font-family:var(--fd);font-weight:800;font-size:17px;color:var(--c)}\n#lw td:last-child{border-radius:0 12px 12px 0}\n#lw td.lw-n{font-variant-numeric:tabular-nums;font-weight:800;text-align:center}\n#lw .lw-quote{border-left:5px solid var(--sun);padding:4px 0 4px 12px}\n#lw .lw-quote small{display:block;color:var(--soft);font-weight:800;margin-top:2px}\n#lw .lw-sum{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#lw .lw-sum div{border-radius:16px;padding:12px;background:#FFF6D8;text-align:center}\n#lw .lw-sum b{display:block;font-family:var(--fd);font-size:34px;line-height:1}\n\n#lw .lw-digi{display:inline-flex;align-items:baseline;justify-content:center;padding:4px 10px;border-radius:12px;background:#1F2B4D;font-family:var(--fd);font-weight:800;font-size:19px;line-height:1.1;font-variant-numeric:tabular-nums;letter-spacing:.02em}\n#lw .lw-dh{color:#FFB55C}\n#lw .lw-dm{color:#7CC4FF}\n#lw .lw-dc{color:#fff;animation:lw-blink 1s steps(1) infinite}\n@keyframes lw-blink{50%{opacity:.25}}\n#lw .lw-dq{color:#fff}\n#lw .lw-dbig{font-size:46px;padding:10px 16px;border-radius:18px}\n#lw .lw-dmid{font-size:30px;padding:8px 14px;border-radius:14px}\n#lw .lw-ana{display:block}\n#lw .lw-anum{font-family:var(--fd);font-weight:800;font-size:21px;fill:var(--ink)}\n#lw .lw-amin{font-family:var(--fd);font-weight:800;font-size:14px;fill:var(--menit)}\n#lw .lw-hh,#lw .lw-mh{transition:transform .55s cubic-bezier(.3,1.3,.5,1)}\n#lw .lw-nodrag .lw-hh,#lw .lw-nodrag .lw-mh{transition:none}\n#lw .lw-clockpair{display:grid;grid-template-columns:1.15fr 1fr;gap:12px;align-items:center}\n#lw .lw-anabox{touch-action:none;cursor:grab}\n#lw .lw-digibox{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}\n#lw .lw-digibox small{font-weight:800;color:var(--soft);font-size:13px;text-transform:uppercase;letter-spacing:.04em}\n#lw .lw-perchip{display:inline-flex;align-items:center;gap:6px;min-height:34px;padding:0 12px;border-radius:99px;background:#FFF1C9;font-weight:800;font-size:15px}\n#lw .lw-perchip svg{width:20px;height:20px}\n#lw .lw-legend{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}\n#lw .lw-legend span{display:inline-flex;align-items:center;gap:6px;min-height:32px;padding:0 12px;border-radius:99px;font-weight:800;font-size:14px;color:#fff}\n#lw .lw-sayline{font-family:var(--fd);font-weight:800;font-size:21px;line-height:1.2;text-align:center;text-wrap:balance}\n#lw .lw-steps{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#lw .lw-steps .lw-btn{font-size:17px;min-height:52px;padding:0 10px}\n#lw .lw-ex{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#lw .lw-ex div{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px;border-radius:16px;background:#F3F7FC;text-align:center;font-weight:800}\n#lw .lw-ex .lw-ana{width:84px;height:84px}\n#lw .lw-qclock{display:flex;justify-content:center;padding:6px 0}\n#lw .lw-qclock .lw-ana{width:min(220px,62vw);height:auto}\n\n#lw .lw-earth{display:block;width:100%;height:auto;border-radius:18px;background:#0E1640}\n#lw .lw-elab{font-family:var(--fd);font-weight:800;font-size:12px;fill:#fff}\n#lw .lw-cities{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n#lw .lw-city{border-radius:18px;padding:8px;min-height:112px;display:flex;align-items:flex-end;position:relative;overflow:hidden;box-shadow:0 4px 0 rgba(31,43,77,.12);transition:background .4s}\n#lw .lw-city.lw-me{box-shadow:0 0 0 3px var(--sun),0 4px 0 rgba(31,43,77,.12)}\n#lw .lw-cico{position:absolute;top:8px;right:10px;width:28px;height:28px}\n#lw .lw-cico svg{width:100%;height:100%}\n#lw .lw-cchip{display:flex;flex-direction:column;gap:2px;width:100%;padding:7px 9px;border-radius:13px;background:rgba(255,255,255,.93)}\n#lw .lw-cchip b{font-family:var(--fd);font-weight:800;font-size:17px;line-height:1.05;display:flex;align-items:center;gap:6px}\n#lw .lw-cchip small{font-size:12.5px;color:var(--soft);font-weight:700;line-height:1.2}\n#lw .lw-cchip .lw-digi{align-self:flex-start;font-size:17px;padding:2px 8px;margin:2px 0}\n#lw .lw-cdot{width:11px;height:11px;border-radius:50%;flex:none}\n#lw .lw-pair{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center}\n#lw .lw-pair .lw-city{min-height:122px}\n#lw .lw-arrow{width:28px;height:28px;stroke:var(--soft);fill:none;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}\n\n#lw .lw-intro{text-align:center;align-items:center}\n#lw .lw-intro h2{font-size:34px;font-weight:800}\n#lw .lw-strip{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;width:100%;padding-bottom:8px}\n#lw .lw-strip figure{margin:0;display:flex;flex-direction:column;gap:5px;align-items:center;animation:lw-bob 4s ease-in-out infinite}\n#lw .lw-strip figure:nth-child(2){animation-delay:-.8s}\n#lw .lw-strip figure:nth-child(3){animation-delay:-1.6s}\n#lw .lw-strip figure:nth-child(4){animation-delay:-2.4s}\n#lw .lw-strip figure:nth-child(5){animation-delay:-3.2s}\n#lw .lw-mini{width:100%;aspect-ratio:3/4;border-radius:14px;overflow:hidden;box-shadow:0 3px 0 rgba(31,43,77,.12)}\n#lw .lw-mini svg{width:100%;height:100%}\n#lw .lw-strip figcaption{font-family:var(--fd);font-weight:700;font-size:14px}\n#lw .lw-flow{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;font-weight:800;font-size:15px}\n#lw .lw-flow span{padding:4px 12px;border-radius:99px;background:#EEF3FA}\n#lw .lw-ayat{width:100%;min-height:96px;padding:14px 16px;border-radius:18px;background:#fff;box-shadow:0 0 0 2px var(--line);font-size:18px;font-weight:700;text-align:left}\n#lw .lw-ayat small{display:block;margin-top:6px;color:var(--soft);font-weight:800;font-size:14px}\n#lw .lw-mulai{width:132px;height:132px;border-radius:50%;background:var(--sun);box-shadow:0 7px 0 var(--sund);font-family:var(--fd);font-weight:800;font-size:24px;line-height:1.05;text-align:center;animation:lw-beat 1.4s ease-in-out infinite;margin:6px 0}\n#lw .lw-mulai.lw-long{font-size:20px}\n@keyframes lw-beat{50%{transform:scale(1.07)}}\n#lw .lw-pausebox{text-align:center;align-items:center;padding:28px 16px}\n\n#lw .lw-result{text-align:center;display:flex;flex-direction:column;gap:14px;align-items:center;position:relative;overflow:hidden}\n#lw .lw-result h2{font-size:29px;font-weight:800}\n#lw .lw-big .lw-stars svg{width:64px;height:64px}\n#lw .lw-big .lw-stars svg.lw-on{animation:lw-pop .5s backwards}\n#lw .lw-big .lw-stars svg:nth-child(2){animation-delay:.18s;margin-top:-14px}\n#lw .lw-big .lw-stars svg:nth-child(3){animation-delay:.36s}\n#lw .lw-spark{position:absolute;top:-20px;width:14px;height:14px;fill:var(--sun);animation:lw-fall 2.6s linear forwards;opacity:.9}\n@keyframes lw-fall{to{transform:translateY(460px) rotate(300deg);opacity:0}}\n#lw .lw-review{width:100%;padding:10px 14px;border-radius:16px;background:#FFF6D8;font-weight:700;text-align:left}\n#lw .lw-brand{font-weight:800;color:var(--soft);font-size:14px}\n@media (prefers-reduced-motion:reduce){#lw *{animation:none!important;transition:none!important}}\n@media (max-width:360px){#lw .lw-ans{font-size:17px}#lw .lw-ask{font-size:20px}#lw .lw-facts dt{width:80px}#lw .lw-dbig{font-size:38px}}";document.head.appendChild(st);}
})();
(function(){
"use strict";
var root=document.getElementById('lw');if(!root)return;

/* ======================= DATA GAME =======================
   Ubah isi game di blok ini saja.
   P      : lima waktu shalat (nama, rakaat, tanda langit, awal-akhir waktu).
   CLUES  : petunjuk untuk game Petunjuk Rahasia. Format: ['kunci shalat','kalimat petunjuk'].
   MODES  : daftar permainan di beranda (g:'shalat' atau 'jam' menentukan kelompoknya).
   KOTA   : nama kota, keterangan, selisih jam dari UTC (contoh: WIB = 7).
   PETA   : kota yang tampil di Jelajah Waktu Dunia.
   ========================================================= */
const P=[
 {k:'subuh',n:'Subuh',r:2,cap:'Fajar menyingsing',desc:'Cahaya putih melebar di ufuk timur. Matahari belum terbit.',
  mulai:'Saat fajar menyingsing',akhir:'Saat matahari terbit',raw:'2 rakaat sebelum',baca:'Dikeraskan'},
 {k:'zuhur',n:'Zuhur',r:4,cap:'Matahari tinggi',desc:'Matahari baru saja bergeser dari tengah langit. Bayangan tongkat sangat pendek.',
  mulai:'Saat matahari bergeser dari tengah langit',akhir:'Saat masuk waktu Asar',raw:'4 rakaat sebelum, 2 sesudah',baca:'Pelan'},
 {k:'asar',n:'Asar',r:4,cap:'Sore hari',desc:'Matahari condong ke barat. Bayangan tongkat sudah sepanjang tongkatnya, lalu makin panjang.',
  mulai:'Saat bayangan benda sepanjang bendanya',akhir:'Sebelum matahari menguning. Kalau terpaksa, sampai matahari terbenam',raw:'Tidak ada',baca:'Pelan'},
 {k:'magrib',n:'Magrib',r:3,cap:'Senja',desc:'Matahari baru saja terbenam. Langit barat berwarna merah jingga.',
  mulai:'Saat matahari terbenam',akhir:'Saat cahaya merah di langit hilang',raw:'2 rakaat sesudah',baca:'Dikeraskan di 2 rakaat pertama'},
 {k:'isya',n:'Isya',r:4,cap:'Malam berbintang',desc:'Cahaya merah di langit sudah hilang. Langit gelap dan bintang terlihat.',
  mulai:'Saat cahaya merah di langit hilang',akhir:'Tengah malam',raw:'2 rakaat sesudah',baca:'Dikeraskan di 2 rakaat pertama'}
];
const CLUES=[
 ['subuh','Shalat ini 2 rakaat. Dikerjakan sebelum matahari terbit.'],
 ['subuh','Waktu shalat ini habis ketika matahari terbit.'],
 ['subuh','Waktunya mulai saat fajar menyingsing di ufuk timur.'],
 ['subuh','Ada 2 rakaat sunnah rawatib sebelum shalat ini. Sesudahnya tidak ada.'],
 ['subuh','Imam mengeraskan bacaan di kedua rakaatnya.'],
 ['zuhur','Matahari baru saja bergeser dari tengah langit ke arah barat.'],
 ['zuhur','Shalat 4 rakaat di tengah hari. Bayangan benda sangat pendek.'],
 ['zuhur','Shalat ini dikerjakan setelah Subuh dan sebelum Asar.'],
 ['zuhur','Sunnah rawatibnya 4 rakaat sebelum dan 2 rakaat sesudah.'],
 ['zuhur','Waktu shalat ini habis ketika waktu Asar masuk.'],
 ['asar','Bayangan tongkat sudah sepanjang tongkatnya.'],
 ['asar','Shalat ini dikerjakan setelah Zuhur dan sebelum Magrib.'],
 ['asar','Shalat 4 rakaat di sore hari, sebelum matahari terbenam.'],
 ['asar','Shalat wajib ini tidak punya sunnah rawatib.'],
 ['magrib','Shalat ini 3 rakaat.'],
 ['magrib','Waktunya mulai saat matahari baru saja terbenam.'],
 ['magrib','Shalat ini dikerjakan di antara Asar dan Isya.'],
 ['magrib','Waktu shalat ini habis ketika cahaya merah di langit hilang.'],
 ['isya','Waktunya mulai saat cahaya merah di langit barat sudah hilang.'],
 ['isya','Shalat 4 rakaat di malam hari.'],
 ['isya','Shalat wajib yang dikerjakan setelah Magrib.'],
 ['isya','Waktu utama shalat ini sampai tengah malam.']
];
const MODES={
 tebak:{g:'shalat',n:'Tebak Langit',age:'Usia 6-7 \u00b7 mudah',d:'Lihat langitnya, pilih shalatnya',c:'var(--zuhur)'},
 kartu:{g:'shalat',n:'Kartu Pasangan',age:'Usia 6-8 \u00b7 mudah',d:'Balik kartu, cari langit dan namanya',c:'var(--subuh)'},
 urut:{g:'shalat',n:'Urutkan Langit',age:'Usia 7-8 \u00b7 sedang',d:'Susun dari Subuh sampai Isya',c:'var(--asar)'},
 rakaat:{g:'shalat',n:'Hitung Rakaat',age:'Usia 7-9 \u00b7 sedang',d:'Berapa rakaat? Ada soal jumlahnya juga',c:'var(--ok)'},
 geser:{g:'shalat',n:'Geser Matahari',age:'Usia 8-10 \u00b7 menantang',d:'Gerakkan matahari ke waktu yang diminta',c:'var(--magrib)'},
 petunjuk:{g:'shalat',n:'Petunjuk Rahasia',age:'Usia 9-10 \u00b7 menantang',d:'Baca petunjuk, tebak shalatnya',c:'var(--isya)'},
 kilat:{g:'shalat',n:'Tantangan Kilat',age:'Usia 10+ \u00b7 paling sulit',d:'60 detik, 3 kesempatan, soal campuran',c:'var(--ink)'},
 jam:{g:'jam',n:'Kuis Jam',age:'Usia 6-10 \u00b7 makin lama makin sulit',d:'Cocokkan jam analog dan jam digital',c:'var(--jam)'},
 dunia:{g:'jam',n:'Kuis Waktu Dunia',age:'Usia 9-12 \u00b7 menantang',d:'Di Jakarta pukul 06.00, di Makassar pukul berapa?',c:'var(--menit)'}
};
const KOTA={
 jakarta:['Jakarta','WIB',7], medan:['Medan','WIB',7], bandung:['Bandung','WIB',7], surabaya:['Surabaya','WIB',7], pontianak:['Pontianak','WIB',7], palembang:['Palembang','WIB',7],
 makassar:['Makassar','WITA',8], denpasar:['Denpasar','WITA',8], balikpapan:['Balikpapan','WITA',8], mataram:['Mataram','WITA',8], kupang:['Kupang','WITA',8],
 jayapura:['Jayapura','WIT',9], ambon:['Ambon','WIT',9], sorong:['Sorong','WIT',9],
 makkah:['Makkah','Arab Saudi',3], madinah:['Madinah','Arab Saudi',3], kairo:['Kairo','Mesir',2], london:['London','Inggris',0], newyork:['New York','Amerika Serikat',-5]
};
const PETA=[['jakarta','JKT','#FFC93C'],['makassar','MKS','#3DD68C'],['jayapura','JYP','#FF7A5C'],['makkah','MKH','#5CC2FF'],['kairo','KRO','#FFA94D'],['london','LDN','#B49CFF'],['newyork','NY','#FF8CC6']];
const AYAT=['Sungguh, shalat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman.','QS. An-Nisa: 103'];
/* ===================== AKHIR DATA GAME ===================== */

const BY={};P.forEach(p=>BY[p.k]=p);
const col=k=>`var(--${k})`;
const PO=P.map(p=>[p.k,p.n,col(p.k)]);
const NC=['subuh','asar','magrib'];
const N=a=>a.map((n,i)=>[String(n),String(n),col(NC[i%3])]);
const pad=n=>String(n).padStart(2,'0');
const fmt=(h,m)=>pad(h)+'.'+pad(m);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const rnd=n=>Math.floor(Math.random()*n);
const rand=a=>a[rnd(a.length)];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]]}return a}
const $=id=>document.getElementById(id);

/* ---------- ikon (tanpa makhluk bernyawa) ---------- */
const IC={
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/></svg>',
 snd:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
 mute:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l5 6M22 9l-5 6"/></svg>',
 fs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
 x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 say:'<svg viewBox="0 0 24 24" fill="none" stroke="#1F2B4D" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>',
 sun:'<svg viewBox="0 0 24 24"><g stroke="#FFC93C" stroke-width="2.2" stroke-linecap="round"><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></g><circle cx="12" cy="12" r="5.2" fill="#FFD84A" stroke="#F2A200" stroke-width="1.4"/></svg>',
 moon:'<svg viewBox="0 0 24 24"><path d="M15.5 3.2a9 9 0 1 0 5.3 12.4A7.2 7.2 0 0 1 15.5 3.2z" fill="#FDF3C4" stroke="#E8C96A" stroke-width="1.2"/><circle cx="20" cy="5" r="1" fill="#fff"/></svg>',
 arrow:'<svg class="lw-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
 langit:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>',
 jam:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 dunia:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
 tabel:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 10h16M4 15h16M10 4v16"/></svg>'
};
const HAND='<svg class="lw-hand" viewBox="0 0 40 48" aria-hidden="true"><path d="M14 23V7a4 4 0 0 1 8 0v11l2-.6a4 4 0 0 1 4.2 1.4l.6.8a4 4 0 0 1 5 2.2V27c0 9.5-5.5 17-14.5 17H18c-5 0-8.6-2.6-10.6-7l-4-8.8a4 4 0 0 1 6.6-4.3z" fill="#fff" stroke="#1F2B4D" stroke-width="2.6" stroke-linejoin="round"/></svg>';
const STAR='<path d="M12 2.5l2.9 6.2 6.8.9-5 4.7 1.3 6.7L12 17.7 6 21l1.3-6.7-5-4.7 6.8-.9z" stroke-width="1.5" stroke-linejoin="round"/>';
function starRow(n){let s='<span class="lw-stars" aria-label="'+n+' dari 3 bintang">';for(let i=0;i<3;i++)s+=`<svg viewBox="0 0 24 24" class="${i<n?'lw-on':'lw-off'}">${STAR}</svg>`;return s+'</span>'}

/* ================= GAMBAR LANGIT STATIS (untuk kuis) ================= */
const SC={
 subuh:{sky:['#16235A','#34569F','#8FBFD3','#F4E6CC'],hill:'#17303F',ground:'#1F3B4D',wall:'#102532',dome:'#0C1C27',win:'#FFD76A',trunk:'#0F222E',crown:'#143140'},
 zuhur:{sky:['#1787DB','#56B5F1','#BFE7FB'],hill:'#62B35C',ground:'#84CC6E',wall:'#FFF6E2',dome:'#35B3A4',win:'#7E8FB3',trunk:'#8A5A3B',crown:'#3E9B4B'},
 asar:{sky:['#4795D6','#9CCBE2','#FBE3AC'],hill:'#93A450',ground:'#BDB95C',wall:'#FFEFC9',dome:'#2F9C8F',win:'#8C7A66',trunk:'#7B4E32',crown:'#5E9440'},
 magrib:{sky:['#35275F','#A8437A','#EF6A3C','#FFC55C'],hill:'#2A1836',ground:'#3A2244',wall:'#211129',dome:'#170B1E',win:'#FFD76A',trunk:'#1B0E22',crown:'#24122D'},
 isya:{sky:['#060A26','#111948','#252A6C'],hill:'#090D26',ground:'#0E1335',wall:'#070A1F',dome:'#04061A',win:'#FFD76A',trunk:'#070A1F',crown:'#0B1030'}
};
let uid=0;
function seeded(s){return()=>(s=(s*9301+49297)%233280)/233280}
function cloud(x,y,s,attr,op){
  return `<g transform="translate(${x},${y}) scale(${s})"><g class="lw-drift" style="animation-delay:-${x%7}s" ${attr} opacity="${op}"><ellipse cx="0" cy="0" rx="26" ry="10"/><ellipse cx="-12" cy="-7" rx="12" ry="9"/><ellipse cx="8" cy="-10" rx="15" ry="12"/></g></g>`;
}
function stars(n,seed,op){
  const r=seeded(seed);let s='';
  for(let i=0;i<n;i++){const x=(r()*310+5).toFixed(0),y=(r()*105+6).toFixed(0),z=(r()*1.2+.6).toFixed(1);
    s+=`<circle class="lw-twk" style="animation-delay:-${(r()*2.6).toFixed(1)}s" cx="${x}" cy="${y}" r="${z}" fill="#fff" opacity="${(op*(.5+r()*.5)).toFixed(2)}"/>`}
  return s;
}
function rays(){let s='';for(let i=0;i<10;i++){const a=i*Math.PI/5;s+=`<line x1="${(Math.cos(a)*25).toFixed(1)}" y1="${(Math.sin(a)*25).toFixed(1)}" x2="${(Math.cos(a)*32).toFixed(1)}" y2="${(Math.sin(a)*32).toFixed(1)}"/>`}
  return `<g class="lw-spin" stroke="#FFE04A" stroke-width="3.5" stroke-linecap="round" opacity=".85">${s}</g>`}
function mosque(tx,ty,s,w,d,win,lit){
  const W=c=>`class="lw-win${lit?' lw-pulse':''}" fill="${win||'#7E8FB3'}"`;
  return `<g transform="translate(${tx},${ty}) scale(${s})"><rect x="60" y="98" width="10" height="64" ${w}/><path d="M58 98h14l-7-14z" ${d}/><rect x="63" y="108" width="4" height="7" rx="2" ${W()}/>
<rect x="0" y="128" width="54" height="34" rx="2" ${w}/><path d="M9 128a18 18 0 0 1 36 0z" ${d}/><rect x="26" y="103" width="2" height="8" ${d}/>
<rect x="7" y="139" width="8" height="12" rx="4" ${W()}/><rect x="22" y="140" width="10" height="22" rx="5" ${W()}/><rect x="39" y="139" width="8" height="12" rx="4" ${W()}/></g>`;
}
function tree(x,trunk,crown){
  return `<g transform="translate(${x},164)"><g class="lw-sway"><rect x="-2" y="-24" width="5" height="24" rx="2" ${trunk}/><circle cx="0" cy="-30" r="14" ${crown}/><circle cx="-10" cy="-23" r="9" ${crown}/><circle cx="11" cy="-23" r="9" ${crown}/></g></g>`;
}
function landStatic(c,lit){
  const f=v=>`fill="${v}"`;
  return `<path d="M0 152 Q50 120 110 146 T220 140 T320 148 V200 H0Z" fill="${c.hill}"/><path d="M0 163 Q160 154 320 163 V200 H0Z" fill="${c.ground}"/>`
   +mosque(206,2,1,f(c.wall),f(c.dome),c.win,lit)+tree(148,f(c.trunk),f(c.crown));
}
function scene(k){
  const c=SC[k],id='lwg'+(uid++);
  const stops=c.sky.map((x,i)=>`<stop offset="${Math.round(i/(c.sky.length-1)*100)}%" stop-color="${x}"/>`).join('');
  let s=`<svg class="lw-scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Gambar langit"><defs>
<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient>
<radialGradient id="${id}r"><stop offset="0" stop-color="#FFE9A6" stop-opacity=".95"/><stop offset="1" stop-color="#FFB347" stop-opacity="0"/></radialGradient>
<radialGradient id="${id}w"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<mask id="${id}m"><rect width="320" height="200" fill="#fff"/><circle cx="254" cy="38" r="15" fill="#000"/></mask></defs>
<rect width="320" height="170" fill="url(#${id})"/>`;
  if(k==='subuh') s+=stars(9,7,.6)+`<ellipse class="lw-pulse" cx="70" cy="152" rx="210" ry="30" fill="url(#${id}w)"/>`+cloud(215,62,1,'fill="#C9DAEC"',.35);
  else if(k==='zuhur') s+=`<g transform="translate(176,40)"><circle r="46" fill="url(#${id}w)"/>${rays()}<circle r="19" fill="#FFF7C2"/><circle r="15" fill="#FFE04A"/></g>`
      +cloud(66,84,1.15,'fill="#fff"',.95)+cloud(258,58,.9,'fill="#fff"',.9)+plane(26);
  else if(k==='asar') s+=`<circle class="lw-pulse" cx="262" cy="92" r="58" fill="url(#${id}r)"/><circle cx="262" cy="92" r="20" fill="#FFD75C"/>`+cloud(92,50,1.1,'fill="#FFF4DA"',.9)+cloud(196,74,.7,'fill="#FFF4DA"',.75);
  else if(k==='magrib') s+=`<ellipse class="lw-pulse" cx="236" cy="158" rx="170" ry="62" fill="url(#${id}r)"/>`+stars(3,3,.5)+cloud(80,70,1.2,'fill="#7A3A78"',.7)+cloud(232,48,.9,'fill="#C2557B"',.6);
  else s+=stars(34,11,1)+`<circle cx="246" cy="42" r="17" fill="#FDF3C4" mask="url(#${id}m)"/>`+cloud(70,92,.9,'fill="#2B3478"',.55);
  s+=landStatic(c,k==='subuh'||k==='magrib'||k==='isya');
  if(k==='zuhur')s+=`<line x1="64" y1="187" x2="55" y2="190" stroke="#000" stroke-opacity=".28" stroke-width="6" stroke-linecap="round"/>`;
  if(k==='asar')s+=`<line x1="64" y1="187" x2="12" y2="194" stroke="#000" stroke-opacity=".28" stroke-width="6" stroke-linecap="round"/>`;
  if(k==='zuhur'||k==='asar')s+=`<line x1="64" y1="186" x2="64" y2="152" stroke="#8A5A3B" stroke-width="5" stroke-linecap="round"/>`;
  return s+'</svg>';
}
function plane(y){
  return `<g class="lw-fly"><g transform="translate(74,${y}) rotate(-8)"><rect x="-48" y="-1" width="42" height="2" rx="1" fill="#fff" opacity=".7"/><ellipse cx="6" cy="0" rx="12" ry="3.2" fill="#fff"/><path d="M4 0l-6-9h4l8 9zM4 0l-6 9h4l8-9z" fill="#E4EEF6"/><path d="M-5 0l-3-5h3l3 5z" fill="#E4EEF6"/></g></g>`;
}

/* ================= JELAJAH LANGIT: tiga pemandangan ================= */
const F=(d,n)=>`fill="${d}" data-d="${d}" data-n="${n}"`;
function palm(x,y,s,trunk,leaf,nuts){
  const fr=[-165,-125,-60,-18,22,158].map(a=>`<ellipse rx="17" ry="4.6" transform="rotate(${a}) translate(15,0)" ${leaf}/>`).join('');
  return `<g transform="translate(${x},${y}) scale(${s})"><g class="lw-sway"><path d="M-3.5 0 Q-7 -30 5 -58 L10 -56 Q0 -30 3.5 0Z" ${trunk}/><g transform="translate(7,-57)">${fr}${nuts?`<circle cx="-2" cy="4" r="3.6" ${trunk}/><circle cx="5" cy="5" r="3.6" ${trunk}/>`:''}</g></g></g>`;
}
const SCN=[['desa','Desa'],['pantai','Pantai'],['gurun','Gurun']];
function landSim(sc){
  if(sc==='pantai'){
    let wv='';for(let i=0;i<10;i++)wv+=`<path d="M${i*40} 0 q10 -4 20 0" />`;
    return `<path d="M0 142 Q40 138 80 142 T160 142 T240 142 T320 142 V172 H0Z" ${F('#2FA7D8','#0B1A45')}/>
<g class="lw-wave" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".45"><g transform="translate(0,151)">${wv}</g><g transform="translate(18,161)">${wv}</g></g>
<g transform="translate(176,146)"><g class="lw-bob2"><path d="M-22 0 H22 L15 9 H-15Z" ${F('#E0563F','#1A1236')}/><rect x="-1" y="-30" width="2.5" height="30" ${F('#8A5A3B','#120E22')}/><path d="M2 -28 L2 -3 L20 -3Z" ${F('#FFFFFF','#2A2F66')}/><path d="M-2 -24 L-2 -3 L-15 -3Z" ${F('#FFE7A8','#262A5C')}/></g></g>
<path d="M0 168 Q160 158 320 168 V200 H0Z" ${F('#F5DDA0','#1B1A3A')}/>
${mosque(232,46,.8,F('#FFF6E2','#070A1F'),F('#35B3A4','#04061A'))}
${palm(36,184,1.05,F('#9A6A3E','#0F0C20'),F('#3E9B4B','#0B1030'),true)}`;
  }
  if(sc==='gurun'){
    return `<path d="M0 150 Q60 128 130 146 Q200 122 320 140 V200 H0Z" ${F('#E8B36A','#17142F')}/>
${mosque(200,6,1,F('#F3E2C0','#120F28'),F('#C48A4A','#0C0A1E'))}
${palm(156,174,.95,F('#8A5A3B','#0F0C20'),F('#4E8A3A','#0B1030'),false)}${palm(178,172,.75,F('#8A5A3B','#0F0C20'),F('#5E9440','#0B1030'),false)}
<path d="M0 170 Q90 150 180 166 T320 164 V200 H0Z" ${F('#F4CB8B','#201B3D')}/>
<ellipse cx="270" cy="182" rx="12" ry="5" ${F('#C99A5B','#151230')}/><ellipse cx="30" cy="190" rx="8" ry="4" ${F('#C99A5B','#151230')}/>`;
  }
  return `<path d="M0 152 Q50 120 110 146 T220 140 T320 148 V200 H0Z" ${F('#62B35C','#090D26')}/><path d="M0 163 Q160 154 320 163 V200 H0Z" ${F('#84CC6E','#0E1335')}/>`
   +mosque(206,2,1,F('#FFF6E2','#070A1F'),F('#35B3A4','#04061A'))+tree(148,F('#8A5A3B','#070A1F'),F('#3E9B4B','#0B1030'));
}

/* ---------- model matahari sehari (contoh jam, bukan jadwal resmi) ---------- */
const FAJR=270,RISE=345,NOON=710,SET=1075,ISYA=1145,MID=SET+(FAJR+1440-SET)/2,POLE=34,ELEV=70*Math.PI/180;
const NOONLEN=POLE/Math.tan(ELEV),ASRLEN=POLE+NOONLEN;
const dayFrac=t=>(t-RISE)/(SET-RISE);
function shadowLen(t){const f=dayFrac(t);if(f<=0||f>=1)return 1e9;return POLE/Math.tan(Math.sin(Math.PI*f)*ELEV)}
let ASR=NOON;while(shadowLen(ASR)<ASRLEN)ASR++;
function period(t){
  if(t>=FAJR&&t<RISE)return'subuh';if(t>=RISE&&t<=NOON)return'pagi';if(t>NOON&&t<ASR)return'zuhur';
  if(t>=ASR&&t<SET)return'asar';if(t>=SET&&t<ISYA)return'magrib';if(t>=ISYA&&t<MID)return'isya';return'malam';
}
const PER={
 subuh:['Waktu Subuh','Fajar sudah menyingsing, matahari belum terbit.','subuh'],
 pagi:['Pagi (waktu Duha)','Matahari sudah terbit. Zuhur belum masuk.','netral'],
 zuhur:['Waktu Zuhur','Matahari sudah bergeser dari tengah langit.','zuhur'],
 asar:['Waktu Asar','Bayangan tongkat sudah melewati garis putih.','asar'],
 magrib:['Waktu Magrib','Matahari sudah terbenam, langit barat masih merah.','magrib'],
 isya:['Waktu Isya','Cahaya merah di langit sudah hilang.','isya'],
 malam:['Larut malam','Tengah malam sudah lewat. Subuh belum masuk.','netral']
};
const NIGHT=['#060A26','#111948','#252A6C'],DAY=['#1787DB','#56B5F1','#BFE7FB'];
const KEYS=[[0,NIGHT],[90,['#0B1238','#1E3270','#3F5F9A']],[150,['#16235A','#34569F','#F4E6CC']],[195,['#3E7CC9','#9CCBE2','#FFD9A0']],
 [300,DAY],[690,DAY],[810,['#4795D6','#9CCBE2','#FBE3AC']],[885,['#5A6FB8','#E59A6A','#FFC55C']],[910,['#35275F','#C0507A','#F47A3C']],
 [965,['#141A4E','#2A2B6E','#5A3A78']],[1000,NIGHT],[1440,NIGHT]];
const hex=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16));
function mix(a,b,u){const x=hex(a),y=hex(b);return'rgb('+x.map((v,i)=>Math.round(v+(y[i]-v)*u)).join(',')+')'}
const bump=(t,a,b,c)=>t<=a||t>=c?0:t<b?(t-a)/(b-a):(c-t)/(c-b);
const simT=v=>(v+180)%1440;
function skyAt(t){const v=((t-180)%1440+1440)%1440;let i=0;while(KEYS[i+1][0]<v)i++;const u=(v-KEYS[i][0])/(KEYS[i+1][0]-KEYS[i][0]);return[0,1,2].map(j=>mix(KEYS[i][1][j],KEYS[i+1][1][j],u))}
function lightAt(t){
  const f=dayFrac(t);
  if(f>=0&&f<=1)return clamp(.15+Math.sin(Math.PI*f)*2.2,0,1);
  if(t>=FAJR&&t<RISE)return .15*(t-FAJR)/(RISE-FAJR);
  if(t>SET&&t<ISYA)return .15*(1-(t-SET)/(ISYA-SET));
  return 0;
}
const skyBg=t=>{const c=skyAt(t);return `linear-gradient(180deg,${c[0]},${c[1]} 55%,${c[2]})`};
function simSVG(sc){
  return `<svg id="lw-sim" class="lw-scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Langit yang berubah saat matahari digeser"><defs>
<linearGradient id="lw-sg" x1="0" y1="0" x2="0" y2="1"><stop id="lw-s0" offset="0"/><stop id="lw-s1" offset=".55"/><stop id="lw-s2" offset="1"/></linearGradient>
<radialGradient id="lw-sgr"><stop offset="0" stop-color="#FFD08A" stop-opacity=".95"/><stop offset="1" stop-color="#FF7A3C" stop-opacity="0"/></radialGradient>
<radialGradient id="lw-sgw"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<mask id="lw-sgm"><rect width="320" height="200" fill="#fff"/><circle cx="72" cy="36" r="15" fill="#000"/></mask></defs>
<rect width="320" height="170" fill="url(#lw-sg)"/>
<g id="lw-sStars">${stars(32,11,1)}</g>
<circle id="lw-sMoon" cx="64" cy="40" r="17" fill="#FDF3C4" mask="url(#lw-sgm)"/>
<ellipse id="lw-glowE" cx="40" cy="152" rx="200" ry="30" fill="url(#lw-sgw)"/>
<ellipse id="lw-glowW" cx="290" cy="158" rx="180" ry="64" fill="url(#lw-sgr)"/>
<g id="lw-sSun"><circle r="46" fill="url(#lw-sgw)"/>${rays()}<circle r="19" fill="#FFF7C2"/><circle r="15" fill="#FFE04A"/></g>
<g id="lw-sClouds">${cloud(84,70,1.1,F('#FFFFFF','#2B3478'),1)}${cloud(236,48,.85,F('#FFFFFF','#2B3478'),1)}</g>
${landSim(sc)}
<line x1="${(100-ASRLEN).toFixed(1)}" y1="183" x2="${(100-ASRLEN).toFixed(1)}" y2="196" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".9"/>
<line id="lw-sShadow" x1="100" y1="187" x2="100" y2="190" stroke="#000" stroke-width="6" stroke-linecap="round"/>
<line x1="100" y1="186" x2="100" y2="${186-POLE}" stroke="#8A5A3B" stroke-width="5" stroke-linecap="round"/>
</svg>`;
}
function simUpdate(user){
  const svg=$('lw-sim');if(!svg)return;
  const s=st.view==='sim'?st:HX,v=s.v,t=simT(v),f=dayFrac(t);
  let i=0;while(KEYS[i+1][0]<v)i++;
  const u=(v-KEYS[i][0])/(KEYS[i+1][0]-KEYS[i][0]);
  [0,1,2].forEach(j=>$('lw-s'+j).setAttribute('stop-color',mix(KEYS[i][1][j],KEYS[i+1][1][j],u)));
  const L=lightAt(t),sun=$('lw-sSun');
  if(f>-.04&&f<1.04){const g=clamp(f,0,1);sun.setAttribute('transform',`translate(${(20+280*f).toFixed(1)},${(152-Math.sin(Math.PI*g)*118).toFixed(1)})`);sun.style.opacity=1}
  else sun.style.opacity=0;
  $('lw-sStars').style.opacity=clamp(1-L*5,0,1);$('lw-sMoon').style.opacity=clamp(1-L*7,0,1);
  $('lw-glowE').style.opacity=bump(t,FAJR-15,RISE-12,RISE+30)*.85;$('lw-glowW').style.opacity=bump(t,SET-45,SET+8,ISYA+5);
  svg.querySelectorAll('[data-d]').forEach(e=>e.setAttribute('fill',mix(e.getAttribute('data-n'),e.getAttribute('data-d'),L)));
  svg.querySelectorAll('.lw-win').forEach(e=>e.setAttribute('fill',mix('#FFD76A','#7E8FB3',clamp(L*3,0,1))));
  $('lw-sClouds').style.opacity=.5+.45*L;
  const sh=$('lw-sShadow');
  if(f>.015&&f<.985){const len=Math.min(shadowLen(t),150),side=clamp((.5-f)*14,-1,1);
    sh.setAttribute('x2',(100+side*len).toFixed(1));sh.setAttribute('y2',(190+Math.min(len,60)/15).toFixed(1));sh.style.opacity=.3*clamp(L*2,0,1)}
  else sh.style.opacity=0;
  const hh=Math.floor(t/60),mm=t%60;
  $('lw-sD').innerHTML=digiIn(hh,mm);setHands('lw-sA',hh*60+mm);
  const per=period(t),lab=$('lw-sLab');
  if(s.game&&!s.done){lab.style.setProperty('--c',col('netral'));lab.innerHTML='<b>Waktu apa ini?</b><span>Amati langit dan bayangan tongkat.</span>'}
  else{lab.style.setProperty('--c',col(PER[per][2]));lab.innerHTML=`<b>${PER[per][0]}</b><span>${PER[per][1]}</span>`}
  if(s.per!==per){s.per=per;if(user&&(!s.game||s.done))ambient({pagi:'zuhur',malam:'isya'}[per]||per,s.scene)}
}
const MISSIONS=[
 ['subuh','Geser ke waktu Subuh'],['zuhur','Geser ke waktu Zuhur'],['asar','Geser ke waktu Asar'],['magrib','Geser ke waktu Magrib'],['isya','Geser ke waktu Isya'],
 ['terbit','Geser ke saat matahari terbit, yaitu saat waktu Subuh habis'],['pendek','Geser ke saat bayangan tongkat paling pendek']
];
function missionOK(m,t){
  if(m==='terbit')return Math.abs(t-RISE)<=25;
  if(m==='pendek')return Math.abs(t-NOON)<=25;
  return period(t)===m;
}

/* ================= JAM ANALOG DAN DIGITAL ================= */
const digiIn=(h,m)=>`<span class="lw-dh">${pad(h)}</span><span class="lw-dc">.</span><span class="lw-dm">${pad(m)}</span>`;
const digi=(h,m,cls)=>`<span class="lw-digi ${cls||''}">${digiIn(h,m)}</span>`;
function analog(h,m,o){
  o=o||{};const tm=(h%12)*60+m,big=!!o.mins,vb=big?'-24 -24 248 248':'0 0 200 200',p=v=>v.toFixed(1);
  let s=`<svg class="lw-ana${o.cls?' '+o.cls:''}" viewBox="${vb}"${o.id?` id="${o.id}"`:''} role="img" aria-label="Jam analog"><circle cx="100" cy="100" r="95" fill="#fff" stroke="#1F2B4D" stroke-width="7"/>`;
  for(let i=0;i<60;i++){const a=i*Math.PI/30,r1=i%5?85:79;
    s+=`<line x1="${p(100+Math.sin(a)*r1)}" y1="${p(100-Math.cos(a)*r1)}" x2="${p(100+Math.sin(a)*89)}" y2="${p(100-Math.cos(a)*89)}" stroke="${i%5?'#C9D3E3':'#1F2B4D'}" stroke-width="${i%5?2:4}" stroke-linecap="round"/>`}
  if(!o.mini)for(let n=1;n<=12;n++){const a=n*Math.PI/6;s+=`<text x="${p(100+Math.sin(a)*64)}" y="${p(100-Math.cos(a)*64)}" text-anchor="middle" dominant-baseline="central" class="lw-anum">${n}</text>`}
  if(big)for(let n=1;n<=12;n++){const a=n*Math.PI/6;s+=`<text x="${p(100+Math.sin(a)*110)}" y="${p(100-Math.cos(a)*110)}" text-anchor="middle" dominant-baseline="central" class="lw-amin">${(n*5)%60}</text>`}
  const id=o.id?` id="${o.id}-h"`:'',im=o.id?` id="${o.id}-m"`:'';
  s+=`<g transform="translate(100 100)"><g class="lw-hh"${id} style="transform:rotate(${tm*0.5}deg)"><line x1="0" y1="10" x2="0" y2="-45" stroke="#F08A1C" stroke-width="10" stroke-linecap="round"/></g>`
    +`<g class="lw-mh"${im} style="transform:rotate(${m*6}deg)"><line x1="0" y1="12" x2="0" y2="-73" stroke="#1E7FD0" stroke-width="6" stroke-linecap="round"/></g><circle r="8" fill="#1F2B4D"/><circle r="3" fill="#fff"/></g></svg>`;
  return s;
}
function setHands(id,tm){const h=$(id+'-h'),m=$(id+'-m');if(h)h.style.transform=`rotate(${tm*0.5}deg)`;if(m)m.style.transform=`rotate(${tm*6}deg)`}
const SAT=['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
function kata(n){if(n<12)return SAT[n];if(n<20)return SAT[n-10]+' belas';const a=Math.floor(n/10),b=n%10;return(a===1?'sepuluh':SAT[a]+' puluh')+(b?' '+SAT[b]:'')}
function perOf(h){return h<4?'dini hari':h<11?'pagi':h<15?'siang':h<18?'sore':'malam'}
const h12=h=>h%12||12;
function sayTime(h,m){
  const a=h12(h),b=h12(h+1),p=perOf(h);
  if(m===0)return `Pukul ${kata(a)} tepat, ${p}`;
  if(m===30)return `Pukul ${kata(a)} lewat tiga puluh menit, ${p}. Biasa disebut setengah ${kata(b)}`;
  if(m===45)return `Pukul ${kata(a)} lewat empat puluh lima menit, ${p}. Biasa disebut ${kata(b)} kurang seperempat`;
  if(m===15)return `Pukul ${kata(a)} lewat lima belas menit, ${p}. Biasa disebut ${kata(a)} lewat seperempat`;
  return `Pukul ${kata(a)} lewat ${kata(m)} menit, ${p}`;
}
function howTime(h,m){
  const a=h12(h),b=h12(h+1);
  const hp=m===0?`tepat menunjuk angka ${a}`:`sudah lewat dari angka ${a}, menuju ${b}`;
  const mp=m===0?'tepat di angka 12 (0 menit)':m%5===0?`di angka ${m/5} (${m} menit)`:`di antara angka ${Math.floor(m/5)||12} dan ${Math.floor(m/5)+1} (${m} menit)`;
  return `Jarum pendek ${hp}. Jarum panjang ${mp}.`;
}

/* ================= WAKTU DUNIA ================= */
const ID_WIB=['jakarta','medan','bandung','surabaya','pontianak','palembang'],ID_WITA=['makassar','denpasar','balikpapan','mataram','kupang'],ID_WIT=['jayapura','ambon','sorong'];
const wrap=t=>((t%1440)+1440)%1440;
function diffText(d){return d===0?'sama dengan Jakarta':`${Math.abs(d)} jam lebih ${d>0?'cepat':'lambat'} dari Jakarta`}
function cityCard(k,t,o){
  o=o||{};const c=KOTA[k],L=lightAt(t),hide=o.hide;
  return `<div class="lw-city${o.me?' lw-me':''}"${o.id?` id="${o.id}"`:''} style="background:${hide?'linear-gradient(180deg,#C9DAEA,#E7EEF6)':skyBg(t)}">
<span class="lw-cico">${hide?'':(L>.25?IC.sun:IC.moon)}</span>
<span class="lw-cchip"><b>${o.dot?`<i class="lw-cdot" style="background:${o.dot}"></i>`:''}${c[0]}</b><small>${c[1]}</small>
${hide?'<span class="lw-digi"><span class="lw-dq">??.??</span></span>':digi(Math.floor(t/60),t%60)}
<small>${hide?'Berapa ya?':perOf(Math.floor(t/60))+(o.note?' \u00b7 '+o.note:'')}</small></span></div>`;
}
function earthSVG(){
  let land='';const r=seeded(5);
  for(let i=0;i<9;i++){const a=r()*Math.PI*2,d=26+r()*30;land+=`<ellipse cx="${(130+Math.cos(a)*d).toFixed(1)}" cy="${(120+Math.sin(a)*d).toFixed(1)}" rx="${(8+r()*12).toFixed(1)}" ry="${(5+r()*8).toFixed(1)}" fill="#4FB36A"/>`}
  let dots='';PETA.forEach(p=>{dots+=`<circle id="lw-e-${p[0]}" r="${p[0]==='jakarta'?7:5.5}" fill="${p[2]}" stroke="#fff" stroke-width="2"/><text id="lw-et-${p[0]}" class="lw-elab" dominant-baseline="central">${p[1]}</text>`});
  return `<svg class="lw-earth" viewBox="0 0 320 240" role="img" aria-label="Bumi dilihat dari atas kutub utara"><defs><clipPath id="lw-eclip"><circle cx="130" cy="120" r="66"/></clipPath>
<linearGradient id="lw-beam" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#FFE38A" stop-opacity=".45"/><stop offset="1" stop-color="#FFE38A" stop-opacity="0"/></linearGradient></defs>
${stars(26,21,.8)}
<rect x="130" y="54" width="170" height="132" fill="url(#lw-beam)"/>
<g transform="translate(292,120)">${rays()}<circle r="22" fill="#FFE04A"/></g>
<text x="292" y="160" text-anchor="middle" class="lw-elab">Matahari</text>
<circle cx="130" cy="120" r="66" fill="#2F7FD0"/>
<g clip-path="url(#lw-eclip)"><g id="lw-eLand">${land}</g></g>
<path d="M130 54 A66 66 0 0 0 130 186 Z" fill="#050A26" opacity=".72"/>
<circle cx="130" cy="120" r="9" fill="#F2F7FF"/>
<text x="196" y="40" text-anchor="middle" class="lw-elab" style="fill:#FFE38A">Siang</text><text x="56" y="40" text-anchor="middle" class="lw-elab">Malam</text>
${dots}</svg>`;
}
function worldUpdate(){
  if(st.view!=='world')return;
  const J=st.wv,utc=J-420;
  $('lw-wD').innerHTML=digiIn(Math.floor(J/60),J%60);
  const land=$('lw-eLand');if(land)land.setAttribute('transform',`rotate(${(-utc/4).toFixed(1)} 130 120)`);
  PETA.forEach((p,idx)=>{
    const k=p[0],off=KOTA[k][2],raw=utc+off*60,loc=wrap(raw),phi=(loc/60*15+180)*Math.PI/180,cx=130,cy=120;
    const d=$('lw-e-'+k),t=$('lw-et-'+k),R=66,LR=R+(idx%2?32:16);
    d.setAttribute('cx',(cx+R*Math.cos(phi)).toFixed(1));d.setAttribute('cy',(cy-R*Math.sin(phi)).toFixed(1));
    const c=Math.cos(phi);t.setAttribute('x',(cx+LR*c).toFixed(1));t.setAttribute('y',(cy-LR*Math.sin(phi)).toFixed(1));
    t.setAttribute('text-anchor',c>.35?'start':c<-.35?'end':'middle');
    const day=raw<0?'hari sebelumnya':raw>=1440?'hari berikutnya':'';
    const box=$('lw-wc-'+k);if(box)box.outerHTML=cityCard(k,loc,{id:'lw-wc-'+k,dot:p[2],me:k==='jakarta',note:k==='jakarta'?'':(day||diffShort(off-7))});
  });
}
function diffShort(d){return `${d>0?'+':'\u2212'}${Math.abs(d)} jam`}

/* ================= SUARA: hanya derau alam, tanpa nada ================= */
let ac=null,nb=null,soundOn=true,amb=null,ambKey=null;
function audio(){
  if(!soundOn)return null;
  try{
    if(!ac){const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;ac=new A();
      nb=ac.createBuffer(1,ac.sampleRate*2,ac.sampleRate);const d=nb.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}
    if(ac.state==='suspended')ac.resume();
    return ac;
  }catch(e){return null}
}
function burst(type,freq,q,dur,vol,delay,sweep){
  const a=audio();if(!a)return;
  const t=a.currentTime+(delay||0),s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();
  s.buffer=nb;s.loop=true;f.type=type;f.Q.value=q;f.frequency.setValueAtTime(freq,t);
  if(sweep)f.frequency.exponentialRampToValueAtTime(sweep,t+dur);
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+Math.min(.02,dur/3));g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  s.connect(f);f.connect(g);g.connect(a.destination);s.start(t,Math.random());s.stop(t+dur+.05);
}
const chirp=d=>{burst('bandpass',3000,4,.08,.22,d,4300);burst('bandpass',3400,4,.07,.18,(d||0)+.1,4600)}; /* kicau burung dari derau */
const sfx={
  tap(){burst('bandpass',1400,1.5,.05,.35)},                          /* ketukan kayu */
  flip(){burst('highpass',2500,.7,.09,.18)},                           /* kertas dibalik */
  tick(){burst('bandpass',2600,1.2,.03,.25)},                          /* detak jam */
  ok(){burst('bandpass',1700,1.5,.06,.5);burst('bandpass',1700,1.5,.06,.5,.11);burst('bandpass',500,.8,.45,.25,.18,2600)}, /* tok-tok + desir angin */
  no(){burst('lowpass',170,.7,.2,.7)},                                  /* gedebuk lembut */
  win(){burst('bandpass',400,.8,.9,.3,0,3000);for(let i=0;i<5;i++)chirp(.25+i*.22)}
};
function loopNoise(a,type,freq,vol){
  const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();
  s.buffer=nb;s.loop=true;f.type=type;f.frequency.value=freq;f.Q.value=.6;g.gain.value=vol;
  s.connect(f);f.connect(g);s.start();return{s,f,g};
}
function stopAmb(){
  ambKey=null;if(!amb)return;const x=amb;amb=null;x.timers.forEach(clearInterval);
  try{x.out.gain.setTargetAtTime(0,ac.currentTime,.15);setTimeout(()=>x.src.forEach(n=>{try{n.stop()}catch(e){}}),600)}catch(e){}
}
function ambient(k,sc){
  sc=sc||'desa';const key=k+'|'+sc;if(ambKey===key&&amb)return;
  stopAmb();const a=audio();if(!a)return;ambKey=key;
  const out=a.createGain();out.gain.value=0;out.gain.setTargetAtTime(1,a.currentTime,.4);out.connect(a.destination);
  const x={out,src:[],timers:[]};
  const swell=(n,lo,hi,every)=>{const f=()=>{const t=a.currentTime;n.g.gain.setTargetAtTime(hi,t,every/5000);n.g.gain.setTargetAtTime(lo,t+every/2000,every/5000)};f();x.timers.push(setInterval(f,every))};
  const add=n=>{n.g.connect(out);x.src.push(n.s);return n};
  const wind=add(loopNoise(a,sc==='gurun'?'bandpass':'lowpass',k==='isya'?320:sc==='gurun'?700:480,.05));
  swell(wind,.03,sc==='gurun'?.2:k==='asar'?.14:.09,5200);                                                   /* angin */
  if(sc==='pantai'){const w=add(loopNoise(a,'lowpass',650,0));swell(w,.02,.3,6200)}                          /* ombak */
  if(k==='subuh'&&sc!=='gurun'){x.timers.push(setInterval(()=>{if(amb!==x)return;chirp(0)},1500))}           /* burung */
  if(k==='zuhur'&&sc==='desa'){const car=add(loopNoise(a,'lowpass',130,0));swell(car,0,.5,7000)}             /* kendaraan lewat */
  if(k==='asar'){const pl=add(loopNoise(a,'bandpass',260,0));swell(pl,0,.22,9000)}                           /* pesawat jauh */
  if(k==='isya'&&sc==='desa'){x.timers.push(setInterval(()=>{if(amb!==x)return;for(let i=0;i<3;i++)burst('bandpass',4300,5,.05,.06,i*.09)},1700))} /* jangkrik */
  amb=x;
}
function baca(t){
  if(!soundOn)return;
  try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t.replace(/<[^>]+>/g,' '));u.lang='id-ID';u.rate=.95;speechSynthesis.speak(u)}catch(e){}
}

/* ================= SIMPAN PROGRES (hanya di perangkat ini) ================= */
let best={};
try{best=JSON.parse(localStorage.getItem('lw-best')||'{}')||{}}catch(e){best={}}
function store(){try{localStorage.setItem('lw-best',JSON.stringify(best))}catch(e){}}
function saveBest(m,n){if((best[m]||0)<n){best[m]=n;store()}}
const MAXS=Object.keys(MODES).length*3;
const totalStars=()=>Object.keys(MODES).reduce((s,m)=>s+(best[m]||0),0);
const RANKS=[[0,'Pemula Langit'],[8,'Pengamat Langit'],[15,'Penjaga Waktu'],[22,'Ahli Lima Waktu'],[MAXS,'Bintang Lima Waktu']];

/* ================= ALAT BANTU ================= */
let st={view:'intro'},timers=[],ivs=[],kTimer=null,raf=0;
const HX={v:420,scene:'desa',per:null};
const calm=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
function later(fn,ms){timers.push(setTimeout(fn,ms))}
function cleanup(){timers.forEach(clearTimeout);timers=[];ivs.forEach(clearInterval);ivs=[];clearInterval(kTimer);kTimer=null;cancelAnimationFrame(raf);raf=0}
function toTop(){try{if(isFS()){root.scrollTop=0;return}const r=root.getBoundingClientRect();if(r.top<0)window.scrollBy(0,r.top-8)}catch(e){}}
function go(o){cleanup();stopAmb();st=o;render(true);toTop()}
function sparkle(r,n){
  if(calm||!r)return;const cx=r.left+r.width/2,cy=r.top+r.height/2;n=n||12;
  for(let i=0;i<n;i++){const e=document.createElement('span'),a=i/n*Math.PI*2,d=50+Math.random()*60;e.className='lw-sp';
    e.style.left=cx-7+'px';e.style.top=cy-7+'px';e.style.setProperty('--dx',Math.cos(a)*d+'px');e.style.setProperty('--dy',Math.sin(a)*d+'px');
    root.appendChild(e);setTimeout(()=>e.remove(),850)}
}
function confetti(){const r=root.getBoundingClientRect(),w=Math.min(r.width,window.innerWidth);[.2,.5,.8].forEach((x,i)=>setTimeout(()=>sparkle({left:r.left+w*x-10,top:Math.max(r.top,0)+120+i*40,width:20,height:20},16),i*160))}
function starsFor(first,n){return first===n?3:first>=Math.ceil(n*.7)?2:1}
function fsEl(){return document.fullscreenElement||document.webkitFullscreenElement}
function isFS(){return !!fsEl()||root.classList.contains('lw-fs')}
function updFS(){const b=$('lw-fsb');if(b){b.innerHTML=isFS()?IC.x:IC.fs;b.setAttribute('aria-label',isFS()?'Keluar layar penuh':'Layar penuh')}}
function enterFS(){
  const f=root.requestFullscreen||root.webkitRequestFullscreen;let tried=false;
  if(f){try{const p=f.call(root);tried=true;if(p&&p.catch)p.catch(()=>{root.classList.add('lw-fs');updFS()})}catch(e){tried=false}}
  if(!tried)root.classList.add('lw-fs');updFS();
}
function exitFS(){if(fsEl()){const x=document.exitFullscreen||document.webkitExitFullscreen;try{x.call(document)}catch(e){}}root.classList.remove('lw-fs');updFS()}
document.addEventListener('fullscreenchange',updFS);document.addEventListener('webkitfullscreenchange',updFS);

/* ================= PEMBUAT SOAL ================= */
const sceneFrame=k=>`<div class="lw-frame">${scene(k)}</div>`;
const MYST='<div class="lw-frame"><div class="lw-mystery"><b>?</b></div></div>';
const qSky=(p,hint)=>({text:'Langit ini waktu shalat apa?',pic:sceneFrame(p.k),amb:p.k,hint:hint?p.cap:'',opts:PO,a:p.k,head:`Benar! Ini waktu ${p.n}`,ok:`${p.n} ${p.r} rakaat. ${p.desc}`,rv:'Langit '+p.n});
const qClue=c=>({text:c[1],pic:MYST,picDone:sceneFrame(c[0]),ambDone:c[0],opts:PO,a:c[0],head:`Benar! Jawabannya ${BY[c[0]].n}`,ok:BY[c[0]].desc,rv:'Petunjuk '+BY[c[0]].n});
function rakaatBasic(){return P.map(p=>({text:`Shalat ${p.n} berapa rakaat?`,pic:sceneFrame(p.k),amb:p.k,opts:N([2,3,4]),a:String(p.r),head:'Benar!',ok:`${p.n} ${p.r} rakaat.`,rv:`Rakaat ${p.n}`}))}
function rakaatExtra(){return[
 {text:'Berapa jumlah rakaat shalat wajib sehari semalam?',opts:N([15,17,20]),a:'17',ok:'2 + 4 + 4 + 3 + 4 = 17 rakaat.',rv:'Jumlah rakaat sehari'},
 {text:'Zuhur ditambah Asar, berapa rakaat?',opts:N([6,7,8]),a:'8',ok:'4 + 4 = 8 rakaat.',rv:'Zuhur + Asar'},
 {text:'Magrib ditambah Isya, berapa rakaat?',opts:N([6,7,8]),a:'7',ok:'3 + 4 = 7 rakaat.',rv:'Magrib + Isya'},
 {text:'Subuh ditambah Magrib, berapa rakaat?',opts:N([4,5,6]),a:'5',ok:'2 + 3 = 5 rakaat.',rv:'Subuh + Magrib'},
 {text:'Shalat wajib mana yang rakaatnya paling sedikit?',opts:PO,a:'subuh',ok:'Subuh hanya 2 rakaat.',rv:'Rakaat paling sedikit'},
 {text:'Shalat wajib mana yang 3 rakaat?',opts:PO,a:'magrib',ok:'Magrib 3 rakaat.',rv:'Shalat 3 rakaat'},
 {text:'Sunnah rawatib sebelum Subuh berapa rakaat?',opts:N([2,3,4]),a:'2',ok:'2 rakaat sebelum Subuh.',rv:'Rawatib Subuh'},
 {text:'Sunnah rawatib sebelum Zuhur berapa rakaat?',opts:N([2,3,4]),a:'4',ok:'4 rakaat sebelum Zuhur dan 2 rakaat sesudahnya.',rv:'Rawatib Zuhur'},
 {text:'Berapa jumlah rakaat sunnah rawatib sehari semalam?',opts:N([10,12,17]),a:'12',ok:'4 + 2 + 2 + 2 + 2 = 12 rakaat.',rv:'Jumlah rawatib'}
 ].map(q=>Object.assign({head:'Benar!'},q))}
function kq(prev){
  let q;do{const r=Math.random();q=r<.4?qSky(rand(P),false):r<.7?qClue(rand(CLUES)):rand(rakaatBasic().concat(rakaatExtra()))}
  while(prev&&q.text===prev.text&&q.a===prev.a);return q;
}
/* --- kuis jam --- */
function jamWrong(h,m){
  const c=[[(m/5)||12,(h*5)%60],[h%12+1,m],[(h+10)%12+1,m],[h,(m+30)%60]],out=[],seen={[h+':'+m]:1};
  for(const x of c){const k=x[0]+':'+x[1];if(!seen[k]){seen[k]=1;out.push(x)}if(out.length===2)break}
  return out;
}
const JC=['var(--jam)','var(--menit)','var(--ok)'];
function jamA(h,m){
  const all=shuffle([[h,m]].concat(jamWrong(h,m)));
  return {text:'Jam analog ini menunjukkan pukul berapa?',say:'Jam analog ini menunjukkan pukul berapa?',pic:`<div class="lw-qclock">${analog(h,m)}</div>`,
    opts:all.map((x,i)=>[x[0]+':'+x[1],digi(x[0],x[1]),JC[i]]),a:h+':'+m,head:`Benar! Pukul ${fmt(h,m)}`,ok:howTime(h,m),rv:'Jam '+fmt(h,m)};
}
function jamB(h,m){
  const all=shuffle([[h,m]].concat(jamWrong(h,m)));
  return {text:'Jam analog mana yang sama dengan jam digital ini?',pic:`<div class="lw-qclock">${digi(h,m,'lw-dbig')}</div>`,optCls:'lw-pic',
    opts:all.map((x,i)=>[x[0]+':'+x[1],analog(x[0],x[1]),JC[i]]),a:h+':'+m,head:`Benar! Pukul ${fmt(h,m)}`,ok:howTime(h,m),rv:'Jam '+fmt(h,m)};
}
function jam24a(){
  const h=13+rnd(10);
  return {text:`Jam digital menunjukkan pukul ${fmt(h,0)}. Di jam analog, jarum pendek menunjuk angka berapa?`,pic:`<div class="lw-qclock">${digi(h,0,'lw-dbig')}</div>`,
    opts:shuffle([h-12,h,h-10]).map((n,i)=>[String(n),String(n),JC[i]]),a:String(h-12),head:`Benar! Angka ${h-12}`,ok:`Jam analog hanya sampai angka 12. ${h} \u2212 12 = ${h-12}.`,rv:`Pukul ${fmt(h,0)} di jam analog`};
}
function jam24b(){
  const h=13+rnd(10),p=perOf(h),a=`${h-12} ${p}`;
  const o=shuffle([a,`${h-12} pagi`,`${h-10} ${p}`]);
  return {text:`Pukul ${fmt(h,0)} sama dengan pukul berapa?`,pic:`<div class="lw-qclock">${digi(h,0,'lw-dbig')}</div>`,
    opts:o.map((x,i)=>[x,x,JC[i]]),a,head:'Benar!',ok:`Pukul ${fmt(h,0)} adalah pukul ${h-12} ${p}. Pukul ${pad(h-12)}.00 adalah pukul ${h-12} pagi.`,rv:`Pukul ${fmt(h,0)}`};
}
function jamQs(){
  const qs=[],used={};
  for(let i=0;i<12;i++){
    const lv=i<4?0:i<8?1:2;
    if(i===9){qs.push(jam24a());continue}
    if(i===11){qs.push(jam24b());continue}
    let h,m;do{h=1+rnd(12);m=lv===0?0:lv===1?rand([0,15,30,45]):5*rnd(12)}while(used[h+':'+m]||(lv===1&&m===0));
    used[h+':'+m]=1;qs.push(i%2===0?jamA(h,m):jamB(h,m));
  }
  return qs;
}
/* --- kuis waktu dunia --- */
function pairPic(a,ta,b,tb){return `<div class="lw-pair">${cityCard(a,ta)}${IC.arrow}${cityCard(b,tb===null?0:tb,{hide:tb===null})}</div>`}
function tq(a,b,lv,fixed){
  const d=KOTA[b][2]-KOTA[a][2];let h=fixed||0,m=0;
  if(!fixed){do{h=lv<3?5+rnd(15):rnd(24)}while(lv<3&&(h+d<0||h+d>23));m=lv===1?0:rand([0,0,30])}
  const raw=h+d,tb=((raw%24)+24)%24,cand=[tb,((h-d)%24+24)%24,h,(tb+1)%24],out=[];
  cand.forEach(x=>{if(out.indexOf(x)<0&&out.length<3)out.push(x)});
  const A=KOTA[a][0],B=KOTA[b][0],note=raw<0?' (hari sebelumnya)':raw>23?' (hari berikutnya)':'';
  return {text:`Jika di ${A} pukul ${fmt(h,m)}, di ${B} pukul berapa?`,pic:pairPic(a,h*60+m,b,null),picDone:pairPic(a,h*60+m,b,tb*60+m),
    opts:shuffle(out).map((x,i)=>[String(x),digi(x,m),JC[i]]),a:String(tb),head:`Benar! Di ${B} pukul ${fmt(tb,m)}`,
    ok:`${B} ${KOTA[b][1]}, ${A} ${KOTA[a][1]}. ${B} ${Math.abs(d)} jam lebih ${d>0?'cepat':'lambat'}. ${fmt(h,m)} ${d>0?'+':'\u2212'} ${Math.abs(d)} jam = ${fmt(tb,m)}${note}.`,rv:`${A} ke ${B}`};
}
function duniaQs(){
  const W=()=>rand(ID_WIB),T=()=>rand(ID_WITA),E=()=>rand(ID_WIT);
  const lv1=[tq('jakarta','makassar',1,6)].concat(shuffle([tq(W(),E(),1),tq(T(),E(),1),tq(W(),T(),1)]));
  const sub={text:'Kota mana yang paling dulu masuk waktu Subuh?',opts:[['jayapura','Jayapura',col('subuh')],['makassar','Makassar',col('asar')],['medan','Medan',col('magrib')]],
    a:'jayapura',head:'Benar! Jayapura',ok:'Jayapura paling timur. Bumi berputar sehingga matahari lebih dulu terbit di timur.',rv:'Subuh paling dulu'};
  const lv2=shuffle([tq(E(),W(),2),tq(T(),W(),2),sub]);
  const jt=(10+rnd(5))*60,ny=wrap(jt-720);
  const night={text:`Saat di Jakarta pukul ${fmt(jt/60,0)} siang, di New York sedang apa?`,pic:pairPic('jakarta',jt,'newyork',null),picDone:pairPic('jakarta',jt,'newyork',ny),
    opts:[['siang','Siang',col('zuhur')],['malam','Malam',col('isya')],['sore','Sore',col('asar')]],a:'malam',head:`Benar! Malam, pukul ${fmt(ny/60,0)}`,
    ok:'New York ada di sisi bumi yang lain. Saat Jakarta menghadap matahari, New York membelakanginya.',rv:'Siang dan malam di dunia'};
  const lv3=shuffle([tq('jakarta','makkah',3),tq(rand(['jakarta','makassar']),rand(['kairo','london','madinah']),3),night]);
  return lv1.concat(lv2,lv3);
}

/* ================= TAMPILAN ================= */
const app=()=>$('lw-app');
function answersHTML(q,wrong,shake,act,mark){
  const n=q.opts.length,hint=wrong.length>=2,guide=!best.guide&&!wrong.length&&st.i===0&&act==='answer';
  return `<div class="lw-answers ${n===5?'lw-five':''} ${q.optCls||''}">`+q.opts.map(o=>{const k=o[0],w=wrong.indexOf(k)>=0,isA=k===String(q.a);
    return `<button class="lw-ans${w?' lw-wrong':''}${shake===k?' lw-shake':''}${hint&&isA?' lw-wig':''}${guide&&isA?' lw-guide':''}${mark?mark(k):''}" style="--c:${o[2]}" data-act="${act}" data-k="${k}"${w?' disabled':''}>${/^</.test(o[1])?'':'<span class="lw-dot"></span>'}${o[1]}${guide&&isA?HAND:''}</button>`}).join('')+'</div>';
}
function qBody(){
  const q=st.qs[st.i];
  if(st.done)return `<div class="lw-fb lw-ok lw-pop"><b>${q.head}</b><span>${q.ok}</span></div>
<button class="lw-btn lw-wide" data-act="next">${st.i<st.qs.length-1?'Lanjut':'Lihat hasil'}</button>`;
  const fb=st.wrong.length?`<div class="lw-fb lw-no"><span>${st.wrong.length>=2?'Lihat pilihan yang bergoyang, itu jawabannya.':'Belum tepat. Coba lagi, ya.'}</span></div>`:'';
  return fb+answersHTML(q,st.wrong,st.shake,'answer');
}
function simHead(){return `<div class="lw-simhead"><div class="lw-clockmini">${analog(0,0,{id:'lw-sA',mini:true})}<span class="lw-digi" id="lw-sD"></span></div><div class="lw-simlab" id="lw-sLab"></div></div>`}
function slider(id,v,max,step,label,cls){return `<input type="range" id="${id}" class="${cls||''}" min="0" max="${max}" step="${step}" value="${v}" aria-label="${label}">`}
function simBody(){
  if(st.done)return `<div class="lw-fb lw-ok lw-pop"><b>Tepat sekali!</b></div><button class="lw-btn lw-wide" data-act="simNext">${st.i<st.ms.length-1?'Lanjut':'Lihat hasil'}</button>`;
  return (st.miss?`<div class="lw-fb lw-no"><span>Belum tepat. Yang kamu pilih: ${st.miss}. Geser lagi, ya.</span></div>`:'')+'<button class="lw-btn lw-wide" data-act="simCheck">Ini waktunya!</button>';
}
function modeBtn(m,i){const o=MODES[m];return `<button class="lw-mode" style="--c:${o.c}" data-act="start" data-m="${m}">
<span class="lw-badge">${i}</span><span class="lw-txt"><span class="lw-age">${o.age}</span><h3>${o.n}</h3><small>${o.d}${m==='kilat'&&best.kilatHi?` \u00b7 rekor ${best.kilatHi}`:''}</small></span>${starRow(best[m]||0)}</button>`}
function sayBtn(){return `<button class="lw-say" data-act="baca" aria-label="Bacakan soal">${IC.say}</button>`}

const V={
  intro(){
    const cont=totalStars()>0;
    return `<section class="lw-card lw-col lw-intro">
  <div class="lw-strip">${P.map(p=>`<figure><div class="lw-mini">${scene(p.k)}</div><figcaption style="color:${col(p.k)}">${p.n}</figcaption></figure>`).join('')}</div>
  <h2>Langit Waktu Shalat</h2>
  <div class="lw-flow"><span>Lihat langit</span><span>Kenali waktunya</span><span>Jaga shalat</span></div>
  <div class="lw-ayat"><span id="lw-type"></span><small>${AYAT[1]}</small></div>
  <button class="lw-mulai${cont?' lw-long':''}" data-act="mulai">${cont?'LANJUT<br>MAIN':'MULAI'}</button>
  <p class="lw-brand">hurufa.com \u00b7 t.me/hurufacom</p>
</section>`;
  },
  home(){
    const tot=totalStars();let rk=RANKS[0],nx=null;RANKS.forEach(r=>{if(tot>=r[0])rk=r;else if(!nx)nx=r});
    const g=grp=>Object.keys(MODES).map((m,i)=>MODES[m].g===grp?modeBtn(m,i+1):'').join('');
    return `<section class="lw-card lw-col">
  <h2 class="lw-h2">Jelajah Langit</h2>
  <p class="lw-sub" style="margin-top:-8px">Geser bulatan kuning. Lihat langit, jam, dan bayangan tongkat berubah.</p>
  <div class="lw-tabs">${SCN.map(s=>`<button class="lw-tab${HX.scene===s[0]?' lw-act':''}" data-act="scene" data-k="${s[0]}">${s[1]}</button>`).join('')}</div>
  <div class="lw-frame" id="lw-sFrame">${simSVG(HX.scene)}</div>
  ${simHead()}
  <div class="lw-slide" id="lw-slide">${slider('lw-sRange',HX.v,1435,5,'Geser waktu')}${best.hand?'':HAND.replace('class="lw-hand"',`class="lw-hand" id="lw-hand" style="left:calc(${(HX.v/1435).toFixed(3)} * (100% - 40px))"`)}</div>
  <div class="lw-ends"><span>dini hari</span><span>siang</span><span>malam</span></div>
  <p class="lw-sub">Garis putih di tanah menandai bayangan yang sepanjang tongkat. Jamnya hanya contoh, ikuti jadwal shalat di daerahmu.</p>
</section>
<section class="lw-card lw-rank"><svg class="lw-bigstar lw-on" viewBox="0 0 24 24">${STAR}</svg>
  <div style="flex:1"><b>${rk[1]}</b><small>${tot} dari ${MAXS} bintang${nx?` \u00b7 ${nx[0]-tot} lagi jadi ${nx[1]}`:''}</small><div class="lw-bar"><i style="width:${Math.round(tot/MAXS*100)}%"></i></div></div></section>
<h2 class="lw-sec">Belajar</h2>
<div class="lw-quad">
  <button class="lw-tile" style="--c:${col('zuhur')}" data-act="learn">${IC.langit}Lima Langit</button>
  <button class="lw-tile" style="--c:var(--jam)" data-act="clock">${IC.jam}Kenal Jam</button>
  <button class="lw-tile" style="--c:var(--menit)" data-act="world">${IC.dunia}Waktu Dunia</button>
  <button class="lw-tile" style="--c:${col('isya')}" data-act="table">${IC.tabel}Ringkasan</button>
</div>
<h2 class="lw-sec">Bermain: Waktu Shalat</h2><p class="lw-secsub">Dari yang mudah sampai paling sulit.</p>
<section class="lw-menu">${g('shalat')}</section>
<h2 class="lw-sec">Bermain: Jam dan Waktu Dunia</h2><p class="lw-secsub">Belajar dulu di Kenal Jam dan Waktu Dunia.</p>
<section class="lw-menu">${g('jam')}</section>
<p class="lw-note">Untuk orang tua: jam di game ini hanya contoh untuk mengenali tanda waktu. Untuk jam tepatnya, ikuti jadwal shalat di daerah Anda. Progres tersimpan di perangkat ini saja.<br>hurufa.com \u00b7 t.me/hurufacom</p>`;
  },
  learn(){
    const p=P[st.i];
    return `<section class="lw-card lw-learn lw-col" style="--c:${col(p.k)}">
  <div class="lw-frame lw-pop">${scene(p.k)}</div>
  <div class="lw-row" style="align-items:center;justify-content:space-between"><h2>${p.n}</h2><span class="lw-tag">${p.r} rakaat</span></div>
  <p><b>${p.cap}.</b> ${p.desc}</p>
  <dl class="lw-facts"><div><dt>Mulai</dt><dd>${p.mulai}</dd></div><div><dt>Berakhir</dt><dd>${p.akhir}</dd></div><div><dt>Rawatib</dt><dd>${p.raw}</dd></div><div><dt>Bacaan imam</dt><dd>${p.baca}</dd></div></dl>
  <div class="lw-dots">${P.map((_,i)=>`<i class="${i===st.i?'lw-on2':''}"></i>`).join('')}</div>
  <div class="lw-row">${st.i>0?'<button class="lw-btn lw-ghost" data-act="lprev">Sebelumnya</button>':''}
  ${st.i<4?'<button class="lw-btn" data-act="lnext">Berikutnya</button>':'<button class="lw-btn" data-act="start" data-m="tebak">Main Tebak Langit</button>'}</div>
</section>`;
  },
  clock(){
    return `<section class="lw-card lw-col">
  <h2 class="lw-h2" style="text-align:center">Kenal Jam Analog dan Digital</h2>
  <div class="lw-clockpair">
    <div class="lw-anabox" id="lw-cBox">${analog(0,0,{id:'lw-cA',mins:true})}</div>
    <div class="lw-digibox"><small>Jam digital</small><span class="lw-digi lw-dmid" id="lw-cD"></span><span class="lw-perchip" id="lw-cP"></span></div>
  </div>
  <div class="lw-legend"><span style="background:var(--jam)">Jarum pendek = jam</span><span style="background:var(--menit)">Jarum panjang = menit</span></div>
  <p class="lw-sayline" id="lw-cSay"></p>
  <p class="lw-hint" id="lw-cHow"></p>
  <p class="lw-sub" style="text-align:center">Tarik jarum panjang, atau pakai tombol di bawah.</p>
  <div class="lw-steps">
    <button class="lw-btn lw-ghost" data-act="tstep" data-k="-60">\u2212 1 jam</button><button class="lw-btn lw-ghost" data-act="tstep" data-k="60">+ 1 jam</button>
    <button class="lw-btn lw-ghost" data-act="tstep" data-k="-5">\u2212 5 menit</button><button class="lw-btn lw-ghost" data-act="tstep" data-k="5">+ 5 menit</button>
  </div>
  <button class="lw-btn lw-wide" data-act="tplay" id="lw-tplay">Putar jam otomatis</button>
</section>
<section class="lw-card lw-col">
  <h3 style="font-size:21px">Analog 12 jam, digital 24 jam</h3>
  <p>Jam analog hanya sampai angka 12, jadi pukul 7 pagi dan pukul 7 malam jarumnya sama. Jam digital memakai 24 jam: setelah 12.00, angkanya lanjut 13, 14, sampai 23.</p>
  <div class="lw-ex"><div>${analog(7,0)}${digi(7,0)}<span>7 pagi</span></div><div>${analog(7,0)}${digi(19,0)}<span>7 malam</span></div></div>
  <button class="lw-btn lw-wide" data-act="start" data-m="jam">Main Kuis Jam</button>
</section>`;
  },
  world(){
    return `<section class="lw-card lw-col">
  <h2 class="lw-h2" style="text-align:center">Jelajah Waktu Dunia</h2>
  <p>Bumi itu bulat dan terus berputar. Bagian yang menghadap matahari sedang siang, bagian yang membelakanginya sedang malam. Karena itu jam di tiap kota bisa berbeda.</p>
  ${earthSVG()}
  <div class="lw-simhead"><span class="lw-pill">Jam di Jakarta</span><span class="lw-digi lw-dmid" id="lw-wD"></span></div>
  <div>${slider('lw-wRange',st.wv,1410,30,'Jam di Jakarta','lw-plain')}<div class="lw-ends"><span>00.00</span><span>12.00</span><span>23.30</span></div></div>
  <button class="lw-btn lw-wide" data-act="wplay" id="lw-wplay">Putar bumi</button>
</section>
<div class="lw-cities">${PETA.map(p=>`<div id="lw-wc-${p[0]}">.</div>`).join('')}</div>
<section class="lw-card lw-col">
  <h3 style="font-size:21px">Tiga zona waktu Indonesia</h3>
  <p><b>WIB</b> (Jakarta, Medan, Pontianak). <b>WITA</b> 1 jam lebih cepat (Makassar, Bali, Balikpapan). <b>WIT</b> 2 jam lebih cepat dari WIB (Jayapura, Ambon).</p>
  <p class="lw-sub">Jam kota luar negeri memakai contoh bulan November. Beberapa negara memajukan jamnya di musim panas.</p>
  <button class="lw-btn lw-wide" data-act="start" data-m="dunia">Main Kuis Waktu Dunia</button>
</section>`;
  },
  table(){
    return `<section class="lw-card lw-col">
  <h2 style="font-size:26px">Ringkasan lima waktu</h2>
  <div class="lw-sum"><div><b>17</b>rakaat shalat wajib sehari semalam</div><div><b>12</b>rakaat sunnah rawatib sehari semalam</div></div>
  <div class="lw-scroll"><table><tr><th>Shalat</th><th>Rakaat</th><th>Rawatib</th><th>Bacaan imam</th></tr>
  ${P.map(p=>`<tr style="--c:${col(p.k)}"><td>${p.n}</td><td class="lw-n">${p.r}</td><td>${p.raw}</td><td>${p.baca}</td></tr>`).join('')}</table></div>
</section>
<section class="lw-card lw-col">
  <h2 style="font-size:22px">Kenapa harus tepat waktu?</h2>
  <p class="lw-quote">\u201c${AYAT[0]}\u201d<small>${AYAT[1]}</small></p>
  <p class="lw-quote">Nabi \ufdfa ditanya tentang amal yang paling dicintai Allah. Beliau menjawab, \u201cShalat pada waktunya.\u201d<small>HR. Bukhari dan Muslim</small></p>
  <p class="lw-quote">Siapa yang mengerjakan 12 rakaat shalat sunnah sehari semalam, dibangunkan untuknya rumah di surga.<small>HR. Muslim</small></p>
  <button class="lw-btn lw-wide" data-act="start" data-m="rakaat">Main Hitung Rakaat</button>
</section>`;
  },
  quiz(){
    const q=st.qs[st.i],pic=st.done&&q.picDone?q.picDone:q.pic;
    const prog='<div class="lw-progress">'+st.qs.map((_,i)=>`<i class="${i<st.i||(i===st.i&&st.done)?'lw-done':i===st.i?'lw-now':''}"></i>`).join('')+'</div>';
    return `${prog}<section class="lw-card lw-col">
  ${pic||''}
  <div class="lw-askrow"><p class="lw-ask">${q.text}</p>${sayBtn()}</div>${q.hint&&!st.done?`<p class="lw-hint">Petunjuk: ${q.hint}</p>`:''}
  <div id="lw-qbody" class="lw-col">${qBody()}</div>
</section>`;
  },
  order(){
    const all=st.solved;
    return `<section class="lw-card lw-col">
  <p class="lw-ask">Susun langit dari Subuh sampai Isya</p>
  <p class="lw-hint">${all?'Maa syaa Allah, urutannya benar!':'Ketuk dua gambar untuk menukar tempatnya.'}</p>
  <div class="lw-list">${st.arr.map((k,i)=>{const good=st.marks[i]===true,bad=st.marks[i]===false;
    return `<button class="lw-item${st.sel===i?' lw-sel':''}${good?' lw-good':''}${bad&&st.justChecked?' lw-shake':''}" data-act="pick" data-i="${i}" aria-label="Urutan ${i+1}">
<span class="lw-num">${i+1}</span><span class="lw-thumb">${scene(k)}</span><span class="lw-lab">${good?BY[k].n:''}</span></button>`}).join('')}</div>
  ${all?'<button class="lw-btn lw-wide" data-act="finishOrder">Lihat hasil</button>':'<button class="lw-btn lw-wide" data-act="check">Periksa urutan</button>'}
</section>`;
  },
  memo(){
    return `<section class="lw-card lw-col">
  <p class="lw-ask">Cari pasangan langit dan nama shalatnya</p>
  <div class="lw-statline"><span class="lw-pill">Langkah: <span id="lw-moves">0</span></span><span class="lw-pill">Pasangan: <span id="lw-found">0</span>/5</span></div>
  <div class="lw-memo">${st.cards.map((c,i)=>`<button class="lw-mc" style="--c:${col(c.k)}" data-act="flip" data-i="${i}" aria-label="Kartu ${i+1}">
<span class="lw-in"><span class="lw-face lw-back">?</span><span class="lw-face lw-front">${c.t==='sky'?scene(c.k):`<span class="lw-nm">${BY[c.k].n}<small>${BY[c.k].r} rakaat</small></span>`}</span></span></button>`).join('')}</div>
</section>`;
  },
  sim(){
    const m=st.ms[st.i];
    return `<div class="lw-progress">${st.ms.map((_,i)=>`<i class="${i<st.i||(i===st.i&&st.done)?'lw-done':i===st.i?'lw-now':''}"></i>`).join('')}</div>
<section class="lw-card lw-col">
  <div class="lw-askrow"><p class="lw-ask">${m[1]}</p>${sayBtn()}</div>
  <div class="lw-frame">${simSVG(st.scene)}</div>
  ${simHead()}
  <div>${slider('lw-sRange',st.v,1435,5,'Geser waktu')}<div class="lw-ends"><span>dini hari</span><span>siang</span><span>malam</span></div></div>
  <div id="lw-simBody" class="lw-col">${simBody()}</div>
</section>`;
  },
  kilat(){
    if(st.paused)return `<section class="lw-card lw-col lw-pausebox"><h2 class="lw-h2">Permainan dijeda</h2><p class="lw-sub">Waktu berhenti. Skor kamu ${st.score}.</p><button class="lw-btn lw-wide" data-act="kpause">Lanjut main</button></section>`;
    const q=st.q,left=Math.max(0,st.end-Date.now()),pic=st.lock&&q.picDone?q.picDone:q.pic;
    const mark=k=>!st.lock?'':k===String(q.a)?' lw-good':k===st.picked?' lw-bad':'';
    return `<div class="lw-kbar"><i id="lw-kfill" class="${left<10000?'lw-low':''}" style="width:${left/600}%"></i></div>
<div class="lw-statline"><span class="lw-score">${st.score}<small>poin</small></span><span class="lw-pill">Waktu <span id="lw-ktime">${Math.ceil(left/1000)}</span></span>
<span class="lw-pill${st.streak>=3?' lw-hot':''}">Beruntun ${st.streak}</span><span class="lw-pill"><span class="lw-lives">${[0,1,2].map(i=>`<i class="${i<st.lives?'':'lw-offd'}"></i>`).join('')}</span></span>
<button class="lw-pill" data-act="kpause">Jeda</button></div>
<section class="lw-card lw-col">
  ${pic?pic.replace('lw-frame','lw-frame lw-short'):''}
  <p class="lw-ask">${q.text}</p>
  ${answersHTML(q,[],null,'kans',mark)}
</section>`;
  },
  result(){
    const msg=['','Terus berlatih, ya. Kamu pasti bisa.','Bagus! Sedikit lagi sempurna.','Maa syaa Allah! Hebat sekali.'][st.stars];
    let sparks='';if(st.stars===3)for(let i=0;i<14;i++)sparks+=`<svg class="lw-spark" viewBox="0 0 24 24" style="left:${4+i*7}%;animation-delay:${(i%5)*.18}s">${STAR}</svg>`;
    const rv=st.rv&&st.rv.length?`<div class="lw-review"><b>Perlu diulang:</b> ${st.rv.slice(0,4).join(' \u00b7 ')}</div>`:'';
    return `<section class="lw-card lw-result">${sparks}
  <div class="lw-big">${starRow(st.stars)}</div>
  <h2>${msg}</h2><p>${st.detail}</p>${rv}
  <p class="lw-hint">Yuk, jaga shalat lima waktu tepat pada waktunya.</p>
  <div class="lw-row" style="width:100%"><button class="lw-btn lw-ghost" data-act="home">Beranda</button><button class="lw-btn" data-act="start" data-m="${st.mode}">Main lagi</button></div>
  <p class="lw-brand">hurufa.com \u00b7 t.me/hurufacom</p>
</section>`;
  }
};
function render(enter){
  const a=app();a.classList.toggle('lw-enter',!!enter);a.innerHTML=V[st.view]();
  $('lw-home').hidden=st.view==='home'||st.view==='intro';
  if(st.view==='order')st.justChecked=false;
  if(st.view==='home'){HX.per=null;simUpdate(false)}
  if(st.view==='sim'){st.per=null;simUpdate(false)}
  if(st.view==='clock')clockUpdate();
  if(st.view==='world')worldUpdate();
  if(st.view==='intro'&&enter){
    const el=$('lw-type'),txt='\u201c'+AYAT[0]+'\u201d';let n=calm?txt.length:0;el.textContent=txt.slice(0,n);
    const iv=setInterval(()=>{n+=2;el.textContent=txt.slice(0,n);if(n>=txt.length)clearInterval(iv)},28);ivs.push(iv);
  }
}
function finish(mode,stars,detail,rv){stopAmb();saveBest(mode,stars);sfx.win();go({view:'result',mode,stars,detail,rv:rv||[]});if(stars===3)later(confetti,200)}
function clockUpdate(){
  const tm=wrap(st.tm),h=Math.floor(tm/60),m=tm%60;
  setHands('lw-cA',st.tm);$('lw-cD').innerHTML=digiIn(h,m);
  $('lw-cP').innerHTML=(lightAt(tm)>.25?IC.sun:IC.moon)+perOf(h);
  $('lw-cSay').textContent=sayTime(h,m)+'.';$('lw-cHow').textContent=howTime(h,m);
}

/* ================= AKSI ================= */
function startQuiz(m){
  let qs;
  if(m==='tebak')qs=shuffle(P).map(p=>qSky(p,true)).concat(shuffle(P).slice(0,3).map(p=>qSky(p,false)));
  else if(m==='rakaat')qs=shuffle(rakaatBasic()).concat(shuffle(rakaatExtra()).slice(0,5));
  else if(m==='jam')qs=jamQs();
  else if(m==='dunia')qs=duniaQs();
  else qs=shuffle(CLUES).slice(0,8).map(qClue);
  go({view:'quiz',mode:m,qs,i:0,first:0,tries:0,wrong:[],done:false,rv:[]});
  if(qs[0].amb)ambient(qs[0].amb);
}
function stopPlay(){cancelAnimationFrame(raf);raf=0}
const A={
  mulai(){audio();sfx.ok();enterFS();go({view:'home'});later(confetti,250)},
  home(){go({view:'home'})},
  baca(){const q=st.view==='quiz'?st.qs[st.i]:st.view==='sim'?{text:st.ms[st.i][1]}:null;if(q)baca(q.say||q.text)},
  learn(){sfx.tap();go({view:'learn',i:0});ambient(P[0].k)},
  lnext(){sfx.tap();go({view:'learn',i:st.i+1});ambient(P[st.i].k)},
  lprev(){sfx.tap();go({view:'learn',i:st.i-1});ambient(P[st.i].k)},
  table(){sfx.tap();go({view:'table'})},
  clock(){sfx.tap();go({view:'clock',tm:7*60+15})},
  world(){sfx.tap();go({view:'world',wv:6*60})},
  scene(d){
    if(HX.scene===d.k)return;sfx.tap();HX.scene=d.k;HX.per=null;
    $('lw-sFrame').innerHTML=simSVG(d.k);
    root.querySelectorAll('.lw-tab').forEach(b=>b.classList.toggle('lw-act',b.getAttribute('data-k')===d.k));
    simUpdate(true);
  },
  tstep(d){stopPlay();$('lw-cBox').classList.remove('lw-nodrag');$('lw-tplay').textContent='Putar jam otomatis';st.tm+= +d.k;sfx.tick();clockUpdate()},
  tplay(d,el){
    if(raf){stopPlay();el.textContent='Putar jam otomatis';return}
    el.textContent='Berhenti';const box=$('lw-cBox');box.classList.add('lw-nodrag');let last=0;
    const loop=ts=>{if(st.view!=='clock'){raf=0;return}if(ts-last>40){st.tm+=1;last=ts;clockUpdate();if(st.tm%5===0)sfx.tick()}raf=requestAnimationFrame(loop)};
    raf=requestAnimationFrame(loop);
  },
  wplay(d,el){
    if(raf){stopPlay();el.textContent='Putar bumi';return}
    el.textContent='Berhenti';let last=0;
    const loop=ts=>{if(st.view!=='world'){raf=0;return}if(ts-last>30){st.wv=(st.wv+4)%1440;last=ts;const r=$('lw-wRange');if(r)r.value=st.wv;worldUpdate()}raf=requestAnimationFrame(loop)};
    raf=requestAnimationFrame(loop);
  },
  start(d){
    sfx.tap();const m=d.m;
    if(m==='urut'){let arr;do{arr=shuffle(P.map(p=>p.k))}while(arr.filter((k,i)=>k===P[i].k).length>1);
      go({view:'order',mode:m,arr,sel:null,marks:[],checks:0,solved:false})}
    else if(m==='kartu'){const cards=shuffle(P.map(p=>({k:p.k,t:'sky'})).concat(P.map(p=>({k:p.k,t:'name'}))));
      go({view:'memo',mode:m,cards,open:[],moves:0,found:0,lock:false})}
    else if(m==='geser')go({view:'sim',mode:m,game:true,ms:shuffle(MISSIONS),i:0,first:0,tries:0,done:false,miss:'',v:0,scene:'desa',rv:[]});
    else if(m==='kilat'){
      go({view:'kilat',mode:m,q:kq(),score:0,streak:0,lives:3,end:Date.now()+60000,lock:false,picked:null,sec:60,paused:false,rv:[]});
      kTimer=setInterval(()=>{
        if(st.view!=='kilat'){clearInterval(kTimer);return}
        if(st.paused)return;
        const left=st.end-Date.now(),f=$('lw-kfill'),tx=$('lw-ktime'),s=Math.ceil(left/1000);
        if(f){f.style.width=Math.max(0,left/600)+'%';f.classList.toggle('lw-low',left<10000)}
        if(tx)tx.textContent=Math.max(0,s);
        if(s!==st.sec){st.sec=s;if(s<=5&&s>0)sfx.tick()}
        if(left<=0)kEnd();
      },100);
    }
    else startQuiz(m);
  },
  answer(d,el){
    if(st.done)return;const q=st.qs[st.i];
    if(!best.guide){best.guide=1;store()}
    if(d.k===String(q.a)){
      const r=el.getBoundingClientRect();st.done=true;if(st.tries===0)st.first++;sfx.ok();
      if(q.ambDone)ambient(q.ambDone);
      render();sparkle(r);
    }else{
      if(st.tries===0&&q.rv&&st.rv.indexOf(q.rv)<0)st.rv.push(q.rv);
      st.tries++;st.wrong.push(d.k);st.shake=d.k;sfx.no();
      $('lw-qbody').innerHTML=qBody();st.shake=null;
    }
  },
  next(){
    if(st.i<st.qs.length-1){
      st.i++;st.tries=0;st.wrong=[];st.done=false;sfx.tap();render(true);toTop();
      const q=st.qs[st.i];if(q.amb)ambient(q.amb);else stopAmb();return;
    }
    const n=st.qs.length,f=st.first;finish(st.mode,starsFor(f,n),`${f} dari ${n} soal benar pada tebakan pertama.`,st.rv);
  },
  pick(d){
    if(st.solved)return;const i=+d.i;sfx.tap();
    if(st.sel===null)st.sel=i;else if(st.sel===i)st.sel=null;
    else{[st.arr[st.sel],st.arr[i]]=[st.arr[i],st.arr[st.sel]];st.sel=null;st.marks=[]}
    render();
  },
  check(d,el){
    st.checks++;st.sel=null;st.marks=st.arr.map((k,i)=>k===P[i].k);st.justChecked=true;
    const r=el.getBoundingClientRect();
    if(st.marks.every(Boolean)){st.solved=true;sfx.ok();render();sparkle(r)}else{sfx.no();render()}
  },
  finishOrder(){const c=st.checks;finish('urut',c<=1?3:c===2?2:1,c<=1?'Urutan benar pada percobaan pertama.':`Urutan benar setelah ${c} kali periksa.`)},
  flip(d,el){
    if(st.lock||el.classList.contains('lw-open'))return;
    const s=st,i=+d.i;el.classList.add('lw-open');sfx.flip();s.open.push({i,el});
    if(s.open.length<2)return;
    s.moves++;$('lw-moves').textContent=s.moves;
    const a=s.open[0],b=s.open[1];s.open=[];
    if(s.cards[a.i].k===s.cards[b.i].k){
      s.found++;$('lw-found').textContent=s.found;
      later(()=>{if(st!==s)return;a.el.classList.add('lw-done');b.el.classList.add('lw-done');sfx.ok();sparkle(b.el.getBoundingClientRect())},350);
      if(s.found===5)later(()=>{if(st!==s)return;const m=s.moves;finish('kartu',m<=7?3:m<=10?2:1,`Semua pasangan ditemukan dalam ${m} langkah.`)},1500);
    }else{
      s.lock=true;later(()=>{if(st!==s)return;sfx.no();a.el.classList.remove('lw-open');b.el.classList.remove('lw-open');s.lock=false},1000);
    }
  },
  simCheck(d,el){
    const t=simT(st.v),m=st.ms[st.i],r=el.getBoundingClientRect(),body=$('lw-simBody');
    if(missionOK(m[0],t)){
      st.done=true;if(st.tries===0)st.first++;sfx.ok();st.per=null;
      $('lw-sRange').disabled=true;body.innerHTML=simBody();simUpdate(true);sparkle(r);
    }else{if(st.tries===0)st.rv.push(m[1].replace('Geser ke ',''));st.tries++;st.miss=PER[period(t)][0].toLowerCase();sfx.no();body.innerHTML=simBody()}
  },
  simNext(){
    if(st.i<st.ms.length-1){st.i++;st.tries=0;st.done=false;st.miss='';st.scene=SCN[st.i%3][0];sfx.tap();stopAmb();render(true);toTop();return}
    const n=st.ms.length,f=st.first;finish('geser',starsFor(f,n),`${f} dari ${n} tugas tepat pada percobaan pertama.`,st.rv);
  },
  kans(d,el){
    if(st.lock||st.paused)return;const s=st,q=s.q,r=el.getBoundingClientRect();
    s.lock=true;s.picked=d.k;
    if(d.k===String(q.a)){s.score+=s.streak>=4?2:1;s.streak++;sfx.ok();render();sparkle(r);if(s.streak===5){s.end+=5000}}
    else{s.streak=0;s.lives--;if(q.rv&&s.rv.indexOf(q.rv)<0)s.rv.push(q.rv);sfx.no();render()}
    later(()=>{if(st!==s)return;if(s.lives<=0)return kEnd();s.q=kq(q);s.lock=false;s.picked=null;render()},850);
  },
  kpause(){
    if(st.paused){st.paused=false;st.end=Date.now()+st.left}else{st.paused=true;st.left=st.end-Date.now()}
    sfx.tap();render();
  }
};
function kEnd(){
  if(st.view!=='kilat')return;
  const sc=st.score;if((best.kilatHi||0)<sc){best.kilatHi=sc;store()}
  finish('kilat',sc>=12?3:sc>=7?2:1,`Skor kamu ${sc}. Rekor terbaik ${best.kilatHi}. Raih 12 untuk tiga bintang. Benar 5 kali beruntun menambah 5 detik.`,st.rv);
}

/* ================= KERANGKA DAN SENTUHAN ================= */
root.innerHTML=`<div class="lw-bgsky" aria-hidden="true"><i class="lw-c"></i><i class="lw-c"></i><i class="lw-c"></i></div>
<div class="lw-wrap"><header class="lw-top">
<button class="lw-chip" id="lw-home" data-act="home" aria-label="Kembali ke beranda" hidden>${IC.home}</button>
<h1>Langit Waktu Shalat</h1>
<button class="lw-chip" id="lw-snd" aria-label="Matikan suara" aria-pressed="true">${IC.snd}</button>
<button class="lw-chip" id="lw-fsb" aria-label="Layar penuh">${IC.fs}</button></header>
<main id="lw-app" class="lw-col"></main></div>`;
root.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b||b.disabled||!root.contains(b))return;
  const f=A[b.getAttribute('data-act')];if(f)f({k:b.getAttribute('data-k'),m:b.getAttribute('data-m'),i:b.getAttribute('data-i')},b);
});
root.addEventListener('input',e=>{
  const id=e.target.id;
  if(id==='lw-sRange'){
    const s=st.view==='sim'?st:HX;s.v=+e.target.value;simUpdate(true);
    if(!best.hand){best.hand=1;store();const h=$('lw-hand');if(h)h.remove()}
  }
  if(id==='lw-wRange'&&st.view==='world'){stopPlay();const b=$('lw-wplay');if(b)b.textContent='Putar bumi';st.wv=+e.target.value;worldUpdate()}
});
/* tarik jarum panjang */
let drag=null;
function angAt(e){const b=$('lw-cA').getBoundingClientRect(),cx=b.left+b.width/2,cy=b.top+b.height/2;let a=Math.atan2(e.clientX-cx,cy-e.clientY)*180/Math.PI;return(a+360)%360}
root.addEventListener('pointerdown',e=>{
  const box=e.target.closest('#lw-cBox');if(!box||st.view!=='clock')return;
  stopPlay();const b=$('lw-tplay');if(b)b.textContent='Putar jam otomatis';
  e.preventDefault();drag={min:Math.round(angAt(e)/6)%60};box.classList.add('lw-nodrag');try{box.setPointerCapture(e.pointerId)}catch(x){}
  const cur=wrap(st.tm)%60;let dlt=((drag.min-cur)%60+90)%60-30;st.tm+=dlt;clockUpdate();
});
root.addEventListener('pointermove',e=>{
  if(!drag||st.view!=='clock')return;
  const mn=Math.round(angAt(e)/6)%60,cur=wrap(st.tm)%60,dlt=((mn-cur)%60+90)%60-30;
  if(dlt){st.tm+=dlt;clockUpdate();if(mn%5===0)sfx.tick()}
});
const endDrag=()=>{if(!drag)return;drag=null;const box=$('lw-cBox');if(box)box.classList.remove('lw-nodrag')};
root.addEventListener('pointerup',endDrag);root.addEventListener('pointercancel',endDrag);
$('lw-snd').addEventListener('click',e=>{
  e.stopPropagation();soundOn=!soundOn;const b=$('lw-snd');b.innerHTML=soundOn?IC.snd:IC.mute;b.setAttribute('aria-pressed',soundOn);b.setAttribute('aria-label',soundOn?'Matikan suara':'Nyalakan suara');
  if(!soundOn){stopAmb();try{speechSynthesis.cancel()}catch(x){}}else sfx.tap();
});
$('lw-fsb').addEventListener('click',e=>{e.stopPropagation();if(isFS())exitFS();else enterFS()});
render(true);
})();
