import { CheckBucketRequest } from './CheckBucketRequest';


export class CheckObsBucketsRequestBody {
    public buckets?: Array<CheckBucketRequest>;
    public constructor() { 
    }
    public withBuckets(buckets: Array<CheckBucketRequest>): CheckObsBucketsRequestBody {
        this['buckets'] = buckets;
        return this;
    }
}