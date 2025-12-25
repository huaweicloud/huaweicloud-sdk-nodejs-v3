
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCheckitemResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateCheckitemResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateCheckitemResponse {
        this['message'] = message;
        return this;
    }
}