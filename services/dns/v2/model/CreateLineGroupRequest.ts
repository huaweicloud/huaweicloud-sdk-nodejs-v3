import { CreateLineGroupsReq } from './CreateLineGroupsReq';


export class CreateLineGroupRequest {
    public body?: CreateLineGroupsReq;
    public constructor() { 
    }
    public withBody(body: CreateLineGroupsReq): CreateLineGroupRequest {
        this['body'] = body;
        return this;
    }
}