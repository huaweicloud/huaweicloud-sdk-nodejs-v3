

export class ListSessionsRequest {
    public limit?: number;
    public offset?: number;
    private 'user_name'?: string;
    private 'query_begin_time'?: string;
    private 'query_end_time'?: string;
    private 'app_server_group_id'?: string;
    private 'vm_ip'?: string;
    private 'public_ip'?: string;
    private 'machine_name'?: string;
    private 'session_state'?: string;
    private 'is_success'?: string;
    public constructor(queryBeginTime?: string, queryEndTime?: string) { 
        this['query_begin_time'] = queryBeginTime;
        this['query_end_time'] = queryEndTime;
    }
    public withLimit(limit: number): ListSessionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSessionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withUserName(userName: string): ListSessionsRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withQueryBeginTime(queryBeginTime: string): ListSessionsRequest {
        this['query_begin_time'] = queryBeginTime;
        return this;
    }
    public set queryBeginTime(queryBeginTime: string  | undefined) {
        this['query_begin_time'] = queryBeginTime;
    }
    public get queryBeginTime(): string | undefined {
        return this['query_begin_time'];
    }
    public withQueryEndTime(queryEndTime: string): ListSessionsRequest {
        this['query_end_time'] = queryEndTime;
        return this;
    }
    public set queryEndTime(queryEndTime: string  | undefined) {
        this['query_end_time'] = queryEndTime;
    }
    public get queryEndTime(): string | undefined {
        return this['query_end_time'];
    }
    public withAppServerGroupId(appServerGroupId: string): ListSessionsRequest {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withVmIp(vmIp: string): ListSessionsRequest {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withPublicIp(publicIp: string): ListSessionsRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withMachineName(machineName: string): ListSessionsRequest {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withSessionState(sessionState: string): ListSessionsRequest {
        this['session_state'] = sessionState;
        return this;
    }
    public set sessionState(sessionState: string  | undefined) {
        this['session_state'] = sessionState;
    }
    public get sessionState(): string | undefined {
        return this['session_state'];
    }
    public withIsSuccess(isSuccess: string): ListSessionsRequest {
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