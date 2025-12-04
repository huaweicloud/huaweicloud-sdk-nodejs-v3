

export class Job {
    private 'phone_id'?: string;
    private 'server_id'?: string;
    private 'node_id'?: string;
    private 'job_id'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public status?: number;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'execute_msg'?: string;
    public constructor() { 
    }
    public withPhoneId(phoneId: string): Job {
        this['phone_id'] = phoneId;
        return this;
    }
    public set phoneId(phoneId: string  | undefined) {
        this['phone_id'] = phoneId;
    }
    public get phoneId(): string | undefined {
        return this['phone_id'];
    }
    public withServerId(serverId: string): Job {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNodeId(nodeId: string): Job {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withJobId(jobId: string): Job {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBeginTime(beginTime: string): Job {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): Job {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: number): Job {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): Job {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): Job {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withExecuteMsg(executeMsg: string): Job {
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