import { CreateGlobalValueReq } from './CreateGlobalValueReq';


export class CreateGlobalVariableRequest {
    public body?: CreateGlobalValueReq;
    public constructor() { 
    }
    public withBody(body: CreateGlobalValueReq): CreateGlobalVariableRequest {
        this['body'] = body;
        return this;
    }
}