/*

    Name    :   Random Background Color Generator         
    Version :   1.0                         
    By      :   Mahmoud Farag   @mffarag             
    Date    :   12 Jan 2021                  

*/


// Buttons Variables
const   solid       = document.querySelector("#solid"),
        gradient    = document.querySelector("#gradient");


// Solid Color Generator Function
solid.addEventListener( "click", () =>{
    let red     =   Math.floor(Math.random() * 256),    // Red color code
        green   =   Math.floor(Math.random() * 256),    // Green color code
        blue    =   Math.floor(Math.random() * 256),    // Blue color code
        alpha   =   Math.random().toFixed(2);           // Alpha channel  code
    
    let randomColor = " rgba( " + red + ", " + green + ", " + blue + ", " + alpha + " )" ;  // Color code format
    
    document.querySelector('code').textContent = `background : ${randomColor};`;    // Show the color code
    document.querySelector("article").style.background = randomColor;               // Apply the background color

});


// Gradient Color Generator Function
gradient.addEventListener( "click", () =>{
    let red     =   Math.floor(Math.random() * 256),    // Red color code
        green   =   Math.floor(Math.random() * 256),    // Green color code
        blue    =   Math.floor(Math.random() * 256),    // Blue color code
        alpha   =   Math.random().toFixed(2),           // Alpha channel  code

        red2    =   Math.floor(Math.random() * 256),    // 2nd Red color code
        green2  =   Math.floor(Math.random() * 256),    // 2nd Green color code
        blue2   =   Math.floor(Math.random() * 256),    // 2nd Blue color code
        alpha2  =   Math.random().toFixed(2),           // 2nd Alpha channel  code

        deg     =   Math.floor(Math.random() * 360);    // Gradient degree

    let color   = `rgba(${red},${green},${blue},${alpha})`,         // Color code format
        color2  = `rgba(${red2},${green2},${blue2},${alpha2})`;     // 2nd Color code format
    
    let randomColor = `linear-gradient( ${deg}deg, ${color}, ${color2} )` ;

    document.querySelector('code').textContent = `background : ${randomColor};`;    // Show the color code
    document.querySelector("article").style.background = randomColor;               // Apply the background color

});