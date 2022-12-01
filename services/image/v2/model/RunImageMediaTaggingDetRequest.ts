import { ImageMediaTaggingDetReq } from './ImageMediaTaggingDetReq';


export class RunImageMediaTaggingDetRequest {
    public body?: ImageMediaTaggingDetReq;
    public constructor() { 
    }
    public withBody(body: ImageMediaTaggingDetReq): RunImageMediaTaggingDetRequest {
        this['body'] = body;
        return this;
    }
}