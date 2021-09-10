import { ImageDetectionReq } from './ImageDetectionReq';


export class RunImageModerationRequest {
    public body?: ImageDetectionReq;
    public constructor() { 
    }
    public withBody(body: ImageDetectionReq): RunImageModerationRequest {
        this['body'] = body;
        return this;
    }
}