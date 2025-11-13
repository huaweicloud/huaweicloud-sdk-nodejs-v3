import { FirewallRemoveRuleOption } from './FirewallRemoveRuleOption';


export class RemoveFirewallRulesRequestBody {
    public firewall?: FirewallRemoveRuleOption;
    private 'dry_run'?: boolean;
    public constructor(firewall?: FirewallRemoveRuleOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: FirewallRemoveRuleOption): RemoveFirewallRulesRequestBody {
        this['firewall'] = firewall;
        return this;
    }
    public withDryRun(dryRun: boolean): RemoveFirewallRulesRequestBody {
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