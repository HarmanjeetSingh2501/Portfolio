(function(){
/* =========================================================
     TECH STACK PYRAMID — FIXED ICON URLS
     ========================================================= */
  var techStack = [
    { name:"JavaScript",  icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name:"TypeScript",  icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name:"C",           icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name:"C++",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name:"HTML",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name:"CSS",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name:"React",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name:"Next.js",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name:"Bootstrap",   icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name:"Node.js",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name:"FastAPI",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name:"MySQL",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name:"PostgreSQL",  icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name:"MongoDB",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name:"Firebase",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name:"Redis",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name:"Docker",      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name:"Git",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name:"GitHub",      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name:"VS Code",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name:"Vercel",      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name:"Figma",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name:"Postman",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name:"Photoshop",   icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name:"Render",      icon:"https://cdn.simpleicons.org/render/46E3B7" },
    { name:"Jira",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name:"Tauri",       icon:"https://cdn.simpleicons.org/tauri/FFC131" }
  ];

  var pyramidRows = [8, 7, 6, 3, 3];

  var techPyramid = document.getElementById("techPyramid");
  if(techPyramid){
    var idx = 0;
    pyramidRows.forEach(function(rowCount, rowIndex){
      var rowEl = document.createElement("div");
      rowEl.className = "tech-row";
      rowEl.style.animationDelay = (rowIndex * 0.12) + "s";

      for(var i = 0; i < rowCount; i++){
        var t = techStack[idx++];
        if(!t) break;

        var el = document.createElement("div");
        el.className = "tech-item";
        el.style.animation = "popIn 0.5s var(--ease-spring) backwards";
        el.style.animationDelay = (rowIndex * 0.12 + i * 0.04) + "s";

        var img = document.createElement("img");
        img.src = t.icon;
        img.alt = t.name;
        img.loading = "lazy";
        img.onerror = function(){ this.style.opacity = 0.4; };

        var span = document.createElement("span");
        span.textContent = t.name;

        el.appendChild(img);
        el.appendChild(span);
        rowEl.appendChild(el);
      }
      techPyramid.appendChild(rowEl);
    });
  }

})();
