
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableDataclassTypeResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: string;
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withCode(code: string): EnableDataclassTypeResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): EnableDataclassTypeResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: string): EnableDataclassTypeResponse {
        this['data'] = data;
        return this;
    }
    public withSuccess(success: boolean): EnableDataclassTypeResponse {
        this['success'] = success;
        return this;
    }
}