function submitReservation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const numberOfPeople = document.getElementById("number-of-people").value;
  
    document.getElementById("confirmation-name").textContent = name;
    document.getElementById("confirmation-email").textContent = email;
    document.getElementById("confirmation-phone").textContent = phone;
    document.getElementById("confirmation-date").textContent = date;
    document.getElementById("confirmation-time").textContent = time;
    document.getElementById("confirmation-number-of-people").textContent = numberOfPeople;
  
    document.querySelector(".reservation-form").style.display = "none";
    document.querySelector(".reservation-confirmation").style.display = "block";
  }