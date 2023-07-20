import { CreateGlobalValueReq } from './CreateGlobalValueReq';


export class CreateGlobalValueRequest {
    public body?: CreateGlobalValueReq;
    public constructor() { 
    }
    public withBody(body: CreateGlobalValueReq): CreateGlobalValueRequest {
        this['body'] = body;
        return this;
    }
}