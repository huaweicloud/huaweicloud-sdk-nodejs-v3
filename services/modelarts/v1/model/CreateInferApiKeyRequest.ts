import { CreateApiKeyReq } from './CreateApiKeyReq';


export class CreateInferApiKeyRequest {
    public body?: CreateApiKeyReq;
    public constructor() { 
    }
    public withBody(body: CreateApiKeyReq): CreateInferApiKeyRequest {
        this['body'] = body;
        return this;
    }
}