function getData() {
    const inputData = document.getElementById("input_data").value.trim();
    const greetingMessage = document.getElementById("greeting_message");
    if (!inputData) {
        alert('Please enter your name.');
        return;
    }
    greetingMessage.textContent = `Hello, ${inputData}!`;
    document.getElementById("input_data").value = "";

}
