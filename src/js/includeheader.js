fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementsByTagName('header')[0].innerHTML = data;
  });