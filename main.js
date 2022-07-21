webcam.set({
    height:300,
    width:350,
    img_format :'png',
    img_quality:90
});

camera = document.getElementById("camera");
webcam.attach( 'camera#' );

function take_snapshot(){
    webcam.snap(function(data_uri)  {
        document.getElementById("result").innerHTML= '<img id="captured_image"  src"'  +data_uri+'"/>';
    
    });
}

console.log('ml5 version:',ml5.version);
classifier = imageClassifier('https://teachablemachine.withgoogle.com/models/Jq64T-eyF/',modelLoaded);