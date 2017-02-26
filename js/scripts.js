$(function() {
  $("button#show").click(function() {
    var temperature = $("input:radio[name=weather]:checked").val();
    var passport = $("input:radio[name=passport]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();

    if (temperature === "warm" && passport === "yes") {
    $("#cabo").show();
    $("#neworleans").hide();
    $("#london").hide();
    $("#parkcity").hide();
  } else if (temperature === "warm" && passport === "no") {
    $("#cabo").hide();
    $("#neworleans").show();
    $("#london").hide();
    $("#parkcity").hide();
  } else if (temperature === "cool" && passport === "yes") {
    $("#cabo").hide();
    $("#neworleans").hide();
    $("#london").show();
    $("#parkcity").hide();
  } else if (temperature === "cool" && passport === "no") {
    $("#cabo").hide();
    $("#neworleans").hide();
    $("#london").hide();
    $("#parkcity").show();
  }
  });
});
