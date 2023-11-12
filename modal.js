document.addEventListener("DOMContentLoaded", function () {
    
    
    document.getElementById("open-mob-btn").addEventListener("click", function () {
        document.getElementById("open-modal-mob").classList.add("is-open")
    })

    document.getElementById("close-menu-btn").addEventListener("click", function () { 
        document.getElementById("open-modal-mob").classList.remove("is-open")
    })



    document.getElementById("open-modal-btn").addEventListener("click", function () {
        document.getElementById("window-open").classList.add("is-open")
    })

    document.getElementById("close-modal-btn").addEventListener("click", function () {
        document.getElementById("window-open").classList.remove("is-open")
    })
   
});


