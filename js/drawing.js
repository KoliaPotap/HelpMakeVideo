var radius = 1; // or whatever
var fillColor = '#7FFFD4';
var isDrawing = new Boolean(false);
var allx = []; var valI = 0; var ally = []; var allrad = [] ; var allcol = [];

var cancelledDRAW2 = false;



var canceldrawing1 = new Boolean(true);
var canceldrawing2 = new Boolean(true);
var cancelzoomin = new Boolean(true);
var cancelzoomout = new Boolean(true);
var cancelmyGalary = new Boolean(true);




function DrawMode2(){

      var canceldrawing1 = false ;
    if (canceldrawing1) {
        return;
      }
     canceldrawing2 = true;
     cancelzoomin = true;
     cancelzoomout = true;
     cancelmyGalary = true;
function init(container, width, height) {
    // define a custom fillCircle method



    ctx.fillCircle = function(x, y, radius, fillColor) {
        this.beginPath();

        for (var i = 0; i < allx.length; i++) {
         this.moveTo(allx[i], ally[i]);

       this.arc(allx[i], ally[i], allrad[i], 0, Math.PI * 2);
       this.fillStyle = allcol[i];
 }
        this.fill();



    };
  ctx.clearTo = function(fillColor) {
    ctx.fillCircle(x, y, radius, fillColor);

        ctx.fillRect(0, 0, width, height);
    };
    ctx.clearTo(fillColor || "#ddd");

    // bind mouse events
    canv.onmousemove = function(e) {

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

       // or whatever
       ctx.lineWidth = radius * 2;

        ctx.fillCircle(x, y, radius, fillColor);
        ctx.closePath();
        ctx.fillStyle = fillColor;


        ctx.beginPath();
        					 ctx.moveTo(x,y);


        var HandDrawImg = document.createElement("img");

        HandDrawImg.src =  "./hand.png";
        ctx.drawImage(HandDrawImg, x,y);
        if (isDrawing == false) {  ctx.drawImage(HandDrawImg, x,y); }
        if (isDrawing == true) {          allx.push(x);ally.push(y); allrad.push(radius);allcol.push(fillColor);}
    };

    canv.onmousedown = function(e) {  isDrawing = true;        };
    canv.onmouseup = function(e) {  isDrawing = false;         };
}

var container = document.getElementById('canvasPHO');
init(canv, 200, 200);
if (cancelledDRAW2 == true) {
    return false;
  }
}


function val(obj) {
    d = document.getElementById(obj.id).value;
    if (obj.id == 'color') {  fillColor = d ; };
    if (obj.id == 'radius') {  radius = d;};
}


document.addEventListener('keydown', function(e){
					 if(e.keyCode == 82){ runvideo(); document.getElementById("canvasPHO").style.backgroundImage = "url('')";return false; }//reply
					 if(e.keyCode == 67){       ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); return;  }//cleare
           if(e.keyCode == 73){   document.getElementById("canvasPHO").style.backgroundImage = "url('"+images[valI]+"')";   valI++; if (valI == images.length + 1) { valI = 0;     }  }//    I
					 });

function runvideo(){

  var io = 0;

  cancelledDRAW2 = true;

  var timer = setInterval(function() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
for (var i = 0; i < io; i++) {
  ctx.lineTo(allx[i],ally[i]);

  ctx.beginPath();
  ctx.arc(allx[i], ally[i], allrad[i], 0, Math.PI * 2);
    ctx.fillStyle  = allcol[i];
  ctx.fill();
  ctx.moveTo(allx[i], ally[i]);
}

         var aaa = document.createElement("img");

         aaa.src =  "./hand.png";
         ctx.drawImage(aaa, allx[io],ally[io]);        io++;}, 25);
if (allx.length <= io) {
  clearInterval(timer);
  cancelledDRAW2 = false;
}

  }


function   KalipsoDraw(g){
 if (g == true) {
   DrawMode2();
 }else {
   drawingwithouthand();
 }

  closeNav();
if (document.getElementById("myCheck").checked = true) {

  var palatabold = "<select id='radius' onchange='val(this)'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>20</option><option>30</option></select>";
var  palatast = "";
var palata = "";

var speed =  "<select id='color' onchange='val(this)'><option>red</option><option>blue</option><option>black</option><option>white</option></select>";
var video = "<button value='Submit'  class='button' onclick='runvideo();'>click</button>";
if (g == true) {
  var text = "<h4 style='float: right;  top: -3;'> R - run, I - set Image</h4>"
}else {
  var text = "<h4 style='float: right;  top: -3;'>S - save drawing R - run   C - clean</h4>"
}
var toska = palatabold.concat(palatast,palata,speed,video,text);


document.getElementById("MovingGalar").innerHTML = toska;
  } else {
  document.getElementById("MovingGalar").innerHTML = ""  ;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      currentImage = 0;
      x = 0;
  }
}
