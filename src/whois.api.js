const options = {
  method: "GET",
};
const api = document.querySelector(".api");
const Submit = document.querySelector(".submit");

function apiRes() {
  fetch(
    "https://api.whoisfreaks.com/v1.0/whois?apiKey=37401e250dad4487bb6a341b516e3a4e&whois=live&domainName=google.com",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      whoIs(res);
    })
    .catch((err) => console.error(err));
}

function whoIs(res) {
  const H3 = document.createElement("h3");
  const newContent = document.createText(res);
  H3.appendChild(newContent);
  api.appendChild(H3);
}

Submit.addEventListener("click", (e) => {
  e.DefaultPrevented;
  apiRes();
});
