import { CreateRsaDatakeyPairRequestBody } from './CreateRsaDatakeyPairRequestBody';


export class CreateRsaDatakeyPairRequest {
    public body?: CreateRsaDatakeyPairRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateRsaDatakeyPairRequestBody): CreateRsaDatakeyPairRequest {
        this['body'] = body;
        return this;
    }
}