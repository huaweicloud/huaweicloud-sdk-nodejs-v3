
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePoliciesResponse extends SdkResponse {
    public code?: string;
    public data?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeletePoliciesResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: string): DeletePoliciesResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeletePoliciesResponse {
        this['message'] = message;
        return this;
    }
}