function addFocus(index){
    switch(index){
        case 1: 
            document.querySelector('.breakthrough').classList.add("active");
            break;
        case 2: 
            document.querySelector('.watchdogs').classList.add("active");
            break;
        case 3: 
            document.querySelector('.hypetech').classList.add("active");
            break;
        case 4: 
            document.querySelector('.beats').classList.add("active");
            break;
        case 5: 
            document.querySelector('.gfx').classList.add("active");
            break;
        case 6: 
            document.querySelector('.learnix').classList.add("active");
            break;
        case 7: 
            document.querySelector('.syncwebsite').classList.add("active");
            break;
        case 8: 
            document.querySelector('.syncapp').classList.add("active");
            break;
    }
}

function removeFocus(index){
    switch(index){
        case 1: 
            document.querySelector('.breakthrough').classList.remove("active");
            break;
        case 2: 
            document.querySelector('.watchdogs').classList.remove("active");
            break;
        case 3: 
            document.querySelector('.hypetech').classList.remove("active");
            break;
        case 4: 
            document.querySelector('.beats').classList.remove("active");
            break;
        case 5: 
            document.querySelector('.gfx').classList.remove("active");
            break;
        case 6: 
            document.querySelector('.learnix').classList.remove("active");
            break;
        case 7: 
            document.querySelector('.syncwebsite').classList.remove("active");
            break;
        case 8: 
            document.querySelector('.syncapp').classList.remove("active");
            break;
    }
}