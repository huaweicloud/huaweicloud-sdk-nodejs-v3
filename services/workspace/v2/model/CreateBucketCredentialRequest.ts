import { CreateBucketCredentialReq } from './CreateBucketCredentialReq';


export class CreateBucketCredentialRequest {
    public body?: CreateBucketCredentialReq;
    public constructor() { 
    }
    public withBody(body: CreateBucketCredentialReq): CreateBucketCredentialRequest {
        this['body'] = body;
        return this;
    }
}