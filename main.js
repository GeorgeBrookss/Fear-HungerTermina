document.addEventListener("click", function(){
    actual = false
    if(!actual){
        const CharClick = document.getElementById('charDaan');
        Daan.style.setProperty('background-color', 'green');
        Daan = true;
    }else if(!Abella){
        Daan = false
    }



})