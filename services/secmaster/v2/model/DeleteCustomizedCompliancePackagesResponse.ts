import { BatchOperateBaselineResult } from './BatchOperateBaselineResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCustomizedCompliancePackagesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: BatchOperateBaselineResult;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteCustomizedCompliancePackagesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteCustomizedCompliancePackagesResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: BatchOperateBaselineResult): DeleteCustomizedCompliancePackagesResponse {
        this['data'] = data;
        return this;
    }
}