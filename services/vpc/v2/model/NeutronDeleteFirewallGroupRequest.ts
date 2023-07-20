

export class NeutronDeleteFirewallGroupRequest {
    private 'firewall_group_id'?: string;
    public constructor(firewallGroupId?: string) { 
        this['firewall_group_id'] = firewallGroupId;
    }
    public withFirewallGroupId(firewallGroupId: string): NeutronDeleteFirewallGroupRequest {
        this['firewall_group_id'] = firewallGroupId;
        return this;
    }
    public set firewallGroupId(firewallGroupId: string  | undefined) {
        this['firewall_group_id'] = firewallGroupId;
    }
    public get firewallGroupId(): string | undefined {
        return this['firewall_group_id'];
    }
}