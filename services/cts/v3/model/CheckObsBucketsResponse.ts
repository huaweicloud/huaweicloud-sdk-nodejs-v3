import { Bucket } from './Bucket';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckObsBucketsResponse extends SdkResponse {
    public buckets?: Array<Bucket>;
    public constructor() { 
        super();
    }
    public withBuckets(buckets: Array<Bucket>): CheckObsBucketsResponse {
        this['buckets'] = buckets;
        return this;
    }
}