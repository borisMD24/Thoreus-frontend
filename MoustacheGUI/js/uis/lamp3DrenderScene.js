var scene = document.getElementById("scene");
var cube  = document.getElementById('cube');

scene.addEventListener('mousedown', mousedown)

function mousedown(e){
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);
  function mousemove(e){
    rotate(e.clientY, e.clientX)
  }
  function mouseup(e){
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

function rotate(x,y){
  x = (100*x/scene.offsetHeight) * 3.6 - x;
  y = (100*y/scene.offsetHeight) * 3.6 - y;
  cube.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
}


console.log(
    "%cEST",
    "color:green;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
  );


  console.log(
      "%cWEST",
      "color:blue;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
    );


    console.log(
        "%cNORTH",
        "color:yellow;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
      );


      console.log(
          "%cEST",
          "color:purple;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
        );

        console.log(
            "%cMID",
            "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
          );
