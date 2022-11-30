import { NeutronFirewallRule } from './NeutronFirewallRule';
import { NeutronPageLink } from './NeutronPageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListFirewallRulesResponse extends SdkResponse {
    private 'firewall_rules'?: Array<NeutronFirewallRule> | undefined;
    private 'firewall_rules_links'?: Array<NeutronPageLink> | undefined;
    public constructor() { 
        super();
    }
    public withFirewallRules(firewallRules: Array<NeutronFirewallRule>): NeutronListFirewallRulesResponse {
        this['firewall_rules'] = firewallRules;
        return this;
    }
    public set firewallRules(firewallRules: Array<NeutronFirewallRule> | undefined) {
        this['firewall_rules'] = firewallRules;
    }
    public get firewallRules() {
        return this['firewall_rules'];
    }
    public withFirewallRulesLinks(firewallRulesLinks: Array<NeutronPageLink>): NeutronListFirewallRulesResponse {
        this['firewall_rules_links'] = firewallRulesLinks;
        return this;
    }
    public set firewallRulesLinks(firewallRulesLinks: Array<NeutronPageLink> | undefined) {
        this['firewall_rules_links'] = firewallRulesLinks;
    }
    public get firewallRulesLinks() {
        return this['firewall_rules_links'];
    }
}