import { NeutronCreateFirewallRuleOption } from './NeutronCreateFirewallRuleOption';


export class NeutronCreateFirewallRuleRequestBody {
    private 'firewall_rule'?: NeutronCreateFirewallRuleOption;
    public constructor(firewallRule?: NeutronCreateFirewallRuleOption) { 
        this['firewall_rule'] = firewallRule;
    }
    public withFirewallRule(firewallRule: NeutronCreateFirewallRuleOption): NeutronCreateFirewallRuleRequestBody {
        this['firewall_rule'] = firewallRule;
        return this;
    }
    public set firewallRule(firewallRule: NeutronCreateFirewallRuleOption  | undefined) {
        this['firewall_rule'] = firewallRule;
    }
    public get firewallRule(): NeutronCreateFirewallRuleOption | undefined {
        return this['firewall_rule'];
    }
}