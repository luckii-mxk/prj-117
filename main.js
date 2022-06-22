nose_x = 0;
nose_y = 0;

//https://i.postimg.cc/zByFfYcS/images-removebg-preview.png

function preload() {
    lipstick = loadImage('https://i.postimg.cc/zByFfYcS/images-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Loaded Successfully :)")
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(lipstick, nose_x, nose_y, 35, 20)
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);

        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        nose_x = results[0].pose.nose.x - 20
        nose_y = results[0].pose.nose.y + 17
    }
}