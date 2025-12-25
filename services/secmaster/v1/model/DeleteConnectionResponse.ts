
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteConnectionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteConnectionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteConnectionResponse {
        this['message'] = message;
        return this;
    }
}