

export class AppSession {
    public id?: string;
    private 'session_stamp'?: string;
    private 'os_session_id'?: string;
    private 'protocol_type'?: string;
    private 'login_user'?: string;
    private 'session_type'?: string;
    private 'app_group_id'?: string;
    private 'app_server_group_id'?: string;
    private 'pre_conn_time'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'status_continue_time'?: string;
    private 'machine_sid'?: string;
    private 'machine_name'?: string;
    private 'session_state'?: string;
    private 'app_name'?: string;
    private 'client_mac'?: string;
    private 'client_name'?: string;
    private 'client_ip'?: string;
    private 'public_ip'?: string;
    private 'client_version'?: string;
    private 'client_type'?: string;
    private 'agent_version'?: string;
    private 'vm_ip'?: string;
    private 'failed_reason'?: string;
    private 'failed_code'?: string;
    private 'last_update_status_time'?: string;
    private 'tenant_id'?: string;
    public constructor() { 
    }
    public withId(id: string): AppSession {
        this['id'] = id;
        return this;
    }
    public withSessionStamp(sessionStamp: string): AppSession {
        this['session_stamp'] = sessionStamp;
        return this;
    }
    public set sessionStamp(sessionStamp: string  | undefined) {
        this['session_stamp'] = sessionStamp;
    }
    public get sessionStamp(): string | undefined {
        return this['session_stamp'];
    }
    public withOsSessionId(osSessionId: string): AppSession {
        this['os_session_id'] = osSessionId;
        return this;
    }
    public set osSessionId(osSessionId: string  | undefined) {
        this['os_session_id'] = osSessionId;
    }
    public get osSessionId(): string | undefined {
        return this['os_session_id'];
    }
    public withProtocolType(protocolType: string): AppSession {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withLoginUser(loginUser: string): AppSession {
        this['login_user'] = loginUser;
        return this;
    }
    public set loginUser(loginUser: string  | undefined) {
        this['login_user'] = loginUser;
    }
    public get loginUser(): string | undefined {
        return this['login_user'];
    }
    public withSessionType(sessionType: string): AppSession {
        this['session_type'] = sessionType;
        return this;
    }
    public set sessionType(sessionType: string  | undefined) {
        this['session_type'] = sessionType;
    }
    public get sessionType(): string | undefined {
        return this['session_type'];
    }
    public withAppGroupId(appGroupId: string): AppSession {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAppServerGroupId(appServerGroupId: string): AppSession {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withPreConnTime(preConnTime: string): AppSession {
        this['pre_conn_time'] = preConnTime;
        return this;
    }
    public set preConnTime(preConnTime: string  | undefined) {
        this['pre_conn_time'] = preConnTime;
    }
    public get preConnTime(): string | undefined {
        return this['pre_conn_time'];
    }
    public withStartTime(startTime: string): AppSession {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): AppSession {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatusContinueTime(statusContinueTime: string): AppSession {
        this['status_continue_time'] = statusContinueTime;
        return this;
    }
    public set statusContinueTime(statusContinueTime: string  | undefined) {
        this['status_continue_time'] = statusContinueTime;
    }
    public get statusContinueTime(): string | undefined {
        return this['status_continue_time'];
    }
    public withMachineSid(machineSid: string): AppSession {
        this['machine_sid'] = machineSid;
        return this;
    }
    public set machineSid(machineSid: string  | undefined) {
        this['machine_sid'] = machineSid;
    }
    public get machineSid(): string | undefined {
        return this['machine_sid'];
    }
    public withMachineName(machineName: string): AppSession {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withSessionState(sessionState: string): AppSession {
        this['session_state'] = sessionState;
        return this;
    }
    public set sessionState(sessionState: string  | undefined) {
        this['session_state'] = sessionState;
    }
    public get sessionState(): string | undefined {
        return this['session_state'];
    }
    public withAppName(appName: string): AppSession {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withClientMac(clientMac: string): AppSession {
        this['client_mac'] = clientMac;
        return this;
    }
    public set clientMac(clientMac: string  | undefined) {
        this['client_mac'] = clientMac;
    }
    public get clientMac(): string | undefined {
        return this['client_mac'];
    }
    public withClientName(clientName: string): AppSession {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientIp(clientIp: string): AppSession {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withPublicIp(publicIp: string): AppSession {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withClientVersion(clientVersion: string): AppSession {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withClientType(clientType: string): AppSession {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withAgentVersion(agentVersion: string): AppSession {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withVmIp(vmIp: string): AppSession {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withFailedReason(failedReason: string): AppSession {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedCode(failedCode: string): AppSession {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withLastUpdateStatusTime(lastUpdateStatusTime: string): AppSession {
        this['last_update_status_time'] = lastUpdateStatusTime;
        return this;
    }
    public set lastUpdateStatusTime(lastUpdateStatusTime: string  | undefined) {
        this['last_update_status_time'] = lastUpdateStatusTime;
    }
    public get lastUpdateStatusTime(): string | undefined {
        return this['last_update_status_time'];
    }
    public withTenantId(tenantId: string): AppSession {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}