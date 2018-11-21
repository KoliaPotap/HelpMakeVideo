currentText = 0;
function tYping() {
x = 0;
  modal.style.display = "none";
  goFullScreen();
  cancelzoomout = true;

    canceldrawing1 = true;

     canceldrawing2 = true;
     cancelzoomin = true;
     cancelmyGalary = true;

          var valuess = document.getElementsByClassName("searchTxt")[0].value;
          textoo.push(valuess);
     for (var t = 0; t < 3; t++) {
          var aaasd = document.getElementsByClassName("imageT")[t].value;
          imageT.push(aaasd);       }

      switchImage();
        function   switchImage()    {

          clearInterval(interval);

          var interval =  setInterval(function() {

                  return function () {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    var str1 = imageT[0] + " ";
                    var str2 = imageT[1] + " ";
                    var str3 =  "90px ";
                    var toska = str1.concat(str3,str2);
                    ctx.font = toska;
                    ctx.fillStyle = imageT[2];
                    if (textoo[0].length  == x) {     x = 0;     }

  if (x < 19 ) {
                      ctx.fillText(textoo[0].slice(0,x),canv.height / 5 , 90);  }
  if (x >= 19 && x <= 38  ) {
                      ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                      ctx.fillText(textoo[0].slice(19,x),canv.height / 5 , 165);      }
if (x >= 38 && x <= 57) {
                      ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                      ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                      ctx.fillText(textoo[0].slice(38,x),canv.height / 5 , 240);}
if (x >= 57 && x <= 76) {
                      ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                      ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                      ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                      ctx.fillText(textoo[0].slice(57,x),canv.height / 5 , 305);    }
if (x >= 76 && x <= 95) {
                      ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                      ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                      ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                      ctx.fillText(textoo[0].slice(57,76),canv.height / 5 , 305);
                      ctx.fillText(textoo[0].slice(76,x),canv.height / 5 , 370);    }
if (x >= 95 && x <= 114) {
                        ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                        ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                        ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                        ctx.fillText(textoo[0].slice(57,76),canv.height / 5 , 305);
                        ctx.fillText(textoo[0].slice(76,95),canv.height / 5 , 370);
                        ctx.fillText(textoo[0].slice(95,x),canv.height / 5 , 445);    }
if (x >= 114 && x <= 133) {
                        ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                        ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                        ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                        ctx.fillText(textoo[0].slice(57,76),canv.height / 5 , 305);
                        ctx.fillText(textoo[0].slice(76,95),canv.height / 5 , 370);
                        ctx.fillText(textoo[0].slice(95,114),canv.height / 5 , 445);
                        ctx.fillText(textoo[0].slice(114,x),canv.height / 5 , 510);    }
if (x >= 133 && x <= 151) {
                        ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                        ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                        ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                        ctx.fillText(textoo[0].slice(57,76),canv.height / 5 , 305);
                        ctx.fillText(textoo[0].slice(76,95),canv.height / 5 , 370);
                        ctx.fillText(textoo[0].slice(95,114),canv.height / 5 , 445);
                        ctx.fillText(textoo[0].slice(114,133),canv.height / 5 , 510);
                        ctx.fillText(textoo[0].slice(133,x),canv.height / 5 , 585);    }
if (x >= 151 && x <= 170) {
                        ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                        ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                        ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                        ctx.fillText(textoo[0].slice(57,76),canv.height / 5 , 305);
                        ctx.fillText(textoo[0].slice(76,95),canv.height / 5 , 370);
                        ctx.fillText(textoo[0].slice(95,114),canv.height / 5 , 445);
                        ctx.fillText(textoo[0].slice(114,133),canv.height / 5 , 510);
                        ctx.fillText(textoo[0].slice(133,151),canv.height / 5 , 585);
                        ctx.fillText(textoo[0].slice(151,x),canv.height / 5 , 650);    }
if (x >= 170 && x <= 189) {
                        ctx.fillText(textoo[0].slice(0,19),canv.height / 5 , 90);
                          ctx.fillText(textoo[0].slice(19,38),canv.height / 5 , 165);
                          ctx.fillText(textoo[0].slice(38,57),canv.height / 5 , 240);
                            ctx.fillText(textoo[0].slice(57,76),canv.height / 5 , 305);
                          ctx.fillText(textoo[0].slice(76,95),canv.height / 5 , 370);
                          ctx.fillText(textoo[0].slice(95,114),canv.height / 5 , 445);
                          ctx.fillText(textoo[0].slice(114,133),canv.height / 5 , 510);
                        ctx.fillText(textoo[0].slice(133,151),canv.height / 5 , 585);
                            ctx.fillText(textoo[0].slice(151,170),canv.height / 5 , 650);
                            ctx.fillText(textoo[0].slice(170,x),canv.height / 5 , 730);    }



                    x++;    };

                }(),  1000 / 12 );
          }
}



function OneAfterAnother() {
x = 0;
  modal.style.display = "none";
  goFullScreen();
  cancelzoomout = true;

    canceldrawing1 = true;

     canceldrawing2 = true;
     cancelzoomin = true;
     cancelmyGalary = true;

          var valuess = document.getElementsByClassName("searchTxt")[0].value;
          textoo.push(valuess);
     for (var t = 0; t < 3; t++) {
          var aaasd = document.getElementsByClassName("imageT")[t].value;
          imageT.push(aaasd);       }

      switchImage();
        function   switchImage()    {

          clearInterval(interval);

          var interval =  setInterval(function() {

                  return function () {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    var str1 = imageT[0] + " ";
                    var str2 = imageT[1] + " ";
                    var str3 =  "800px ";
                    var toska = str1.concat(str3,str2);
                    ctx.font = toska;
                    ctx.fillStyle = imageT[3];
                    if (textoo[0].length  == x) {     x = 0;     }

                    ctx.fillText(textoo[0].charAt(x),canv.height / 3 ,canv.width / 2);

                    x++;    };

                }(),  1000 / 3 );
          }
}



function   Movingtext(){
    document.getElementById("MovingGalarR").innerHTML = ""  ;

  closeNav();

if (document.getElementById('myCheck3').checked = true) {

    var palatabold = "<select class='imageT'><option>bold</option><option>bolder</option><option>normal</option><option>lighter</option></select>";
  var  palatast = "<select class='imageT'><option>Arial</option><option>sans-serif</option><option>Courier New</option><option>Times New Roman</option><option>Comic Sans MS</option><option>Verdana</option></select>";
  var palata = "<input class='imageT' type = 'text' placeholder='SET text size in px (123)'></input> <input class='imageT' type = 'text' placeholder='SET text place on y (up and down)'></input> </input><input class='imageT' type = 'text' placeholder='SET text place on x axis <>'></input> ";

  var palataCOLOR = "<select class='imageT'><option>red</option><option>white</option><option>black</option><option>blue</option></select>";
  var speed = "<input class='imageT' type = 'text' placeholder='interval, image time(sec, 10 is optimal)' value='10'></input><br>";
  var palata1 = "";

  for (var i = 0; i < images.length; i++) {
      palata1 += "<input class='searchTxt' type = 'text' placeholder='text on image'></input><br>";
    }

  var palata2 = "<button value='Submit'  class='button' onclick='textTyping()'>Typing</button>";
  var toska = palatabold.concat(palatast,palata,palataCOLOR,speed,palata1,palata2);

  modal.style.display = "block";
  modalion.innerHTML = toska;

  } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      currentImage = 0;
      x = 0;
  }
}


function   Typing(h){
  if (h == 1) {    h = 'OneAfterAnother()';  }
  if (h == 2) {    h = 'tYping()';  }

    document.getElementById("MovingGalarR").innerHTML = ""  ;

  closeNav();

if (document.getElementById('myCheck3').checked = true) {



    var palatabold = "<select class='imageT'><option>bold</option><option>bolder</option><option>normal</option><option>lighter</option></select>";
  var  palatast = "<select class='imageT'><option>Arial</option><option>sans-serif</option><option>Courier New</option><option>Times New Roman</option><option>Comic Sans MS</option><option>Verdana</option></select>";
  var palata = "";

  var palataCOLOR = "<select class='imageT'><option>red</option><option>white</option><option>black</option><option>blue</option></select>";
  var speed = "<textarea class='searchTxt'></textarea>";
  var palata1 = "";


  var palata2 = "<button value='Submit'  class='button' onclick='"+h+"'>Typing</button>";
  var toska = palatabold.concat(palatast,palata,palataCOLOR,speed,palata1,palata2);

  modal.style.display = "block";
  modalion.innerHTML = toska;

  } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      currentImage = 0;
      x = 0;
  }
}





function   KalTEXT(){
  document.getElementById("MovingGalarR").innerHTML = ""  ;
  closeNav();

if (document.getElementById('myCheck3').checked = true) {

    var palatabold = "<button value='Submit'  class='button' onclick='Typing(1)'>One after another</button>   <button value='Submit'  class='button' onclick='Typing(2)'>Typing </button>   ";
  var  palatast = "";

  var toska = palatabold.concat(palatast);

  modal.style.display = "block";
  modalion.innerHTML = toska;

  } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      currentImage = 0;
      x = 0;
  }
}
