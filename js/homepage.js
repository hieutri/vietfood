window.addEventListener('scroll', () =>{
    const headerStickyNav = document.getElementById("header-nav")
    if(window.scrollY == 0){
        headerStickyNav.classList.remove("nav-sticky")
    }
    else{
        headerStickyNav.classList.add("nav-sticky")
    }
})


const today = new Date()
let todayHour = today.getHours()
const headerGreeting = document.getElementById("header-search-greeting");
if(todayHour < 13){
    headerGreeting.innerHTML = "Good Morning"
}
else if (todayHour < 18){
    headerGreeting.innerHTML = "Good Afternoon"
}
else if (todayHour < 22){
    headerGreeting.innerHTML = "Good Evening"
}
else{
    headerGreeting.innerHTML = "Good Night"
}