AOS.init({
  duration: 1000,
  once: true,
});

window.onload = function () {
  document.getElementById("popup").style.display = "block";
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.onload = function () {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = ` <h2>Bem-vindo!</h2>
      <p>Obrigado por visitar nosso site. Se precisar de ajuda, entre em contato!</p>
      <p>
        Este site foi criado por
        <a href="https://github.com/lipex5k" target="_blank">github.com/lipex5k</a>.
      </p>
      <p>
        Instagram:
        <a href="https://www.instagram.com/euliperb" target="_blank">@euliperb</a>
      </p>
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/lipex5k" target="_blank">lipex5k</a>
      </p>
      <button id="close-popup">Fechar</button>
    `;

  document.body.appendChild(popup);
  popup.style.display = "block";

  document.getElementById("close-popup").onclick = function () {
    popup.style.display = "none";
  };
};
