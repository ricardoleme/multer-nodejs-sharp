const imageUploadForm = document.getElementById("imageUploadForm");

imageUploadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(imageUploadForm);
    const imageFile = formData.get("image");

    if (!imageFile) {
        alert("Selecione uma imagem para enviar.");
        return;
    }

    // Envie o formData para o endpoint usando AJAX ou Fetch API
    // (Exemplo com Fetch API)

    fetch("http://localhost:3000/images", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log("Imagem enviada com sucesso:", responseData);
            // Exibir mensagem de sucesso ou tratar o resultado da API
        })
        .catch((error) => {
            console.error("Erro ao enviar imagem:", error);
            // Exibir mensagem de erro
        });
});
