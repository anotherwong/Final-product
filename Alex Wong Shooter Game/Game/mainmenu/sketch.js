var b1;
var b2;
var b3;
var bg;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("New game");
	b1.setTextOver("start");
	b1.setButtonOverFill(50,255,50);

	bg = loadImage('https://anotherwong.github.io/Resourcehosting/Background.png');

	b2 = new Button(10,50,100,25)
	b2.setText("Instructions")
	b2.setTextOver("read")
	b2.setButtonOverFill(50,255,50)

}
function draw()
{
	background(255,255,255);

	image (bg,0,0);

	b1.showButton();
	b2.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("Start Game/index.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open ("instruction/instruction.html","_self")
	}

}
