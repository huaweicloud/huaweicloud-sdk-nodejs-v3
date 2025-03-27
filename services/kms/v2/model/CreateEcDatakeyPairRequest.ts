import { CreateEcDatakeyPairRequestBody } from './CreateEcDatakeyPairRequestBody';


export class CreateEcDatakeyPairRequest {
    public body?: CreateEcDatakeyPairRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateEcDatakeyPairRequestBody): CreateEcDatakeyPairRequest {
        this['body'] = body;
        return this;
    }
}