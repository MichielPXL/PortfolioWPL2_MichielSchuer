var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}