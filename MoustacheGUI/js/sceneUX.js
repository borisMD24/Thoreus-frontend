document.getElementsByTagName('body')[0].innerHTML += '<div id="test" style="width : 1em; height : 1em;"></div>'; const u = window.getComputedStyle(document.getElementById('test'), null).height;document.getElementById('test').remove();
var selected = "null";

class hover{
  constructor(el) {
    this.og = el;
    this.hover = superposed(el);
  }
}
function superposed(el){
  var e = document.createElement("div");
  p = el.parentNode;
  tr = p.appendChild(document.createElement("div"));
  tr.classList.add('transparent');
  tr.style.left = window.getComputedStyle(el).left; tr.style.top = window.getComputedStyle(el).top;
  return tr;
}
function popTr(el){
  var tab = document.getElementsByClassName("block");
  var ret = [];
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] != el) {
        n = new hover(el);
        ret.push(n);
    }
  }
  return ret;
}


var els = document.querySelectorAll(".block");
for (let el of els) {
  el.addEventListener('mousedown', mousedown);
function mousedown(e){

  var trs = popTr(el);
  for (let tr of trs) {
    tr.hover.addEventListener('mouseover', over);
  }
  selected = el;
  console.log("dragging      " + el.className);
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e){
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;
    const rect = el.getBoundingClientRect();
    el.style.left = rect.left - newX + 'px';
    el.style.top = rect.top - newY + 'px';

    prevX = e.clientX;
    prevY = e.clientY;
  }
  function mouseup(e){
    el.style.pointerEvents = "default";
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
    selected = "null";
    magnetic(e.target);
    for (let tr of trs) {
      tr.og.parentElement.removeChild(tr.hover);
    }
    trs = [];
  }
}
  function over(e){
    console.log(e.target.className);
    if(selected === "null")
    {
      console.log(e.target);
    }
    else {
      console.log(selected);
      selected.addEventListener('mouseup', pushIn);
      console.log("hover " + this.targe+ " dragging another!");
      function pushIn(e){
        console.log(e.target.className  + " pushed in " + tr);
        console.log(e.target);
        var target;
        for (let tr of trs) {
          if(e.target===tr){
            target = tr;
          }
        }
        console.log(target);
        removeEventListener("mouseup", pushIn)
      }
    }
  }

}


function magnetic(el){
  h = window.getComputedStyle(el , null).top.replace('px', '');
  l = window.getComputedStyle(el , null).left.replace('px', '');
  var ul = u.replace('px', '');
  var mid = ul/2;
  if((h%ul)-1>mid){
    var top = (h - ( h % ul)) / ul + 1 + "em";
    el.style.top = top;
  } else{
    var top = (h - ( h % ul)) / ul - 1 + "em";
    el.style.top = top;
  }
  var mid = ul/2;
  if((l%ul) >mid){
    var left = (l - (l % ul)) / ul + 1 + "em";
    el.style.left = left;
  } else{
    var left = (l - (l % ul)) / ul - 1 + "em";
    el.style.left = left;
  }
}
