import { CreateSecretRequestBody } from './CreateSecretRequestBody';


export class ImportSecretsRequest {
    public secrets?: Array<CreateSecretRequestBody>;
    public total?: number;
    public constructor(secrets?: Array<CreateSecretRequestBody>, total?: number) { 
        this['secrets'] = secrets;
        this['total'] = total;
    }
    public withSecrets(secrets: Array<CreateSecretRequestBody>): ImportSecretsRequest {
        this['secrets'] = secrets;
        return this;
    }
    public withTotal(total: number): ImportSecretsRequest {
        this['total'] = total;
        return this;
    }
}