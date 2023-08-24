import { FirewallRemoveRuleOption } from './FirewallRemoveRuleOption';


export class RemoveFirewallRulesRequestBody {
    public firewall?: FirewallRemoveRuleOption;
    public constructor(firewall?: FirewallRemoveRuleOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: FirewallRemoveRuleOption): RemoveFirewallRulesRequestBody {
        this['firewall'] = firewall;
        return this;
    }
}