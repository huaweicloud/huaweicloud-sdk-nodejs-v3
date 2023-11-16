import { CreateBuildJobRequestBody } from './CreateBuildJobRequestBody';


export class CreateBuildJobRequest {
    public body?: CreateBuildJobRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateBuildJobRequestBody): CreateBuildJobRequest {
        this['body'] = body;
        return this;
    }
}