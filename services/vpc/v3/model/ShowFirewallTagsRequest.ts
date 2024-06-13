

export class ShowFirewallTagsRequest {
    private 'firewall_id'?: string;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): ShowFirewallTagsRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
}