import { CheckpointReplicateParam } from './CheckpointReplicateParam';


export class CheckpointReplicateReq {
    public replicate?: CheckpointReplicateParam;
    public constructor(replicate?: CheckpointReplicateParam) { 
        this['replicate'] = replicate;
    }
    public withReplicate(replicate: CheckpointReplicateParam): CheckpointReplicateReq {
        this['replicate'] = replicate;
        return this;
    }
}