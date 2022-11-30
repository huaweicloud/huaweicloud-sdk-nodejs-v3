import { NeutronFirewallRule } from './NeutronFirewallRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdateFirewallRuleResponse extends SdkResponse {
    private 'firewall_rule'?: NeutronFirewallRule | undefined;
    public constructor() { 
        super();
    }
    public withFirewallRule(firewallRule: NeutronFirewallRule): NeutronUpdateFirewallRuleResponse {
        this['firewall_rule'] = firewallRule;
        return this;
    }
    public set firewallRule(firewallRule: NeutronFirewallRule | undefined) {
        this['firewall_rule'] = firewallRule;
    }
    public get firewallRule() {
        return this['firewall_rule'];
    }
}