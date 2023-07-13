import { CreateEditingJobReq } from './CreateEditingJobReq';


export class CreateEditingJobRequest {
    public body?: CreateEditingJobReq;
    public constructor() { 
    }
    public withBody(body: CreateEditingJobReq): CreateEditingJobRequest {
        this['body'] = body;
        return this;
    }
}