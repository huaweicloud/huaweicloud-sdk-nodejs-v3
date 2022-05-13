import { DetectLiveByFileIntlRequestBody } from './DetectLiveByFileIntlRequestBody';


export class DetectLiveByFileIntlRequest {
    public body?: DetectLiveByFileIntlRequestBody;
    public constructor() { 
    }
    public withBody(body: DetectLiveByFileIntlRequestBody): DetectLiveByFileIntlRequest {
        this['body'] = body;
        return this;
    }
}