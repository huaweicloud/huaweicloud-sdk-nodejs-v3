

export class ShowKafkaTopicDetailResponsePartitions {
    public partition?: number;
    public leader?: number;
    public replicas?: Array<number>;
    public constructor() { 
    }
    public withPartition(partition: number): ShowKafkaTopicDetailResponsePartitions {
        this['partition'] = partition;
        return this;
    }
    public withLeader(leader: number): ShowKafkaTopicDetailResponsePartitions {
        this['leader'] = leader;
        return this;
    }
    public withReplicas(replicas: Array<number>): ShowKafkaTopicDetailResponsePartitions {
        this['replicas'] = replicas;
        return this;
    }
}