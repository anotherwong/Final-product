//creating a variable called b1 (Stands for button 1)
var b1;

// step 1
var bg;

function setup()
{
	createCanvas(500,500);

	//initializing (Set up) button 1 with x y height legnth values
	b1 = new Button(10,10,100,25);
	b1.setText("Main menu");
	b1.setTextOver("GO");
	b1.setButtonOverFill(50,255,50);

	// step 2
	bg = loadImage('https://anotherwong.github.io/Resourcehosting/Background.png');
}

function draw()
{
	background(255,255,255);

	// step 3
	image(bg,0,0);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("mainmenu/mainmenu.html","_self");
	}
}
