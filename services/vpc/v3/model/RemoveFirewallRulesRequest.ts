import { RemoveFirewallRulesRequestBody } from './RemoveFirewallRulesRequestBody';


export class RemoveFirewallRulesRequest {
    private 'firewall_id'?: string;
    public body?: RemoveFirewallRulesRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): RemoveFirewallRulesRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: RemoveFirewallRulesRequestBody): RemoveFirewallRulesRequest {
        this['body'] = body;
        return this;
    }
}