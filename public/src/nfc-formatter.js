const crypto = require("crypto");

function encrypt(obj, key) {
  const text = JSON.stringify(obj);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(
      text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return Buffer.from(result).toString("base64");
}

const data = { id: 13, name: "yanyan", address: 'padilla', age: 24, sex: 'male', };
const secretKey = "maku-secret-key";
const encryptedData = encrypt(data, secretKey);
console.log("Encrypted:", encryptedData);

const devUrl = "http://localhost:3000";
// const localUrl = "http://192.168.1.52:3000"
const prodUrl = "https://www.maku-playground.site"

const isDev = false;

const finalUrl = isDev ? devUrl : prodUrl

const url = `${finalUrl}/nfc.html?data=${encodeURIComponent(encryptedData)}`;
console.log("URL:", url);
