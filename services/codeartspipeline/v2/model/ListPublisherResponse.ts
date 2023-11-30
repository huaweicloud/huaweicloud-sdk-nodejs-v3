import { PublisherVO } from './PublisherVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPublisherResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public total?: number;
    public data?: Array<PublisherVO>;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListPublisherResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPublisherResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListPublisherResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<PublisherVO>): ListPublisherResponse {
        this['data'] = data;
        return this;
    }
}