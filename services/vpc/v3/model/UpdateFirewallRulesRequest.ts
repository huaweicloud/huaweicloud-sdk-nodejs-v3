import { UpdateFirewallRulesRequestBody } from './UpdateFirewallRulesRequestBody';


export class UpdateFirewallRulesRequest {
    private 'firewall_id'?: string;
    public body?: UpdateFirewallRulesRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): UpdateFirewallRulesRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: UpdateFirewallRulesRequestBody): UpdateFirewallRulesRequest {
        this['body'] = body;
        return this;
    }
}