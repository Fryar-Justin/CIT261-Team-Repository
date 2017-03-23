var root = {sheetMusic:"/media/videos/How_to_Read_Sheet_music.mp4",
            majorPiano:"/media/videos/Major_Scales_Piano.mp4",
            minorPiano:"/media/videos/Minor_Scales_Piano.mp4",
            timeSignatures:"/media/videos/Time_Signatures_Part_1.mp4",
            tuneGuitar:"/media/videos/Tuning_A_Guitar.mp4"};

function displayVideo(num) {
    var element = document.getElementById("video");
    
    switch(num){
        case 1:
            element.src = root.sheetMusic;
            break;
        case 2:
            element.src = root.majorPiano;
            break;
        case 3:
            element.src = root.minorPiano;
            break;
        case 4:
            element.src = root.timeSignatures;
            break;
        case 5:
            element.src = root.tuneGuitar;
            break;
    }
}