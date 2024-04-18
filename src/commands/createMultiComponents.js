/**
 * @param {vscode.ExtensionContext} context
 */

// libs
const vscode = require("vscode");
const path = require("path");

// functions
const { createFiles } = require("../helpers/file");

const createMultiComponents = async (uri) => {
	if (!uri) {
		vscode.window.showErrorMessage("Cannot create file: No folder");
		return;
	}

	let targetPath = uri.fsPath;
	
	if (!vscode.workspace.workspaceFolders) {
		targetPath = path.dirname(targetPath);
	}

	vscode.window.showInputBox({
		prompt: "Enter the name of the components (separated by a space)",
		placeHolder: "for example: Header Footer Main"
	}).then((input) => {
			if (input) {
				const components = input.split(' ');
				for (let componentName of components) {
					if (!/^[a-zA-Z]+$/.test(componentName)){
						vscode.window.showInformationMessage("😐 Hey! Component name must be English chars");
						break;
					}

					componentName = componentName.split('');
					if (componentName[0] === componentName[0].toLowerCase()) {
						componentName[0] = componentName[0].toUpperCase();
					}
					componentName = componentName.join('');

					createFiles(componentName, `${targetPath}${path.sep}${componentName}`);
				}
			} else {
				vscode.window.showErrorMessage("😐 Bro. Enter the names of components");
			}
	});
};

module.exports = createMultiComponents;