

export class ListAppConnectionReq {
    public id?: string;
    public sid?: string;
    private 'machine_name'?: string;
    private 'user_name'?: string;
    private 'app_group_name'?: string;
    private 'app_group_id'?: string;
    private 'app_name'?: string;
    private 'failed_code'?: string;
    private 'connection_failure_reason'?: string;
    private 'client_name'?: string;
    private 'client_version'?: string;
    private 'client_type'?: string;
    private 'agent_version'?: string;
    private 'vm_ip'?: string;
    private 'wi_ip'?: string;
    private 'public_ip'?: string;
    private 'tenant_id'?: string;
    private 'brokering_start_time'?: Date;
    private 'brokering_end_time'?: Date;
    private 'virtual_ip'?: string;
    public constructor() { 
    }
    public withId(id: string): ListAppConnectionReq {
        this['id'] = id;
        return this;
    }
    public withSid(sid: string): ListAppConnectionReq {
        this['sid'] = sid;
        return this;
    }
    public withMachineName(machineName: string): ListAppConnectionReq {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withUserName(userName: string): ListAppConnectionReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAppGroupName(appGroupName: string): ListAppConnectionReq {
        this['app_group_name'] = appGroupName;
        return this;
    }
    public set appGroupName(appGroupName: string  | undefined) {
        this['app_group_name'] = appGroupName;
    }
    public get appGroupName(): string | undefined {
        return this['app_group_name'];
    }
    public withAppGroupId(appGroupId: string): ListAppConnectionReq {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAppName(appName: string): ListAppConnectionReq {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withFailedCode(failedCode: string): ListAppConnectionReq {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withConnectionFailureReason(connectionFailureReason: string): ListAppConnectionReq {
        this['connection_failure_reason'] = connectionFailureReason;
        return this;
    }
    public set connectionFailureReason(connectionFailureReason: string  | undefined) {
        this['connection_failure_reason'] = connectionFailureReason;
    }
    public get connectionFailureReason(): string | undefined {
        return this['connection_failure_reason'];
    }
    public withClientName(clientName: string): ListAppConnectionReq {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientVersion(clientVersion: string): ListAppConnectionReq {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withClientType(clientType: string): ListAppConnectionReq {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withAgentVersion(agentVersion: string): ListAppConnectionReq {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withVmIp(vmIp: string): ListAppConnectionReq {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withWiIp(wiIp: string): ListAppConnectionReq {
        this['wi_ip'] = wiIp;
        return this;
    }
    public set wiIp(wiIp: string  | undefined) {
        this['wi_ip'] = wiIp;
    }
    public get wiIp(): string | undefined {
        return this['wi_ip'];
    }
    public withPublicIp(publicIp: string): ListAppConnectionReq {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withTenantId(tenantId: string): ListAppConnectionReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withBrokeringStartTime(brokeringStartTime: Date): ListAppConnectionReq {
        this['brokering_start_time'] = brokeringStartTime;
        return this;
    }
    public set brokeringStartTime(brokeringStartTime: Date  | undefined) {
        this['brokering_start_time'] = brokeringStartTime;
    }
    public get brokeringStartTime(): Date | undefined {
        return this['brokering_start_time'];
    }
    public withBrokeringEndTime(brokeringEndTime: Date): ListAppConnectionReq {
        this['brokering_end_time'] = brokeringEndTime;
        return this;
    }
    public set brokeringEndTime(brokeringEndTime: Date  | undefined) {
        this['brokering_end_time'] = brokeringEndTime;
    }
    public get brokeringEndTime(): Date | undefined {
        return this['brokering_end_time'];
    }
    public withVirtualIp(virtualIp: string): ListAppConnectionReq {
        this['virtual_ip'] = virtualIp;
        return this;
    }
    public set virtualIp(virtualIp: string  | undefined) {
        this['virtual_ip'] = virtualIp;
    }
    public get virtualIp(): string | undefined {
        return this['virtual_ip'];
    }
}