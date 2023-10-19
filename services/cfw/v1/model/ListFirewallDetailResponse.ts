import { GetFirewallInstanceData } from './GetFirewallInstanceData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallDetailResponse extends SdkResponse {
    public data?: GetFirewallInstanceData;
    public constructor() { 
        super();
    }
    public withData(data: GetFirewallInstanceData): ListFirewallDetailResponse {
        this['data'] = data;
        return this;
    }
}