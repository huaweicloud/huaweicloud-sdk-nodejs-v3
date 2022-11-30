import { ImageTaggingReq } from './ImageTaggingReq';


export class RunImageTaggingRequest {
    public body?: ImageTaggingReq;
    public constructor() { 
    }
    public withBody(body: ImageTaggingReq): RunImageTaggingRequest {
        this['body'] = body;
        return this;
    }
}