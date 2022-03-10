$(document).ready(function(){
  $('#toggle').click(function(){
    $('#sidebar').slideToggle();
    $('#nav-sidebar').slideToggle();
  });
})

/* ====================search-app======================= */
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}