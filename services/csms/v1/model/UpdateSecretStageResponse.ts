import { Stage } from './Stage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecretStageResponse extends SdkResponse {
    public stage?: Stage;
    public constructor() { 
        super();
    }
    public withStage(stage: Stage): UpdateSecretStageResponse {
        this['stage'] = stage;
        return this;
    }
}