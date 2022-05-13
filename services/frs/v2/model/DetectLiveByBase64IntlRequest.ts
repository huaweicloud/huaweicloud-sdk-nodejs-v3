import { LiveDetectBase64Req } from './LiveDetectBase64Req';


export class DetectLiveByBase64IntlRequest {
    public body?: LiveDetectBase64Req;
    public constructor() { 
    }
    public withBody(body: LiveDetectBase64Req): DetectLiveByBase64IntlRequest {
        this['body'] = body;
        return this;
    }
}