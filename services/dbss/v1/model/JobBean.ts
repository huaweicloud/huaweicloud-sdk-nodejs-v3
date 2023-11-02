

export class JobBean {
    private 'job_id'?: string;
    public status?: string;
    private 'job_type'?: string;
    private 'server_id'?: string;
    private 'server_name'?: string;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'charge_mode'?: string;
    private 'error_code'?: string;
    private 'fail_reason'?: string;
    private 'ha_id'?: string;
    private 'ha_name'?: string;
    public constructor(jobId?: string, status?: string, jobType?: string, serverId?: string, serverName?: string, beginTime?: number, endTime?: number, chargeMode?: string) { 
        this['job_id'] = jobId;
        this['status'] = status;
        this['job_type'] = jobType;
        this['server_id'] = serverId;
        this['server_name'] = serverName;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
        this['charge_mode'] = chargeMode;
    }
    public withJobId(jobId: string): JobBean {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): JobBean {
        this['status'] = status;
        return this;
    }
    public withJobType(jobType: string): JobBean {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withServerId(serverId: string): JobBean {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerName(serverName: string): JobBean {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withBeginTime(beginTime: number): JobBean {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): JobBean {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withChargeMode(chargeMode: string): JobBean {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withErrorCode(errorCode: string): JobBean {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withFailReason(failReason: string): JobBean {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withHaId(haId: string): JobBean {
        this['ha_id'] = haId;
        return this;
    }
    public set haId(haId: string  | undefined) {
        this['ha_id'] = haId;
    }
    public get haId(): string | undefined {
        return this['ha_id'];
    }
    public withHaName(haName: string): JobBean {
        this['ha_name'] = haName;
        return this;
    }
    public set haName(haName: string  | undefined) {
        this['ha_name'] = haName;
    }
    public get haName(): string | undefined {
        return this['ha_name'];
    }
}