import { ShowInstanceTopicDetailRespReplicas } from './ShowInstanceTopicDetailRespReplicas';


export class ShowInstanceTopicDetailRespPartitions {
    public partition?: number;
    public leader?: number;
    public leo?: number;
    public hw?: number;
    public lso?: number;
    private 'last_update_timestamp'?: number;
    public replicas?: Array<ShowInstanceTopicDetailRespReplicas>;
    public constructor() { 
    }
    public withPartition(partition: number): ShowInstanceTopicDetailRespPartitions {
        this['partition'] = partition;
        return this;
    }
    public withLeader(leader: number): ShowInstanceTopicDetailRespPartitions {
        this['leader'] = leader;
        return this;
    }
    public withLeo(leo: number): ShowInstanceTopicDetailRespPartitions {
        this['leo'] = leo;
        return this;
    }
    public withHw(hw: number): ShowInstanceTopicDetailRespPartitions {
        this['hw'] = hw;
        return this;
    }
    public withLso(lso: number): ShowInstanceTopicDetailRespPartitions {
        this['lso'] = lso;
        return this;
    }
    public withLastUpdateTimestamp(lastUpdateTimestamp: number): ShowInstanceTopicDetailRespPartitions {
        this['last_update_timestamp'] = lastUpdateTimestamp;
        return this;
    }
    public set lastUpdateTimestamp(lastUpdateTimestamp: number  | undefined) {
        this['last_update_timestamp'] = lastUpdateTimestamp;
    }
    public get lastUpdateTimestamp(): number | undefined {
        return this['last_update_timestamp'];
    }
    public withReplicas(replicas: Array<ShowInstanceTopicDetailRespReplicas>): ShowInstanceTopicDetailRespPartitions {
        this['replicas'] = replicas;
        return this;
    }
}