import { LiveDetectBase64Req } from './LiveDetectBase64Req';


export class DetectLiveByBase64Request {
    public body?: LiveDetectBase64Req;
    public constructor() { 
    }
    public withBody(body: LiveDetectBase64Req): DetectLiveByBase64Request {
        this['body'] = body;
        return this;
    }
}