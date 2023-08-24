import { CreateFirewallOption } from './CreateFirewallOption';


export class CreateFirewallRequestBody {
    public firewall?: CreateFirewallOption;
    private 'dry_run'?: boolean;
    public constructor(firewall?: CreateFirewallOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: CreateFirewallOption): CreateFirewallRequestBody {
        this['firewall'] = firewall;
        return this;
    }
    public withDryRun(dryRun: boolean): CreateFirewallRequestBody {
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