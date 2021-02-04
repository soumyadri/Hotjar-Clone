
function moreP() {
    var divs = document.getElementById("full")
    var btn0 = document.getElementById("btn0")
    var newpara = document.getElementById("new")
    var newButton = document.createElement("button")
    newButton.addEventListener('click', lessP)
    btn0.remove();
    divs.style.background = "lavender";
    divs.style.padding="2%"
    newpara.textContent = "Nobody wants to waste their time on a website that is confusing and hard to navigate.You know it, we know it, and website owners know it too—which is why they turn to Hotjar. Website owners use Hotjar to better understand user behavior: what actions people take on a website, what elements of a page they click or ignore, what they enjoy, where they struggle. With this insight, website owners can then make changes that improve the overall experience for all website users. And that includes you."
    newButton.innerHTML = "Show Less"
    newButton.style.backgroundColor = "lavender"
    newButton.style.width = "80px"
    divs.appendChild(newButton)
    
}

function lessP() {
    var divs = document.getElementById("full")
    divs.innerHTML = "";
    divs.style.background = "white"
    divs.style.paddingTop = "8%"
    divs.style.paddingLeft = "5%"
    divs.style.paddingRight = "3%"
    var h1 = document.createElement("h1")
    var p = document.createElement("p")
    h1.textContent = "Improving websites, for you."
    divs.appendChild(h1)
    p.textContent = "Online businesses use Hotjar to create better website experiences."
    divs.appendChild(p)
}
