currentImage = 0;
currentText = 0;
function ZoomIN() {
  x = 0;currentText = (textoo.length - 1);

  modal.style.display = "none";
  goFullScreen();
    cancelzoomin = false;

  if (cancelzoomin) {
      return;
    }
    canceldrawing1 = true;

     canceldrawing2 = true;
     cancelzoomout = true;
     cancelmyGalary = true;


FORICKA(7);


      switchImage();
        setInterval(switchImage,imageT[6] * 1000);

        function   switchImage()    {

            imag.setAttribute('src',images[currentImage]);
            setInterval(function() {
                  return function () {
                 if (currentText == images.length) {
                   currentText = 0;
                 }
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(imag, 0 - x ,0 - x , canv.width + x, canv.height + x);
                    var str1 = imageT[0] + " ";
                    var str2 = imageT[1] + " ";
                    var str3 = imageT[2] + "px ";
                    var toska = str1.concat(str3,str2);
                    ctx.font = toska;
                    ctx.fillStyle = imageT[5];
                    ctx.fillText(textoo[currentText],imageT[4],imageT[3]);

console.log("currentText : " + currentText);
                    x += 1;
                  };
                }(), 1000/15);
          currentImage++; currentText++;
          if (currentImage == images.length) {
            currentImage = 0;
            x = 0;
          }     }
}


function ZoomOUT() {
  modal.style.display = "none";
  goFullScreen();
  x = 0;currentText = (textoo.length - 1);

    cancelzoomout = false;

  if (cancelzoomout) {
      return;
    }
    canceldrawing1 = true;

     canceldrawing2 = true;
     cancelzoomin = true;
     cancelmyGalary = true;

  FORICKA(7);
      switchImage();
        setInterval(switchImage,imageT[6] * 1000);

        function   switchImage()    {

            imag.setAttribute('src',images[currentImage]);
            setInterval(function() {
                  return function () {

                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(imag, 0 ,0, canv.width   / 1.6 + x, canv.height / 1.6 + x,0,0,canv.width +x,canv.height+x);
                    var str1 = imageT[0] + " ";
                    var str2 = imageT[1] + " ";
                    var str3 = imageT[2] + "px ";
                    var toska = str1.concat(str3,str2);
                    ctx.font = toska;
                    ctx.fillStyle = imageT[5];
                    ctx.fillText(textoo[currentText],imageT[4],imageT[3]);


                    x += 1;
                  };
                }(), 1000/15);
          currentImage++; currentText++;
          if (currentImage == images.length) {
            currentImage = 0;
            x = 0;
          }     }
}
