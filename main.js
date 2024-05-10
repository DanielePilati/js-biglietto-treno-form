"use strict";

const form = document.getElementById("ticket-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submitted");
  let age = document.getElementById("exampleInputAge");
  let km = document.getElementById("exampleInputKm");
  const rate = 0.21;
  let price = km.value * rate;

  console.log(age, age.value);
  console.log(km, km.value);
  console.log(rate);
  console.log(price);

  document.getElementById("refreshmessage").classList.toggle("d-none");
  document.getElementById("myBtn").classList.toggle("d-none");
  document.getElementById("reset").classList.toggle("d-none");
  document.getElementById("banner").classList.toggle("d-none");
  document.getElementById("banner-two").classList.toggle("d-none");

  if (age.value > 0 && km.value > 0 && age.value < 130) {
    if (age.value < 18) {
      price = price / 1.2;
      console.log("sei minorenne 20% di sconto");
      document.getElementById(
        "message"
      ).innerHTML = `Hai ${age.value} anni ed hai diritto al 20% di sconto.`;
      document.getElementById(
        "message-two"
      ).innerHTML = `Il prezzo del tuo biglietto è di ${price.toFixed(
        2
      )} € anzichè ${(price * 1.2).toFixed(2)} €`;
    } else if (age.value > 65) {
      price = price / 1.4;
      console.log("sei over 65 40% di sconto");
      document.getElementById(
        "message"
      ).innerHTML = `Hai ${age.value} anni ed hai diritto al 40% di sconto.`;
      document.getElementById("message-two").innerHTML = `
        Il prezzo del tuo biglietto è di ${price.toFixed(2)} € anzichè ${(
        price * 1.4
      ).toFixed(2)} €`;
    } else {
      console.log("no sconto");
      document.getElementById(
        "message"
      ).innerHTML = `Hai ${age.value} anni e non hai diritto a sconto.`;
      document.getElementById(
        "message-two"
      ).innerHTML = `Il prezzo del tuo biglietto è di ${price.toFixed(
        2
      )} € (prezzo pieno)`;
    }
  } else {
    console.log("inserisci valori validi");
    document.getElementById(
      "message"
    ).innerHTML = `Questi valori non sono validi`;
  }
});
