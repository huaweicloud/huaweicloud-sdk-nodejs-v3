import { NetworkSubnet } from './NetworkSubnet';


export class EniNetworkUpdate {
    public subnets?: Array<NetworkSubnet>;
    public constructor() { 
    }
    public withSubnets(subnets: Array<NetworkSubnet>): EniNetworkUpdate {
        this['subnets'] = subnets;
        return this;
    }
}