const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "As a cyber security enthusiast, I am passionate about protecting digital systems and data from unauthorized access, theft, or damage. I am constantly keeping up-to-date with the latest security trends and technologies, and am driven to find solutions to prevent cyber attacks. My mission is to help individuals and organizations stay safe in the digital world.",
  skills:
    "Ethical Hacking | Penetration Testing|",
  education:
    "BCA -  Bachelor of Computer Applications Specialization in Computer Applications",
  experience:'<span class="code">Total experience: As a Content Manager in Oye Be Smartest for 3 months, Currently working as a Cyber Security Analyst in HackerBro Technologies</span>',
  certifications: 
    "Microsoft Office Specialist PowerPoint 2016<br> Microsoft Office Specialist Word 2016<br>Microsoft Office Specialist Excel 2016<br>MTA : Networking Fundamentals<br>",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/shubhamsinghdarmwal/' class='success link'>Linkedin</a>, <a href='mailto:sdarmwal17@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
