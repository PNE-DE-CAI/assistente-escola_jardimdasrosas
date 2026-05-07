function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value;

  chatBox.innerHTML += `<p><strong>Você:</strong> ${userText}</p>`;

  // resposta simulada
  chatBox.innerHTML += `<p><strong>Bot:</strong> (resposta do agente aparecerá aqui)</p>`;

  input.value = "";
}
