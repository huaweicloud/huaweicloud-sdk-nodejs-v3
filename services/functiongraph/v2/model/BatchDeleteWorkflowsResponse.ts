import { OperateErrorInfo } from './OperateErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteWorkflowsResponse extends SdkResponse {
    public success?: Array<string>;
    public fail?: Array<OperateErrorInfo>;
    public constructor() { 
        super();
    }
    public withSuccess(success: Array<string>): BatchDeleteWorkflowsResponse {
        this['success'] = success;
        return this;
    }
    public withFail(fail: Array<OperateErrorInfo>): BatchDeleteWorkflowsResponse {
        this['fail'] = fail;
        return this;
    }
}