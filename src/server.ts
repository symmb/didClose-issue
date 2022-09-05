import * as lsp from 'vscode-languageserver/node';

const connection = lsp.createConnection(lsp.ProposedFeatures.all);

connection.onInitialize((params: lsp.InitializeParams) => {
	return {
		capabilities: {
			textDocumentSync: {
				openClose: true,
			},
			diagnosticProvider: {
				workspaceDiagnostics: false, // does matter for clearing on close in VS Code
				interFileDependencies: true, // doesn't matter for clearing on close
			}
		}
	}
})

connection.languages.diagnostics.on(async (_params, _token): Promise<lsp.FullDocumentDiagnosticReport | lsp.UnchangedDocumentDiagnosticReport> => {
	return {
		kind: "full",
		items: [
			{
				message: "Hello world!",
				range: {
					start: { line: 0, character: 1 },
					end: { line: 0, character: 5 },
				},
			},
		],
	}
})

connection.listen()
