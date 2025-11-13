import { FirewallAssociation } from './FirewallAssociation';


export class DisassociateSubnetFirewallRequestBody {
    public subnets?: Array<FirewallAssociation>;
    private 'dry_run'?: boolean;
    public constructor(subnets?: Array<FirewallAssociation>) { 
        this['subnets'] = subnets;
    }
    public withSubnets(subnets: Array<FirewallAssociation>): DisassociateSubnetFirewallRequestBody {
        this['subnets'] = subnets;
        return this;
    }
    public withDryRun(dryRun: boolean): DisassociateSubnetFirewallRequestBody {
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