import { ObsBucket } from './ObsBucket';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObsBucketsResponse extends SdkResponse {
    public count?: number;
    public buckets?: Array<ObsBucket>;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListObsBucketsResponse {
        this['count'] = count;
        return this;
    }
    public withBuckets(buckets: Array<ObsBucket>): ListObsBucketsResponse {
        this['buckets'] = buckets;
        return this;
    }
    public withXRequestId(xRequestId: string): ListObsBucketsResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}