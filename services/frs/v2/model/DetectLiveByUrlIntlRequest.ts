import { LiveDetectUrlReq } from './LiveDetectUrlReq';


export class DetectLiveByUrlIntlRequest {
    public body?: LiveDetectUrlReq;
    public constructor() { 
    }
    public withBody(body: LiveDetectUrlReq): DetectLiveByUrlIntlRequest {
        this['body'] = body;
        return this;
    }
}