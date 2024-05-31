const fs = require("fs");
const path = require("path");

function printTree(dir, prefix = "") {
  const files = fs.readdirSync(dir);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Skip node_modules directory
    if (file === "node_modules") continue;

    const filePath = path.join(dir, file);

    // Print the current file or directory
    console.log(prefix + (i === files.length - 1 ? "└── " : "├── ") + file);

    // If the current file is a directory, recurse into it
    if (fs.statSync(filePath).isDirectory()) {
      printTree(filePath, prefix + (i === files.length - 1 ? "    " : "│   "));
    }
  }
}

printTree("./");
