function changeBodyColor() {
    // Math.random() return value from 0 - 0.9999 never 1
    // Math.floor() return rounds down of the input number
    // Hue color will goes from 0 - 360
    // Math.floor(Math.random() * (max - min + 1) ) + min
    // will return between min and max inclusive on both end
    let hue = Math.floor(Math.random() * 360) + 1;
    // Saturation intensity of the color 50 - 100% 
    let sat = Math.floor(Math.random() * 50 + 1) + 50 + '%';
    // Lightness of dark or bright 0 - 100%
    let light = Math.floor(Math.random() * 100) + 1 + '%';
    let color = "hsla(" + hue + ', ' + sat + ', ' + light + ', 1)'; 
    // Get element body and write out new value to the style
    // alert(color);
    document.body.style.backgroundColor = color;
}