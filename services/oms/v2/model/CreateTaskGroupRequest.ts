import { CreateTaskGroupReq } from './CreateTaskGroupReq';


export class CreateTaskGroupRequest {
    public body?: CreateTaskGroupReq;
    public constructor() { 
    }
    public withBody(body: CreateTaskGroupReq): CreateTaskGroupRequest {
        this['body'] = body;
        return this;
    }
}