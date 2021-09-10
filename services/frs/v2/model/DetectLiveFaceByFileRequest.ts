import { DetectLiveFaceByFileRequestBody } from './DetectLiveFaceByFileRequestBody';


export class DetectLiveFaceByFileRequest {
    public body?: DetectLiveFaceByFileRequestBody;
    public constructor() { 
    }
    public withBody(body: DetectLiveFaceByFileRequestBody): DetectLiveFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}