import { DetectFaceByFileRequestBody } from './DetectFaceByFileRequestBody';


export class DetectFaceByFileRequest {
    public body?: DetectFaceByFileRequestBody;
    public constructor() { 
    }
    public withBody(body: DetectFaceByFileRequestBody): DetectFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}