

export class TopicAssignment {
    public partition?: number;
    private 'partition_brokers'?: Array<number>;
    public constructor() { 
    }
    public withPartition(partition: number): TopicAssignment {
        this['partition'] = partition;
        return this;
    }
    public withPartitionBrokers(partitionBrokers: Array<number>): TopicAssignment {
        this['partition_brokers'] = partitionBrokers;
        return this;
    }
    public set partitionBrokers(partitionBrokers: Array<number>  | undefined) {
        this['partition_brokers'] = partitionBrokers;
    }
    public get partitionBrokers(): Array<number> | undefined {
        return this['partition_brokers'];
    }
}