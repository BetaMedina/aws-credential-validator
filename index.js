const { STSClient, GetCallerIdentityCommand } = require("@aws-sdk/client-sts");

async function validateAWSCredentials(accessKeyId, secretAccessKey, sessionToken = null) {
  const stsClient = new STSClient({
    region: "us-east-1", 
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      sessionToken: sessionToken 
    }
  });

  const command = new GetCallerIdentityCommand({});
  try {
    const response = await stsClient.send(command);
    console.log("Credenciais válidas. Detalhes do usuário:", response);
    return response;
  } catch (error) {
    console.error("Erro ao validar credenciais:", error);
    return null;
  }
}

const accessKeyId = "";
const secretAccessKey = "";
const sessionToken = "";

validateAWSCredentials(accessKeyId, secretAccessKey, sessionToken)
.then(response => {
  if (response) {
    console.log("Validação bem-sucedida.");
    return
  } 
  console.log("Falha na validação das credenciais.");
});
