var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = new GameObject();

player1.x = 50;
player1.y = 200;
player1.width = 15;
player1.height = 100;

var ball = new GameObject();
ball.x = 500;
ball.y = 250;
ball.radius = 15;
ball.color = "black";
ball.vx = -5;
ball.vy = 0;

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.drawRect();
    ball.drawCircle();

    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;

    if (ball.x + ball.radius < 0)
    {
        ball.x = 500;
        ball.y = 250;
        ball.vx = -5;
        ball.vy = 0;
    }

    if (ball.x + ball.radius >= canvas.width)
    {
        ball.x = canvas.width - ball.radius;
        ball.vx = -ball.vx;
    }

    if (ball.y + ball.radius >= canvas.height)
    {
        ball.y = canvas.height - ball.radius;
        ball.vy = -ball.vy;
    }

    if (ball.y - ball.radius <= 0)
    {
        ball.y = ball.radius;
        ball.vy = -ball.vy;
    }

    if (ball.x - ball.radius <= player1.x + player1.width &&
        ball.x + ball.radius >= player1.x &&
        ball.y + ball.radius >= player1.y &&
        ball.y - ball.radius <= player1.y + player1.height &&
        ball.vx < 0)
    {
        ball.x = player1.x + player1.width + ball.radius;

        if (ball.y < player1.y + player1.height / 3)
        {
            ball.vx = 5;
            ball.vy = -5;
        }
        else if (ball.y < player1.y + player1.height * 2 / 3)
        {
            ball.vx = 5;
            ball.vy = 0;
        }
        else
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