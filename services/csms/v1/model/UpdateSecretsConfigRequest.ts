import { UpdateSecretsConfigRequestBody } from './UpdateSecretsConfigRequestBody';


export class UpdateSecretsConfigRequest {
    public body?: UpdateSecretsConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateSecretsConfigRequestBody): UpdateSecretsConfigRequest {
        this['body'] = body;
        return this;
    }
}