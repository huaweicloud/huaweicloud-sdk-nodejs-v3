import { ResourceSummaryResponseItem } from './ResourceSummaryResponseItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectAllResourcesSummaryResponse extends SdkResponse {
    public body?: Array<ResourceSummaryResponseItem>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ResourceSummaryResponseItem>): CollectAllResourcesSummaryResponse {
        this['body'] = body;
        return this;
    }
}