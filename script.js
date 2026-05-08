async function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chat-box");
  
    const pergunta = input.value;
  
    chatBox.innerHTML += `<p class="user"><strong>Você:</strong> ${pergunta}</p>`;
  
    // 🔐 SUA CHAVE AQUI
    const API_KEY = "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";
  
    const resposta = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Você é um assistente pedagógico da escola Jardim das Rosas.
  
  Use APENAS este conteúdo como base:
  ${baseConhecimento}
  
  Se não existe no conteúdo, diga:
  "Essa informação não está no material didático disponível."
  
  Explique de forma didática.`
          },
          {
            role: "user",
            content: pergunta
          }
        ]
      })
    });
  
    const data = await resposta.json();
  
    const reply = data.choices[0].message.content;
  
    chatBox.innerHTML += `<p class="bot"><strong>Bot:</strong> ${reply}</p>`;
  
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
