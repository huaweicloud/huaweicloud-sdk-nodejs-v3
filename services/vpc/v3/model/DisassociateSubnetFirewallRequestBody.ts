import { FirewallAssociation } from './FirewallAssociation';


export class DisassociateSubnetFirewallRequestBody {
    public subnets?: Array<FirewallAssociation>;
    public constructor(subnets?: Array<FirewallAssociation>) { 
        this['subnets'] = subnets;
    }
    public withSubnets(subnets: Array<FirewallAssociation>): DisassociateSubnetFirewallRequestBody {
        this['subnets'] = subnets;
        return this;
    }
}