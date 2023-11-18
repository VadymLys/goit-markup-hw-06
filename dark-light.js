const checkbox = document.getElementById("dark-light")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-light-toggle")
});