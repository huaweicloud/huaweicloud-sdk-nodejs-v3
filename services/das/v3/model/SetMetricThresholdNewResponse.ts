
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetMetricThresholdNewResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SetMetricThresholdNewResponse {
        this['success'] = success;
        return this;
    }
}