

export class DeleteFirewallTagRequest {
    private 'firewall_id'?: string;
    private 'tag_key'?: string;
    public constructor(firewallId?: string, tagKey?: string) { 
        this['firewall_id'] = firewallId;
        this['tag_key'] = tagKey;
    }
    public withFirewallId(firewallId: string): DeleteFirewallTagRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withTagKey(tagKey: string): DeleteFirewallTagRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
}