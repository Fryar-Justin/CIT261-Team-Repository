function intervalTimer(canvasId){
    var interval = setInterval(draw, 1000, canvasId + "1");
    var interval2 = setInterval(draw, 1000, canvasId + "2");
}

function draw(canvasId){
    var imageId = ["treble", "half", "quarter", "eighth"];
    
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    var img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    
    // draw treble 6 notes at a time on each canvas    
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img , Math.floor(Math.random() * 123), Math.floor(Math.random() * 567));
    
    // draw note
    img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    ctx.drawImage(img , Math.floor(Math.random() * 3), Math.floor(Math.random() * 567));
    
    img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    ctx.drawImage(img , Math.floor(Math.random() * 3), Math.floor(Math.random() * 567));
    
    img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    ctx.drawImage(img , Math.floor(Math.random() * 3), Math.floor(Math.random() * 567));
    
    img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    ctx.drawImage(img , Math.floor(Math.random() * 3), Math.floor(Math.random() * 567));
    
    img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    ctx.drawImage(img , Math.floor(Math.random() * 3), Math.floor(Math.random() * 567));
    
    img = document.getElementById(imageId[Math.floor(Math.random() * 3) + 1]);
    ctx.drawImage(img , Math.floor(Math.random() * 3), Math.floor(Math.random() * 567));
}