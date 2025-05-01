const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");

const qrContainer = document.querySelector(".qr-body");
let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInp();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInp();
});

downloadBtn.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");
  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAttr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInp() {
  qrText.value.length > 0
    ? generateQrCode()
    : alert("Enter the text or URL to Generate QR Code");
}

function generateQrCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
