
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeCloudPhoneServerResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'server_id'?: string;
    private 'job_id'?: string;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ChangeCloudPhoneServerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withServerId(serverId: string): ChangeCloudPhoneServerResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withJobId(jobId: string): ChangeCloudPhoneServerResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withErrorMsg(errorMsg: string): ChangeCloudPhoneServerResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): ChangeCloudPhoneServerResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}