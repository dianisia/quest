 function prov_adress(obj) {
  var adr = obj.mail.value;
  var adr_pattern = /проверка/i;
  var prov = adr_pattern.test(adr);

  if (prov == true) {
   $('body').append("<div><h2>Ответ правильный<h2><br><br><button>Далее</button></div>");

  }
  else {
   $('body').append("<div><h2>Ответ не правильный<h2></div>");
  }
 }


