import { ImportSecretsRequest } from './ImportSecretsRequest';


export class BatchImportSecretsRequest {
    public body?: ImportSecretsRequest;
    public constructor() { 
    }
    public withBody(body: ImportSecretsRequest): BatchImportSecretsRequest {
        this['body'] = body;
        return this;
    }
}