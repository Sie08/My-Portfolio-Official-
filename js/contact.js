(function () {
  emailjs.init("Lsmh7Vgixxib0k5x7");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const sendBtn = document.querySelector(".contact-btn");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    sendBtn.textContent = "Sending...";
    sendBtn.disabled = true;

    emailjs.sendForm(
      "jasmen-qainleh",
      "template_vrqih4e",
      this
    )
    .then(() => {
      status.textContent = "Message sent successfully!";
      status.style.color = "#22c55e";
      form.reset();
    })
    .catch((error) => {
      console.log(error);
      status.textContent = "Failed to send message.";
      status.style.color = "#ef4444";
    })
    .finally(() => {
      sendBtn.textContent = "Send Message";
      sendBtn.disabled = false;
    });
  });
}