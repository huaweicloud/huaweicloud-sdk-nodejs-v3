import { ListBucketsReq } from './ListBucketsReq';


export class ShowBucketListRequest {
    public body?: ListBucketsReq;
    public constructor() { 
    }
    public withBody(body: ListBucketsReq): ShowBucketListRequest {
        this['body'] = body;
        return this;
    }
}