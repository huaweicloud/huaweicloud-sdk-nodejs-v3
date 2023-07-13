import { CheckpointCreate } from './CheckpointCreate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCheckpointResponse extends SdkResponse {
    public checkpoint?: CheckpointCreate;
    public constructor() { 
        super();
    }
    public withCheckpoint(checkpoint: CheckpointCreate): ShowCheckpointResponse {
        this['checkpoint'] = checkpoint;
        return this;
    }
}