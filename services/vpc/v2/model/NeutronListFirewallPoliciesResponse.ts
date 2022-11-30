import { NeutronFirewallPolicy } from './NeutronFirewallPolicy';
import { NeutronPageLink } from './NeutronPageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListFirewallPoliciesResponse extends SdkResponse {
    private 'firewall_policies'?: Array<NeutronFirewallPolicy> | undefined;
    private 'firewall_policies_links'?: Array<NeutronPageLink> | undefined;
    public constructor() { 
        super();
    }
    public withFirewallPolicies(firewallPolicies: Array<NeutronFirewallPolicy>): NeutronListFirewallPoliciesResponse {
        this['firewall_policies'] = firewallPolicies;
        return this;
    }
    public set firewallPolicies(firewallPolicies: Array<NeutronFirewallPolicy> | undefined) {
        this['firewall_policies'] = firewallPolicies;
    }
    public get firewallPolicies() {
        return this['firewall_policies'];
    }
    public withFirewallPoliciesLinks(firewallPoliciesLinks: Array<NeutronPageLink>): NeutronListFirewallPoliciesResponse {
        this['firewall_policies_links'] = firewallPoliciesLinks;
        return this;
    }
    public set firewallPoliciesLinks(firewallPoliciesLinks: Array<NeutronPageLink> | undefined) {
        this['firewall_policies_links'] = firewallPoliciesLinks;
    }
    public get firewallPoliciesLinks() {
        return this['firewall_policies_links'];
    }
}