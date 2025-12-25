import { BatchOperateBaselineResult } from './BatchOperateBaselineResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCustomizedCheckitemsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: BatchOperateBaselineResult;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteCustomizedCheckitemsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteCustomizedCheckitemsResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: BatchOperateBaselineResult): DeleteCustomizedCheckitemsResponse {
        this['data'] = data;
        return this;
    }
}