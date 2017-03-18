function changeAudio(audioSourceLink) {
    var audio = document.getElementById("audioPlayer"),
            source = document.getElementById("ogg_src");
    		
    source.src = audioSourceLink;
    audio.load();
    
 } 
    
function showMusicExample(imageSource){
image = document.getElementById('exampleImg');
image.src = imageSource;
}
    
    
function changeMedia(imageSource, audioSourceLink) {
 	showMusicExample(imageSource);
 	changeAudio(audioSourceLink);
 	} 
 
 


