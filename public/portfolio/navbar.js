(function(){
var root = document.documentElement;
/* =========================================================
     THEME TOGGLE
     ========================================================= */
  var saved = localStorage.getItem("theme");
  if(saved) root.setAttribute("data-theme", saved);
  else if(window.matchMedia("(prefers-color-scheme:light)").matches) root.setAttribute("data-theme","light");

  document.getElementById("themeToggle").addEventListener("click", function(){
    var current = root.getAttribute("data-theme");
    var next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  var menuToggle = document.getElementById("menuToggle");
  var mobileMenu = document.getElementById("mobileMenu");
  var body = document.body;

  function closeMenu(){
    menuToggle.classList.remove("open");
    mobileMenu.classList.remove("open");
    body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  }
  function openMenu(){
    menuToggle.classList.add("open");
    mobileMenu.classList.add("open");
    body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
  }

  menuToggle.addEventListener("click", function(){
    if(mobileMenu.classList.contains("open")) closeMenu();
    else openMenu();
  });

  mobileMenu.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
  });

  var mq = window.matchMedia("(min-width: 901px)");
  mq.addEventListener("change", function(e){
    if(e.matches) closeMenu();
  });

  /* =========================================================
     SCROLL PROGRESS + TOPBAR
     ========================================================= */
  var bar = document.getElementById("progress");
  var topbar = document.getElementById("topbar");
  var tick = false;
  function upd(){
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ")";
    topbar.classList.toggle("scrolled", window.scrollY > 8);
    tick = false;
  }
  window.addEventListener("scroll", function(){
    if(!tick){ tick = true; requestAnimationFrame(upd); }
  }, {passive:true});
  window.addEventListener("resize", upd);
  upd();

  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */
})();
