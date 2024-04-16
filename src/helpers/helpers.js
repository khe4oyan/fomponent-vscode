const fs = require("fs");
const path = require("path");

function folderIsEmpty(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    return files.length === 0;
  } catch (error) {
    return false;
  }
}

function getFileName(folderPath) {
  const folderName = folderPath.split(path.sep);
  return folderName[folderName.length - 1];
}

module.exports = {
  getFileName,
  folderIsEmpty,
};
