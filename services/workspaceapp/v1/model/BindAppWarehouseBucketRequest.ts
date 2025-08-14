import { BucketNameReq } from './BucketNameReq';


export class BindAppWarehouseBucketRequest {
    public body?: BucketNameReq;
    public constructor() { 
    }
    public withBody(body: BucketNameReq): BindAppWarehouseBucketRequest {
        this['body'] = body;
        return this;
    }
}