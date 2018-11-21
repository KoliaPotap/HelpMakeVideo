

var
         isMouseDown = false,
         coords = [],  colonwide = [], oopla = 0;
         radiusOfpencil = 0.5,fillakColor = 'black';

function val(obj) {
    d = document.getElementById(obj.id).value;
    if (obj.id == 'color') {  fillakColor = d ; };
    if (obj.id == 'radius') {  radiusOfpencil = d;};
}


function drawingwithouthand(){
    canceldrawing2 = false;
  if (canceldrawing2) {
      return;
    }
    canceldrawing1 = true;
    cancelzoomin = true;
    cancelzoomout = true;
    cancelmyGalary = true;


      canv.addEventListener('mousedown',
      function(){isMouseDown = true;});
      canv.addEventListener('mouseup',
      function(){isMouseDown = false;ctx.beginPath();coords.push('mouseup');});
  //  ctx.fillStyle = fillakColor;
      ctx.lineWidth = radiusOfpencil * 2;
      canv.addEventListener('mousemove', function(e){
      if(isMouseDown){
     colonwide.push(radiusOfpencil);
      coords.push([e.clientX - this.offsetLeft,e.clientY - this.offsetTop]);

      ctx.lineTo(e.clientX - this.offsetLeft,e.clientY - this.offsetTop);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(e.clientX - this.offsetLeft, e.clientY - this.offsetTop, radiusOfpencil, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.clientX - this.offsetLeft,e.clientY - this.offsetTop);}
      });

      function save(){oopla = 0;localStorage.setItem('coords', JSON.stringify(coords))
      }

      function replay(){
         var timer = setInterval(function() {
       if(!coords.length){clearInterval(timer);ctx.beginPath();return;}
       var
          crd = coords.shift(),
          e = {clientX: crd["0"],clientY: crd["1"]};

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, colonwide[oopla], 0, Math.PI * 2);
      ctx.fill();
      oopla++;
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY); }, 30);
      }

      function clear(){
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canv.width, canv.height);

      ctx.beginPath();
      ctx.fillStyle = 'black';
      }
      document.addEventListener('keydown', function(e){
      if(e.keyCode == 83){save();console.log('saved');}//save s
      if(e.keyCode == 82){coords = JSON.parse(localStorage.getItem('coords')); clear();replay();  }//reply
      if(e.keyCode == 67){clear();}//cleare
      });
}
