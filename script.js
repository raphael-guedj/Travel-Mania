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
var quizz = () => {
  $("#draggableFrance").draggable();
  $(".France").droppable({
    accept: "#draggableFrance",
    drop: function (event, ui) {
      $(this).addClass("success").find("p").html("YEAH!");
    },
  });

  $("#draggableDanemark").draggable();
  $(".Danemark").droppable({
    accept: "#draggableDanemark",
    drop: function (event, ui) {
      $(this).addClass("success").find("p").html("YEAH!");
    },
  });
  $("#draggableMexico").draggable();
  $(".Mexico").droppable({
    accept: "#draggableMexico",
    drop: function (event, ui) {
      $(this).addClass("success").find("p").html("YEAH!");
    },
  });
  $("#draggableIsrael").draggable();
  $(".Israel").droppable({
    accept: "#draggableIsrael",
    drop: function (event, ui) {
      $(this).addClass("success").find("p").html("YEAH!");
    },
  });
  $("#draggableUsa").draggable();
  $(".Usa").droppable({
    accept: "#draggableUsa",
    drop: function (event, ui) {
      $(this).addClass("success").find("p").html("YEAH!");
    },
  });
  $("#draggableBresil").draggable();
  $(".Bresil").droppable({
    accept: "#draggableBresil",
    drop: function (event, ui) {
      $(this).addClass("success").find("p").html("YEAH!");
    },
  });
};

quizz();

//refresh
function refreshPage() {
  window.location.reload();
}
