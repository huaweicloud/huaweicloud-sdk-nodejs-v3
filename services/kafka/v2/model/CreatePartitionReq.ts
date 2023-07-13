

export class CreatePartitionReq {
    public partition?: number;
    public constructor() { 
    }
    public withPartition(partition: number): CreatePartitionReq {
        this['partition'] = partition;
        return this;
    }
}