
//getting the frame div
let $frame = document.querySelector(".frame");

//setting the colors array 
let colorsArr = ["red","black","blue","green","yellow","teal"];

//getting the colors div
let $colors = document.querySelector(".colors");

//adding colors block
for (let i = 0; i < colorsArr.length; i++) {
    let $color = document.createElement("div");
    $color.setAttribute("class","color");
    $color.setAttribute("id",""+colorsArr[i]);
    $color.setAttribute("style",'background-color:'+colorsArr[i]);
    $colors.appendChild($color)
}

//adding drawing blocks
for (let i = 0; i < 2144; i++) {
    let $pxl = document.createElement("div");
    $pxl.setAttribute("class","pxl");
    $pxl.setAttribute("id",""+i);
    $frame.appendChild($pxl)
    

    // $pxl.setAttribute("onclick","style='background-color:red'");
    // $pxl.setAttribute("onmouseenter","style='background-color:red'");
}
let $color = document.querySelector('.color')
let $pxl = document.querySelector(".pxl");
jQuery(".color").click(function() {
    var color = jQuery(this).attr("id");
    alert(contentPanelId);
});


