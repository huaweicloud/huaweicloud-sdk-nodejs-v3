import { NeutronFirewallRule } from './NeutronFirewallRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreateFirewallRuleResponse extends SdkResponse {
    private 'firewall_rule'?: NeutronFirewallRule | undefined;
    public constructor() { 
        super();
    }
    public withFirewallRule(firewallRule: NeutronFirewallRule): NeutronCreateFirewallRuleResponse {
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