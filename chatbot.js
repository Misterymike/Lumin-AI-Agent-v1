
document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    chatbotContainer.innerHTML = '<div id="chatbot"><h2>LUMIN AI - Assistente Virtual 🤖</h2><p>Perguntas comuns:</p><button onclick="ask('O que é LUMIN AI?')">O que é LUMIN AI?</button><button onclick="ask('Como posso ganhar dinheiro com IA?')">Como posso ganhar dinheiro com IA?</button><input type="text" id="user-input" placeholder="Escreve a tua pergunta..."><button onclick="sendMessage()">Enviar</button><div id="chat-response"></div></div>';

    function ask(question) {
        document.getElementById("user-input").value = question;
        sendMessage();
    }

    function sendMessage() {
        const input = document.getElementById("user-input").value.toLowerCase();
        const responseContainer = document.getElementById("chat-response");

        let response = "Desculpa, não entendi. Podes reformular a pergunta?";

        if (input.includes("o que é lumin ai")) {
            response = "LUMIN AI é um assistente de inteligência artificial para ajudar na automação e rendimento passivo.";
        } else if (input.includes("como posso ganhar dinheiro")) {
            response = "Podes ganhar dinheiro com IA através de automação, consultoria ou criação de produtos baseados em IA.";
        }

        responseContainer.innerHTML = "<p><strong>LUMIN AI:</strong> " + response + "</p>";

        // Narrar a resposta por voz
        let speech = new SpeechSynthesisUtterance(response);
        speech.lang = "pt-PT";
        window.speechSynthesis.speak(speech);
    }
});