import { ImageSuperResolutionReq } from './ImageSuperResolutionReq';


export class RunImageSuperResolutionRequest {
    public body?: ImageSuperResolutionReq;
    public constructor() { 
    }
    public withBody(body: ImageSuperResolutionReq): RunImageSuperResolutionRequest {
        this['body'] = body;
        return this;
    }
}