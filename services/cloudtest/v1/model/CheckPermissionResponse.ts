
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckPermissionResponse extends SdkResponse {
    public code?: string;
    public data?: { [key: string]: boolean; };
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CheckPermissionResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: { [key: string]: boolean; }): CheckPermissionResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): CheckPermissionResponse {
        this['message'] = message;
        return this;
    }
}