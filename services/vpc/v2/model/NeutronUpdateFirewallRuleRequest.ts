import { NeutronUpdateFirewallRuleRequestBody } from './NeutronUpdateFirewallRuleRequestBody';


export class NeutronUpdateFirewallRuleRequest {
    private 'firewall_rule_id'?: string;
    public body?: NeutronUpdateFirewallRuleRequestBody;
    public constructor(firewallRuleId?: string) { 
        this['firewall_rule_id'] = firewallRuleId;
    }
    public withFirewallRuleId(firewallRuleId: string): NeutronUpdateFirewallRuleRequest {
        this['firewall_rule_id'] = firewallRuleId;
        return this;
    }
    public set firewallRuleId(firewallRuleId: string  | undefined) {
        this['firewall_rule_id'] = firewallRuleId;
    }
    public get firewallRuleId(): string | undefined {
        return this['firewall_rule_id'];
    }
    public withBody(body: NeutronUpdateFirewallRuleRequestBody): NeutronUpdateFirewallRuleRequest {
        this['body'] = body;
        return this;
    }
}