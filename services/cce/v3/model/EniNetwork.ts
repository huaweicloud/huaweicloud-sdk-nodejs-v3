import { NetworkSubnet } from './NetworkSubnet';


export class EniNetwork {
    public eniSubnetId: string;
    public eniSubnetCIDR: string;
    public subnets: Array<NetworkSubnet>;
    public constructor(eniSubnetId?: any, eniSubnetCIDR?: any, subnets?: any) { 
        this['eniSubnetId'] = eniSubnetId;
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        this['subnets'] = subnets;
    }
    public withEniSubnetId(eniSubnetId: string): EniNetwork {
        this['eniSubnetId'] = eniSubnetId;
        return this;
    }
    public withEniSubnetCIDR(eniSubnetCIDR: string): EniNetwork {
        this['eniSubnetCIDR'] = eniSubnetCIDR;
        return this;
    }
    public withSubnets(subnets: Array<NetworkSubnet>): EniNetwork {
        this['subnets'] = subnets;
        return this;
    }
}