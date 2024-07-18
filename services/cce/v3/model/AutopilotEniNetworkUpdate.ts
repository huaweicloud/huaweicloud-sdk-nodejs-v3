import { AutopilotNetworkSubnet } from './AutopilotNetworkSubnet';


export class AutopilotEniNetworkUpdate {
    public subnets?: Array<AutopilotNetworkSubnet>;
    public constructor() { 
    }
    public withSubnets(subnets: Array<AutopilotNetworkSubnet>): AutopilotEniNetworkUpdate {
        this['subnets'] = subnets;
        return this;
    }
}