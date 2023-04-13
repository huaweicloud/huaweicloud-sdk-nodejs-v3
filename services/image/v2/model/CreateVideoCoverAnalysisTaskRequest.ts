import { CreateVideoCoverAnalysisTaskRequestBody } from './CreateVideoCoverAnalysisTaskRequestBody';


export class CreateVideoCoverAnalysisTaskRequest {
    public body?: CreateVideoCoverAnalysisTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVideoCoverAnalysisTaskRequestBody): CreateVideoCoverAnalysisTaskRequest {
        this['body'] = body;
        return this;
    }
}