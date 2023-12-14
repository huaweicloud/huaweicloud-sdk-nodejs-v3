import { ResourceSummaryResponseItem } from './ResourceSummaryResponseItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectTrackedResourcesSummaryResponse extends SdkResponse {
    public body?: Array<ResourceSummaryResponseItem>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ResourceSummaryResponseItem>): CollectTrackedResourcesSummaryResponse {
        this['body'] = body;
        return this;
    }
}