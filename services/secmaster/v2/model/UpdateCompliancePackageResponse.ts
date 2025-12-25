
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCompliancePackageResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateCompliancePackageResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateCompliancePackageResponse {
        this['message'] = message;
        return this;
    }
}