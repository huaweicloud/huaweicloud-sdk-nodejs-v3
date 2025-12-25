
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCustomizedCompliancePackageResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateCustomizedCompliancePackageResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateCustomizedCompliancePackageResponse {
        this['message'] = message;
        return this;
    }
}