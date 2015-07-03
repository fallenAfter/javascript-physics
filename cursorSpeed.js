function mouseSpeed(){
	//create array to hold current mouse position
	var mousePos = [1, 1],
		lastPos = [1, 1],
		difference = [1, 1],
		distance;

	window.addEventListener('mousemove', function(e){
		// x position is saved in [0] and Y is saved in [1] positions
		mousePos[0] = e.pageX;
		mousePos[1] = e.pageY;
	});

	var pixelSpeed= setInterval(function(){
		//find distance between the mouse positions along x axis
		//using Pythagoreans theorem requires numbers to be positive is is used to subtract lower number from the higher one
		if(mousePos[0] > lastPos[0]){
			difference[0] = mousePos[0] - lastPos[0];
		}
		else if(mousePos[0] < lastPos[0]){
			difference[0] = lastPos[0]-mousePos[0];
		}
		else{
			difference[0] = 0; //if the positions are the same it has a distance of 0
		}

		//find distance between the mouse positions along y axis
		if(mousePos[1] > lastPos[1]){
			difference[1] = mousePos[1] - lastPos[1];
		}
		else if(mousePos[1] < lastPos[1]){
			difference[1] = lastPos[1]-mousePos[1];
		}
		else{
			difference[1] = 0; //if the positions are the same it has a distance of 0
		}
		//calculate distance using Pothagoreans Theorem
		distance = Math.sqrt(Math.pow(difference[0],2)+Math.pow(difference[1],2));
		//round distance to two decimal places
		distance = Math.round(distance*4);


		document.getElementById("output").innerHTML = distance + " Px/s";
		// return distance;
		
		// change value of last position to equal current for both x and y axis
		lastPos[0] = mousePos[0];
		lastPos[1] = mousePos[1];
	}, 250);


}

 // document.getElementById("output").innerHTML = mouseSpeed();
 mouseSpeed();