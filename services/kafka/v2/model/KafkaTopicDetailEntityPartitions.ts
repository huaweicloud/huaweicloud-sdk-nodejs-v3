

export class KafkaTopicDetailEntityPartitions {
    public partition?: number;
    public leader?: number;
    public replicas?: Array<number>;
    public constructor() { 
    }
    public withPartition(partition: number): KafkaTopicDetailEntityPartitions {
        this['partition'] = partition;
        return this;
    }
    public withLeader(leader: number): KafkaTopicDetailEntityPartitions {
        this['leader'] = leader;
        return this;
    }
    public withReplicas(replicas: Array<number>): KafkaTopicDetailEntityPartitions {
        this['replicas'] = replicas;
        return this;
    }
}