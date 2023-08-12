// import "./styles.css";
$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
  var total=value*30;
  document.querySelector(".total").innerHTML =
    "Your total bill is Rs." + total + ".";
});

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
  var total = value * 30;
  document.querySelector(".total").innerHTML =
    "Your total bill is Rs." + total + ".";
});























/*


// import "./styles.css";
$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 1;
  }

  $input.val(value);
  var total=value*2790;
  var total2=value*3100;
  document.querySelector(".total").innerHTML =
  "Rs."+ total+"(original " +total2+")";
});

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
  var total=value*2790;
  var total2=value*3100;
  document.querySelector(".total").innerHTML =
     "Rs."+ total+ " (original " +total2+")";
});
