import { NeutronFirewallGroup } from './NeutronFirewallGroup';
import { NeutronPageLink } from './NeutronPageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListFirewallGroupsResponse extends SdkResponse {
    private 'firewall_groups'?: Array<NeutronFirewallGroup>;
    private 'firewall_groups_links'?: Array<NeutronPageLink>;
    public constructor() { 
        super();
    }
    public withFirewallGroups(firewallGroups: Array<NeutronFirewallGroup>): NeutronListFirewallGroupsResponse {
        this['firewall_groups'] = firewallGroups;
        return this;
    }
    public set firewallGroups(firewallGroups: Array<NeutronFirewallGroup>  | undefined) {
        this['firewall_groups'] = firewallGroups;
    }
    public get firewallGroups(): Array<NeutronFirewallGroup> | undefined {
        return this['firewall_groups'];
    }
    public withFirewallGroupsLinks(firewallGroupsLinks: Array<NeutronPageLink>): NeutronListFirewallGroupsResponse {
        this['firewall_groups_links'] = firewallGroupsLinks;
        return this;
    }
    public set firewallGroupsLinks(firewallGroupsLinks: Array<NeutronPageLink>  | undefined) {
        this['firewall_groups_links'] = firewallGroupsLinks;
    }
    public get firewallGroupsLinks(): Array<NeutronPageLink> | undefined {
        return this['firewall_groups_links'];
    }
}