import { CreateTempApiKeyReq } from './CreateTempApiKeyReq';


export class CreateInferTempApiKeyRequest {
    public body?: CreateTempApiKeyReq;
    public constructor() { 
    }
    public withBody(body: CreateTempApiKeyReq): CreateInferTempApiKeyRequest {
        this['body'] = body;
        return this;
    }
}