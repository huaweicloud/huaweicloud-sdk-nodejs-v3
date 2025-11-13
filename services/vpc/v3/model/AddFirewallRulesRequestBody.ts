import { FirewallInsertRuleOption } from './FirewallInsertRuleOption';


export class AddFirewallRulesRequestBody {
    public firewall?: FirewallInsertRuleOption;
    private 'dry_run'?: boolean;
    public constructor(firewall?: FirewallInsertRuleOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: FirewallInsertRuleOption): AddFirewallRulesRequestBody {
        this['firewall'] = firewall;
        return this;
    }
    public withDryRun(dryRun: boolean): AddFirewallRulesRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}