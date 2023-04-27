import { CheckpointReplicateRespBody } from './CheckpointReplicateRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyCheckpointResponse extends SdkResponse {
    public replication?: CheckpointReplicateRespBody;
    public constructor() { 
        super();
    }
    public withReplication(replication: CheckpointReplicateRespBody): CopyCheckpointResponse {
        this['replication'] = replication;
        return this;
    }
}