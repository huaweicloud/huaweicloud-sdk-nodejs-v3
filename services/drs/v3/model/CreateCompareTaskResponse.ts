import { CreateCompareTaskResult } from './CreateCompareTaskResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCompareTaskResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'object_level_compare_create_result'?: CreateCompareTaskResult | undefined;
    private 'data_level_compare_create_result'?: CreateCompareTaskResult | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateCompareTaskResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withObjectLevelCompareCreateResult(objectLevelCompareCreateResult: CreateCompareTaskResult): CreateCompareTaskResponse {
        this['object_level_compare_create_result'] = objectLevelCompareCreateResult;
        return this;
    }
    public set objectLevelCompareCreateResult(objectLevelCompareCreateResult: CreateCompareTaskResult | undefined) {
        this['object_level_compare_create_result'] = objectLevelCompareCreateResult;
    }
    public get objectLevelCompareCreateResult() {
        return this['object_level_compare_create_result'];
    }
    public withDataLevelCompareCreateResult(dataLevelCompareCreateResult: CreateCompareTaskResult): CreateCompareTaskResponse {
        this['data_level_compare_create_result'] = dataLevelCompareCreateResult;
        return this;
    }
    public set dataLevelCompareCreateResult(dataLevelCompareCreateResult: CreateCompareTaskResult | undefined) {
        this['data_level_compare_create_result'] = dataLevelCompareCreateResult;
    }
    public get dataLevelCompareCreateResult() {
        return this['data_level_compare_create_result'];
    }
    public withErrorCode(errorCode: string): CreateCompareTaskResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): CreateCompareTaskResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}