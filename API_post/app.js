let mail = () => {
  let data = {
    subject: $("#mail").val(),
    message: $("#mensaje").val(),
  };
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://smtp-e-mail-sender.p.rapidapi.com/sendtest.php?to=soledad.vallejos@arbusta.net",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "43e7cc2c2fmsh590fab08b016931p158176jsn8fa8ae03a0e8",
      "X-RapidAPI-Host": "smtp-e-mail-sender.p.rapidapi.com",
    },
    processData: false,
    data: JSON.stringify(data),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
};
