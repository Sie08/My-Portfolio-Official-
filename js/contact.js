// Initialize EmailJS
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function(e){
  e.preventDefault();

  sendBtn.textContent = "Sending...";
  sendBtn.disabled = true;

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  )
  .then(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";

    form.reset();
    sendBtn.textContent = "Send Message";
    sendBtn.disabled = false;
  })
  .catch(() => {
    status.textContent = "Failed to send message.";
    status.style.color = "red";

    sendBtn.textContent = "Send Message";
    sendBtn.disabled = false;
  });
});

