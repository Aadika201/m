noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/RCDKFPGL/m.png');
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        console.log("nose x = " + noseX);
        noseY = results[0].pose.nose.y;
        console.log("nose y = " + noseY);
        
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(mustache, noseX - 30, noseY + 5, 60, 30);
    
}

function take_snapshot(){
    save('Filter.png');
}