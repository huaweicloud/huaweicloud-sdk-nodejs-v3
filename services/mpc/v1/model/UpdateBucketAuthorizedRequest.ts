import { BucketAuthorizedReq } from './BucketAuthorizedReq';


export class UpdateBucketAuthorizedRequest {
    public body?: BucketAuthorizedReq;
    public constructor() { 
    }
    public withBody(body: BucketAuthorizedReq): UpdateBucketAuthorizedRequest {
        this['body'] = body;
        return this;
    }
}