import { CheckpointReplicateReq } from './CheckpointReplicateReq';


export class CopyCheckpointRequest {
    public body?: CheckpointReplicateReq;
    public constructor() { 
    }
    public withBody(body: CheckpointReplicateReq): CopyCheckpointRequest {
        this['body'] = body;
        return this;
    }
}