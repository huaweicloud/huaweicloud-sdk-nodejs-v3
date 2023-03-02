import { VideoCuttingRequestBody } from './VideoCuttingRequestBody';


export class CreateVideoCuttingTaskRequest {
    public body?: VideoCuttingRequestBody;
    public constructor() { 
    }
    public withBody(body: VideoCuttingRequestBody): CreateVideoCuttingTaskRequest {
        this['body'] = body;
        return this;
    }
}