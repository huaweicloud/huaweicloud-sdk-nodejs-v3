import { CheckpointCreate } from './CheckpointCreate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCheckpointResponse extends SdkResponse {
    public checkpoint?: CheckpointCreate;
    public constructor() { 
        super();
    }
    public withCheckpoint(checkpoint: CheckpointCreate): CreateCheckpointResponse {
        this['checkpoint'] = checkpoint;
        return this;
    }
}