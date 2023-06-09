const form = document.getElementById('order-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const pickupDate = document.getElementById('pickup-date').value;
  const pickupTime = document.getElementById('pickup-time').value;
  const orderItems = document.getElementById('order-items').value;
  const delivery = document.getElementById('delivery').checked;

  // Validate required fields
  if (name === '' || email === '' || phone === '' || pickupDate === '' || pickupTime === '' || orderItems === '') {
    alert('Please fill out all required fields.');
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  // Save order to user's account
  const order = {
    name: name,
    email: email,
    phone: phone,
    pickupDate: pickupDate,
    pickupTime: pickupTime,
    orderItems: orderItems,
    delivery: delivery
  };
  saveOrderToAccount(order);

  // Display confirmation message
  alert('Your order has been placed. Thank you for choosing our restaurant!');
  form.reset();
});

function saveOrderToAccount(order) {
  // Code to save order to user's account
}