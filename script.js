
function toggleAccordion(id) {
    const content = document.getElementById(id); 
    const chevron = content.previousElementSibling.querySelector("i"); 

    if (content.classList.contains("hidden")) { 
        content.classList.remove("hidden"); 
        chevron.classList.add("rotate-180"); 
    } else {
        content.classList.add("hidden"); 
        chevron.classList.remove("rotate-180"); 
    }
}

function applyHoverEffects() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            button.style.color = "blue"; 
        });
        button.addEventListener("mouseleave", () => {
            button.style.color = ""; 
        });
    });
}

function sanityCheck() {
    console.log("Sanity check: all good!");
}

window.addEventListener("load", () => {
    sanityCheck(); 
    applyHoverEffects(); 
});
