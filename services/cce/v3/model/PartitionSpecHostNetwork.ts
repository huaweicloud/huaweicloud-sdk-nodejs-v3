

export class PartitionSpecHostNetwork {
    public subnetID?: string;
    public constructor() { 
    }
    public withSubnetID(subnetID: string): PartitionSpecHostNetwork {
        this['subnetID'] = subnetID;
        return this;
    }
}