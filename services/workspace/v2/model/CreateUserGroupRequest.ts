import { CreateUserGroupReq } from './CreateUserGroupReq';


export class CreateUserGroupRequest {
    public body?: CreateUserGroupReq;
    public constructor() { 
    }
    public withBody(body: CreateUserGroupReq): CreateUserGroupRequest {
        this['body'] = body;
        return this;
    }
}