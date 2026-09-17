import { CreateVariableGroupReq } from './CreateVariableGroupReq';


export class CreateVariableGroupRequest {
    public body?: CreateVariableGroupReq;
    public constructor() { 
    }
    public withBody(body: CreateVariableGroupReq): CreateVariableGroupRequest {
        this['body'] = body;
        return this;
    }
}