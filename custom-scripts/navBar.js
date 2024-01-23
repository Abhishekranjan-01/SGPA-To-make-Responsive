const hamburger = document.getElementById('hamburger');


hamburger.addEventListener("click",(e)=>{

    const navBar = document.querySelector('.nav');

if(navBar.style.display == "none"){
    navBar.style.display = "flex";

}else if(navBar.style.display == "flex")
{
    navBar.style.display = "none";
}
else{
    navBar.style.display = "flex";
}

});