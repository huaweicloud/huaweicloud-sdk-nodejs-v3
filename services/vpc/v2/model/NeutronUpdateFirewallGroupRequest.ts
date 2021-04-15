import { NeutronUpdateFirewallGroupRequestBody } from './NeutronUpdateFirewallGroupRequestBody';


export class NeutronUpdateFirewallGroupRequest {
    private 'firewall_group_id': string | undefined;
    public body?: NeutronUpdateFirewallGroupRequestBody;
    public constructor(firewallGroupId?: any) { 
        this['firewall_group_id'] = firewallGroupId;
    }
    public withFirewallGroupId(firewallGroupId: string): NeutronUpdateFirewallGroupRequest {
        this['firewall_group_id'] = firewallGroupId;
        return this;
    }
    public set firewallGroupId(firewallGroupId: string | undefined) {
        this['firewall_group_id'] = firewallGroupId;
    }
    public get firewallGroupId() {
        return this['firewall_group_id'];
    }
    public withBody(body: NeutronUpdateFirewallGroupRequestBody): NeutronUpdateFirewallGroupRequest {
        this['body'] = body;
        return this;
    }
}