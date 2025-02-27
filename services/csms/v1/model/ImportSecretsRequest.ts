import { CreateSecretRequestBody } from './CreateSecretRequestBody';


export class ImportSecretsRequest {
    public secrets?: Array<CreateSecretRequestBody>;
    public constructor(secrets?: Array<CreateSecretRequestBody>) { 
        this['secrets'] = secrets;
    }
    public withSecrets(secrets: Array<CreateSecretRequestBody>): ImportSecretsRequest {
        this['secrets'] = secrets;
        return this;
    }
}