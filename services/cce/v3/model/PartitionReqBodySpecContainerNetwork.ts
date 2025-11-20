

export class PartitionReqBodySpecContainerNetwork {
    public subnetID?: string;
    public constructor() { 
    }
    public withSubnetID(subnetID: string): PartitionReqBodySpecContainerNetwork {
        this['subnetID'] = subnetID;
        return this;
    }
}