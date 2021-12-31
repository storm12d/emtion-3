Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
        Webcam.snap(function(data_uri)  {
            document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
        })
}

console.log("ml5 Version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/336En2onr/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded Successfully");
};
function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, result) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_of_object").innerHTML = result[0].label;
        document.getElementById("result_of_accuracy").innerHTML = (result[0].confidence*100).toFixed(3);
    }
}
