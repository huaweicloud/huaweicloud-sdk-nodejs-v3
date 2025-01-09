import { BaseResponse } from './BaseResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRebuildDesktopsSystemDiskResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'encoded_authorization_message'?: string;
    private 'job_id'?: string;
    private 'get_job_endpoint'?: string;
    private 'max_provision_time'?: number;
    private 'min_provision_time'?: number;
    private 'periodic_query_time'?: number;
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
    public withGetJobEndpoint(getJobEndpoint: string): BatchRebuildDesktopsSystemDiskResponse {
        this['get_job_endpoint'] = getJobEndpoint;
        return this;
    }
    public set getJobEndpoint(getJobEndpoint: string  | undefined) {
        this['get_job_endpoint'] = getJobEndpoint;
    }
    public get getJobEndpoint(): string | undefined {
        return this['get_job_endpoint'];
    }
    public withMaxProvisionTime(maxProvisionTime: number): BatchRebuildDesktopsSystemDiskResponse {
        this['max_provision_time'] = maxProvisionTime;
        return this;
    }
    public set maxProvisionTime(maxProvisionTime: number  | undefined) {
        this['max_provision_time'] = maxProvisionTime;
    }
    public get maxProvisionTime(): number | undefined {
        return this['max_provision_time'];
    }
    public withMinProvisionTime(minProvisionTime: number): BatchRebuildDesktopsSystemDiskResponse {
        this['min_provision_time'] = minProvisionTime;
        return this;
    }
    public set minProvisionTime(minProvisionTime: number  | undefined) {
        this['min_provision_time'] = minProvisionTime;
    }
    public get minProvisionTime(): number | undefined {
        return this['min_provision_time'];
    }
    public withPeriodicQueryTime(periodicQueryTime: number): BatchRebuildDesktopsSystemDiskResponse {
        this['periodic_query_time'] = periodicQueryTime;
        return this;
    }
    public set periodicQueryTime(periodicQueryTime: number  | undefined) {
        this['periodic_query_time'] = periodicQueryTime;
    }
    public get periodicQueryTime(): number | undefined {
        return this['periodic_query_time'];
    }
}