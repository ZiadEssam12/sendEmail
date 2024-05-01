const sendEmailButton = document.getElementById("sendEmail");

sendEmailButton.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const subject = document.getElementById("subject").value;
  let res;

  if (email && message && subject) {
    res = await axios.post(
      "https://emailsender-7z61.onrender.com/",
      {
        from: email,
        to: email,
        subject: subject,
        text: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  if (res.status === 200) {
    alert("Email sent successfully");
  }
});
