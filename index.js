$(document).ready(function () {
  $(".pul").change(function () {
    let optio = $(this).val();

    if (optio == "dp") {
      $(".summa").val("1$");
    } else if (optio == "eu") {
      $(".summa").val("1eu");
    } else {
      $(".summa").val("***");
    }

    $(".btn-primary").click(function () {
      let ikki = $(".pul").val();

      if (ikki == "eu") {
        $(".natija").val("12500 so'm");
      } else if (ikki == "dp") {
        $(".natija").val("1100 so'm");
      } else {
        $(".natija").val("Kursni kiriting");
      }
    });
  });
});
