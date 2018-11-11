


function _Go() {


//canv.addEventListener("mousedown", handleMouseDown, false);
//canv.addEventListener("mouseup", handleMouseUP, false);



ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canv.width, canv.height);

if((window.fullScreen) ||
   (window.innerWidth == screen.width && window.innerHeight == screen.height)) {
   canv.width =  screen.width;
    canv.height = screen.height;
} else {
  canv.width =  document.body.clientWidth ;
  canv.height = document.body.clientHeight;
}

}



var isDraggable;

function handleMouseDown(e) {
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;


    canv.onmousemove = function(e) {
        setInterval(function() {
    if (mouseX >= (currentX - img.width) &&
            mouseX <= (currentX + img.width) &&
            mouseY >= (currentY - img.height) &&
            mouseY <= (currentY + img.height)) {
          _ResetCanvas();
          _DrawImage();
        }
      }, 1000/30);
  }
         // Put your mousedown stuff here


     }




          function noImages() {
            localStorage.removeItem('imagesAA');     return '';
      }

     function handleMouseUP(e) {
       if(mousedown()){     currentX = e.pageX - this.offsetLeft;
            currentY = e.pageY - this.offsetTop;
            if (mouseX >= (currentX - img.width) &&
                    mouseX <= (currentX + img.width) &&
                    mouseY >= (currentY - img.height) &&
                    mouseY <= (currentY + img.height)) {
                  _ResetCanvas();
                  _DrawImage();
                }
        }}


        //    FIRST    FIRST        FIRST        FIRST

        window.onload = function() {
          var storedIMAGES = JSON.parse(localStorage.getItem("imagesAA"));
          if (storedIMAGES != undefined) {  images =  storedIMAGES;  };


          canv = document.getElementById("canvasPHO");
        //  canv.mousedown(function (e) {
          //           handleMouseDown(e);
          //       });
          var currentImage = 0;
          var currentText = 0;

          ctx = canv.getContext("2d");

          currentX = canv.width/2;
          currentY = canv.height/2;

          img.onload = function() {
            _Go();
          };

        };

//    GALARY    GALARY        GALARY        GALARY

var x = 0;
var yx = 0;




var imagegoleft = new Boolean(false);

var y = 0;

function myGalary() {
  cancelmyGalary = false;

  if (cancelmyGalary) {
      return;
    }

    cancelzoomin = true;

      canceldrawing1 = true;

       canceldrawing2 = true;
       cancelzoomout = true;


  currentImage = 0;
  currentText = 0;
FORICKA(7);

  function   switchImage()      {

      setInterval(function() {
              x = 0;
                return function () {
                  imag.setAttribute('src',images[currentImage]);
                  imagegoleft = false;
                  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                  if (imagegoleft == false) {
                    x += 1;
                    ctx.drawImage(imag,0 + x,0, 1050 , 650, 0  ,0  , canv.width , canv.height );
                  }


                  var str1 = imageT[0] + " ";
                  var str2 = imageT[1] + " ";
                  var str3 = imageT[2] + "px ";
                  var toska = str1.concat(str3,str2);
                  ctx.font = toska;
                  ctx.fillStyle = imageT[5];
                  ctx.fillText(textoo[currentText],imageT[4],imageT[3]);
                    var u;
                  var imagerun = imag.width - x;
                 var imagerun2 = imag.width + u ;

                  if(x == 140 ){ imagegoleft = true;  };
                  if (x == 0) { imagegoleft = false;   };
                  if (imagegoleft == true) {  ctx.drawImage(imag,imagerun2,0, 1050 , 650, 0  ,0  , canv.width , canv.height );};
                  if (imagerun == canv.width/4) {  u++;
                        ctx.drawImage(imag,imagerun2   ,0, 1050 , 650, 0  ,0  , canv.width , canv.height );
                  }
                };
              }(), 1000/15);
        currentImage++; currentText++;
        if (currentImage == images.length) {
          currentText = 0;
          currentImage = 0;
          x = 0;
      }    }

setInterval(switchImage,imageT[6] * 1000);
return false;

}

var textlolo = [30, 120, 210, 300];

function LeftSideImageRightText() {
  currentImage = 0;
  currentText = 0;
  FORICKAR(5);

      switchImage();
        setInterval(switchImage,imageT[4] * 1000);

        function   switchImage()    {

            imag.setAttribute('src',images[currentImage]);
            setInterval(function() {         var xota = 0,speedOFnewT = 3;        //SPEED OF THE NEXT TEXT POP UP
              setInterval(function () {

                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    
                    ctx.drawImage(imag, -2,0, imag.width   , imag.height );
                    var str1 = imageT[0] + " ";
                    var str2 = imageT[1] + " ";
                    var str3 =   "40px ";
                    var toska = str1.concat(str3,str2);

                   ctx.fillStyle = imageT[2];
                    ctx.fillRect(canv.width / 2, 0, canv.width / 2, canv.height );
                                        ctx.fillStyle="black";

                    ctx.fillRect(canv.width / 2, 0, 1, canv.height );
                        ctx.font = toska;
                          ctx.fillStyle = imageT[3];
        //   console.log(textoo);
                        for (var i = 0; i < xota; i++)
                        {    ctx.fillText(textoo[i], canv.width / 2 + 50, canv.height / 6 + textlolo[i]);      }
                      if (xota == textoo.length) {          xota = 0;      };
                    xota++;
                  },speedOFnewT*1000);
                }(), 1000/15);
          currentImage++; currentText++;
          if (currentImage == images.length) {
            currentImage = 0;
            x = 0;
          }     }
}




function freeMode(){
  currentImage = 0;
  currentText = 0;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
setTimeout(func, 1000);
function func() {
//  canv.addEventListener('mousemove', pick);''

  for (var i = 0; i < images.length; i++) {
    FORICKA(7);
    var dormax = Math.floor((Math.random() * 300) + 50);
    var calmay = Math.floor((Math.random() * 500) + 20);
    MYJsonOBJ.img0[i] = {"name":images[i],"setx":dormax,"sety":calmay};
    imag.src = images[i];
    ctx.drawImage(imag, dormax,calmay);
  }

var canvasOffset=$("#canvasPHO").offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
  var canvasWidth=canv.width;
  var canvasHeight=canv.height;
  var isDragging=false;

  function handleMouseDown(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // set the drag flag
    isDragging=true;
  }

  function handleMouseUp(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // clear the drag flag
    isDragging=false;
    console.log(MYJsonOBJ);

  }

  function handleMouseOut(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);

    // user has left the canvas, so clear the drag flag
    //isDragging=false;
  }

  function handleMouseMove(e){
    canMouseX=parseInt(e.clientX-offsetX);
    canMouseY=parseInt(e.clientY-offsetY);
    // if the drag flag is set, clear the canvas and draw the image
    if(isDragging){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);

      imag.src = images[i];
          ctx.drawImage(imag,canMouseX-128/2,canMouseY-120/2);
          MYJsonOBJ.img0[images.length].setx = canMouseX-128/2;
    //      MYJsonOBJ.img0[images.length].sety = canMouseY-120/2;

        for (var i = 0; i < images.length ; i++) {
          FORICKA(7);

          imag.src =  MYJsonOBJ.img0[i].name;
          ctx.drawImage(imag, MYJsonOBJ.img0[i].setx,MYJsonOBJ.img0[i].sety);
        }

    }

  }
  $("#canvasPHO").mousedown(function(e){handleMouseDown(e);});
    $("#canvasPHO").mousemove(function(e){handleMouseMove(e);});
    $("#canvasPHO").mouseup(function(e){handleMouseUp(e);});
    $("#canvasPHO").mouseout(function(e){handleMouseOut(e);});
}

}






    // Creates a new canvas element and appends it as a child
    // to the parent element, and returns the reference to
    // the newly created canvas element





var imag = document.createElement("img");

function FORICKA(r) {


for (var i = 0; i < images.length; i++) {
     var valuess = document.getElementsByClassName("searchTxt")[i].value;
     textoo.push(valuess);    }
for (var t = 0; t < r; t++) {
     var aaasd = document.getElementsByClassName("imageT")[t].value;
     imageT.push(aaasd);       }

imag.setAttribute('width', canv.width);
imag.setAttribute('height', canv.height);
}


function FORICKAR(r) {


for (var i = 0; i < 4; i++) {
     var valuess = document.getElementsByClassName("searchTxt")[i].value;
     textoo.push(valuess);    }
for (var t = 0; t < r; t++) {
     var aaasd = document.getElementsByClassName("imageT")[t].value;
     imageT.push(aaasd);       }

imag.setAttribute('width', canv.width);
imag.setAttribute('height', canv.height);
}



function   Kalipso(h){
  if (images.length == 0) {
    alert("You didn't choose image(images). You can draw without images");
        return false;
  }
  closeNav();
if (document.getElementById("myCheck").checked = true) {

  var palatabold = "<select class='imageT'><option>bold</option><option>bolder</option><option>normal</option><option>lighter</option></select>";
var  palatast = "<select class='imageT'><option>Arial</option><option>sans-serif</option><option>Courier New</option><option>Times New Roman</option><option>Comic Sans MS</option><option>Verdana</option></select>";
var palata = "<input class='imageT' type = 'text' placeholder='SET text size in px (123)'></input> </input><input class='imageT' type = 'text' placeholder='SET text place on y (up and down)'></input> </input><input class='imageT' type = 'text' placeholder='SET text place on x axis <>'></input> ";

var palataCOLOR = "<select class='imageT'><option>red</option><option>white</option><option>black</option><option>blue</option></select>";
var speed = "<input class='imageT' type = 'text' placeholder='interval, image time(sec, 10 is optimal)' value='10'></input>";
var palata1 = "";

for (var i = 0; i < images.length; i++) {
    palata1 += "<input class='searchTxt' type = 'text' placeholder='text on image'></input>";
  }

var palata2 = "<button value='Submit'  class='button' onclick='"+ h +"'>click</button>";
var toska = palatabold.concat(palatast,palata,palataCOLOR,speed,palata1,palata2);

document.getElementById("MovingGalar").innerHTML = toska;
  } else {
  document.getElementById("MovingGalar").innerHTML = ""  ;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      currentImage = 0;
      x = 0;
  }
}



function   KalipsoR(){
  if (images.length == 0) {
        return false;
  }
  closeNav();

if (document.getElementById('myCheck3').checked = true) {


  var palatabold = "<select class='imageT'><option>bold</option><option>bolder</option><option>normal</option><option>lighter</option></select>";
var  palatast = "<select class='imageT' ><option>Arial</option><option>sans-serif</option><option>Courier New</option><option>Times New Roman</option><option>Comic Sans MS</option><option>Verdana</option></select>";

    var palata = "<label>square color</label><select class='imageT' ><option>red</option><option selected>white</option><option>black</option><option>blue</option></select>";

var palataCOLOR = "<select class='imageT' ><option>red</option><option>white</option><option selected>black</option><option>blue</option></select>";
var speed = "<input class='imageT' type = 'text' placeholder='interval, image time(sec, 10 is optimal)' value='15'></input>";
var palata1 = "<input class='searchTxt' type = 'text' placeholder='text on image'></input>    <input class='searchTxt' type = 'text' placeholder='text on image'></input>";
var lopata  = "<input class='searchTxt' type = 'text' placeholder='text on image'></input>    <input class='searchTxt' type = 'text' placeholder='text on image'></input>";

var palata2 = "<button value='Submit'  class='button' onclick=' LeftSideImageRightText()'>click</button>";
var toska = palatabold.concat(palatast,palata,palataCOLOR,speed,palata1,lopata,palata2);

document.getElementById('MovingGalarR').innerHTML = toska;
  } else {
  document.getElementById('MovingGalarR').innerHTML = ""  ;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      currentImage = 0;
      x = 0;
  }
}
