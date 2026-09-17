import { CreateTagReq } from './CreateTagReq';


export class CreatePipelineTagRequest {
    public body?: CreateTagReq;
    public constructor() { 
    }
    public withBody(body: CreateTagReq): CreatePipelineTagRequest {
        this['body'] = body;
        return this;
    }
}