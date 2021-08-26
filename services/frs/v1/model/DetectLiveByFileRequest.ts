import { DetectLiveByFileRequestBody } from './DetectLiveByFileRequestBody';


export class DetectLiveByFileRequest {
    public body?: DetectLiveByFileRequestBody;
    public constructor() { 
    }
    public withBody(body: DetectLiveByFileRequestBody): DetectLiveByFileRequest {
        this['body'] = body;
        return this;
    }
}