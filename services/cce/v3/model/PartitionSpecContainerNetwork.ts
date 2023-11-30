

export class PartitionSpecContainerNetwork {
    public subnetID?: string;
    public constructor() { 
    }
    public withSubnetID(subnetID: string): PartitionSpecContainerNetwork {
        this['subnetID'] = subnetID;
        return this;
    }
}