import { BucketBean } from './BucketBean';


export class BucketsRequest {
    public buckets?: Array<BucketBean>;
    public constructor() { 
    }
    public withBuckets(buckets: Array<BucketBean>): BucketsRequest {
        this['buckets'] = buckets;
        return this;
    }
}