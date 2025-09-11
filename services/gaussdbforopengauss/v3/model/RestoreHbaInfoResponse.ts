
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreHbaInfoResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): RestoreHbaInfoResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): RestoreHbaInfoResponse {
        this['message'] = message;
        return this;
    }
}