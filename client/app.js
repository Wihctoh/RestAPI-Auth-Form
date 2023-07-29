document.querySelector(".register-btn").addEventListener("click", async () => {
  const usernameInp = document.querySelector(".username").value;
  const emailInp = document.querySelector(".email").value;
  const phoneInp = document.querySelector(".phone").value;
  const pwdInp = document.querySelector(".pwd").value;
  const pwdConfirmInp = document.querySelector(".pwdConfirm").value;

  const regValues = {
    username: usernameInp,
    email: emailInp,
    phone: phoneInp,
    pwd: pwdInp,
    pwdConfirm: pwdConfirmInp,
  };

  const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(regValues),
  });

  const json = await response.json();

  console.log(json);
  alert(json.message);
});

document.querySelector(".login-button").addEventListener("click", async () => {
  const emailInp = document.querySelector(".email").value;
  const pwdInp = document.querySelector(".pwd").value;

  const authValues = {
    email: emailInp,
    pwd: pwdInp,
  };

  const response = await fetch("http://localhost:3000/api/authorize", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(authValues),
  });

  const json = await response.json();

  console.log(json);
  alert(json.message);
});
