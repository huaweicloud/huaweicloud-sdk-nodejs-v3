import { CreateCompareTaskResult } from './CreateCompareTaskResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCompareTaskResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'object_level_compare_create_result'?: CreateCompareTaskResult;
    private 'data_level_compare_create_result'?: CreateCompareTaskResult;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateCompareTaskResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withObjectLevelCompareCreateResult(objectLevelCompareCreateResult: CreateCompareTaskResult): CreateCompareTaskResponse {
        this['object_level_compare_create_result'] = objectLevelCompareCreateResult;
        return this;
    }
    public set objectLevelCompareCreateResult(objectLevelCompareCreateResult: CreateCompareTaskResult  | undefined) {
        this['object_level_compare_create_result'] = objectLevelCompareCreateResult;
    }
    public get objectLevelCompareCreateResult(): CreateCompareTaskResult | undefined {
        return this['object_level_compare_create_result'];
    }
    public withDataLevelCompareCreateResult(dataLevelCompareCreateResult: CreateCompareTaskResult): CreateCompareTaskResponse {
        this['data_level_compare_create_result'] = dataLevelCompareCreateResult;
        return this;
    }
    public set dataLevelCompareCreateResult(dataLevelCompareCreateResult: CreateCompareTaskResult  | undefined) {
        this['data_level_compare_create_result'] = dataLevelCompareCreateResult;
    }
    public get dataLevelCompareCreateResult(): CreateCompareTaskResult | undefined {
        return this['data_level_compare_create_result'];
    }
    public withErrorCode(errorCode: string): CreateCompareTaskResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CreateCompareTaskResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}