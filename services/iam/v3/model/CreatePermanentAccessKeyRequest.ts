import { CreatePermanentAccessKeyRequestBody } from './CreatePermanentAccessKeyRequestBody';


export class CreatePermanentAccessKeyRequest {
    public body?: CreatePermanentAccessKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePermanentAccessKeyRequestBody): CreatePermanentAccessKeyRequest {
        this['body'] = body;
        return this;
    }
}