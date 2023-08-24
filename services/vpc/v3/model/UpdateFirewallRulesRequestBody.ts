import { FirewallUpdateRuleOption } from './FirewallUpdateRuleOption';


export class UpdateFirewallRulesRequestBody {
    public firewall?: FirewallUpdateRuleOption;
    public constructor(firewall?: FirewallUpdateRuleOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: FirewallUpdateRuleOption): UpdateFirewallRulesRequestBody {
        this['firewall'] = firewall;
        return this;
    }
}