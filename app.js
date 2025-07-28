
function loadForm(type) {
  const icons = document.getElementById("icons");
  const formContainer = document.getElementById("form-container");
  const iframe = document.getElementById("form-frame");
  let url = "";

  if (type === "viagem") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUNjZYRUdHUEtKNUNDSEYyV001TE9VU0ZUVy4u&origin=lprLink&route=shorturl";
  } else if (type === "hospedagem") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUNDcxRlZHRzBKMjVJM1lWVFc4UU8zOUc0SS4u&origin=lprLink&route=shorturl";
  } else if (type === "inovacao") {
    url = "https://forms.office.com/Pages/ResponsePage.aspx?id=emONPyFz50qudewosdtpDCPJHkcW2CpMmyPiHvcb7dFUOUxBVkkzTExFVlZSWVNETjVSMkw5MDZJRi4u";
  } else if (type === "cessao") {
    url = "https://form.jotform.com/252023929762056";
  }

  } else if (type === "caju") {
    window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=emONPyFz50qudewosdtpDOBfNYYroc1Opt5ttN-afM5UNjVXMU1VQUFWRUFJWFo0UUoxSUVJSjlBTS4u", "_blank");
    return;

  } else if (type === "veiculo") {
    url = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUMkUyOUNWVTVBQ1hHMUtDMkIwTUU0TUZTQi4u&origin=lprLink&route=shorturl";

  icons.style.display = "none";
  formContainer.style.display = "block";
  iframe.src = url;
}

function voltarInicio() {
  document.getElementById("form-frame").src = "";
  document.getElementById("form-container").style.display = "none";
  document.getElementById("icons").style.display = "flex";
}

function acessoAdmin() {
  const senha = prompt("Digite a senha de administrador:");
  if (senha === "corpal2025") {
    window.location.href = "painel.html";
  } else if (senha !== null) {
    alert("Senha incorreta. Acesso negado.");
  }
}


document.getElementById("btnSolicitacaoVeiculo").addEventListener("click", function () {
    document.getElementById("formFrame").src = "https://forms.office.com/pages/responsepage.aspx?id=emONPyFz50qudewosdtpDEK_Qs0Wl59OqI5w8rrHBSlUMkUyOUNWVTVBQ1hHMUtDMkIwTUU0TUZTQi4u&origin=lprLink&route=shorturl";
    document.getElementById("formFrame").style.display = "block";
});
