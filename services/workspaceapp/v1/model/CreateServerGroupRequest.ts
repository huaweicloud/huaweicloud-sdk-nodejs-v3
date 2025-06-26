import { CreateServerGroupReq } from './CreateServerGroupReq';


export class CreateServerGroupRequest {
    public body?: CreateServerGroupReq;
    public constructor() { 
    }
    public withBody(body: CreateServerGroupReq): CreateServerGroupRequest {
        this['body'] = body;
        return this;
    }
}