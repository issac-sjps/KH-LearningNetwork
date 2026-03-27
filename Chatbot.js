// @charset "UTF-8";
(function(){

var css='#xbot-btn{position:fixed;bottom:10%;right:2.5%;transform:none;width:68px;height:68px;border-radius:50%;background:#5a4fcf;border:none;cursor:pointer;box-shadow:0 4px 16px rgba(90,79,207,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;z-index:99999;}#xbot-btn:hover{background:#4338b0;}#xbot-label{color:#fff;font-size:11px;font-weight:600;letter-spacing:1px;font-family:sans-serif;}#xbot-dot{position:fixed;bottom:calc(10% + 58px);right:calc(2.5% - 6px);width:12px;height:12px;background:#4ade80;border-radius:50%;border:2px solid #fff;z-index:99999;}#xbot-win{position:fixed;bottom:calc(10% + 80px);right:2.5%;transform:none;width:340px;height:480px;border-radius:16px;background:#fff;border:1px solid #ddd8ff;box-shadow:0 8px 32px rgba(0,0,0,0.18);display:none;flex-direction:column;overflow:hidden;z-index:99998;font-family:sans-serif;}#xbot-win.xopen{display:flex;}#xbot-hdr{background:#5a4fcf;padding:12px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0;}#xbot-av{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:20px;}#xbot-name{font-size:14px;font-weight:600;color:#fff;}#xbot-status{font-size:11px;color:rgba(255,255,255,0.85);margin-top:1px;}#xbot-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px;background:#f5f4ff;}#xbot-msgs::-webkit-scrollbar{width:3px;}#xbot-msgs::-webkit-scrollbar-thumb{background:#c8c2f5;border-radius:3px;}.xbrow{display:flex;align-items:flex-end;gap:6px;}.xbav{width:24px;height:24px;border-radius:50%;background:#e0dcff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-bottom:2px;}.xbub{max-width:85%;padding:8px 12px;border-radius:14px;font-size:13px;line-height:1.6;}.xbot-b{background:#fff;color:#222;border:1px solid #e0dcff;border-bottom-left-radius:3px;}.xurow{display:flex;justify-content:flex-end;}.xusr-b{background:#5a4fcf;color:#fff;border-bottom-right-radius:3px;}.xchips{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px;}.xchip{background:#fff;border:1px solid #c0b8f5;border-radius:20px;padding:4px 11px;font-size:12px;color:#5a4fcf;cursor:pointer;font-family:sans-serif;}.xchip:hover{background:#eeeaff;}.xlcard{display:flex;align-items:center;gap:8px;background:#eeeaff;border:1px solid #d0c8ff;border-radius:10px;padding:9px 11px;margin-top:5px;text-decoration:none;cursor:pointer;display:flex;}.xlcard:hover{background:#e0d9ff;}.xlic{width:28px;height:28px;border-radius:7px;background:#5a4fcf;flex-shrink:0;display:flex;align-items:center;justify-content:center;}.xltit{font-size:12.5px;font-weight:600;color:#3a2fa0;}.xlsub{font-size:11px;color:#7a72cc;margin-top:1px;}#xbot-irow{display:flex;gap:8px;padding:9px 11px;border-top:1px solid #ede9ff;background:#fff;flex-shrink:0;}#xbot-inp{flex:1;border:1px solid #d0c8ff;border-radius:20px;padding:7px 13px;font-size:13px;outline:none;color:#222;background:#fff;font-family:sans-serif;}#xbot-inp:focus{border-color:#5a4fcf;}#xbot-sbtn{width:34px;height:34px;border-radius:50%;background:#5a4fcf;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:white;font-size:16px;}#xbot-sbtn:hover{background:#4338b0;}@media(min-width:701px){#xbot-win{height:calc(75vh - 80px);}}@media(max-width:700px){#xbot-win{width:calc(100vw - 16px);height:calc(75vh - 80px);}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

var wrap=document.createElement('div');
document.body.appendChild(wrap);
wrap.innerHTML=[
'<span id="xbot-dot" style="background:#4ade80;"></span>',
'<button id="xbot-btn" onclick="xbotToggle()">',
'<span id="xico-chat" style="font-size:26px;">\uD83E\uDDD1\u200D\uD83D\uDCBC</span>',
'<span id="xico-close" style="display:none;color:white;font-size:22px;line-height:1;">\u2715</span>',
'<span id="xbot-label">\u5BA2\u670D</span></button>',
'<div id="xbot-win"><div id="xbot-hdr">',
'<div id="xbot-av">\uD83C\uDF93</div>',
'<div style="flex:1;"><div id="xbot-name">\u65B0\u838A\u5C0F\u5E6B\u624B</div>',
'<div id="xbot-status"><span style="color:#4ade80;">\u25CF</span> \u4E0A\u7DDA\u4E2D</div></div>',
'<div style="display:flex;align-items:center;gap:4px;margin-right:6px;">',
'<button onclick="xbotSetSize(13)" style="background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:11px;font-family:sans-serif;">\u5C0F</button>',
'<button onclick="xbotSetSize(15)" style="background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:12px;font-family:sans-serif;">\u4E2D</button>',
'<button onclick="xbotSetSize(17)" style="background:rgba(255,255,255,0.2);border:none;color:white;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:13px;font-family:sans-serif;">\u5927</button></div>',
'<button id="xbot-fs" onclick="xbotFullscreen()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;" title="\u653E\u5927">\u26F6</button>',
'<button onclick="xbotToggle()" style="background:rgba(255,255,255,0.2);border:none;color:white;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">\u2715</button>',
'</div><div id="xbot-msgs"></div>',
'<div id="xbot-irow"><input id="xbot-inp" placeholder="\u8F38\u5165\u95DC\u9375\u5B57\uFF0C\u4F8B\u5982\uFF1A\u65B0\u751F\u3001\u793E\u5718\u2026"/>',
'<button id="xbot-sbtn" onclick="xbotSend()">\u27A4</button></div></div>'
].join('');

// ════════════════════════════════════════
//  知識庫（依處室排序）
// ════════════════════════════════════════

// ── 教務處 ──
var KB_EDU_TEACH   = { keys:["代課","代理","短代","意願","第二外語","客家語","原住民語","手語"], label:"教務處教學組", tel:"07-3411373", ext:"120" };
var KB_EDU_COMP    = { keys:["學藝競賽","朗讀","寫字","作文","演說","歌唱","說故事","電腦繪圖","拼單字"], label:"教務處教學組", tel:"07-3411373", ext:"120", formUrl:"https://affairs.kh.edu.tw/7956", formLabel:"學藝競賽相關公告" };
var KB_EDU_DEV     = { keys:["教科書","買書","研習","課程計畫","藝文週","靜態展","書籍採購","圖書採購"], label:"教務處研發組", tel:"07-3411373", ext:"113" };
var KB_EDU_REG     = { keys:["畢業成績","學習扶助"], label:"教務處註冊組", tel:"07-3411373", ext:"112" };
var KB_EDU_REG_ATT = { keys:["在學證明"], label:"教務處註冊組", tel:"07-3411373", ext:"112", formUrl:"https://forms.gle/h6vNww82DGqcvMSr8", formLabel:"線上申請在學證明" };
var KB_EDU_REG_SCO = { keys:["成績單","成績證明"], label:"教務處註冊組", tel:"07-3411373", ext:"112", formUrl:"https://forms.gle/2iy9n8H2eaQaBTRc9", formLabel:"線上申請成績單" };
var KB_EDU_SUBSIDY = { keys:["低收","中低收","單親","原住民","原住民獎學金","書籍費補助","簿本費補助","補助","補助申請","學生證"], label:"教務處註冊組", tel:"07-3411373", ext:"112" };
var KB_EDU_IT      = { keys:["電腦","電腦相關","電子設備","資訊","資訊組"], label:"教務處資訊組", tel:"07-3411373", ext:"119" };
var KB_EDU_GENERAL = { keys:["教務處"], label:"教務處", tel:"07-3411373", ext:"111" };
var KB_EDU_DIR     = { keys:["教務處主任","沖繩","畢業旅行","實習","實習老師"], label:"教務處主任", tel:"07-3411373", ext:"111" };
var KB_ADDRESS     = { keys:["學校地址","地址"], label:"學校地址", info:"📍 （813023）高雄市左營區自由三路一號" };
var KB_TAX_ID      = { keys:["學校統編","統編","統一編號"], label:"學校統一編號", info:"🏫 新莊國小統一編號：<b>76247691</b>" };
var KB_HOURS       = { keys:["營業時間","上班時間","有人","上班"], label:"營業時間", info:"🕐 本校服務時間：<b>07:00 - 16:30（不含六日）</b><br><br>📚 教務處 <a href='tel:07-3411373#111' style='color:#5a4fcf;font-weight:600;'>☎ 07-3411373 分機111</a><br>🏫 學務處 <a href='tel:07-3411373#121' style='color:#5a4fcf;font-weight:600;'>☎ 07-3411373 分機121</a><br>🔧 總務處 <a href='tel:07-3411373#131' style='color:#5a4fcf;font-weight:600;'>☎ 07-3411373 分機131</a><br>💚 輔導處 <a href='tel:07-3411373#141' style='color:#5a4fcf;font-weight:600;'>☎ 07-3411373 分機141</a>" };

// 新生/轉學/國中分發/戶籍
var KB_NEW         = { keys:["新生","入學"], label:"新生入學", url:"https://affairs.kh.edu.tw/8239/bulletin/msg_list/2", extraTel:"07-3411373", extraExt:"112" };
var KB_HOUSE       = { keys:["戶籍","戶口"], label:"本校戶籍查詢", url:"https://affairs.kh.edu.tw/8239/page/view/4", extraTel:"07-3411373", extraExt:"112" };
var KB_DIST        = { keys:["國中","分發"], label:"國中分發", url:"https://affairs.kh.edu.tw/8239/bulletin/msg_list/7", extraTel:"07-3411373", extraExt:"112" };
var KB_TOUT        = { keys:["轉出"], label:"轉學轉出", url:"https://affairs.kh.edu.tw/8239/bulletin/msg_list/3", extraTel:"07-3411373", extraExt:"112", warn:true };
var KB_TIN         = { keys:["轉入"], label:"轉學轉入", url:"https://affairs.kh.edu.tw/8239/bulletin/msg_list/5", extraTel:"07-3411373", extraExt:"112", warn:true };

// 考試/學生人數
var KB_STUDENTS    = { keys:["人數","學生人數","班級人數"], label:"班級人數查詢", info:"🏫 點擊查看新莊國小班級人數：<br><a href='https://esas.kh.edu.tw/Schcls.action?sch=533603' target='_blank' style='color:#5a4fcf;font-weight:600;'>📊 高雄市班級人數查詢系統</a>" };
var KB_MIDTERM     = { keys:["期中考"], label:"期中考", info:"📅 114學年度期中考：<b>4/16(四) ~ 4/17(五)</b>" };
var KB_FINAL       = { keys:["期末考"], label:"期末考", info:"📅 114學年度期末考：<b>6/22(一) ~ 6/23(二)</b>" };
var KB_GRAD_EXAM   = { keys:["六年級期末考","畢業考"], label:"六年級期末考", info:"📅 六年級期末考（畢業考）：<b>5/25(一) ~ 5/26(二)</b>" };
var KB_GRADUATION  = { keys:["畢業典禮","畢典"], label:"畢業典禮", info:"🎓 畢業典禮：<b>6/12(五)</b>" };

// ── 學務處 ──
var KB_STU_GENERAL = { keys:["學務處"], label:"學務處", tel:"07-3411373", ext:"121" };
var KB_STU_CLUB    = { keys:["課後社團","社團"], label:"學務處訓育組", tel:"07-3411373", ext:"125" };
var KB_STU_SPORT   = { keys:["體育","體育活動","競賽","運動會","運動","球"], label:"學務處體育組", tel:"07-3411373", ext:"122" };
var KB_STU_PATROL  = { keys:["導護","導護媽媽"], label:"學務處生教組", tel:"07-3411373", ext:"122" };
var KB_STU_HEALTH  = { keys:["衛生"], label:"學務處衛生組", tel:"07-3411373", ext:"125" };
var KB_STU_TRIP    = { keys:["校外教學"], label:"學務處主任", tel:"07-3411373", ext:"121" };
var KB_STU_DIR     = { keys:["學務處主任"], label:"學務處主任", tel:"07-3411373", ext:"121" };

// ── 總務處 ──
var KB_GEN_GENERAL = { keys:["總務處"], label:"總務處", tel:"07-3411373", ext:"131" };
var KB_GEN_REPAIR  = { keys:["維修","校內維修","設備維修","場地租借","借場地","場地"], label:"總務處事務組", tel:"07-3411373", ext:"137" };
var KB_GEN_LUNCH   = { keys:["午餐補助","午餐"], label:"總務處文資組", tel:"07-3411373", ext:"133" };
var KB_GEN_DIR     = { keys:["總務處主任"], label:"總務處主任", tel:"07-3411373", ext:"131" };

// ── 輔導處 ──
var KB_GUID_GENERAL= { keys:["輔導處"], label:"輔導處", tel:"07-3411373", ext:"141" };
var KB_GUID        = { keys:["資優班","特殊生","特教生","特教","提早入學"], label:"輔導處特教組", tel:"07-3411373", ext:"143" };
var KB_GUID_NEW    = { keys:["新住民補助","新住民獎學金","新住民"], label:"輔導處輔導組", tel:"07-3411373", ext:"143" };
var KB_GUID_DIR    = { keys:["輔導處主任"], label:"輔導處主任", tel:"07-3411373", ext:"141" };

// ── 保健室 / 圖書館 ──
var KB_HEALTH_ROOM = { keys:["保健室","護理師","健康"], label:"保健室護理師", tel:"07-3411373", ext:"123" };
var KB_LIBRARY     = { keys:["圖書館","圖書"], label:"圖書館志工", tel:"07-3411373", ext:"117" };

// ── 人事 / 會計 ──
var KB_HR_DIR      = { keys:["人事室主任","人事主任"], label:"人事室主任", tel:"07-3411373", ext:"151" };
var KB_ACC_DIR     = { keys:["會計室主任","會計主任"], label:"會計室主任", tel:"07-3411373", ext:"161" };

// ── 課後照顧班 ──
var KB_AFTERSCHOOL = { keys:["課後照顧班","課後班","課後照顧"], label:"課後照顧班黃主任", tel:"0935-819166", ext:"" };

// ── 校長室 ──
var KB_PRINCIPAL   = { keys:["找校長","校長室","校長電話","校長分機"], label:"校長室", tel:"07-3411373", ext:"110",
  warn2:"⚠️ 因業務眾多，請先透過各處室主任處理。如處室處理不彰，再由校長介入。若直接找校長，也會回到處室優先處理。" };

var ALL_KB = [
  KB_EDU_TEACH, KB_EDU_COMP, KB_EDU_DEV,
  KB_EDU_REG, KB_EDU_REG_ATT, KB_EDU_REG_SCO,
  KB_EDU_SUBSIDY, KB_EDU_IT, KB_EDU_GENERAL,
  KB_ADDRESS, KB_TAX_ID, KB_HOURS,
  KB_NEW, KB_HOUSE, KB_DIST, KB_TOUT, KB_TIN, KB_EDU_DIR,
  KB_STUDENTS, KB_MIDTERM, KB_FINAL, KB_GRAD_EXAM, KB_GRADUATION,
  KB_STU_GENERAL, KB_STU_CLUB, KB_STU_SPORT, KB_STU_PATROL, KB_STU_HEALTH, KB_STU_TRIP, KB_STU_DIR,
  KB_GEN_GENERAL, KB_GEN_REPAIR, KB_GEN_LUNCH, KB_GEN_DIR,
  KB_GUID_GENERAL, KB_GUID, KB_GUID_NEW, KB_GUID_DIR,
  KB_HEALTH_ROOM, KB_LIBRARY,
  KB_HR_DIR, KB_ACC_DIR,
  KB_AFTERSCHOOL, KB_PRINCIPAL
];

// ── 班級導師查表 ──
var CLASS_MAP = {
  "101":321,"一年一班":321,"102":322,"一年二班":322,"103":323,"一年三班":323,
  "104":324,"一年四班":324,"105":325,"一年五班":325,"106":314,"一年六班":314,
  "201":213,"二年一班":213,"202":214,"二年二班":214,"203":221,"二年三班":221,
  "204":222,"二年四班":222,"205":223,"二年五班":223,"206":224,"二年六班":224,
  "301":821,"三年一班":821,"302":822,"三年二班":822,"303":823,"三年三班":823,
  "304":824,"三年四班":824,"305":831,"三年五班":831,"306":832,"三年六班":832,
  "307":833,"三年七班":833,
  "401":225,"四年一班":225,"402":226,"四年二班":226,"403":234,"四年三班":234,
  "404":235,"四年四班":235,"405":236,"四年五班":236,"406":243,"四年六班":243,
  "407":244,"四年七班":244,"408":245,"四年八班":245,"409":246,"四年九班":246,
  "501":331,"五年一班":331,"502":332,"五年二班":332,"503":333,"五年三班":333,
  "504":334,"五年四班":334,"505":335,"五年五班":335,"506":842,"五年六班":842,
  "507":843,"五年七班":843,"508":844,"五年八班":844,
  "601":311,"六年一班":311,"602":312,"六年二班":312,"603":341,"六年三班":341,
  "604":342,"六年四班":342,"605":343,"六年五班":343,"606":344,"六年六班":344,
  "607":345,"六年七班":345,"608":315,"六年八班":315
};

var msgs, inp, opened=false;

function telLink(tel,ext){
  var full=ext?tel+'#'+ext:tel;
  var display=ext?tel+' 分機'+ext:tel;
  return '<a href="tel:'+full+'" style="color:#5a4fcf;font-weight:600;">☎ '+display+'</a>';
}
function lcard(item){
  return '<a class="xlcard" href="'+item.url+'" target="_blank"><div class="xlic" style="color:white;font-size:14px;">🔗</div><div><div class="xltit">'+item.label+'</div><div class="xlsub">點擊查看相關公告 →</div></div></a>';
}
function addBot(html){
  var row=document.createElement('div'); row.className='xbrow';
  row.innerHTML='<div class="xbav">🎓</div><div class="xbub xbot-b">'+html+'</div>';
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

  // 天氣
  if(t.indexOf('天氣')>=0){
    fetch('https://api.open-meteo.com/v1/forecast?latitude=22.6834&longitude=120.2960&current_weather=true')
      .then(function(r){return r.json();})
      .then(function(d){
        var temp=d.current_weather.temperature, code=d.current_weather.weathercode;
        var desc=code<=1?'晴天☀️':code<=3?'多雲🌤':code<=67?'有雨🌧':code<=77?'有雪❄️':'雷雨⛈';
        addBot('高雄市左營區目前天氣：<b>'+desc+'</b>，氣溫約 <b>'+temp+'°C</b>。<br>有其他想詢問的嗎？😊');
      }).catch(function(){ addBot('今天天氣還不錯喔！😊 有什麼想詢問的嗎？'); });
    return;
  }

  // 日期
  if(t.indexOf('日期')>=0||(t.indexOf('今天')>=0&&t.indexOf('幾號')>=0)){
    var now=new Date(), days=['日','一','二','三','四','五','六'];
    addBot('今天是 <b>'+now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日</b>，星期'+days[now.getDay()]+'。😊');
    return;
  }

  // 班級查詢
  var classExt=null, className=null;
  for(var ck in CLASS_MAP){ if(t.indexOf(ck)>=0){ classExt=CLASS_MAP[ck]; className=ck; break; } }
  if(classExt){
    addBot(className+'班導相關，請找：<div style="background:#eeeaff;border:1px solid #d0c8ff;border-radius:10px;padding:9px 11px;margin-top:5px;"><div style="font-size:12.5px;font-weight:600;color:#3a2fa0;">'+className+' 班導師</div><div style="font-size:12px;margin-top:3px;">'+telLink('07-3411373',String(classExt))+'</div></div>');
    return;
  }

  // 關鍵字比對
  var matched=[], hasTransfer=t.indexOf('轉學')>=0, hasOut=t.indexOf('轉出')>=0, hasIn=t.indexOf('轉入')>=0;
  for(var i=0;i<ALL_KB.length;i++){
    var item=ALL_KB[i];
    if(item===KB_TOUT||item===KB_TIN) continue;
    for(var j=0;j<item.keys.length;j++){ if(t.indexOf(item.keys[j])>=0){ matched.push(item); break; } }
  }
  if(hasTransfer&&!hasIn&&!hasOut){ matched.push(KB_TOUT); matched.push(KB_TIN); }
  else{ if(hasOut)matched.push(KB_TOUT); if(hasIn)matched.push(KB_TIN); }

  var seen={}, unique=[];
  for(var k=0;k<matched.length;k++){ var key=matched[k].label; if(!seen[key]){seen[key]=1;unique.push(matched[k]);} }

  setTimeout(function(){
    if(unique.length===0){ xbotAskAI(t); return; }
    var html=unique.length===1?t+'相關，請找：':'為您找到以下相關單位，請參考：';
    var warnShown=false;
    for(var n=0;n<unique.length;n++){
      var u=unique[n];
      if(u.info){
        html+='<div style="background:#eeeaff;border:1px solid #d0c8ff;border-radius:10px;padding:9px 11px;margin-top:5px;"><div style="font-size:13px;color:#3a2fa0;">'+u.info+'</div></div>';
      } else if(u.url){
        html+=lcard(u);
        if(u.extraTel) html+='<div style="margin-top:4px;font-size:12px;color:#555;">洽詢：'+u.label+' '+telLink(u.extraTel,u.extraExt)+'</div>';
        if(u.warn&&!warnShown){ warnShown=true; html+='<div style="margin-top:6px;padding:7px 10px;background:#fff3cd;border-radius:8px;font-size:12px;color:#856404;">⚠️ 請提早來電 '+telLink('07-3411373','112')+' 預約，以免上課中無法協助辦理。</div>'; }
      } else {
        html+='<div style="background:#eeeaff;border:1px solid #d0c8ff;border-radius:10px;padding:9px 11px;margin-top:5px;">';
        html+='<div style="font-size:12.5px;font-weight:600;color:#3a2fa0;">'+u.label+'</div>';
        html+='<div style="font-size:12px;margin-top:3px;">'+telLink(u.tel,u.ext)+'</div>';
        if(u.formUrl) html+='<a href="'+u.formUrl+'" target="_blank" style="display:inline-block;margin-top:6px;font-size:12px;color:#5a4fcf;font-weight:600;">📝 '+u.formLabel+'</a>';
        if(u.warn2) html+='<div style="margin-top:6px;padding:7px 10px;background:#fff3cd;border-radius:8px;font-size:12px;color:#856404;">'+u.warn2+'</div>';
        html+='</div>';
      }
    }
    addBot(html);
  },350);
};

window.xbotAskAI=function(text){
  var loadRow=document.createElement('div'); loadRow.className='xbrow';
  loadRow.innerHTML='<div class="xbav">🎓</div><div class="xbub xbot-b" id="xbot-loading"><span style="color:#888;font-size:12px;">🤔 AI 思考中...</span></div>';
  msgs.appendChild(loadRow); msgs.scrollTop=msgs.scrollHeight;

  var now=new Date();
  var timeStr=now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日 '+now.getHours()+':'+String(now.getMinutes()).padStart(2,'0');
  var systemPrompt='你是高雄市新莊國民小學的客服小幫手，以下是重要資訊：\n'+
    '學校官網：https://www.sjps.kh.edu.tw\n學校電話：07-3411373\n'+
    '學校地址：813023高雄市左營區自由三路一號\n現任校長：劉瑞政校長\n'+
    '高雄市政府教育局電話：(07)799-5678，地址：鳳山區光復路二段132號\n'+
    '附近餐廳推薦：漢神巨蛋美食廣場（高雄市左營區博愛二路777號）https://share.google/cc6zQctq4GkobLC4E\n'+
    '現在台灣時間：'+timeStr+'\n回答規則：\n'+
    '1. 只用繁體中文回答，語氣親切友善\n2. 回答要簡短精確，不要超過150字\n'+
    '3. 學校相關問題：盡力回答，可提供學校官網或電話\n'+
    '4. 笑話請求：說一個輕鬆幽默的笑話\n'+
    '5. 餐廳問題：推薦漢神巨蛋並提供地址和地圖連結\n'+
    '6. 非學校問題：可以簡短幽默回應，但最後帶回學校業務\n'+
    '7. 不確定的事情：誠實說不確定，並建議撥打總機07-3411373';

  var history=[{role:'system',content:systemPrompt}];
  var rows=msgs.querySelectorAll('.xbrow,.xurow');
  for(var i=0;i<rows.length;i++){
    var row=rows[i], bubble=row.querySelector('.xbub');
    if(!bubble) continue;
    var content=bubble.innerText||bubble.textContent;
    if(!content||content.indexOf('AI 思考中')>=0) continue;
    history.push({role:row.classList.contains('xurow')?'user':'assistant',content:content});
  }
  if(history[history.length-1].role!=='user') history.push({role:'user',content:text});
  if(history.length>23) history=history.slice(0,1).concat(history.slice(history.length-22));

  fetch('https://chatbot.issac-df6.workers.dev',{
    method:'POST', headers:{'Content-Type':'application/json'},
    body:JSON.stringify({messages:history,max_tokens:300})
  })
  .then(function(r){return r.json();})
  .then(function(d){
    var el=document.getElementById('xbot-loading'); if(el) el.parentNode.remove();
    var reply=d.response||(d.result&&d.result.response)||null;
    if(reply){ addBot(reply.replace(/\n/g,'<br>')); }
    else{ addBot('很抱歉，今日 AI 額度已用完。<br>請來電洽詢：<br>📚 教務處 '+telLink('07-3411373','111')+'<br>🏫 學務處 '+telLink('07-3411373','121')+'<br>🔧 總務處 '+telLink('07-3411373','131')+'<br>💚 輔導處 '+telLink('07-3411373','141')); }
  })
  .catch(function(){
    var el=document.getElementById('xbot-loading'); if(el) el.parentNode.remove();
    addBot('很抱歉，AI 暫時無法使用。<br>請來電洽詢：<br>📚 教務處 '+telLink('07-3411373','111')+'<br>🏫 學務處 '+telLink('07-3411373','121')+'<br>🔧 總務處 '+telLink('07-3411373','131')+'<br>💚 輔導處 '+telLink('07-3411373','141'));
  });
};

window.xbotSend=function(){ xbotProcess(inp.value); };

window.xbotToggle=function(){
  opened=!opened;
  document.getElementById('xbot-win').classList.toggle('xopen',opened);
  document.getElementById('xico-chat').style.display=opened?'none':'inline';
  document.getElementById('xico-close').style.display=opened?'inline':'none';
  document.getElementById('xbot-label').textContent=opened?'':'客服';
  document.getElementById('xbot-dot').style.display='none';
  if(opened&&window.innerWidth>700) inp.focus();
};

window.xbotSetSize=function(size){
  var bubbles=document.querySelectorAll('.xbub');
  for(var i=0;i<bubbles.length;i++) bubbles[i].style.fontSize=size+'px';
  document.getElementById('xbot-inp').style.fontSize=size+'px';
};

var _fs=false;
window.xbotFullscreen=function(){
  var win=document.getElementById('xbot-win'), btn=document.getElementById('xbot-fs');
  _fs=!_fs;
  if(_fs){
    win.style.cssText='position:fixed;top:2%;left:2%;right:2%;bottom:18%;width:auto;height:auto;border-radius:16px;z-index:999999;display:flex;flex-direction:column;background:#fff;border:1px solid #ddd8ff;box-shadow:0 8px 32px rgba(0,0,0,0.18);overflow:hidden;font-family:sans-serif;';
    btn.textContent='⊡'; btn.title='縮小';
  } else {
    win.style.cssText=''; win.classList.add('xopen');
    btn.textContent='⛶'; btn.title='放大';
  }
};

window.xbotShowDept=function(dept){
  var menus={
    '教務處':'<div class="xchips">'+
      '<button class="xchip" onclick="xbotProcess(\'新生\')">新生入學</button>'+
      '<button class="xchip" onclick="xbotProcess(\'轉出\')">轉學轉出</button>'+
      '<button class="xchip" onclick="xbotProcess(\'轉入\')">轉學轉入</button>'+
      '<button class="xchip" onclick="xbotProcess(\'國中分發\')">國中分發</button>'+
      '<button class="xchip" onclick="xbotProcess(\'戶籍\')">本校戶籍查詢</button>'+
      '<button class="xchip" onclick="xbotProcess(\'在學證明\')">在學證明</button>'+
      '<button class="xchip" onclick="xbotProcess(\'成績單\')">成績單</button>'+
      '<button class="xchip" onclick="xbotProcess(\'學習扶助\')">學習扶助</button>'+
      '<button class="xchip" onclick="xbotProcess(\'補助申請\')">補助申請</button>'+
      '<button class="xchip" onclick="xbotProcess(\'學生證\')">學生證</button>'+
      '<button class="xchip" onclick="xbotProcess(\'教科書\')">教科書</button>'+
      '<button class="xchip" onclick="xbotProcess(\'研習\')">研習</button>'+
      '<button class="xchip" onclick="xbotProcess(\'藝文週\')">藝文週</button>'+
      '<button class="xchip" onclick="xbotProcess(\'學藝競賽\')">學藝競賽</button>'+
      '<button class="xchip" onclick="xbotProcess(\'電腦\')">電腦資訊</button>'+
      '<button class="xchip" onclick="xbotProcess(\'代課\')">代課/代理</button>'+
      '</div>',
    '學務處':'<div class="xchips">'+
      '<button class="xchip" onclick="xbotProcess(\'社團\')">課後社團</button>'+
      '<button class="xchip" onclick="xbotProcess(\'體育\')">體育活動</button>'+
      '<button class="xchip" onclick="xbotProcess(\'運動會\')">運動會</button>'+
      '<button class="xchip" onclick="xbotProcess(\'衛生\')">衛生</button>'+
      '<button class="xchip" onclick="xbotProcess(\'校外教學\')">校外教學</button>'+
      '<button class="xchip" onclick="xbotProcess(\'導護\')">導護</button>'+
      '</div>',
    '總務處':'<div class="xchips">'+
      '<button class="xchip" onclick="xbotProcess(\'維修\')">維修</button>'+
      '<button class="xchip" onclick="xbotProcess(\'場地租借\')">場地租借</button>'+
      '<button class="xchip" onclick="xbotProcess(\'午餐補助\')">午餐補助</button>'+
      '</div>',
    '輔導處':'<div class="xchips">'+
      '<button class="xchip" onclick="xbotProcess(\'特教\')">特教相關</button>'+
      '<button class="xchip" onclick="xbotProcess(\'資優班\')">資優班</button>'+
      '<button class="xchip" onclick="xbotProcess(\'新住民補助\')">新住民補助</button>'+
      '<button class="xchip" onclick="xbotProcess(\'提早入學\')">提早入學</button>'+
      '</div>'
  };
  var row=document.createElement('div'); row.className='xbrow';
  row.innerHTML='<div class="xbav">🎓</div><div class="xbub xbot-b">📋 <b>'+dept+'</b> 相關業務：'+menus[dept]+'</div>';
  msgs.appendChild(row); msgs.scrollTop=msgs.scrollHeight;
};

function init(){
  msgs=document.getElementById('xbot-msgs');
  inp=document.getElementById('xbot-inp');
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')xbotSend();});
  setTimeout(function(){
    addBot('親愛的家長您好！我是新莊小幫手 👋<br>請輸入關鍵字，或選擇下方快速選項。<br><span style="font-size:12px;color:#888;">💡 輸入班級例如「101」「302」可查詢班導師分機</span><div class="xchips">'+
      '<button class="xchip" onclick="xbotProcess(\'新生\')">新生入學</button>'+
      '<button class="xchip" onclick="xbotProcess(\'轉出\')">轉學轉出</button>'+
      '<button class="xchip" onclick="xbotProcess(\'轉入\')">轉學轉入</button>'+
      '<button class="xchip" onclick="xbotProcess(\'國中分發\')">國中分發</button>'+
      '<button class="xchip" onclick="xbotProcess(\'戶籍\')">本校戶籍查詢</button>'+
      '<button class="xchip" onclick="xbotProcess(\'社團\')">課後社團</button>'+
      '<button class="xchip" onclick="xbotProcess(\'課後照顧班\')">課後照顧班</button>'+
      '</div><div style="margin-top:8px;font-size:12px;color:#888;">依處室查詢：</div><div class="xchips">'+
      '<button class="xchip" style="background:#f0eeff;border-color:#a89ff5;" onclick="xbotShowDept(\'教務處\')">📚 教務處</button>'+
      '<button class="xchip" style="background:#f0eeff;border-color:#a89ff5;" onclick="xbotShowDept(\'學務處\')">🏫 學務處</button>'+
      '<button class="xchip" style="background:#f0eeff;border-color:#a89ff5;" onclick="xbotShowDept(\'總務處\')">🔧 總務處</button>'+
      '<button class="xchip" style="background:#f0eeff;border-color:#a89ff5;" onclick="xbotShowDept(\'輔導處\')">💚 輔導處</button>'+
      '</div>');
  },200);
}

if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();