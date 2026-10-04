(function(){
/* =========================================================
     CUSTOM CURSOR
     ========================================================= */
  (function cursor(){
    var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if(!canHover) return;

    var dot = document.getElementById("cursorDot");
    var ring = document.getElementById("cursorRing");
    if(!dot || !ring) return;

    var mouseX = window.innerWidth / 2;
    var mouseY = window.innerHeight / 2;
    var ringX = mouseX, ringY = mouseY;
    var dotX = mouseX, dotY = mouseY;

    window.addEventListener("mousemove", function(e){
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    window.addEventListener("mousedown", function(){
      document.body.classList.add("cursor-click");
    });
    window.addEventListener("mouseup", function(){
      document.body.classList.remove("cursor-click");
    });

    var hoverSelector = 'a, button, .btn, .tech-item, .card, .exp-card, input, textarea, [role="button"]';
    document.addEventListener("mouseover", function(e){
      if(e.target.closest(hoverSelector)){
        document.body.classList.add("cursor-hover");
      }
    });
    document.addEventListener("mouseout", function(e){
      if(e.target.closest(hoverSelector)){
        document.body.classList.remove("cursor-hover");
      }
    });

    function loop(){
      dotX += (mouseX - dotX) * 0.5;
      dotY += (mouseY - dotY) * 0.5;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      dot.style.transform  = "translate3d(" + dotX + "px," + dotY + "px,0) translate(-50%,-50%)";
      ring.style.transform = "translate3d(" + ringX + "px," + ringY + "px,0) translate(-50%,-50%)";

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  })();

  /* =========================================================
     LOADER — 0 → 100 counter with progress bar
     ========================================================= */
  (function loader(){
    var loaderEl = document.getElementById("loader");
    var countEl  = document.getElementById("loaderCount");
    var fillEl   = document.getElementById("loaderFill");
    var msgEl    = document.getElementById("loaderMsg");

    var messages = [
      "booting portfolio...",
      "linking modules...",
      "fetching projects...",
      "rendering experience...",
      "compiling tech stack...",
      "ready."
    ];

    var count = 0;
    var target = 0;
    var lastTime = performance.now();

    function nextTarget(){
      if(count < 30)  return count + 4 + Math.random() * 5;
      if(count < 60)  return count + 3 + Math.random() * 4;
      if(count < 85)  return count + 2 + Math.random() * 3;
      if(count < 99)  return count + 1 + Math.random() * 2;
      return 100;
    }

    function tick(now){
      var dt = (now - lastTime) / 1000;
      lastTime = now;
      count += (target - count) * Math.min(1, dt * 6);
      if(target - count < 0.3) count = target;

      var shown = Math.floor(count);
      countEl.textContent = shown;
      fillEl.style.width = shown + "%";

      var msgIndex = Math.min(messages.length - 1, Math.floor(shown / (100 / messages.length)));
      if(msgEl.dataset.i !== String(msgIndex)){
        msgEl.dataset.i = msgIndex;
        msgEl.innerHTML = '<span class="tag">$</span>' + messages[msgIndex] + '<span class="cursor"></span>';
      }

      if(count >= target - 0.1){
        if(target >= 100){
          setTimeout(finish, 380);
          return;
        }
        target = nextTarget();
      }

      requestAnimationFrame(tick);
    }

    function finish(){
      loaderEl.classList.add("done");
      document.body.classList.remove("loading");
      document.querySelectorAll(".hero h1 .line > span").forEach(function(el){
        el.style.animation = "slideUp 1s var(--ease) forwards";
      });
      setTimeout(function(){
        loaderEl.style.display = "none";
      }, 800);
    }

    target = nextTarget();
    requestAnimationFrame(tick);

    setTimeout(function(){
      if(!loaderEl.classList.contains("done")){
        count = 100; target = 100;
        countEl.textContent = "100";
        fillEl.style.width = "100%";
        setTimeout(finish, 300);
      }
    }, 6000);
  })();

  /* =========================================================
     INTERACTIVE DOT GRID
     ========================================================= */
  (function dotGrid(){
    var canvas = document.getElementById("dotCanvas");
    if(!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);

    var spacing = 32;
    var dots = [];
    var cols = 0, rows = 0;
    var W = 0, H = 0;

    var mouse = { x: -9999, y: -9999, active: false };
    var smoothMouse = { x: -9999, y: -9999 };

    var glowRadius = 160;
    var connectRadius = 130;

    function resize(){
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(W / spacing) + 1;
      rows = Math.ceil(H / spacing) + 1;

      dots = [];
      for(var r = 0; r < rows; r++){
        for(var c = 0; c < cols; c++){
          dots.push({
            x: c * spacing,
            y: r * spacing,
            phase: Math.random() * Math.PI * 2,
            speed: 0.6 + Math.random() * 0.8,
            base: 0.55 + Math.random() * 0.35
          });
        }
      }
    }

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var t = 0;
    function draw(){
      t += 0.016;
      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.18;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.18;

      ctx.clearRect(0, 0, W, H);

      var isLight = document.documentElement.getAttribute("data-theme") === "light";

      for(var i = 0; i < dots.length; i++){
        var d = dots[i];
        var idle = Math.sin(t * d.speed + d.phase) * 0.5 + 0.5;

        var dx = d.x - smoothMouse.x;
        var dy = d.y - smoothMouse.y;
        var dist = Math.sqrt(dx*dx + dy*dy);

        var prox = 0;
        if(dist < glowRadius){
          prox = 1 - dist / glowRadius;
          prox = prox * prox;
        }

        var r = 1.1 + prox * 2.6 + idle * 0.25;
        var alpha = 0.15 + idle * 0.15 + prox * 0.85;

        var hue = 240 + prox * 40;
        var sat = 70 + prox * 25;
        var light = isLight ? (30 + prox * 20) : (70 + prox * 20);

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(" + hue + ", " + sat + "%, " + light + "%, " + alpha + ")";
        ctx.fill();

        if(prox > 0.35){
          ctx.beginPath();
          ctx.arc(d.x, d.y, r + 6 * prox, 0, Math.PI * 2);
          ctx.fillStyle = "hsla(" + hue + ", 90%, " + (isLight ? 50 : 75) + "%, " + (prox * 0.18) + ")";
          ctx.fill();
        }
      }

      if(mouse.active){
        for(var j = 0; j < dots.length; j++){
          var dd = dots[j];
          var ddx = dd.x - smoothMouse.x;
          var ddy = dd.y - smoothMouse.y;
          var dd2 = ddx*ddx + ddy*ddy;
          if(dd2 < connectRadius * connectRadius){
            var ddist = Math.sqrt(dd2);
            var op = (1 - ddist / connectRadius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(smoothMouse.x, smoothMouse.y);
            ctx.lineTo(dd.x, dd.y);
            ctx.strokeStyle = "hsla(265, 90%, 70%, " + op + ")";
            ctx.lineWidth = 0.6 + (1 - ddist / connectRadius) * 0.9;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener("mousemove", function(e){
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });

    window.addEventListener("mouseleave", function(){
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    });

    window.addEventListener("touchmove", function(e){
      if(e.touches && e.touches[0]){
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    }, { passive: true });

    window.addEventListener("touchend", function(){
      mouse.active = false;
    });

    window.addEventListener("resize", resize);
    resize();

    if(reduce){ draw(); } else { requestAnimationFrame(draw); }
  })();

  /* =========================================================
     THEME TOGGLE
     ========================================================= *//* =========================================================
     REVEAL ON SCROLL
     ========================================================= */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.12, rootMargin:"0px 0px -60px 0px"});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });

  /* =========================================================
     CARD + EXP-CARD MOUSE GLOW
     ========================================================= */
  document.querySelectorAll(".card, .exp-card").forEach(function(card){
    card.addEventListener("mousemove", function(e){
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* =========================================================
     CONTRIBUTION GRID
     ========================================================= */
})();
