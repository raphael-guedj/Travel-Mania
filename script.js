/*Navigation mobile */

$("#nav-icon").click(function () {
  var nav = $("#main-nav");
  var icon = $(".fas");

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

//Search message

$(".btn-search").click(function () {
  var valMsg = $("#search-bar").val().toLowerCase();
  $("h3").each(function () {
    if (valMsg !== "" && valMsg !== $(this).text().toLowerCase()) {
      $(this).parent().fadeOut();
    } else {
      $(this).parent().delay(1500).fadeIn();
    }
  });
  $("#search-bar").val("");
});

// var searchBtn = document.querySelector(".btn-search");

// var h3 = document.querySelectorAll("h3");

// searchBtn.addEventListener("click", function () {
//   var msgSearch = document.getElementById("search-bar").value;
//   h3.forEach((each) => {
//     if (msgSearch !== "" && msgSearch !== this.textContent) {
//       console.log(each.textContent);
//     } else {
//       console.log("nop");
//     }
//   });
// });

//animation image
$(".anim-jquery").waypoint(
  function () {
    $(".anim-jquery").addClass("animate__animated animate__backInUp");
  },
  {
    offset: "100%",
  }
);
