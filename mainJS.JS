 //--------------------
      // GET USER MEDIA CODE
      //--------------------
navigator.getUserMedia = ( navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia);

var video;
var webcamStream;

function startWebcam() {
    if (navigator.mediaDevices.getUserMedia) {
        webcamStream = navigator.mediaDevices.getUserMedia (
            // constraints
            {
                video: true,
                audio: false
            }).then(function(mediaStream) {
                video = document.querySelector('video');
                video.srcObject = mediaStream;
                video.onloadedmetadata = function(e) {
                video.play();
            };
          })
          .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
    }
}

function stopWebcam() {
    webcamStream.stop();
}
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx;

function init() {
    // Get the canvas and obtain a context for
    // drawing in it
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
}

function snapshot() {
// Draws current image from the video element into the canvas
    ctx.drawImage(video, 0,0, canvas.width, canvas.height);

    //add the code to get jpg file from ctx,
    //add something to run the python model on the jpg file to predict trash or not
    //add a text to the ctx on whether it is trash
}
