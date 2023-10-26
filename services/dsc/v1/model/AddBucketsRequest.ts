import { BucketsRequest } from './BucketsRequest';


export class AddBucketsRequest {
    public type?: string;
    public body?: BucketsRequest;
    public constructor() { 
    }
    public withType(type: string): AddBucketsRequest {
        this['type'] = type;
        return this;
    }
    public withBody(body: BucketsRequest): AddBucketsRequest {
        this['body'] = body;
        return this;
    }
}