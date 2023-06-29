import { CreateTranscodingReq } from './CreateTranscodingReq';


export class CreateTranscodingTaskRequest {
    public body?: CreateTranscodingReq;
    public constructor() { 
    }
    public withBody(body: CreateTranscodingReq): CreateTranscodingTaskRequest {
        this['body'] = body;
        return this;
    }
}