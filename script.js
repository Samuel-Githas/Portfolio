alert("Welcome to my portfolio site!")

function showMessage() {
    alert("Thanks for visiting!");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    // Save preference 
    if (document.body.classList.contains("dark")) {
        localStroge.setItem("theme","dark");
    }else {
        localStorage.setItems("theme","light");
    }
}
// Load saved preference on page load
window.onload =function() {
    const savedTheme =
localStorage.getItem("theme");
    if(savedTheme ==="dark"){
        document.body.classList.add("dark");
    }
};