import * as path from "node:path"
import * as vscode from 'vscode'

suite('Extension Test Suite', () => {
	test('Sample test', async () => {
		await vscode.commands.executeCommand('workbench.action.closeAllEditors');
		const document = await vscode.workspace.openTextDocument(vscode.Uri.file(path.resolve(__dirname, "..", "..", "..", "testdata", "foo.txt")));
		await vscode.window.showTextDocument(document);
		await new Promise(r => setTimeout(r, 5000))
		await vscode.commands.executeCommand('workbench.action.closeAllEditors');
		await new Promise(r => setTimeout(r, 180000))
		console.log("Three minutes are over! Ding ding!")
		await new Promise(r => setTimeout(r, 180000))
	});
});
