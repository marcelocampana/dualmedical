function sendMail() {
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;
  const successMessage = document.getElementById("success");
  successMessage.textContent = "¡Mensaje Enviado!";
  successMessage.style.marginBottom = "250px";
  (function () {
    emailjs.init("nsJTxxuzu4ESMcnKo"); //please encrypted user id for malicious attacks
  })();
  //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
  const templateParams = {
    from_name: name,
    website: "unik.cl",
    message: message,
    from_email: email,
  };

  emailjs.send("service_qlmicrx", "template_lbm2iqe", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
