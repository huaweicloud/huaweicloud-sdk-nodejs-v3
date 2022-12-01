import { GetFirewallInstanceResponseData } from './GetFirewallInstanceResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallUsingGetResponse extends SdkResponse {
    public data?: GetFirewallInstanceResponseData;
    public constructor() { 
        super();
    }
    public withData(data: GetFirewallInstanceResponseData): ListFirewallUsingGetResponse {
        this['data'] = data;
        return this;
    }
}