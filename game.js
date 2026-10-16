var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var player1 = new GameObject();

player1.x = 50;
player1.y = 200;
player1.width = 15;
player1.height = 100;
player1.color = "red";

var player2 = new GameObject();

player2.x = canvas.width - 65;
player2.y = 200;
player2.width = 15;
player2.height = 100;
player2.color = "blue";

var ball = new GameObject();

ball.x = 500;
ball.y = 250;
ball.radius = 10;
ball.color = "black";
ball.vx = -5;
ball.vy = 0;

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player1.drawRect();
    player2.drawRect();
    ball.drawCircle();

    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x + ball.radius < 0 || ball.x - ball.radius > canvas.width)
    {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vx = -5;
        ball.vy = 0;
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

    if (ball.x + ball.radius >= player2.x &&
        ball.x - ball.radius <= player2.x + player2.width &&
        ball.y + ball.radius >= player2.y &&
        ball.y - ball.radius <= player2.y + player2.height &&
        ball.vx > 0)
    {
        ball.x = player2.x - ball.radius;

        if (ball.y < player2.y + player2.height / 3)
        {
            ball.vx = -5;
            ball.vy = -5;
        }
        else if (ball.y < player2.y + player2.height * 2 / 3)
        {
            ball.vx = -5;
            ball.vy = 0;
        }
        else
        {
            ball.vx = -5;
            ball.vy = 5;
        }
    }

    if (player1.y < 0)
    {
        player1.y = 0;
    }

    if (player1.y + player1.height > canvas.height)
    {
        player1.y = canvas.height - player1.height;
    }

    if (player2.y < 0)
    {
        player2.y = 0;
    }

    if (player2.y + player2.height > canvas.height)
    {
        player2.y = canvas.height - player2.height;
    }
}

document.addEventListener("keydown", function(event)
{
    if (event.key == "w" )
    {
        player1.y -= 10;
    }

    if (event.key == "s" )
    {
        player1.y += 10;
    }

    if (event.key == "ArrowUp")
    {
        player2.y -= 10;
    }

    if (event.key == "ArrowDown")
    {
        player2.y += 10;
    }
});

setInterval(animate, 20);