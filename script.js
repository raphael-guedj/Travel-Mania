/*Navigation mobile */

$("#js--nav-icon").click(function () {
  var nav = $("#js--main-nav");
  var icon = $("#js--nav-icon i");

  nav.slideToggle(200);
  if (icon.hasClass("fa-bars")) {
    icon.addClass("fa-times");
    icon.removeClass("fa-bars");
  } else {
    icon.addClass("fa-bars");
    icon.removeClass("fa-times");
  }
});

/*Menu sticky*/

var quizzSection = document.getElementsByClassName("quizz")[0];
var navigation = document.getElementsByClassName("main-nav")[0];

if (quizzSection) {
  if (!navigation.classList.contains("main-nav")) {
    navigation.className = "sticky-nav";
  } else {
    navigation.className = "main-nav";
  }
}

/*Drag and Drop*/
$(function () {
  $("#draggable").draggable();
  $("#droppable").droppable({
    drop: function () {
      alert("I am dropped");
    },
  });
});
