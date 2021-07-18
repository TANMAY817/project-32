const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg="sunrise1.png" ;

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg){

    background(backgroundImg);
}

    Engine.update(engine);
textSize(20)
   if(hour>=12){
       text("time : "+hour%12+" PM",50,100)
   }
   else if (hour==0){

    text("time : 12 AM",100,100)
   }

   else {
    text("time : "+hour%12+" AM",50,100)
   }
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var url=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var urljson=await url.json()
    hour=urljson.datetime.slice(11,13)
    if(hour>=03&&hour<=05){

        bg="sunrise1.png"
    }

    else if(hour>05&&hour<=07){

        bg="sunrise2.png"
    }

    else if(hour>07&&hour<=09){

        bg="sunrise3.png"
    }

    else if(hour>09&&hour<=11){

        bg="sunrise4.png"
    }

    else if(hour>11&&hour<=13){

        bg="sunrise5.png"
    }
    
    else if(hour>13&&hour<=15){

        bg="sunrise6.png"
    
    }
    else if(hour>15&&hour<=17){

        bg="sunset7.png"
    
    }
    else if(hour>17&&hour<=19){

        bg="sunset8.png"
    
    }
    else if(hour>19&&hour<=21){

        bg="sunset9.png"
    
    }
    else if(hour>21&&hour<=23){

        bg="sunset10.png"
    
    }
    else if(hour>23&&hour<=01){

        bg="sunset11.png"
    
    }
    else if(hour>01&&hour<=03){

        bg="sunset12.png"
    
    }

    backgroundImg=loadImage(bg)
    


    

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
