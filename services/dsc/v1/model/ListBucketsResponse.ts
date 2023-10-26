import { Bucket } from './Bucket';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBucketsResponse extends SdkResponse {
    public buckets?: Array<Bucket>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withBuckets(buckets: Array<Bucket>): ListBucketsResponse {
        this['buckets'] = buckets;
        return this;
    }
    public withTotal(total: number): ListBucketsResponse {
        this['total'] = total;
        return this;
    }
}