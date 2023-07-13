import { NeutronCreateFirewallRuleOption } from './NeutronCreateFirewallRuleOption';


export class NeutronCreateFirewallRuleRequestBody {
    private 'firewall_rule': NeutronCreateFirewallRuleOption | undefined;
    public constructor(firewallRule?: any) { 
        this['firewall_rule'] = firewallRule;
    }
    public withFirewallRule(firewallRule: NeutronCreateFirewallRuleOption): NeutronCreateFirewallRuleRequestBody {
        this['firewall_rule'] = firewallRule;
        return this;
    }
    public set firewallRule(firewallRule: NeutronCreateFirewallRuleOption | undefined) {
        this['firewall_rule'] = firewallRule;
    }
    public get firewallRule() {
        return this['firewall_rule'];
    }
}