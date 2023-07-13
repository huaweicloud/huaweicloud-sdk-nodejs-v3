import { CreateRemuxTaskReq } from './CreateRemuxTaskReq';


export class CreateRemuxTaskRequest {
    public body?: CreateRemuxTaskReq;
    public constructor() { 
    }
    public withBody(body: CreateRemuxTaskReq): CreateRemuxTaskRequest {
        this['body'] = body;
        return this;
    }
}