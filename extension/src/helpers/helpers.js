const fs = require("fs");

function folderIsEmpty(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    return files.length === 0;
  } catch (error) {
    return false;
  }
}

function getFileName(folderPath) {
  const folderName = folderPath.split("\\");
  return folderName[folderName.length - 1];
}

module.exports = {
  getFileName,
  folderIsEmpty,
};
