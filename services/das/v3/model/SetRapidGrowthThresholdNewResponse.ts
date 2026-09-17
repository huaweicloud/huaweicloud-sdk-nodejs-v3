
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetRapidGrowthThresholdNewResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SetRapidGrowthThresholdNewResponse {
        this['success'] = success;
        return this;
    }
}