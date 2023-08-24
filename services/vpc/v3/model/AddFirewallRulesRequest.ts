import { AddFirewallRulesRequestBody } from './AddFirewallRulesRequestBody';


export class AddFirewallRulesRequest {
    private 'firewall_id'?: string;
    public body?: AddFirewallRulesRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): AddFirewallRulesRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: AddFirewallRulesRequestBody): AddFirewallRulesRequest {
        this['body'] = body;
        return this;
    }
}