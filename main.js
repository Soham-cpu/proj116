noseX = 0;
noseY = 0;

function preload() {
moustach = loadImage('https://i.postimg.cc/fR5rX3cz/mouse.png');
}

function setup() {
        canvas = createCanvas(375, 300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(375, 300);
        video.hide();
        poseNet = ml5.poseNet(video, uploaded_);
        poseNet.on('pose', gotResults);
    }

function uploaded_() {
    console.log("model loaded");
}

function gotResults(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y) 
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
    image(moustach, noseX, noseY, 50,30)
}

function take_picture() {
    save("picture.png");
}
