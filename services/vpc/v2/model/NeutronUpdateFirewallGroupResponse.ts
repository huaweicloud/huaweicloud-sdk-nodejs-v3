import { NeutronFirewallGroup } from './NeutronFirewallGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateFirewallGroupResponse extends SdkResponse {
    private 'firewall_group'?: NeutronFirewallGroup | undefined;
    public constructor() { 
        super();
    }
    public withFirewallGroup(firewallGroup: NeutronFirewallGroup): NeutronUpdateFirewallGroupResponse {
        this['firewall_group'] = firewallGroup;
        return this;
    }
    public set firewallGroup(firewallGroup: NeutronFirewallGroup | undefined) {
        this['firewall_group'] = firewallGroup;
    }
    public get firewallGroup() {
        return this['firewall_group'];
    }
}