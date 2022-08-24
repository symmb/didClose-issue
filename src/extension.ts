import * as path from "node:path"
import * as vscode from "vscode";
import * as lsp from "vscode-languageclient/node";

let client: lsp.LanguageClient | undefined = undefined;

export async function activate(context: vscode.ExtensionContext) {
	const serverModule = context.asAbsolutePath(path.join("out", "server.js"))
	client = new lsp.LanguageClient("dummy", {
		run: { module: serverModule, transport: lsp.TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: lsp.TransportKind.ipc,
			options: { execArgv: ['--nolazy', '--inspect=6009'] },
		},
	}, {
		documentSelector: [{ scheme: 'file', language: 'plaintext' }],
	});
	await client.start()
	client.outputChannel.show(true)
}

export async function deactivate() {
	await client?.stop()
}
