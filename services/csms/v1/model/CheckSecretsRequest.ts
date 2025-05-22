import { CheckSecretsRequestBody } from './CheckSecretsRequestBody';


export class CheckSecretsRequest {
    public body?: CheckSecretsRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckSecretsRequestBody): CheckSecretsRequest {
        this['body'] = body;
        return this;
    }
}