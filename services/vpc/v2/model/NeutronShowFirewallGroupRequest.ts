

export class NeutronShowFirewallGroupRequest {
    private 'firewall_group_id': string | undefined;
    public constructor(firewallGroupId?: any) { 
        this['firewall_group_id'] = firewallGroupId;
    }
    public withFirewallGroupId(firewallGroupId: string): NeutronShowFirewallGroupRequest {
        this['firewall_group_id'] = firewallGroupId;
        return this;
    }
    public set firewallGroupId(firewallGroupId: string | undefined) {
        this['firewall_group_id'] = firewallGroupId;
    }
    public get firewallGroupId() {
        return this['firewall_group_id'];
    }
}