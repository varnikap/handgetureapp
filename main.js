Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");
 Webcam.attach('#camera');

 function takesnapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
 }

 console.log('ml5 version', ml5.version);

 classifer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KMOcoxo25/model.json",modelLoaded);