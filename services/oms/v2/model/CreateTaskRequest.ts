import { CreateTaskReq } from './CreateTaskReq';


export class CreateTaskRequest {
    public body?: CreateTaskReq;
    public constructor() { 
    }
    public withBody(body: CreateTaskReq): CreateTaskRequest {
        this['body'] = body;
        return this;
    }
}