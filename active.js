document.addEventListener("DOMContentLoaded", function () {
    
    
    document.getElementsByClassName("nav-items").addEventListener("click", function () {
        document.getElementById("nav-links").classList.add("active")
    })

    document.getElementById("nav-items").addEventListener("click", function () {
        document.getElementById("nav-links").classList.remove("active")
    })

});