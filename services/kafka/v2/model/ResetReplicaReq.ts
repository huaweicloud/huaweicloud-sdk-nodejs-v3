import { ResetReplicaReqPartitions } from './ResetReplicaReqPartitions';


export class ResetReplicaReq {
    public partitions?: Array<ResetReplicaReqPartitions>;
    public constructor() { 
    }
    public withPartitions(partitions: Array<ResetReplicaReqPartitions>): ResetReplicaReq {
        this['partitions'] = partitions;
        return this;
    }
}