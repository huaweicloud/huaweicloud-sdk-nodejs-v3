import { CreateExtractTaskReq } from './CreateExtractTaskReq';


export class CreateExtractTaskRequest {
    public body?: CreateExtractTaskReq;
    public constructor() { 
    }
    public withBody(body: CreateExtractTaskReq): CreateExtractTaskRequest {
        this['body'] = body;
        return this;
    }
}