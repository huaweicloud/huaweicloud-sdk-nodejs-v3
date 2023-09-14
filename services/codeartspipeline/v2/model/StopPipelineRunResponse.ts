
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopPipelineRunResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): StopPipelineRunResponse {
        this['success'] = success;
        return this;
    }
}