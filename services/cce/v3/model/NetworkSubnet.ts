

export class NetworkSubnet {
    public subnetID?: string;
    public constructor(subnetID?: string) { 
        this['subnetID'] = subnetID;
    }
    public withSubnetID(subnetID: string): NetworkSubnet {
        this['subnetID'] = subnetID;
        return this;
    }
}