import { VideoCoverAnalysisCreateTaskRequestBody } from './VideoCoverAnalysisCreateTaskRequestBody';


export class CreateVideoCoverAnalysisTaskRequest {
    public body?: VideoCoverAnalysisCreateTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: VideoCoverAnalysisCreateTaskRequestBody): CreateVideoCoverAnalysisTaskRequest {
        this['body'] = body;
        return this;
    }
}