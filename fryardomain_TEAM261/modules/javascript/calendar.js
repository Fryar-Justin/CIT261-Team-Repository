function draw(canvas, image){
    var c = document.getElementById(canvas);
    var ctx = c.getContext("2d");
    var img = document.getElementById(image);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img , 0, 0, 140, 140);
}