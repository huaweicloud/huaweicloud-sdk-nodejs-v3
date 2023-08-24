import { FirewallAssociation } from './FirewallAssociation';


export class AssociateSubnetFirewallRequestBody {
    public subnets?: Array<FirewallAssociation>;
    public constructor(subnets?: Array<FirewallAssociation>) { 
        this['subnets'] = subnets;
    }
    public withSubnets(subnets: Array<FirewallAssociation>): AssociateSubnetFirewallRequestBody {
        this['subnets'] = subnets;
        return this;
    }
}