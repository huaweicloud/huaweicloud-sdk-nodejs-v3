import { ShowBucketReq } from './ShowBucketReq';


export class ShowBucketObjectsRequest {
    public body?: ShowBucketReq;
    public constructor() { 
    }
    public withBody(body: ShowBucketReq): ShowBucketObjectsRequest {
        this['body'] = body;
        return this;
    }
}