
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddMetricDataResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): AddMetricDataResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): AddMetricDataResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
}