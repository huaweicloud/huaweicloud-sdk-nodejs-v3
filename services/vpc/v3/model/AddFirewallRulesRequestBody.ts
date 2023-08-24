import { FirewallInsertRuleOption } from './FirewallInsertRuleOption';


export class AddFirewallRulesRequestBody {
    public firewall?: FirewallInsertRuleOption;
    public constructor(firewall?: FirewallInsertRuleOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: FirewallInsertRuleOption): AddFirewallRulesRequestBody {
        this['firewall'] = firewall;
        return this;
    }
}