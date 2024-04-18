/**
 * @param {vscode.ExtensionContext} context
 */

// libs
const vscode = require("vscode");

// commands
const createComponent = require('./commands/createComponent');
const createMultiComponents = require('./commands/createMultiComponents');

function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand("fomponent.createComponent", createComponent));
  context.subscriptions.push(vscode.commands.registerCommand("fomponent.createMultiComponents", createMultiComponents));
}

module.exports = {
  activate,
  deactivate: () => {},
};