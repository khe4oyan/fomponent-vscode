/**
 * @param {vscode.ExtensionContext} context
 */


// libs
const vscode = require("vscode");
const path = require("path");

// functions
const { createFiles } = require("../helpers/file");
const { getFileName, folderIsEmpty } = require("../helpers/helpers"); 

const createComponent = async (uri) => {
	if (!uri) {
		vscode.window.showErrorMessage("Cannot create file: No folder");
		return;
	}

	let targetPath = uri.fsPath;

	if (!vscode.workspace.workspaceFolders) {
		targetPath = path.dirname(targetPath);
	}

	if (!folderIsEmpty(targetPath)) {
		vscode.window.showErrorMessage(`Don't create file: Folder must be empty`);
		return;
	}

	const fileName = getFileName(targetPath);

	const fileNameIsLowerCase = fileName[0] === fileName[0].toLowerCase();
	if (fileNameIsLowerCase) {
		vscode.window.showErrorMessage(`Don't create file: Folder first letter must be uppercase`);
		return;
	}

	createFiles(fileName, targetPath);
}

module.exports = createComponent;