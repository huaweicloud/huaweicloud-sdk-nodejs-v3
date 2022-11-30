import { ImageDetectionReq } from './ImageDetectionReq';


export class CheckImageModerationRequest {
    public body?: ImageDetectionReq;
    public constructor() { 
    }
    public withBody(body: ImageDetectionReq): CheckImageModerationRequest {
        this['body'] = body;
        return this;
    }
}