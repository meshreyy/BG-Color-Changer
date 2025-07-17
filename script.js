function changeBackground(element)
{
    // Step 1: get the background color of the clicked slice
    let color = element.style.backgroundColor;

    // Step 2: apply that color to the page's background
    document.body.style.backgroundColor = color;

    
} 