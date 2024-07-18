

export class AutopilotNetworkSubnet {
    public subnetID?: string;
    public constructor(subnetID?: string) { 
        this['subnetID'] = subnetID;
    }
    public withSubnetID(subnetID: string): AutopilotNetworkSubnet {
        this['subnetID'] = subnetID;
        return this;
    }
}