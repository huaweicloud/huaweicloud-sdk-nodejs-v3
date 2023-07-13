import { CreateKeyRequestBody } from './CreateKeyRequestBody';


export class CreateKeyRequest {
    public body?: CreateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateKeyRequestBody): CreateKeyRequest {
        this['body'] = body;
        return this;
    }
}