import { BaseResponse } from './BaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRebuildDesktopsSystemDiskResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'error_detail'?: string;
    private 'encoded_authorization_message'?: string;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): BatchRebuildDesktopsSystemDiskResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): BatchRebuildDesktopsSystemDiskResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorDetail(errorDetail: string): BatchRebuildDesktopsSystemDiskResponse {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): BatchRebuildDesktopsSystemDiskResponse {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
    public withJobId(jobId: string): BatchRebuildDesktopsSystemDiskResponse {
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