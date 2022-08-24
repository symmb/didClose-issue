import * as lsp from 'vscode-languageserver/node';

const connection = lsp.createConnection(lsp.ProposedFeatures.all);

connection.onInitialize((params: lsp.InitializeParams) => {
	return {
		capabilities: {
			textDocumentSync: {
				openClose: true,
			}
		}
	}
})

connection.onDidCloseTextDocument((params: lsp.DidCloseTextDocumentParams) => {
	console.info("Closed", params.textDocument.uri)
})

connection.listen()
