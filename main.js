function preload(){

}
function setup(){
    canavs = createCanvas(600,600)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poset = ml5.posenet(video,modelLoaded)
    poseNet.on("pose", gotResult)
}
function draw(){
image(600,600,video)
}
function save(){

}
modelLoaded(){
    console.log("model Loaded")
}
function gotResult(){
    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y
}