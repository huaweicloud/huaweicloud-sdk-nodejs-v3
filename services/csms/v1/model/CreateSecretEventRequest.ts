import { CreateSecretEventRequestBody } from './CreateSecretEventRequestBody';


export class CreateSecretEventRequest {
    public body?: CreateSecretEventRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSecretEventRequestBody): CreateSecretEventRequest {
        this['body'] = body;
        return this;
    }
}