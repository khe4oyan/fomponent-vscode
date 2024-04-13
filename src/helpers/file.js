// libs
const vscode = require("vscode");
const path = require("path");

async function createFile(fileName, targetPath, fileText = '') {
  try {
    const filePath = path.join(targetPath, fileName);
    const textEncoder = new TextEncoder();
    const fileData = textEncoder.encode(fileText);
    await vscode.workspace.fs.writeFile(vscode.Uri.file(filePath), fileData);
  } catch (error) {
    vscode.window.showErrorMessage(`Error creating file: ${error.message}`);
  }
}

function createJSX(fileName, targetPath) {
 const textLines = [
  `// styles`,
  `import classes from './styles.module.css';`,
  ``,
  `export default function ${fileName}() {`,
  `  return (`,
  `    <div className={classes.root}>`,
  `      (${fileName})`,
  `    </div>`,
  `  )`,
  `}`,
  ];
  createFile(`${fileName}.jsx`, targetPath, textLines.join('\n'));
}

function createIndexJS(fileName, targetPath) {
  createFile('index.js', targetPath, `export { default } from './${fileName}';\n`);
}

function createModuleCss(targetPath) {
  createFile('styles.module.css', targetPath, '.root {}\n');
}

function createFiles(fileName, targetPath) {
  createJSX(fileName, targetPath);
  createIndexJS(fileName, targetPath);
  createModuleCss(targetPath);
}

module.exports = {
  createFiles,
};