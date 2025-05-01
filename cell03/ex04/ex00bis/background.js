function randomHue() {
    // Math.random() return value from 0 - 0.9999 never 1 so exclusive of 1
    // Math.floor() return rounds down of the input number

    // Math.floor(Math.random() * (max - min + 1) ) + min
    // will return between min and max inclusive on both end

    // Hue color will goes from 0 - 360
    let hue = Math.floor(Math.random() * 360) + 1;
    // Saturation intensity of the color 50 - 100% 
    let sat = Math.floor(Math.random() * 50 + 1) + 50 + '%';
    // Lightness of dark or bright 0 - 100%
    let light = Math.floor(Math.random() * 100) + 1 + '%';
    // alpha always set to 1
    let color = "hsla(" + hue + ', ' + sat + ', ' + light + ', 1)'; 
    // alert(color); // For debug'ging
    return color;
}

// Make it so that the jquery don't run when web load immedietly
$(document).ready(function() {
    // Add click event listener to button tag
    $("button").click(function() {
        // Change background color of the body tag
        $("body").css("background-color", randomHue());
    })
});