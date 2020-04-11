var stops = document.getElementsByClassName("stop");

class ClassName {
  constructor() {

  }
}

for (var i = 0; i < stops.length; i++) {
  stops[i]
  for (var j = 0; j <= 10; j++) {
    led = document.createElement("div");
    led.classList.add('led');
    stops[i].appendChild(led);
    led.addEventListener('mouseover', function(e){
      name(e.target);
    });
}
function name(el){
  el.style.opacity = "100%";
  el.addEventListener('mouseout', out);
  function out(e){
    e.target.style.opacity = "50%";
    document.removeEventListener("mouseout", out(e.target));
  }
}
}
