import { LiveDetectUrlReq } from './LiveDetectUrlReq';


export class DetectLiveByUrlRequest {
    public body?: LiveDetectUrlReq;
    public constructor() { 
    }
    public withBody(body: LiveDetectUrlReq): DetectLiveByUrlRequest {
        this['body'] = body;
        return this;
    }
}