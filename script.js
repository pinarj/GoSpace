function toggleText(button) {
    var moreText = button.previousElementSibling.querySelector('.more-text');
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        button.textContent = "Read More";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const highlightText = document.querySelector(".highlight");
    highlightText.style.color = "#FFD700"; // Change the color to gold on load
});
