import { ObsBucket } from './ObsBucket';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllBucketsResponse extends SdkResponse {
    public buckets?: Array<ObsBucket>;
    public constructor() { 
        super();
    }
    public withBuckets(buckets: Array<ObsBucket>): ListAllBucketsResponse {
        this['buckets'] = buckets;
        return this;
    }
}