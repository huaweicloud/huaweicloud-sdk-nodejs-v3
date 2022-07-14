import { ImageMainObjectDetectionReq } from './ImageMainObjectDetectionReq';


export class RunImageMainObjectDetectionRequest {
    public body?: ImageMainObjectDetectionReq;
    public constructor() { 
    }
    public withBody(body: ImageMainObjectDetectionReq): RunImageMainObjectDetectionRequest {
        this['body'] = body;
        return this;
    }
}