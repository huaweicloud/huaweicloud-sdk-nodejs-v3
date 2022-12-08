import { GetFirewallInstanceData } from './GetFirewallInstanceData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallUsingGetResponse extends SdkResponse {
    public data?: GetFirewallInstanceData;
    public constructor() { 
        super();
    }
    public withData(data: GetFirewallInstanceData): ListFirewallUsingGetResponse {
        this['data'] = data;
        return this;
    }
}