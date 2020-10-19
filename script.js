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

$("#quizz").waypoint(
  function (direction) {
    if (direction == "down") {
      $("ul").addClass("sticky");
      $("ul").removeClass("main-nav");
    } else {
      $("ul").addClass("main-nav");
      $("ul").removeClass("sticky");
    }
  },
  {
    offset: "50px;",
  }
);

/*Drag and Drop*/
$(function () {
  $("#draggableFrance").draggable();
  $(".France").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped!");
    },
  });
});
$(function () {
  $("#draggableDanemark").draggable();
  $(".Danemark").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped!");
    },
  });
});
$(function () {
  $("#draggableUsa").draggable();
  $(".Usa").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped!");
    },
  });
});
$(function () {
  $("#draggableIsrael").draggable();
  $(".Israel").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped!");
    },
  });
});
$(function () {
  $("#draggableBresil").draggable();
  $(".Bresil").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped!");
    },
  });
});
$(function () {
  $("#draggableMexico").draggable();
  $(".Mexico").droppable({
    drop: function (event, ui) {
      $(this).find("p").html("Dropped!");
    },
  });
});
