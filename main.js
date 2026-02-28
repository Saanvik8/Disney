// main.js - all the interactivity stuff
// depends on data.js being loaded first!!

// ---- cursor tracking ----
const cur = document.getElementById('cursor');
const curR = document.getElementById('cursorRing');

document.addEventListener('mousemove', function(e) {
  cur.style.left = e.clientX + 'px';
  cur.style.top = e.clientY + 'px';
  curR.style.left = e.clientX + 'px';
  curR.style.top = e.clientY + 'px';
});

// ---- star background canvas ----
const cv = document.getElementById('starCanvas');
const ct = cv.getContext('2d');
let stars = [];

function resizeCanvas() {
  cv.width = innerWidth;
  cv.height = innerHeight;
  // remake stars when window resizes
  stars = Array.from({ length: 180 }, function() {
    return {
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      s: Math.random() * 0.004 + 0.001
    };
  });
}

function drawStars() {
  ct.clearRect(0, 0, cv.width, cv.height);
  stars.forEach(function(s) {
    s.a += s.s;
    var al = (Math.sin(s.a) + 1) / 2 * 0.65 + 0.08;
    ct.beginPath();
    ct.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ct.fillStyle = 'rgba(255,255,255,' + al + ')';
    ct.fill();
  });
  requestAnimationFrame(drawStars);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
drawStars();

// ---- spinning rays on intro screen ----
(function() {
  var el = document.getElementById('raysEl');
  if (!el) return;
  for (var i = 0; i < 16; i++) {
    var s = document.createElement('span');
    s.style.transform = 'translateX(-50%) rotate(' + (i * 22.5) + 'deg)';
    el.appendChild(s);
  }
})();

// ---- screen navigation ----
var curScreen = 0;
var prevScreen = 0;
var curMood = null;
var curFilm = null;
var jar = []; // stored memories

function goTo(n) {
  var screens = document.querySelectorAll('.screen');
  screens.forEach(function(s, i) {
    s.classList.toggle('active', i === n);
  });
  prevScreen = curScreen;
  curScreen = n;

  // special stuff for certain screens
  if (n === 6) buildJar();
  if (n === 5) buildMap();
}

function goBackMap() {
  // go back to wherever we came from (or mood screen if we came from opening)
  goTo(prevScreen <= 0 ? 1 : prevScreen);
}

// ---- mood selection and building screen 2 ----
function selectMood(el) {
  var mood = el.dataset.mood;
  curMood = mood;
  var d = M[mood];

  // get click position for the burst effect
  var rect = el.getBoundingClientRect();
  var b = document.getElementById('burst');
  b.style.left = (rect.left + rect.width / 2) + 'px';
  b.style.top = (rect.top + rect.height / 2) + 'px';
  b.style.width = '100px';
  b.style.height = '100px';
  b.style.background = d.c;

  // trigger burst then navigate
  setTimeout(function() { b.classList.add('go'); }, 10);
  setTimeout(function() {
    buildS2(mood, d);
    goTo(2);
    setTimeout(function() {
      b.classList.remove('go');
      b.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 300);
  }, 500);
}

function buildS2(mood, d) {
  // set the background + text
  document.getElementById('s2bg').style.background = d.bg;
  document.getElementById('s2Label').textContent = d.label;
  document.getElementById('s2Hl').innerHTML = d.hl;
  document.getElementById('s2Tl').textContent = d.tl;

  // make floating particles
  var pc = document.getElementById('particles');
  pc.innerHTML = '';
  for (var i = 0; i < 24; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    var sz = Math.random() * 6 + 2;
    p.style.cssText = 'width:' + sz + 'px;height:' + sz + 'px;background:' + d.p + ';left:' + (Math.random() * 100) + '%;animation-duration:' + (Math.random() * 8 + 6) + 's;animation-delay:' + (Math.random() * 6) + 's;';
    pc.appendChild(p);
  }

  // build portal cards for each film
  var pe = document.getElementById('portals');
  pe.innerHTML = '';
  d.films.forEach(function(f) {
    var el = document.createElement('div');
    el.className = 'portal';
    el.innerHTML =
      '<div class="portal-bg" style="background:' + f.bg + '"></div>' +
      '<div class="portal-g"></div>' +
      '<div class="portal-p">' + f.pr + '</div>' +
      '<div class="portal-o">' + f.ob + '</div>' +
      '<div class="portal-body">' +
        '<div class="portal-r">For you because</div>' +
        '<div class="portal-t">' + f.t + '</div>' +
        '<div class="portal-n">Walt Disney · ' + f.pn + '</div>' +
        '<div class="portal-cta">Enter her story →</div>' +
      '</div>';
    el.onclick = function() { openFilm(f, d); };
    pe.appendChild(el);
  });
}

// ---- open a film / story screen ----
function openFilm(f, md) {
  curFilm = f;

  // fill in all the left panel details
  document.getElementById('s3lbg').style.background = f.lb;
  document.getElementById('s3pe').textContent = f.pr;
  document.getElementById('s3orb').textContent = f.ob;
  document.getElementById('s3pn').textContent = f.pn;
  document.getElementById('s3fn').textContent = f.t;
  document.getElementById('s3tt').textContent = f.t;
  document.getElementById('s3rs').textContent = f.r;
  document.getElementById('s3mt').textContent = f.t;
  document.getElementById('s3yr').textContent = f.y;

  // build chapter accordions
  var cc = document.getElementById('chCont');
  cc.innerHTML = '';
  f.ch.forEach(function(ch, i) {
    var div = document.createElement('div');
    div.className = 'chapter' + (i === 0 ? ' open' : '');
    div.innerHTML =
      '<div class="ch-h" onclick="this.parentElement.classList.toggle(\'open\')">' +
        '<div class="ch-n">0' + (i + 1) + '</div>' +
        '<div class="ch-m">' +
          '<div class="ch-a">' + ch.a + '</div>' +
          '<div class="ch-ti">' + ch.ti + '</div>' +
        '</div>' +
        '<div class="ch-ob">' + ch.ob + '</div>' +
        '<div class="ch-ar">▶</div>' +
      '</div>' +
      '<div class="ch-bd">' +
        '<div class="ch-in">' +
          '<p class="ch-pv">' + ch.pv + '</p>' +
          '<div class="ch-q">' + ch.q + '</div>' +
        '</div>' +
      '</div>';
    cc.appendChild(div);
  });

  document.getElementById('s3r').scrollTop = 0;
  goTo(3);
}

// ---- open princess card ----
function openCard() {
  if (!curFilm) return;
  var f = curFilm;
  var c = f.card;

  // build card front
  document.getElementById('cardFront').innerHTML =
    '<div class="cf-sh"></div>' +
    '<div class="cf-hd"><div class="cf-type">Disney Memoria ✦ Princess Card</div><div class="cf-gem">✨</div></div>' +
    '<div class="cf-art">' +
      '<div class="cf-art-bg" style="background:' + f.lb + '"></div>' +
      '<div class="cf-princess">' + f.pr + '</div>' +
      '<div class="cf-obj">' + f.ob + '</div>' +
    '</div>' +
    '<div class="cf-div"></div>' +
    '<div class="cf-nr"><div class="cf-name">' + f.pn + '</div><div class="cf-film">' + f.t + '</div></div>' +
    '<div class="cf-stats">' +
      '<div class="cf-stat gold full"><div class="cf-stat-l">✦ Signature Power</div><div class="cf-stat-v">' + c.pw + '</div></div>' +
      '<div class="cf-stat green"><div class="cf-stat-l">▲ Strength</div><div class="cf-stat-v">' + c.st + '</div></div>' +
      '<div class="cf-stat red"><div class="cf-stat-l">▼ Weakness</div><div class="cf-stat-v">' + c.wk + '</div></div>' +
      '<div class="cf-stat purple full"><div class="cf-stat-l">◈ Greatest Fear</div><div class="cf-stat-v">' + c.fe + '</div></div>' +
    '</div>' +
    '<div class="cf-ft"><div class="cf-rar">' + c.rar + '</div><div class="cf-hint">hover to flip →</div></div>';

  // build card back (feminist reread)
  document.getElementById('cardBack').innerHTML =
    '<div class="cb-lbl">The Feminist Reread</div>' +
    '<div class="cb-title">' + f.pn + ' — ' + f.t + '</div>' +
    '<p class="cb-fem">' + c.fm + '</p>' +
    '<div class="cb-al-l">Allies</div>' +
    '<div class="cb-tags">' + c.al.map(function(a) { return '<span class="ally-tag">' + a + '</span>'; }).join('') + '</div>' +
    '<div class="cb-al-l">Enemies</div>' +
    '<div class="cb-tags">' + c.en.map(function(e) { return '<span class="enemy-tag">' + e + '</span>'; }).join('') + '</div>' +
    '<div class="cb-quote">' + c.q + '</div>';

  goTo(4);
}

// ---- memory jar ----
function addJar() {
  // add current film to jar if not already there
  if (curFilm && !jar.find(function(m) { return m.t === curFilm.t; })) {
    jar.push(curFilm);
  }
}

function buildJar() {
  var jw = document.getElementById('jarWrap');

  // clear old fireflies
  var oldFF = jw.querySelectorAll('.firefly');
  oldFF.forEach(function(f) { f.remove(); });

  var cols = ['#ffd060','#f070b3','#6a8fc5','#5eeca1','#be6ee4','#e05a4a','#f8c060','#4adcc4'];
  var numFireflies = Math.max(jar.length, 5);

  for (var i = 0; i < numFireflies; i++) {
    var ff = document.createElement('div');
    ff.className = 'firefly';
    var sz = Math.random() * 8 + 3;
    var col = cols[i % cols.length];
    ff.style.cssText =
      'width:' + sz + 'px;' +
      'height:' + sz + 'px;' +
      'background:' + col + ';' +
      'left:' + (28 + Math.random() * 44) + '%;' +
      'top:' + (28 + Math.random() * 48) + '%;' +
      'animation-duration:' + (Math.random() * 3 + 2) + 's;' +
      'animation-delay:' + (Math.random() * 2) + 's;' +
      'box-shadow:0 0 ' + (sz * 2) + 'px ' + col + '88;';
    jw.appendChild(ff);
  }

  // show saved films as pills
  var pills = document.getElementById('s6Pills');
  pills.innerHTML = '';
  if (jar.length === 0) {
    pills.innerHTML = '<div style="font-size:11.5px;color:rgba(255,255,255,.18);letter-spacing:1px">Your jar is empty — explore some worlds first</div>';
  } else {
    jar.forEach(function(m) {
      var p = document.createElement('div');
      p.className = 's6-pill';
      p.innerHTML = m.pr + ' ' + m.t;
      pills.appendChild(p);
    });
  }
}

// ---- world map ----
function buildMap() {
  var outer = document.querySelector('.map-scroll-outer');
  var scrollB = document.getElementById('scrollBody');
  var pre = document.getElementById('mapPreloader');
  var fill = document.getElementById('mapFill');

  // reset the unroll animation so it plays fresh each time
  if (outer) {
    outer.classList.remove('unrolling');
    void outer.offsetWidth; // force reflow so animation resets
  }
  if (scrollB) scrollB.scrollTop = 0;

  if (pre) {
    pre.classList.remove('hidden');
    fill.style.width = '0';

    // fake loading bar
    var pct = 0;
    var iv = setInterval(function() {
      pct += Math.random() * 14 + 5;
      if (pct >= 100) {
        pct = 100;
        clearInterval(iv);
        fill.style.width = '100%';
        setTimeout(function() {
          pre.classList.add('hidden');
          if (outer) outer.classList.add('unrolling');
          // build pins after scroll has started opening
          setTimeout(function() { doMapPins(); }, 800);
        }, 350);
      }
      fill.style.width = Math.min(pct, 100) + '%';
    }, 80);
  } else {
    if (outer) outer.classList.add('unrolling');
    setTimeout(function() { doMapPins(); }, 800);
  }
}

function doMapPins() {
  var layer = document.getElementById('mapPins');
  if (!layer) return;
  layer.innerHTML = '';

  pins.forEach(function(pin) {
    var el = document.createElement('div');
    el.className = 'mp';
    el.style.cssText = 'left:' + pin.x + ';top:' + pin.y;

    // parchment-appropriate dot colors (earthy tones)
    var dotBg = 'rgba(160,100,30,0.25)';
    el.innerHTML =
      '<div class="mp-dot" style="background:' + dotBg + ';border-color:rgba(100,55,15,0.7);color:rgba(100,55,15,0.8)">✦</div>' +
      '<div class="mp-pop">' +
        '<div class="mp-pop-t">' + pin.l + '</div>' +
        '<div class="mp-pop-r" style="color:rgba(120,70,20,0.8)">' + pin.r + '</div>' +
        '<div class="mp-pop-f">' + pin.f + '</div>' +
      '</div>';
    layer.appendChild(el);
  });

  // build the legend at the bottom
  var leg = document.getElementById('mapLegend');
  if (!leg) return;
  leg.innerHTML = '';

  var regions = [
    { e: '❄️', t: 'Frozen Kingdoms — Norway' },
    { e: '🏹', t: 'Highland Realms — Scotland' },
    { e: '🪷', t: 'Ancient Dynasties — China' },
    { e: '🌊', t: 'Polynesian Seas — Pacific' },
    { e: '💎', t: 'Desert Sultanates — Arabia' },
    { e: '⭐', t: 'Southern Bayous — Louisiana' },
    { e: '🌺', t: 'Island Ohana — Hawaii' },
    { e: '🦋', t: 'Mountain Villages — Colombia' },
  ];

  regions.forEach(function(r) {
    var d = document.createElement('div');
    d.className = 'legend-item';
    d.innerHTML = '<span>' + r.e + '</span><span>' + r.t + '</span>';
    leg.appendChild(d);
  });
}

// ---- voice narration ----
var speaking = false;
var utter = null;

function getPageText() {
  // returns text for the current screen to be read aloud
  if (curScreen === 0) {
    return "Some things never change, and I'm holding on tight to you. You grew up fast. The world asked you to. But these stories were waiting — patient as magic, warm as castle lights. They still know your name. Enter the magic.";
  }
  if (curScreen === 1) {
    return "How are you feeling tonight? Choose a feeling and find your story. Are you feeling lonely, hopeful, brave, nostalgic, lost, heartbroken, excited, or adventurous?";
  }
  if (curScreen === 2 && curMood) {
    var d = M[curMood];
    return d.label + '. ' + d.tl + ' Three stories are waiting for you: ' + d.films.map(function(f) { return f.t + ', told by ' + f.pn + '. ' + f.r; }).join('. Or ');
  }
  if (curScreen === 3 && curFilm) {
    var f = curFilm;
    return f.t + '. ' + f.r + ' ' + f.ch.map(function(c) { return c.a + ': ' + c.ti + '. ' + c.pv; }).join(' ');
  }
  if (curScreen === 4 && curFilm) {
    var c = curFilm.card;
    return 'Princess Card for ' + curFilm.pn + ' from ' + curFilm.t + '. Signature power: ' + c.pw + '. Strength: ' + c.st + '. Weakness: ' + c.wk + '. Greatest fear: ' + c.fe + '. The feminist reread: ' + c.fm;
  }
  if (curScreen === 5) {
    return "The Disney World Map. Hover over any glowing point to discover which Disney stories are set in that region. From Norway for Frozen, to Polynesia for Moana, China for Mulan, Arabia for Aladdin, Scotland for Brave, and many more.";
  }
  if (curScreen === 6) {
    return 'Your memory jar. You have saved ' + jar.length + ' stories. ' + jar.map(function(m) { return m.t; }).join(', ') + '.';
  }
  return "Disney Memoria. Where feelings find stories.";
}

function toggleVoice() {
  var btn = document.getElementById('voiceBtn');

  if (speaking) {
    speechSynthesis.cancel();
    speaking = false;
    btn.classList.remove('speaking');
    btn.textContent = '🎙️';
    return;
  }

  var text = getPageText();
  utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.82;
  utter.pitch = 1.06;
  utter.volume = 1;

  // try to find a nice voice
  var voices = speechSynthesis.getVoices();
  var preferred = ['Samantha', 'Karen', 'Moira', 'Tessa', 'Victoria', 'Fiona', 'Allison', 'Ava', 'Susan'];
  for (var i = 0; i < preferred.length; i++) {
    var v = voices.find(function(v) { return v.name.includes(preferred[i]); });
    if (v) { utter.voice = v; break; }
  }

  utter.onend = function() {
    speaking = false;
    btn.classList.remove('speaking');
    btn.textContent = '🎙️';
  };
  utter.onerror = function() {
    speaking = false;
    btn.classList.remove('speaking');
    btn.textContent = '🎙️';
  };

  speechSynthesis.speak(utter);
  speaking = true;
  btn.classList.add('speaking');
  btn.textContent = '🔊';
}

// preload voices (some browsers need this)
if (window.speechSynthesis) {
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = function() { speechSynthesis.getVoices(); };
}

// start on screen 0
goTo(0);
