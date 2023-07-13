import { CreateSecretRequestBody } from './CreateSecretRequestBody';


export class CreateSecretRequest {
    public body?: CreateSecretRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSecretRequestBody): CreateSecretRequest {
        this['body'] = body;
        return this;
    }
}