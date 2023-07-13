import { ImageMediaTaggingReq } from './ImageMediaTaggingReq';


export class RunImageMediaTaggingRequest {
    public body?: ImageMediaTaggingReq;
    public constructor() { 
    }
    public withBody(body: ImageMediaTaggingReq): RunImageMediaTaggingRequest {
        this['body'] = body;
        return this;
    }
}