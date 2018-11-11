//              DROPZONE

function loadImages(sources, callback) {
       var images = {};
       var textoo = {};

       var loadedImages = 0;
       var numImages = 0;
       // get num of sources
       for(var src in sources) {
         numImages++;
       }
       for(var src in sources) {
         images[src] = new Image();
         images[src].onload = function() {
           if(++loadedImages >= numImages) {
             callback(images);
           }
         };
         images[src].src = sources[src];
       }
     }


function openNav()
{
    document.getElementById("mySidenav").style.width = "250px";

}
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
}


let dropZone = document.getElementById('dropZone');
var imageLoader = document.getElementById('filePhoto');
    imageLoader.addEventListener('change', handleImage, false);
    var images = [];
    var textoo = [];
    var imageT = [];
    var MYJsonOBJ = {  "img0": []   };





    var img = new Image();
function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (l) {


    //    document.getElementById('photon').innerHTML += '<img src="' + l.target.result + '">';
     img.src = l.target.result;
    images.push(l.target.result);
    localStorage.setItem("imagesAA", JSON.stringify(images));


    }
    if(event.target.files[0]){
     reader.readAsDataURL(event.target.files[0]);
   }

}





//...



function goFullScreen(){
  canv.width =  screen.width;
  canv.height = screen.height;

    if(canv.requestFullScreen)
        {canv.requestFullScreen();
        window.fullScreen;}
    else if(canv.webkitRequestFullScreen)
        {canv.webkitRequestFullScreen();
        window.fullScreen;}

    else if(canv.mozRequestFullScreen){
        canv.mozRequestFullScreen();
        window.fullScreen;}

}
