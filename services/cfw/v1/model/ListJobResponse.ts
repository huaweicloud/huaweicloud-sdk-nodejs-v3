import { GetCreateFirewallJobResponseData } from './GetCreateFirewallJobResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobResponse extends SdkResponse {
    public data?: GetCreateFirewallJobResponseData;
    public constructor() { 
        super();
    }
    public withData(data: GetCreateFirewallJobResponseData): ListJobResponse {
        this['data'] = data;
        return this;
    }
}