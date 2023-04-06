import { HostOverviewResponse } from './HostOverviewResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostOverviewResponse extends SdkResponse {
    public body?: Array<HostOverviewResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<HostOverviewResponse>): ListHostOverviewResponse {
        this['body'] = body;
        return this;
    }
}