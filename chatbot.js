// @charset "UTF-8";
(function(){

// 1. 視覺與本站主題同步：使用深海藍與點綴金
var css='#xbot-btn{position:fixed;bottom:10%;right:2.5%;transform:none;width:68px;height:68px;border-radius:50%;background:#003F88;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(0,63,136,0.35);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;z-index:99999;transition:transform 0.2s;}#xbot-btn:hover{transform:scale(1.05);background:#002B5E;}#xbot-label{color:#fff;font-size:11px;font-weight:600;letter-spacing:1px;font-family:"Noto Sans TC",sans-serif;}#xbot-dot{position:fixed;bottom:calc(10% + 58px);right:calc(2.5% - 6px);width:12px;height:12px;background:#F5A800;border-radius:50%;border:2px solid #fff;z-index:99999;}#xbot-win{position:fixed;bottom:calc(10% + 80px);right:2.5%;transform:none;width:360px;height:520px;border-radius:12px;background:#fff;border:1px solid #C8DDEF;box-shadow:0 8px 32px rgba(0,63,136,0.18);display:none;flex-direction:column;overflow:hidden;z-index:99998;font-family:"Noto Sans TC",sans-serif;}#xbot-win.xopen{display:flex;}#xbot-hdr{background:#003F88;padding:14px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}#xbot-av{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;}#xbot-name{font-size:15px;font-weight:700;color:#fff;}#xbot-status{font-size:11px;color:rgba(255,255,255,0.7);margin-top:2px;}#xbot-msgs{flex:1;overflow-y:auto;padding:16px 12px;display:flex;flex-direction:column;gap:12px;background:#F2F8FF;}#xbot-msgs::-webkit-scrollbar{width:4px;}#xbot-msgs::-webkit-scrollbar-thumb{background:#C8DDEF;border-radius:3px;}.xbrow{display:flex;align-items:flex-end;gap:8px;}.xbav{width:28px;height:28px;border-radius:50%;background:#0098B4;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;margin-bottom:2px;}.xbub{max-width:85%;padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.6;word-wrap:break-word;}.xbot-b{background:#fff;color:#1A2840;border:1px solid #C8DDEF;border-bottom-left-radius:4px;box-shadow:0 2px 8px rgba(0,63,136,0.05);}.xurow{display:flex;justify-content:flex-end;}.xusr-b{background:#003F88;color:#fff;border-bottom-right-radius:4px;}.xchips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}.xchip{background:#fff;border:1px solid #0098B4;border-radius:20px;padding:5px 12px;font-size:12px;color:#0098B4;cursor:pointer;font-family:"Noto Sans TC",sans-serif;transition:all 0.2s;}.xchip:hover{background:#0098B4;color:#fff;}.xlcard{display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #C8DDEF;border-radius:8px;padding:10px 12px;margin-top:8px;text-decoration:none;cursor:pointer;transition:all 0.2s;}.xlcard:hover{border-color:#F5A800;box-shadow:0 2px 12px rgba(245,168,0,0.15);}.xlic{width:32px;height:32px;border-radius:6px;background:#E8F2FC;color:#003F88;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:16px;}.xltit{font-size:13px;font-weight:700;color:#003F88;}.xlsub{font-size:11px;color:#5A6A80;margin-top:2px;}#xbot-irow{display:flex;gap:8px;padding:12px;border-top:1px solid #C8DDEF;background:#fff;flex-shrink:0;align-items:center;}#xbot-inp{flex:1;border:1px solid #C8DDEF;border-radius:20px;padding:8px 14px;font-size:13px;outline:none;color:#1A2840;background:#F2F8FF;font-family:"Noto Sans TC",sans-serif;transition:border 0.2s;}#xbot-inp:focus{border-color:#003F88;background:#fff;}#xbot-sbtn{width:36px;height:36px;border-radius:50%;background:#F5A800;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#003F88;font-size:16px;font-weight:900;transition:all 0.2s;}#xbot-sbtn:hover{background:#ffc02a;}@media(min-width:701px){#xbot-win{height:calc(80vh - 80px);}}@media(max-width:700px){#xbot-win{width:calc(100vw - 32px);right:16px;height:calc(85vh - 80px);}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

var wrap=document.createElement('div');
document.body.appendChild(wrap);
wrap.innerHTML=[
'<span id="xbot-dot" style="background:#F5A800;"></span>',
'<button id="xbot-btn" onclick="xbotToggle()">',
'<span id="xico-chat" style="font-size:28px;">🤖</span>',
'<span id="xico-close" style="display:none;color:white;font-size:22px;line-height:1;">✕</span>',
'<span id="xbot-label">導覽</span></button>',
'<div id="xbot-win"><div id="xbot-hdr">',
'<div id="xbot-av">💡</div>',
'<div style="flex:1;"><div id="xbot-name">城市學習導覽員</div>',
'<div id="xbot-status"><span style="color:#4ade80;">●</span> AI 智慧引導中</div></div>',
'<button id="xbot-fs" onclick="xbotFullscreen()" style="background:rgba(255,255,255,0.15);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;margin-right:4px;" title="放大">⛶</button>',
'<button onclick="xbotToggle()" style="background:rgba(255,255,255,0.15);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;">✕</button>',
'</div><div id="xbot-msgs"></div>',
'<div id="xbot-irow"><input id="xbot-inp" placeholder="輸入關鍵字，如：樂齡、職訓、淨零..."/>',
'<button id="xbot-sbtn" onclick="xbotSend()">➤</button></div></div>'
].join('');

// 2. 知識庫全面改寫：對應「高雄城市學習網絡」的資源與網址
var KB_ALL     = { keys:["全部","資源清單","所有課程"], label:"🗺️ 探索全部學習資源", desc:"瀏覽高雄市9大局處、18個學習管道的完整清單", url:"resources.html" };
var KB_SENIOR  = { keys:["老人","長輩","長青","樂齡","退休","高齡","55歲"], label:"🌸 樂齡與高齡學習", desc:"長青學苑、樂齡學習中心、銀髮人才服務等專屬資源", url:"resources.html?f=senior" };
var KB_WORK    = { keys:["工作","就業","職訓","勞工","轉職","青年","履歷"], label:"💼 職涯發展與訓練", desc:"勞工大學、產訓合作、職場任我行計畫", url:"resources.html?f=work" };
var KB_ECO     = { keys:["環保","淨零","永續","生態","氣候","環境教育"], label:"🌿 永續環境與淨零", desc:"淨零學院認證課程、22處環境教育設施", url:"resources.html?f=eco" };
var KB_CULTURE = { keys:["文化","藝術","看書","圖書館","美術館","內惟","展覽","原住民","部落"], label:"🎨 文化與藝術體驗", desc:"市立圖書館、高美講堂、原住民族部落大學", url:"resources.html?f=culture" };
var KB_DIST    = { keys:["哪裡","地點","行政區","偏鄉","附近","楠梓","左營","鼓山","鳳山"], label:"📍 38行政區據點查詢", desc:"查看全市各行政區的學習據點覆蓋狀況", url:"resources.html#districts" };
var KB_ANN     = { keys:["公告","最新消息","活動","近期"], label:"📢 最新公告資訊", desc:"查看各局處發布的最新課程與活動公告", url:"index.html#announcements" };

var ALL_KB = [KB_ALL, KB_SENIOR, KB_WORK, KB_ECO, KB_CULTURE, KB_DIST, KB_ANN];

var msgs, inp, opened=false;

function lcard(item){
  return '<a class="xlcard" href="'+item.url+'"><div class="xlic">🔗</div><div><div class="xltit">'+item.label+'</div><div class="xlsub">'+item.desc+'</div></div></a>';
}
function addBot(html){
  var row=document.createElement('div'); row.className='xbrow';
  row.innerHTML='<div class="xbav">💡</div><div class="xbub xbot-b">'+html+'</div>';
  msgs.appendChild(row); msgs.scrollTop=msgs.scrollHeight;
}
function addUser(text){
  var row=document.createElement('div'); row.className='xurow';
  row.innerHTML='<div class="xbub xusr-b">'+text+'</div>';
  msgs.appendChild(row); msgs.scrollTop=msgs.scrollHeight;
}

window.xbotProcess=function(text){
  var t=text.trim(); if(!t)return;
  addUser(t); inp.value='';

  // 站內關鍵字攔截機制
  var matched=[];
  for(var i=0;i<ALL_KB.length;i++){
    var item=ALL_KB[i];
    for(var j=0;j<item.keys.length;j++){ if(t.indexOf(item.keys[j])>=0){ matched.push(item); break; } }
  }

  setTimeout(function(){
    if(matched.length===0){ xbotAskAI(t); return; } // 若無靜態關鍵字命中，丟給 AI
    
    var html = '為您找到適合的學習管道，請點擊查看：';
    for(var n=0;n<matched.length;n++){ html += lcard(matched[n]); }
    addBot(html);
  }, 300);
};

// 3. AI 提示詞 (System Prompt) 徹底針對本專案客製化
window.xbotAskAI=function(text){
  var loadRow=document.createElement('div'); loadRow.className='xbrow';
  loadRow.innerHTML='<div class="xbav">💡</div><div class="xbub xbot-b" id="xbot-loading"><span style="color:#5A6A80;font-size:12px;">思考中...</span></div>';
  msgs.appendChild(loadRow); msgs.scrollTop=msgs.scrollHeight;

  var systemPrompt='你是「高雄城市學習網絡」的智慧導覽客服。你的任務是協助市民尋找終身學習資源。\n'+
    '本網站整合了高雄市9大局處（如教育局、勞工局、社會局、環保局、圖書館等）、涵蓋38個行政區的學習管道。\n'+
    '主要分類包含：樂齡族群(長青學苑/樂齡中心)、職涯發展(勞工大學/職訓)、永續環境(淨零學院)、文化藝術(圖書館/美術館)。\n'+
    '回答規則：\n'+
    '1. 語氣專業、清晰、具同理心，完全使用繁體中文。\n'+
    '2. 內容精煉，不要超過150字。\n'+
    '3. 當使用者詢問特定學習需求時，引導他們使用「探索學習資源」功能或點選網頁上的對應分類。\n'+
    '4. 如果問題與學習、課程、教育完全無關（如詢問餐廳、新莊國小、無意義文字），請禮貌地拉回主題，告訴他們你專注於提供高雄市的終身學習資源資訊。';

  var history=[{role:'system',content:systemPrompt}];
  var rows=msgs.querySelectorAll('.xbrow,.xurow');
  for(var i=0;i<rows.length;i++){
    var row=rows[i], bubble=row.querySelector('.xbub');
    if(!bubble) continue;
    var content=bubble.innerText||bubble.textContent;
    if(!content||content.indexOf('思考中...')>=0) continue;
    history.push({role:row.classList.contains('xurow')?'user':'assistant',content:content});
  }
  if(history[history.length-1].role!=='user') history.push({role:'user',content:text});
  if(history.length>15) history=history.slice(0,1).concat(history.slice(history.length-14)); // 縮減上下文長度優化效能

  fetch('https://chatbot.issac-df6.workers.dev',{
    method:'POST', headers:{'Content-Type':'application/json'},
    body:JSON.stringify({messages:history,max_tokens:300})
  })
  .then(function(r){return r.json();})
  .then(function(d){
    var el=document.getElementById('xbot-loading'); if(el) el.parentNode.remove();
    var reply=d.response||(d.result&&d.result.response)||null;
    if(reply){ addBot(reply.replace(/\n/g,'<br>')); }
    else{ addBot('系統忙碌中。您可以直接前往<a href="resources.html" style="color:#003F88;font-weight:700;">學習資源頁面</a>尋找您需要的課程。'); }
  })
  .catch(function(){
    var el=document.getElementById('xbot-loading'); if(el) el.parentNode.remove();
    addBot('連線出現異常。建議您直接點擊網頁上方的「學習資源」瀏覽所有課程清單。');
  });
};

window.xbotSend=function(){ xbotProcess(inp.value); };

window.xbotToggle=function(){
  opened=!opened;
  document.getElementById('xbot-win').classList.toggle('xopen',opened);
  document.getElementById('xico-chat').style.display=opened?'none':'inline';
  document.getElementById('xico-close').style.display=opened?'inline':'none';
  document.getElementById('xbot-label').textContent=opened?'':'關閉';
  document.getElementById('xbot-dot').style.display='none';
  if(opened&&window.innerWidth>700) inp.focus();
};

var _fs=false;
window.xbotFullscreen=function(){
  var win=document.getElementById('xbot-win'), btn=document.getElementById('xbot-fs');
  _fs=!_fs;
  if(_fs){
    win.style.cssText='position:fixed;top:2%;left:2%;right:2%;bottom:2%;width:auto;height:auto;border-radius:16px;z-index:999999;display:flex;flex-direction:column;background:#fff;border:1px solid #C8DDEF;box-shadow:0 8px 32px rgba(0,63,136,0.25);overflow:hidden;font-family:"Noto Sans TC",sans-serif;';
    btn.textContent='⊡'; btn.title='縮小';
  } else {
    win.style.cssText=''; win.classList.add('xopen');
    btn.textContent='⛶'; btn.title='放大';
  }
};

function init(){
  msgs=document.getElementById('xbot-msgs');
  inp=document.getElementById('xbot-inp');
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')xbotSend();});
  
  // 4. 重構初始迎賓訊息與快速分類按鈕
  setTimeout(function(){
    addBot('您好！我是高雄城市學習網絡的智慧導覽員 👋<br>本平台匯集了全市 9 大局處的終身學習資源。<br><br>請輸入您的需求（如：想學電腦、高齡課程），或直接點擊下方分類探索：<div class="xchips">'+
      '<button class="xchip" onclick="xbotProcess(\'樂齡\')">🌸 樂齡族群</button>'+
      '<button class="xchip" onclick="xbotProcess(\'職訓\')">💼 職涯發展</button>'+
      '<button class="xchip" onclick="xbotProcess(\'淨零\')">🌿 永續環境</button>'+
      '<button class="xchip" onclick="xbotProcess(\'文化\')">🎨 文化藝術</button>'+
      '<button class="xchip" onclick="xbotProcess(\'行政區\')">📍 據點查詢</button>'+
      '<button class="xchip" style="background:#003F88;color:#fff;border-color:#003F88;" onclick="xbotProcess(\'全部\')">🗺️ 全部資源清單</button>'+
      '</div>');
  }, 400);
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
