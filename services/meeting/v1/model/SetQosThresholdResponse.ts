
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetQosThresholdResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): SetQosThresholdResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): SetQosThresholdResponse {
        this['message'] = message;
        return this;
    }
}