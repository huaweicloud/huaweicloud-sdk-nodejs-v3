

export class ResetReplicaReqPartitions {
    public partition?: number;
    public replicas?: Array<number>;
    public constructor() { 
    }
    public withPartition(partition: number): ResetReplicaReqPartitions {
        this['partition'] = partition;
        return this;
    }
    public withReplicas(replicas: Array<number>): ResetReplicaReqPartitions {
        this['replicas'] = replicas;
        return this;
    }
}