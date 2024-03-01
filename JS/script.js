function showPopup(productName) {
  var popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = '<h2>' + productName + '</h2>' +
                           '<p>Detailed information about ' + productName + '.</p>';
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}
