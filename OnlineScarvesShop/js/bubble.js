function bubbles()
{
    const first_section = document.getElementById("bubble_over")
    

    const createElement = document.createElement('span')
    var size = Math.random() *60;
    
    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * innerWidth -90  + "px";
    first_section.appendChild(createElement)

    setTimeout(()=>{
        createElement.remove()
    },10000)
}

setInterval(bubbles,120);