import { ObsBucketEntity } from './ObsBucketEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObsBucketsResponse extends SdkResponse {
    public body?: Array<ObsBucketEntity>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ObsBucketEntity>): ListObsBucketsResponse {
        this['body'] = body;
        return this;
    }
}