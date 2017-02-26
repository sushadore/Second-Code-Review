$(function() {
  $("button#show").click(function() {
    var temperature = $("input:radio[name=weather]:checked").val();
    var passport = $("input:radio[name=passport]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();

    if (temperature === "warm" && passport === "yes") {
    $("#cabo").show();
  } else if (temperature === "warm" && passport === "no") {
    $("#neworleans").show();
  } else if (temperature === "cool" && passport === "yes") {
    $("#london").show();
  } else if (temperature === "cool" && passport === "no") {
    $("#parkcity").show();
  }
  });
});
