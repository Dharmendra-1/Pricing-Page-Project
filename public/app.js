let isMonthly = true;

const toggle = () => {
  if (isMonthly) {
    document.getElementById('toggle').setAttribute('class', 'slider-annually');
    document.getElementById('priceFirst').innerHTML = 199.99;
    document.getElementById('priceSecond').innerHTML = 249.99;
    document.getElementById('priceThird').innerHTML = 399.9;
    isMonthly = false;
  } else {
    document.getElementById('toggle').setAttribute('class', 'slider-monthly');
    document.getElementById('priceFirst').innerHTML = 19.99;
    document.getElementById('priceSecond').innerHTML = 24.99;
    document.getElementById('priceThird').innerHTML = 39.99;
    isMonthly = true;
  }
};
