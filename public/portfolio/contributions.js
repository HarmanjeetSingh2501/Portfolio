(function(){
/* =========================================================
     CONTRIBUTION GRID
     ========================================================= */
  var grid = document.getElementById("contribGrid");
  grid.innerHTML = "";

  var months = [
    {name:"Oct", week:0}, {name:"Nov", week:4}, {name:"Dec", week:8},
    {name:"Jan", week:13}, {name:"Feb", week:17}, {name:"Mar", week:21},
    {name:"Apr", week:25}, {name:"May", week:30}, {name:"Jun", week:34},
    {name:"Jul", week:38}, {name:"Aug", week:42}, {name:"Sep", week:47}
  ];

  months.forEach(function(m){
    var el = document.createElement("div");
    el.className = "month";
    el.textContent = m.name;
    el.style.gridColumn = (m.week + 2) + " / span 4";
    el.style.gridRow = "1";
    grid.appendChild(el);
  });

  var dayMap = {2:"Mon", 4:"Wed", 6:"Fri"};
  for(var r = 2; r <= 8; r++){
    if(dayMap[r]){
      var label = document.createElement("div");
      label.className = "day-label";
      label.textContent = dayMap[r];
      label.style.gridColumn = "1";
      label.style.gridRow = r;
      grid.appendChild(label);
    }
  }

  for(var row = 0; row < 7; row++){
    for(var col = 0; col < 53; col++){
      var cell = document.createElement("div");
      cell.className = "cell";

      var seed = (row * 53 + col) * 9301 + 49297;
      var rand = (seed % 233280) / 233280;

      var level = 0;
      if(rand > 0.30) level = 1;
      if(rand > 0.52) level = 2;
      if(rand > 0.72) level = 3;
      if(rand > 0.88) level = 4;

      if(row >= 1 && row <= 3) level = Math.min(4, level + 1);
      if(col % 7 === 3 && row < 5) level = Math.min(4, level + 1);
      if(col % 13 === 5) level = Math.min(4, level + 2);
      if(rand < 0.10) level = 0;

      if(level > 0) cell.classList.add("l" + level);
      cell.title = level === 0 ? "No contributions" : level + " contribution" + (level > 1 ? "s" : "");

      cell.style.gridColumn = (col + 2);
      cell.style.gridRow = (row + 2);
      grid.appendChild(cell);
    }
  }

  /* =========================================================
     TECH STACK PYRAMID — FIXED ICON URLS
     ========================================================= */
})();
