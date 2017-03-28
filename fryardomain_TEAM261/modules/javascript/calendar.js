function intervalTimer(canvasId, imageId){
    var interval = setInterval(draw, 3000, canvasId, imageId);
}

function draw(canvasId, imageId){
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    var img = document.getElementById(imageId);
    var randomX = Math.floor(Math.random() * 123);
    var randomY = Math.floor(Math.random() * 567);
    
//    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img , randomX, randomY);
    document.getElementById("output").innerHTML = "X-Random: " + randomX + "<br>" +
                                                  "Y-Random: " + randomY + "<br>" +
                                                  "Canvas Width: " + c.width + "<br>" + 
                                                  "Canvas Height: " + c.height + "<br>" + 
                                                  "Image Width: " + img.width + "<br>" + 
                                                  "Image Height: " + img.height;
}