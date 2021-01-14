canvas=new fabric.Canvas("mycanvas");

player_x=10;
player_y=10;

block_image_height=30;
block_image_width=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set(
             {
                  top:player_y, left:player_x 
                });
         canvas.add(player_object); 
    });


}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img)
{
    block_image_object = Img;
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set(
             {
                  top:player_y, left:player_x 
                });
         canvas.add(block_image_object); 
    });
}


if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '66')
{
    new_image('hulk_face.png');
    console.log("b")
}

if(keypressed== '67')
{
    new_image('hulk_left_hand.png');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}

if(keypressed== '65')
{
    new_image('captain_america_left_hand');
    console.log("a")
}




































