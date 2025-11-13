import { FirewallUpdateRuleOption } from './FirewallUpdateRuleOption';


export class UpdateFirewallRulesRequestBody {
    public firewall?: FirewallUpdateRuleOption;
    private 'dry_run'?: boolean;
    public constructor(firewall?: FirewallUpdateRuleOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: FirewallUpdateRuleOption): UpdateFirewallRulesRequestBody {
        this['firewall'] = firewall;
        return this;
    }
    public withDryRun(dryRun: boolean): UpdateFirewallRulesRequestBody {
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