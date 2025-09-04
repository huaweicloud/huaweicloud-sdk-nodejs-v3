

export class ExportSessionsReq {
    private 'user_name'?: string;
    private 'query_begin_time'?: Date;
    private 'query_end_time'?: Date;
    private 'app_server_group_id'?: string;
    private 'vm_ip'?: string;
    private 'public_ip'?: string;
    private 'machine_name'?: string;
    private 'session_state'?: string;
    private 'is_success'?: string;
    public constructor() { 
    }
    public withUserName(userName: string): ExportSessionsReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withQueryBeginTime(queryBeginTime: Date): ExportSessionsReq {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: Date  | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime(): Date | undefined {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: Date): ExportSessionsReq {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: Date  | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime(): Date | undefined {
        return this['query_end_time'];
    }
    public withAppServerGroupId(appServerGroupId: string): ExportSessionsReq {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withVmIp(vmIp: string): ExportSessionsReq {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withPublicIp(publicIp: string): ExportSessionsReq {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withMachineName(machineName: string): ExportSessionsReq {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withSessionState(sessionState: string): ExportSessionsReq {
        this['session_state'] = sessionState;
        return this;
    }
    public set sessionState(sessionState: string  | undefined) {
        this['session_state'] = sessionState;
    }
    public get sessionState(): string | undefined {
        return this['session_state'];
    }
    public withIsSuccess(isSuccess: string): ExportSessionsReq {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
}