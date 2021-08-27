song1="";
song2="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleft=0;
scoreright=0;
song1_status="";
song2_status="";
function preload() {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
  
  posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);

}


function draw() {
    image(video, 0,0,600,500);
  song1_status=song1.isPlaying();
  song2_status=song2.isPlaying();
  fill("red");
  stroke("red")
  if(scoreright>0.2)
    {
      circle(rightwristx,rightwristy,20);
      song2.stop();
      if(song1_status==false)
        {
          song1.play();
          document.getElementById("song").innerHTML="playing-harry potter"
        }
      
    }
  if(scoreleft>0.2)
    {
      
      circle(leftwristx.leftwristy,20);
            song1.stop();
       if(song2_status==false)
        {
          song2.play();
          document.getElementById("song").innerHTML="playing-cod ww2 song"
        }
    }
}

function play() {
    song.play();
   song.setVolume(1);
    song.rate(1);
}

function gotposes(results) {
    if(results.length > 0)
    {
      
        console.log(results);
      scoreright=results[0].pose.keypoints[10].score;
      scoreleft=results[0].pose.keypoints[9].score;
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;

        console.log("leftwristx= "+leftwristx+"leftwristy= "+leftwristy);

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;

        console.log("rightwristx= "+rightwristx+"rightwristy= "+rightwristy);
    }
}