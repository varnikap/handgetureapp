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

 classifer = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/yRh2qcVeH/model.json",modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded!');
}
 function prediction()
 {
     img = document.getElementById('captured_image');
     classifer.classify(img,gotResult);
    
 }
 function gotResult(error,results)
 {
     if(results)
     {
        
         console.log(results);
     }
     else
     {
        console.log(results);
        
     }
 }

 function speak()
{
var synth = window.speechSynthesis;
gesture_data = "The gesture is " + prediction_1;
var utterthis = new SpeechSynthesisUtterance(gesture_data);
synth.speak(utterthis);
}