import { NeutronUpdateFirewallRuleOption } from './NeutronUpdateFirewallRuleOption';


export class NeutronUpdateFirewallRuleRequestBody {
    private 'firewall_rule'?: NeutronUpdateFirewallRuleOption;
    public constructor(firewallRule?: NeutronUpdateFirewallRuleOption) { 
        this['firewall_rule'] = firewallRule;
    }
    public withFirewallRule(firewallRule: NeutronUpdateFirewallRuleOption): NeutronUpdateFirewallRuleRequestBody {
        this['firewall_rule'] = firewallRule;
        return this;
    }
    public set firewallRule(firewallRule: NeutronUpdateFirewallRuleOption  | undefined) {
        this['firewall_rule'] = firewallRule;
    }
    public get firewallRule(): NeutronUpdateFirewallRuleOption | undefined {
        return this['firewall_rule'];
    }
}