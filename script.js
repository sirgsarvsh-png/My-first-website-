
let count = 0;
let profile = {
  name: "sarvesh",
  role: "web developer",
  city: "Meerut"
};
let { name, role, city } = profile;
document.getElementById('aboutInfo').innerText = `${name}-${role}-${city}`;

let skillArray = ["HTML", "CSS", "JavaScript", "Teaching"];
let skillsText = "";
for (let i = 0; i < skillArray.length; i++) {
  skillsText = skillsText + skillArray[i] + " ";
}
document.getElementById('skillList').innerText = skillsText;

function countClick() {
  count = count + 1;
  document.getElementById('counter').innerText = 'Total clicks:' + count;
  if (count == 5) {
    document.getElementById('counter').innerText = 'Wah!5bar dabaya,shabash!';
  }
}

function checkForm() {
  let nameValue = document.getElementById('userName').value;
  if (nameValue == "") {
    document.getElementById('formMsg').innerText = "Bhai,Nam to likho !";
  } else {
    document.getElementById('formMsg').innerText = "Shukriya " + nameValue + " ! ";
  }
}

function askAI() {
  let question = document.getElementById('ai-input').value;
  document.getElementById('ai-response').innerText = "Soch raha hoo...";
  puter.ai.chat(question).then(response => {
    document.getElementById('ai-response').innerText = response;
  });
}

async function getJoke() {
  try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let data = await response.json();
    document.getElementById('jokeBox').innerText = data.setup + "-" + data.punchline;
  } catch (error) {
    document.getElementById('jokeBox').innerText = "Error:" + error;
  }
}
