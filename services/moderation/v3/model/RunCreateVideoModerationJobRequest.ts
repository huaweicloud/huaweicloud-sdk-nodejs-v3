import { VideoCreateRequest } from './VideoCreateRequest';


export class RunCreateVideoModerationJobRequest {
    public body?: VideoCreateRequest;
    public constructor() { 
    }
    public withBody(body: VideoCreateRequest): RunCreateVideoModerationJobRequest {
        this['body'] = body;
        return this;
    }
}