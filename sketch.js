var thickness,wall;


var  bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);



	thickness=random(22,82);


	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
	  wall.shapeColor=color(80,80,80)
	  
	  speed=random(223,321)
	  weight=random(30,52)


function draw() {
  background(0);


  
  drawSprites();
 
}
function hascollided(Lbullet,Lwall)
{
bulletRigthEdge=Lbullet.x+Lbullet.width;
wallLeftEdge=Lwall.x;
if (bulletRigthEdge>=wallLeftEdge)
{
return true
}
return false;
}
if(hascollided(bullet,wall))
{
	bullet.velocityX=0;
	var damsge=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	
	
		if(damage>10)
		{
			wall.shapeColor=color(255,0,0);
		}

		if(damage<10){
			wall.shapeColor=color(0,255,0);
		}
}
}