import { ShowClusterRespClusterBrokers } from './ShowClusterRespClusterBrokers';


export class ShowClusterRespCluster {
    public controller?: string;
    public brokers?: Array<ShowClusterRespClusterBrokers>;
    private 'topics_count'?: number | undefined;
    private 'partitions_count'?: number | undefined;
    private 'online_partitions_count'?: number | undefined;
    private 'replicas_count'?: number | undefined;
    private 'isr_replicas_count'?: number | undefined;
    private 'consumers_count'?: number | undefined;
    public constructor() { 
    }
    public withController(controller: string): ShowClusterRespCluster {
        this['controller'] = controller;
        return this;
    }
    public withBrokers(brokers: Array<ShowClusterRespClusterBrokers>): ShowClusterRespCluster {
        this['brokers'] = brokers;
        return this;
    }
    public withTopicsCount(topicsCount: number): ShowClusterRespCluster {
        this['topics_count'] = topicsCount;
        return this;
    }
    public set topicsCount(topicsCount: number | undefined) {
        this['topics_count'] = topicsCount;
    }
    public get topicsCount() {
        return this['topics_count'];
    }
    public withPartitionsCount(partitionsCount: number): ShowClusterRespCluster {
        this['partitions_count'] = partitionsCount;
        return this;
    }
    public set partitionsCount(partitionsCount: number | undefined) {
        this['partitions_count'] = partitionsCount;
    }
    public get partitionsCount() {
        return this['partitions_count'];
    }
    public withOnlinePartitionsCount(onlinePartitionsCount: number): ShowClusterRespCluster {
        this['online_partitions_count'] = onlinePartitionsCount;
        return this;
    }
    public set onlinePartitionsCount(onlinePartitionsCount: number | undefined) {
        this['online_partitions_count'] = onlinePartitionsCount;
    }
    public get onlinePartitionsCount() {
        return this['online_partitions_count'];
    }
    public withReplicasCount(replicasCount: number): ShowClusterRespCluster {
        this['replicas_count'] = replicasCount;
        return this;
    }
    public set replicasCount(replicasCount: number | undefined) {
        this['replicas_count'] = replicasCount;
    }
    public get replicasCount() {
        return this['replicas_count'];
    }
    public withIsrReplicasCount(isrReplicasCount: number): ShowClusterRespCluster {
        this['isr_replicas_count'] = isrReplicasCount;
        return this;
    }
    public set isrReplicasCount(isrReplicasCount: number | undefined) {
        this['isr_replicas_count'] = isrReplicasCount;
    }
    public get isrReplicasCount() {
        return this['isr_replicas_count'];
    }
    public withConsumersCount(consumersCount: number): ShowClusterRespCluster {
        this['consumers_count'] = consumersCount;
        return this;
    }
    public set consumersCount(consumersCount: number | undefined) {
        this['consumers_count'] = consumersCount;
    }
    public get consumersCount() {
        return this['consumers_count'];
    }
}