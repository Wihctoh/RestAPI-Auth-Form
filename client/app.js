document
  .querySelector(".registration-button")
  .addEventListener("click", async () => {
    const reGinInp = document.querySelector(".email").value;
    const pwdInp = document.querySelector(".password").value;

    const obj = { email: reGinInp, pwd: pwdInp };

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const json = await res.json();
    console.log(json);
  });

document.querySelector(".login-button").addEventListener("click", async () => {
  const loginInp = document.querySelector(".email2").value;
  const pwdInp = document.querySelector(".password2").value;

  const obj = { email: loginInp, pwd: pwdInp };

  const res = await fetch("http://localhost:3000/api/authorize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  const json = await res.json();
  console.log(json);
});
