

export class PartitionReqBodySpecHostNetwork {
    public subnetID?: string;
    public constructor() { 
    }
    public withSubnetID(subnetID: string): PartitionReqBodySpecHostNetwork {
        this['subnetID'] = subnetID;
        return this;
    }
}