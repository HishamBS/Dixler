
//getting the frame div
let $frame = document.querySelector(".frame");

//setting the colors array 
var colorsArr = ["red","crimson","yellow","gold","orange","brown","saddlebrown",
"sienna","blue",
"navy","teal","green","lime",
"cyan","purple","fuchsia","pink","deeppink","burlywood","bisque","black","grey","lightgrey","white"
];
//getting the colors div
let $colors = document.querySelector(".colors");

//adding colors block
for (let i = 0; i < colorsArr.length; i++) {
    let $color = document.createElement("div");
    $color.setAttribute("class", "color");
    $color.setAttribute("id", "" + colorsArr[i].toUpperCase());
    $color.setAttribute("style", 'background-color:' + colorsArr[i]);
    $colors.appendChild($color);
}

//adding drawing blocks
for (let i = 0; i < 1540; i++) {
    let $pxl = document.createElement("div");
    $pxl.setAttribute("class", "pxl");
    $pxl.setAttribute("id", "" + i);
    $frame.appendChild($pxl);
}

$(function () {

    let color;
    //if color button is pressed
    $(".color").click(function () {
         color = $(this).attr("id");
         $("h3").text(color)
        $("h3").css('background',color)
    });

        //save as png button ... needs html2canvas and saveAs libraries to be called in index.html
        $("#btnSave").click(function() { 
            html2canvas($("#widget"), {
                onrendered: function(canvas) {
                    theCanvas = canvas;
                    canvas.toBlob(function(blob) {
                        saveAs(blob, "pic.png"); 
                    });
                }
            });
        });

        //clear all button
        $("#clearAll").click(function() {
            $(".pxl").css('background','rgb(235, 235, 235)')
            
        });
    
         //the drawing function
         $(".pxl").mousedown(function (e) {

            //for single click
            if (e.which === 1) {
                $(this).css('background', color)
            }
            //ereaser
            if (e.which === 3) {
                document.oncontextmenu = new Function("return false;")
                $(this).css('background', 'rgb(235, 235, 235)')
            }

            //for continious clicking
            $(".pxl").hover(function (e) {
                if (e.which === 1) {
                    $(this).css('background', color)
                }
                //ereaser
                if (e.which === 3) {
                    document.oncontextmenu = new Function("return false;")
                    $(this).css('background', 'rgb(235, 235, 235)')
                }
            });       
            
        });
        
         // for painting the whole page with one color 
         $(".color").dblclick(function() {
            color = $(this).attr("id");
            $(".pxl").css('background', color)

         });
        

    });





