
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'job_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: number;
    private 'phone_id'?: string;
    private 'server_id'?: string;
    private 'error_msg'?: string;
    private 'error_code'?: string;
    private 'execute_msg'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withJobId(jobId: string): ShowJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBeginTime(beginTime: string): ShowJobResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowJobResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: number): ShowJobResponse {
        this['status'] = status;
        return this;
    }
    public withPhoneId(phoneId: string): ShowJobResponse {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withServerId(serverId: string): ShowJobResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withErrorMsg(errorMsg: string): ShowJobResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorCode(errorCode: string): ShowJobResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withExecuteMsg(executeMsg: string): ShowJobResponse {
        this['execute_msg'] = executeMsg;
        return this;
    }
    public set executeMsg(executeMsg: string  | undefined) {
        this['execute_msg'] = executeMsg;
    }
    public get executeMsg(): string | undefined {
        return this['execute_msg'];
    }
}