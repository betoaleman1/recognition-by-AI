function setup(){
video=createCapture("VIDEO");
video.size(600, 600);
canvas=createCanvas(600, 450);
canvas.position(750,125);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    background ('#e51a4c');
}

function modelloaded(){
    console.log("modelo cargado");
}

function gotPoses(results){
    if (results.lenght>0){console.log(results)};
}