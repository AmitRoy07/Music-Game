 var circles = [];

function onKeyDown(event){
	var maxPoint = new Point(view.size.width , view.size.height);
	var randomPoint = Point.random();
	var point = maxPoint * randomPoint;
	var myCircle = new Path.Circle(point, 300);
	myCircle.fillColor = 'blue';
	circles.push(myCircle);
}
 
function onFrame(event){
	for(var i = 0; i < circles.length; i++){
		circles[i].fillColor.hue += 1;
		circles[i].scale(0.9);
	}
}