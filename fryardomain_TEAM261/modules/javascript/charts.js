var created = false;

function main() { 
    var instrumentList = ["flute", "trumpet", "saxaphone", "clarinet", "tuba", "bassoon"];
    var imageSource = {
        none: "",
        flute: "/media/fingering/flute.jpg",
        trumpet: "/media/fingering/trumpet.jpg",
        saxaphone: "/media/fingering/saxaphone.jpg",
        clarinet: "/media/fingering/clarinet.jpg",
        tuba: "/media/fingering/tuba.jpg",
        bassoon: "/media/fingering/bassoon.jpg"};

    var instrument = document.getElementById("instrument").value;   // get the instrument selected
    
    // display the instrument selected
    if (!created) {
        // create needed elements
        var element = document.getElementById("fingeringCharts");   // identify target location
        var h1 = document.createElement("h1");                      // create h1 element
        h1.id = "heading";                                          // set h1 element id value
        element.appendChild(h1);                                    // append the h1 element
        var img = document.createElement("img");                    // create div to hold pictures
        img.id = "chart";                                           // set img id value
        element.appendChild(img);                                   // append div to element
        created = true;                                             // disable this block of code after elements are created
    }
    document.getElementById("heading").innerHTML = instrument;

    // display the selected instrument fingering chart
    displayInstrument(instrument, imageSource);
}

function displayInstrument(instrument, imageSource) {
    var selectedInstrument;
    switch (instrument) {       // use efficient switch statement to determine chart to display
        case "Select Instrument":
            selectedInstrument = imageSource.none;
            document.getElementById("heading").innerHTML = "";
            break;
        case "Flute":
            selectedInstrument = imageSource.flute;
            break;
        case "Trumpet":
            selectedInstrument = imageSource.trumpet;
            break;
        case "Saxophone":
            selectedInstrument = imageSource.saxaphone;
            break;
        case "Clarinet":
            selectedInstrument = imageSource.clarinet;
            break;
        case "Tuba":
            selectedInstrument = imageSource.tuba;
            break;
        case "Bassoon":
            selectedInstrument = imageSource.bassoon;
            break;
    }

    // display the selected chart
    document.getElementById("chart").src = selectedInstrument;
}