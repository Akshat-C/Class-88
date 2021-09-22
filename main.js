var canvas = new fabric.Canvas("myCanvas");

player_x = 20;
player_y = 20;

block_width = 30;
block_height = 30;

var player_obj = "";
var block_obj = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_obj = Img;
        player_obj.scaleToWidth(120);
        player_obj.scaleToHeight(130);

        player_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_obj);

    })
}

function block_update(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_obj = Img;
        block_obj.scaleToWidth(block_width);
        block_obj.scaleToHeight(block_height);

        block_obj.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_obj);

    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed=="67")
    {
       block_update("cloud.jpg");
       console.log("c is pressed");
    } else if (keypressed=="68")
    {
        block_update("dark_green.png");
        console.log("d is pressed");
    } else if (keypressed=="71")
    {
        block_update("ground.png");
        console.log("g is pressed");
    } else if (keypressed=="76")
    {
        block_update("light_green.png");
        console.log("l is pressed");
    } else if (keypressed=="82")
    {
        block_update("roof.jpg");
        console.log("r is pressed");
    } else if (keypressed=="84")
    {
        block_update("trunk.jpg");
    console.log("t is pressed");
    } else if (keypressed=="85")
    {
        block_update("unique.png");
        console.log("u is pressed");
    } else if (keypressed=="87")
    {
        block_update("wall.jpg");
        console.log("w is pressed")
    } else if (keypressed=="89")
    {
        block_update("yellow_wall.png");
        console.log("y is pressed");
    }

    if (keypressed=="37")
    {
        left();
    } else if (keypressed=="38")
    {
        up();
    } else if (keypressed=="39")
    {
        right();
    } else if (keypressed=="40")
    {
        down();
    }

    if (e.shiftKey==true && keypressed=="77")
    {
        block_width = block_width-10;
        block_height = block_height-10;
        document.getElementById("cw").innerHTML = block_width;
        document.getElementById("ch").innerHTML = block_height;
    } else if (e.shiftKey==true && keypressed=="80")
    {
        block_width = block_width+10;
        block_height = block_height+10;
        document.getElementById("cw").innerHTML = block_width;
        document.getElementById("ch").innerHTML = block_height;
    }
} 

function left()
{
    if (player_x >= 0)
    {
        player_x = player_x - block_width
        canvas.remove(player_obj);
        player_update();
    } 
}

function right()
{
    if (player_x <=750)
    {
        player_x = player_x + block_width;
        canvas.remove(player_obj);
        player_update();
    }
}

function up()
{
    if (player_y >= 0)
    {
        player_y = player_y - block_height;
        canvas.remove(player_obj);
        player_update();
    }
}

function down()
{
    if (player_y <= 600)
    {
        player_y = player_y + block_height;
        canvas.remove(player_obj);
        player_update();
    }
}