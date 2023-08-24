import { FirewallDetail } from './FirewallDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddFirewallRulesResponse extends SdkResponse {
    public firewall?: FirewallDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withFirewall(firewall: FirewallDetail): AddFirewallRulesResponse {
        this['firewall'] = firewall;
        return this;
    }
    public withRequestId(requestId: string): AddFirewallRulesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}