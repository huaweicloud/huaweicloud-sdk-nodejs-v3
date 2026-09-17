
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSqlLimitingSwitchNewResponse extends SdkResponse {
    private 'switch_on'?: string;
    public retry?: boolean;
    private 'error_msg'?: string;
    public status?: boolean;
    private 'detail_status'?: string;
    private 'fail_reason'?: string;
    private 'job_id'?: string;
    private 'job_status'?: string;
    public constructor() { 
        super();
    }
    public withSwitchOn(switchOn: string): SetSqlLimitingSwitchNewResponse {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: string  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): string | undefined {
        return this['switch_on'];
    }
    public withRetry(retry: boolean): SetSqlLimitingSwitchNewResponse {
        this['retry'] = retry;
        return this;
    }
    public withErrorMsg(errorMsg: string): SetSqlLimitingSwitchNewResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withStatus(status: boolean): SetSqlLimitingSwitchNewResponse {
        this['status'] = status;
        return this;
    }
    public withDetailStatus(detailStatus: string): SetSqlLimitingSwitchNewResponse {
        this['detail_status'] = detailStatus;
        return this;
    }
    public set detailStatus(detailStatus: string  | undefined) {
        this['detail_status'] = detailStatus;
    }
    public get detailStatus(): string | undefined {
        return this['detail_status'];
    }
    public withFailReason(failReason: string): SetSqlLimitingSwitchNewResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withJobId(jobId: string): SetSqlLimitingSwitchNewResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobStatus(jobStatus: string): SetSqlLimitingSwitchNewResponse {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): string | undefined {
        return this['job_status'];
    }
}