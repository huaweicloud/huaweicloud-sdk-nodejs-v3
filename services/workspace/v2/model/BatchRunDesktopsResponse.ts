import { BaseError } from './BaseError';
import { VmOperateResult } from './VmOperateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRunDesktopsResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'failed_operation_list'?: Array<VmOperateResult>;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): BatchRunDesktopsResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BatchRunDesktopsResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withFailedOperationList(failedOperationList: Array<VmOperateResult>): BatchRunDesktopsResponse {
        this['failed_operation_list'] = failedOperationList;
        return this;
    }
    public set failedOperationList(failedOperationList: Array<VmOperateResult>  | undefined) {
        this['failed_operation_list'] = failedOperationList;
    }
    public get failedOperationList(): Array<VmOperateResult> | undefined {
        return this['failed_operation_list'];
    }
    public withJobId(jobId: string): BatchRunDesktopsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}