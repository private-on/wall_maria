function saveName() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    localStorage.setItem('username', name);
    window.location.href = 'index.html';
  }
}

window.onload = function() {
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage) {
    const storedName = localStorage.getItem('username');
    if (storedName) {
      welcomeMessage.textContent = `${storedName}님 환영합니다!`;
    }
  }
}
