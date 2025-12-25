import { BatchOperateResourceResult } from './BatchOperateResourceResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteResourceResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: BatchOperateResourceResult;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteResourceResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): DeleteResourceResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: BatchOperateResourceResult): DeleteResourceResponse {
        this['data'] = data;
        return this;
    }
}