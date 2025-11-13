import { UpdateFirewallOption } from './UpdateFirewallOption';


export class UpdateFirewallRequestBody {
    public firewall?: UpdateFirewallOption;
    private 'dry_run'?: boolean;
    public constructor(firewall?: UpdateFirewallOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: UpdateFirewallOption): UpdateFirewallRequestBody {
        this['firewall'] = firewall;
        return this;
    }
    public withDryRun(dryRun: boolean): UpdateFirewallRequestBody {
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