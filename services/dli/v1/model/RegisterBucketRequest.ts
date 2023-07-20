import { ObsBuckets } from './ObsBuckets';


export class RegisterBucketRequest {
    public body?: ObsBuckets;
    public constructor() { 
    }
    public withBody(body: ObsBuckets): RegisterBucketRequest {
        this['body'] = body;
        return this;
    }
}