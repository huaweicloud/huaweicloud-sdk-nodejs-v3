import { AutopilotNetworkSubnet } from './AutopilotNetworkSubnet';


export class AutopilotEniNetwork {
    public subnets?: Array<AutopilotNetworkSubnet>;
    public constructor(subnets?: Array<AutopilotNetworkSubnet>) { 
        this['subnets'] = subnets;
    }
    public withSubnets(subnets: Array<AutopilotNetworkSubnet>): AutopilotEniNetwork {
        this['subnets'] = subnets;
        return this;
    }
}