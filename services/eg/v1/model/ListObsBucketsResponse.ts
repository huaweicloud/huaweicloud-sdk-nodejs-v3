import { ObsBucketInfo } from './ObsBucketInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObsBucketsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<ObsBucketInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListObsBucketsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListObsBucketsResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<ObsBucketInfo>): ListObsBucketsResponse {
        this['items'] = items;
        return this;
    }
}