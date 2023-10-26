import { VideoStreamCreateRequest } from './VideoStreamCreateRequest';


export class RunCreateVideoStreamModerationJobRequest {
    public body?: VideoStreamCreateRequest;
    public constructor() { 
    }
    public withBody(body: VideoStreamCreateRequest): RunCreateVideoStreamModerationJobRequest {
        this['body'] = body;
        return this;
    }
}