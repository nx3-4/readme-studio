const projectName = document.getElementById("projectName");
const description = document.getElementById("description");
const installation = document.getElementById("installation");
const usage = document.getElementById("usage");
const license = document.getElementById("license");

const preview = document.getElementById("preview");

document.getElementById("generateBtn").onclick = function () {

const text = `# ${projectName.value}

${description.value}

## Installation

\`\`\`
${installation.value}
\`\`\`

## Usage

${usage.value}

## License

${license.value}
`;

preview.textContent = text;

};

document.getElementById("copyBtn").onclick = function () {

navigator.clipboard.writeText(preview.textContent);

alert("README copied!");

};

document.getElementById("downloadBtn").onclick = function () {

const blob = new Blob([preview.textContent], {type:"text/plain"});

const a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "README.md";

a.click();

};