import { UpdateFirewallRequestBody } from './UpdateFirewallRequestBody';


export class UpdateFirewallRequest {
    private 'firewall_id'?: string;
    public body?: UpdateFirewallRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): UpdateFirewallRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: UpdateFirewallRequestBody): UpdateFirewallRequest {
        this['body'] = body;
        return this;
    }
}