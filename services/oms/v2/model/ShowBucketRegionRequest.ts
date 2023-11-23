import { ShowBucketRegionReq } from './ShowBucketRegionReq';


export class ShowBucketRegionRequest {
    public body?: ShowBucketRegionReq;
    public constructor() { 
    }
    public withBody(body: ShowBucketRegionReq): ShowBucketRegionRequest {
        this['body'] = body;
        return this;
    }
}