

export class PartitionOffsetEntity {
    public partition?: number;
    public offset?: number;
    public constructor() { 
    }
    public withPartition(partition: number): PartitionOffsetEntity {
        this['partition'] = partition;
        return this;
    }
    public withOffset(offset: number): PartitionOffsetEntity {
        this['offset'] = offset;
        return this;
    }
}