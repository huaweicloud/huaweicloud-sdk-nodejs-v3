import { LiveDetectFaceUrlReq } from './LiveDetectFaceUrlReq';


export class DetectLiveFaceByUrlRequest {
    public body?: LiveDetectFaceUrlReq;
    public constructor() { 
    }
    public withBody(body: LiveDetectFaceUrlReq): DetectLiveFaceByUrlRequest {
        this['body'] = body;
        return this;
    }
}