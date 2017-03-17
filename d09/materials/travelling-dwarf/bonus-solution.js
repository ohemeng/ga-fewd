console.log("WRITE YOUR SOLUTION IN HERE!");

x = 0;
y = 0;

// debugger;

while (!(g.at(x+1,y) === 'color green')) {

	if (d.orientation === 'right') {
		while (g.at(x+1, y) === 0 && g.at(x+1,y) !== "color green"){
			d.move();
			x = x + 1;
			console.log(x + " " + y);
			g.fill(x-1,y, 'color red');
		}
	} else if (d.orientation === 'down') {
			while (g.at(x, y + 1) === 0 && g.at(x,y+1) !== "color green") {
				d.move();
				y = y + 1; 
				console.log(x + " " + y);
				g.fill(x,y -1,"color red");
			}
	} else if (d.orientation === 'left') {
			while (g.at(x-1, y) === 0 && g.at(x-1,y) !== "color green"){
				d.move();
				x = x - 1;
				console.log(x + " " + y);
				g.fill(x+1,y,"color red");
			}
	} else {
		while (g.at(x, y-1) === 0 && g.at(x, y-1) !== "color green"){
			d.move();
			y = y -1;
			console.log(x + " " + y);
			g.fill(x,y+1,"color red");
		}
	}


	if (g.at(x+1, y) === 0){
			d.orient('right');
	} else if (g.at(x,y+1) === 0){
			d.orient('down'); 
	} else if (g.at(x, y-1) === 0){
			d.orient('up');
	}	else if (g.at(x-1, y) === 0){
			d.orient('left');
	} else {
			alert("You won!!");
	}

}



