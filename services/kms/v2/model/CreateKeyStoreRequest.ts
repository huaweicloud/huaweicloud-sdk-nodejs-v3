import { CreateKeyStoreRequestBody } from './CreateKeyStoreRequestBody';


export class CreateKeyStoreRequest {
    public body?: CreateKeyStoreRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateKeyStoreRequestBody): CreateKeyStoreRequest {
        this['body'] = body;
        return this;
    }
}