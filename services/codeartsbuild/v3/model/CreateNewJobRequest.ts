import { CreateBuildJobRequestBody } from './CreateBuildJobRequestBody';


export class CreateNewJobRequest {
    public body?: CreateBuildJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateBuildJobRequestBody): CreateNewJobRequest {
        this['body'] = body;
        return this;
    }
}