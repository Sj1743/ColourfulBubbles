//Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const engine = Engine.create();
const world = engine.world;

//Variables
var bubble1, bubble2;
var topEdge, bottomEdge, leftEdge, rightEdge;
var colour = [0, 0, 0];

function setup() {

	//Canvas
	createCanvas(800, 700);

	/*BODIES*/
	//Bubbles
	bubble1 = new Bubble(random(100, 700), random(100, 600));
	bubble2 = new Bubble(random(100, 700), random(100, 600));

	//Edges
	topEdge = new Edge(400, 0, 800, 10);
	bottomEdge = new Edge(400, 700, 800, 10);
	leftEdge = new Edge(0, 350, 10, 700);
	rightEdge = new Edge(800, 350, 10, 700);

	//Run Engine
	Engine.run(engine);  
}


function draw() {

	//Background
	background(colour);

	/*DETECT COLLISION*/
	detectCollision(bubble1, bubble2);

	/*Display*/
	//Bubbles
	bubble1.display();
	bubble2.display();
	//Edges
	topEdge.display();
	bottomEdge.display();
	leftEdge.display();
	rightEdge.display();

}


function detectCollision(body1, body2){
	bubble1Pos = body1.body.position;
	bubble2Pos = body2.body.position;

	var distance = dist(bubble1Pos.x, bubble1Pos.y, bubble2Pos.x, bubble2Pos.y);

	if(distance <= body1.radius + body2.radius){
		colour[0] = random(0, 255);
		colour[1] = random(0, 255);
		colour[2] = random(0, 255);
	}
}


function keyPressed(){
	if(keyCode === 38){
		Matter.Body.applyForce(bubble1.body, bubble1.body.position, {x: random(-800, 800), y: random(-800, 800)});
	}else if(keyCode === 40){
		Matter.Body.applyForce(bubble2.body, bubble2.body.position, {x: random(-800, 800), y: random(-800, 800)});
	}
}



/*
function pytheo(circleA, circleB){
	var circleAX = circleA.position.x;
    var circleAY = circleA.position.y;
    var circleBX = circleB.position.x;
    var circleBY = circleB.position.y;

    var dx = circleAX - circleBX;
    var dy = circleAY - circleBY;
    var dist = Math.sqrt(dy*dy + dx*dx);

    if (dist < circleA.radius + circleB.radius) {
        console.log("collided");
    }
}

function bubbleTouch(object1, object2){
	if(object1.x - object2.x < object2.radius/2 + object1.radius/2
		&& object2.x - object1.x < object2.radius/2 + object1.radius/2 && 
		object1.y - object2.y < object2.radius/2 + object1.radius/2
		&& object2.y - object1.y < object2.radius/2 + object1.radius/2 ){
			console.log("in bubbleTouch");
			background(random(0, 255));
		}
}
*/
