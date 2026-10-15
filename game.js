var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = new GameObject();

player1.x = 50;
player1.y = 200;
player1.width = 30;
player1.height = 100;


var ball = new GameObject();
ball.x = 500;
ball.y = 250;
ball.radius = 30;
ball.color = "black";
ball.xSpeed = 5;
ball.ySpeed = 5;
ball.vy = 0;
ball.vx = -0;

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.drawRect();

    ball.drawCircle();

    ball.x = ball.x + ball.xSpeed;
    ball.y = ball.y + ball.ySpeed;

if (ball.x + ball.radius < 0)
    {
     ball.x = 500;
    ball.y = 250;
    ball.xSpeed = 5;
    ball.ySpeed = 5;

    }

    if (ball.x + ball.radius >= canvas.width)
    {
        ball.x = canvas.width - ball.radius;
        ball.xSpeed = -ball.xSpeed * 1.01;
        ball.color = "blue";
    }

    if (ball.y + ball.radius >= canvas.height)
    {
        ball.y = canvas.height - ball.radius;
        ball.ySpeed = -ball.ySpeed * 1.01;
        ball.color = "yellow";
    }

    if (ball.y - ball.radius <= 0)
    {
        ball.y = ball.radius;
        ball.ySpeed = -ball.ySpeed * 1.01;
        ball.color = "green";
    }

    if (ball.x - ball.radius <= player1.x + player1.width &&
        ball.y + ball.radius >= player1.y &&
        ball.y - ball.radius <= player1.y + player1.height &&
        ball.xSpeed < 0)
    {
        ball.x = player1.x + player1.width + ball.radius;
        ball.xSpeed = -ball.xSpeed;


     if(ball.y < paddle.y - player1.height)
     {
       ball.vx = 5;
       ball.vy = 5;
     }
}
    }


document.addEventListener("keydown", function(event)
{
    if (event.key == "w")
    {
        player1.y -= 10;
    }

    if (event.key == "s")
    {
        player1.y += 10;
    }
});

setInterval(animate, 20);
