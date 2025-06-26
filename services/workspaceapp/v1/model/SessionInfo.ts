

export class SessionInfo {
    public id?: string;
    private 'session_stamp'?: string;
    private 'os_session_id'?: string;
    private 'protocol_type'?: string;
    private 'login_user'?: string;
    private 'session_type'?: string;
    private 'app_server_group_id'?: string;
    private 'app_server_group_name'?: string;
    private 'pre_conn_time'?: Date;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
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
    private 'last_update_status_time'?: Date;
    private 'tenant_id'?: string;
    private 'primary_server_group_id'?: string;
    private 'secondary_server_group_id'?: string;
    public constructor() { 
    }
    public withId(id: string): SessionInfo {
        this['id'] = id;
        return this;
    }
    public withSessionStamp(sessionStamp: string): SessionInfo {
        this['session_stamp'] = sessionStamp;
        return this;
    }
    public set sessionStamp(sessionStamp: string  | undefined) {
        this['session_stamp'] = sessionStamp;
    }
    public get sessionStamp(): string | undefined {
        return this['session_stamp'];
    }
    public withOsSessionId(osSessionId: string): SessionInfo {
        this['os_session_id'] = osSessionId;
        return this;
    }
    public set osSessionId(osSessionId: string  | undefined) {
        this['os_session_id'] = osSessionId;
    }
    public get osSessionId(): string | undefined {
        return this['os_session_id'];
    }
    public withProtocolType(protocolType: string): SessionInfo {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withLoginUser(loginUser: string): SessionInfo {
        this['login_user'] = loginUser;
        return this;
    }
    public set loginUser(loginUser: string  | undefined) {
        this['login_user'] = loginUser;
    }
    public get loginUser(): string | undefined {
        return this['login_user'];
    }
    public withSessionType(sessionType: string): SessionInfo {
        this['session_type'] = sessionType;
        return this;
    }
    public set sessionType(sessionType: string  | undefined) {
        this['session_type'] = sessionType;
    }
    public get sessionType(): string | undefined {
        return this['session_type'];
    }
    public withAppServerGroupId(appServerGroupId: string): SessionInfo {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withAppServerGroupName(appServerGroupName: string): SessionInfo {
        this['app_server_group_name'] = appServerGroupName;
        return this;
    }
    public set appServerGroupName(appServerGroupName: string  | undefined) {
        this['app_server_group_name'] = appServerGroupName;
    }
    public get appServerGroupName(): string | undefined {
        return this['app_server_group_name'];
    }
    public withPreConnTime(preConnTime: Date): SessionInfo {
        this['pre_conn_time'] = preConnTime;
        return this;
    }
    public set preConnTime(preConnTime: Date  | undefined) {
        this['pre_conn_time'] = preConnTime;
    }
    public get preConnTime(): Date | undefined {
        return this['pre_conn_time'];
    }
    public withStartTime(startTime: Date): SessionInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): SessionInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withStatusContinueTime(statusContinueTime: string): SessionInfo {
        this['status_continue_time'] = statusContinueTime;
        return this;
    }
    public set statusContinueTime(statusContinueTime: string  | undefined) {
        this['status_continue_time'] = statusContinueTime;
    }
    public get statusContinueTime(): string | undefined {
        return this['status_continue_time'];
    }
    public withMachineSid(machineSid: string): SessionInfo {
        this['machine_sid'] = machineSid;
        return this;
    }
    public set machineSid(machineSid: string  | undefined) {
        this['machine_sid'] = machineSid;
    }
    public get machineSid(): string | undefined {
        return this['machine_sid'];
    }
    public withMachineName(machineName: string): SessionInfo {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withSessionState(sessionState: string): SessionInfo {
        this['session_state'] = sessionState;
        return this;
    }
    public set sessionState(sessionState: string  | undefined) {
        this['session_state'] = sessionState;
    }
    public get sessionState(): string | undefined {
        return this['session_state'];
    }
    public withAppName(appName: string): SessionInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withClientMac(clientMac: string): SessionInfo {
        this['client_mac'] = clientMac;
        return this;
    }
    public set clientMac(clientMac: string  | undefined) {
        this['client_mac'] = clientMac;
    }
    public get clientMac(): string | undefined {
        return this['client_mac'];
    }
    public withClientName(clientName: string): SessionInfo {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientIp(clientIp: string): SessionInfo {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withPublicIp(publicIp: string): SessionInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withClientVersion(clientVersion: string): SessionInfo {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withClientType(clientType: string): SessionInfo {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withAgentVersion(agentVersion: string): SessionInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withVmIp(vmIp: string): SessionInfo {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withFailedReason(failedReason: string): SessionInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedCode(failedCode: string): SessionInfo {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withLastUpdateStatusTime(lastUpdateStatusTime: Date): SessionInfo {
        this['last_update_status_time'] = lastUpdateStatusTime;
        return this;
    }
    public set lastUpdateStatusTime(lastUpdateStatusTime: Date  | undefined) {
        this['last_update_status_time'] = lastUpdateStatusTime;
    }
    public get lastUpdateStatusTime(): Date | undefined {
        return this['last_update_status_time'];
    }
    public withTenantId(tenantId: string): SessionInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withPrimaryServerGroupId(primaryServerGroupId: string): SessionInfo {
        this['primary_server_group_id'] = primaryServerGroupId;
        return this;
    }
    public set primaryServerGroupId(primaryServerGroupId: string  | undefined) {
        this['primary_server_group_id'] = primaryServerGroupId;
    }
    public get primaryServerGroupId(): string | undefined {
        return this['primary_server_group_id'];
    }
    public withSecondaryServerGroupId(secondaryServerGroupId: string): SessionInfo {
        this['secondary_server_group_id'] = secondaryServerGroupId;
        return this;
    }
    public set secondaryServerGroupId(secondaryServerGroupId: string  | undefined) {
        this['secondary_server_group_id'] = secondaryServerGroupId;
    }
    public get secondaryServerGroupId(): string | undefined {
        return this['secondary_server_group_id'];
    }
}