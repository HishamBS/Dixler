
//getting the frame div
let $frame = document.querySelector(".frame");

//setting the colors array 
// let colorsArr = ["red", "black", "blue", "green", "yellow", "teal", "white"];
var colorsArr = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque"
,"Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate"
,"Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray",
"DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed"
,"DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet"
,"DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia"
,"Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink"
,"IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue"
];
//getting the colors div
let $colors = document.querySelector(".colors");

//adding colors block
for (let i = 0; i < colorsArr.length; i++) {
    let $color = document.createElement("div");
    $color.setAttribute("class", "color");
    $color.setAttribute("id", "" + colorsArr[i]);
    $color.setAttribute("style", 'background-color:' + colorsArr[i]);
    $colors.appendChild($color);
}

//adding drawing blocks
for (let i = 0; i < 2144; i++) {
    let $pxl = document.createElement("div");
    $pxl.setAttribute("class", "pxl");
    $pxl.setAttribute("id", "" + i);
    $frame.appendChild($pxl);
}



$(function () {

    let color;
    let interval;
    //if color button is pressed
    $(".color").click(function () {
         color = $(this).attr("id");
         $("h3").text(color)
        $("h3").css('color',color)
    });

        // for mousedown 
        $(".pxl").mousedown(function (e) {
            //is calling the continious mousedown click
            interval = setInterval(performWhileMouseDown, 50);
        }).mouseup(function () {
            clearInterval(interval);
        });

        //the continious mousedown function
        function performWhileMouseDown() {    
        $(".pxl").hover(function (e) {
            if (e.which === 1) {
                $(this).css('background', color)
            }
            //ereaser
            if (e.which === 3) {
                document.oncontextmenu = new Function("return false;")
                $(this).css('background', 'rgba(235, 235, 235)')
            }
        });

        //single mouse click 
        $(".pxl").mousedown(function (e) {
            if (e.which === 1) {
                $(this).css('background', color)
            }
            if (e.which === 3) {
                document.oncontextmenu = new Function("return false;")
                $(this).css('background', 'rgba(206, 205, 205)')
            }
        });
        }

    });





