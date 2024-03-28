import { RegisterBucketRequestBody } from './RegisterBucketRequestBody';


export class RegisterBucketRequest {
    public body?: RegisterBucketRequestBody;
    public constructor() { 
    }
    public withBody(body: RegisterBucketRequestBody): RegisterBucketRequest {
        this['body'] = body;
        return this;
    }
}