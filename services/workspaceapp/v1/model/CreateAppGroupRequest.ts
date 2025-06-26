import { CreateAppGroupReq } from './CreateAppGroupReq';


export class CreateAppGroupRequest {
    public body?: CreateAppGroupReq;
    public constructor() { 
    }
    public withBody(body: CreateAppGroupReq): CreateAppGroupRequest {
        this['body'] = body;
        return this;
    }
}