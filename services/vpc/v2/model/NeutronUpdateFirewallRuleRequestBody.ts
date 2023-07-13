import { NeutronUpdateFirewallRuleOption } from './NeutronUpdateFirewallRuleOption';


export class NeutronUpdateFirewallRuleRequestBody {
    private 'firewall_rule': NeutronUpdateFirewallRuleOption | undefined;
    public constructor(firewallRule?: any) { 
        this['firewall_rule'] = firewallRule;
    }
    public withFirewallRule(firewallRule: NeutronUpdateFirewallRuleOption): NeutronUpdateFirewallRuleRequestBody {
        this['firewall_rule'] = firewallRule;
        return this;
    }
    public set firewallRule(firewallRule: NeutronUpdateFirewallRuleOption | undefined) {
        this['firewall_rule'] = firewallRule;
    }
    public get firewallRule() {
        return this['firewall_rule'];
    }
}