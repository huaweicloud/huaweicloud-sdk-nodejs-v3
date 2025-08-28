import { CreateInstanceReq } from './CreateInstanceReq';


export class CreateInstanceRequest {
    public body?: CreateInstanceReq;
    public constructor() { 
    }
    public withBody(body: CreateInstanceReq): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}