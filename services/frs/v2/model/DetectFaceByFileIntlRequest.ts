import { DetectFaceByFileIntlRequestBody } from './DetectFaceByFileIntlRequestBody';


export class DetectFaceByFileIntlRequest {
    public body?: DetectFaceByFileIntlRequestBody;
    public constructor() { 
    }
    public withBody(body: DetectFaceByFileIntlRequestBody): DetectFaceByFileIntlRequest {
        this['body'] = body;
        return this;
    }
}