function decrypt(encryptedData, key) {
  const text = atob(encryptedData);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(
      text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return JSON.parse(result);
}


function readData ()  {
const urlParams = new URLSearchParams(window.location.search);
const encryptedData = urlParams.get("data");
const secretKey = "maku-secret-key";

if (encryptedData) {
  const decryptedData = decrypt(encryptedData, secretKey);

  if (!decryptedData) return;

  const { id, name, address, age, sex } = decryptedData;

  if (id) {
    document.getElementById("id").value = id;
  }

  if (name) {
    document.getElementById("name").value = name;
  }
  if (age) {
    document.getElementById("age").value = age;
  }
  if (sex) {
    document.getElementById("sex").value = sex;
  }
  if (address) {
    document.getElementById("address").value = address;
  }

  console.log("Decrypted data:", decryptedData);
} else {
  console.log("No encrypted data found in URL");
}
}


readData()

