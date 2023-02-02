import { Stage } from './Stage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecretStageResponse extends SdkResponse {
    public stage?: Stage;
    public constructor() { 
        super();
    }
    public withStage(stage: Stage): ShowSecretStageResponse {
        this['stage'] = stage;
        return this;
    }
}