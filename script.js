function enviarFeedback() {
    let inputName = document.querySelector("#name");
    let inputMessage = document.querySelector("#feecback-message");
   
    let secao = document.querySelector(".FeedbackMessages");
    let escopo = document.createElement("div");
    let nome = document.createElement("h3");
    let message = document.createElement("p");

    nome.innerText = inputName.value;
    message.innerText = inputMessage.value;
    escopo.append(nome);
    escopo.append(message);
    secao.append(escopo);
}

let feedbackButton = document.querySelector("#send-feedback");
feedbackButton.addEventListener("click", enviarFeedback);