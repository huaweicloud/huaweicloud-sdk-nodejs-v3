

export class AppConnectionInfo {
    public id?: string;
    public sid?: string;
    private 'machine_name'?: string;
    private 'user_name'?: string;
    private 'app_group_name'?: string;
    private 'app_group_id'?: string;
    private 'app_name'?: string;
    private 'brokering_time'?: Date;
    private 'failed_code'?: string;
    private 'connection_failure_reason'?: string;
    private 'client_mac'?: string;
    private 'client_name'?: string;
    private 'client_ip'?: string;
    private 'client_version'?: string;
    private 'client_type'?: string;
    private 'agent_version'?: string;
    private 'vm_ip'?: string;
    private 'wi_ip'?: string;
    private 'tenant_id'?: string;
    private 'virtual_ip'?: string;
    private 'public_ip'?: string;
    private 'transaction_id'?: string;
    private 'end_time'?: Date;
    private 'aps_instance_id'?: string;
    private 'aps_instance_name'?: string;
    private 'aps_host_id'?: string;
    private 'primary_server_group_id'?: string;
    private 'secondary_server_group_id'?: string;
    public constructor() { 
    }
    public withId(id: string): AppConnectionInfo {
        this['id'] = id;
        return this;
    }
    public withSid(sid: string): AppConnectionInfo {
        this['sid'] = sid;
        return this;
    }
    public withMachineName(machineName: string): AppConnectionInfo {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withUserName(userName: string): AppConnectionInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAppGroupName(appGroupName: string): AppConnectionInfo {
        this['app_group_name'] = appGroupName;
        return this;
    }
    public set appGroupName(appGroupName: string  | undefined) {
        this['app_group_name'] = appGroupName;
    }
    public get appGroupName(): string | undefined {
        return this['app_group_name'];
    }
    public withAppGroupId(appGroupId: string): AppConnectionInfo {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAppName(appName: string): AppConnectionInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withBrokeringTime(brokeringTime: Date): AppConnectionInfo {
        this['brokering_time'] = brokeringTime;
        return this;
    }
    public set brokeringTime(brokeringTime: Date  | undefined) {
        this['brokering_time'] = brokeringTime;
    }
    public get brokeringTime(): Date | undefined {
        return this['brokering_time'];
    }
    public withFailedCode(failedCode: string): AppConnectionInfo {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withConnectionFailureReason(connectionFailureReason: string): AppConnectionInfo {
        this['connection_failure_reason'] = connectionFailureReason;
        return this;
    }
    public set connectionFailureReason(connectionFailureReason: string  | undefined) {
        this['connection_failure_reason'] = connectionFailureReason;
    }
    public get connectionFailureReason(): string | undefined {
        return this['connection_failure_reason'];
    }
    public withClientMac(clientMac: string): AppConnectionInfo {
        this['client_mac'] = clientMac;
        return this;
    }
    public set clientMac(clientMac: string  | undefined) {
        this['client_mac'] = clientMac;
    }
    public get clientMac(): string | undefined {
        return this['client_mac'];
    }
    public withClientName(clientName: string): AppConnectionInfo {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientIp(clientIp: string): AppConnectionInfo {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientVersion(clientVersion: string): AppConnectionInfo {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withClientType(clientType: string): AppConnectionInfo {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withAgentVersion(agentVersion: string): AppConnectionInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withVmIp(vmIp: string): AppConnectionInfo {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withWiIp(wiIp: string): AppConnectionInfo {
        this['wi_ip'] = wiIp;
        return this;
    }
    public set wiIp(wiIp: string  | undefined) {
        this['wi_ip'] = wiIp;
    }
    public get wiIp(): string | undefined {
        return this['wi_ip'];
    }
    public withTenantId(tenantId: string): AppConnectionInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withVirtualIp(virtualIp: string): AppConnectionInfo {
        this['virtual_ip'] = virtualIp;
        return this;
    }
    public set virtualIp(virtualIp: string  | undefined) {
        this['virtual_ip'] = virtualIp;
    }
    public get virtualIp(): string | undefined {
        return this['virtual_ip'];
    }
    public withPublicIp(publicIp: string): AppConnectionInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withTransactionId(transactionId: string): AppConnectionInfo {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
    public withEndTime(endTime: Date): AppConnectionInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withApsInstanceId(apsInstanceId: string): AppConnectionInfo {
        this['aps_instance_id'] = apsInstanceId;
        return this;
    }
    public set apsInstanceId(apsInstanceId: string  | undefined) {
        this['aps_instance_id'] = apsInstanceId;
    }
    public get apsInstanceId(): string | undefined {
        return this['aps_instance_id'];
    }
    public withApsInstanceName(apsInstanceName: string): AppConnectionInfo {
        this['aps_instance_name'] = apsInstanceName;
        return this;
    }
    public set apsInstanceName(apsInstanceName: string  | undefined) {
        this['aps_instance_name'] = apsInstanceName;
    }
    public get apsInstanceName(): string | undefined {
        return this['aps_instance_name'];
    }
    public withApsHostId(apsHostId: string): AppConnectionInfo {
        this['aps_host_id'] = apsHostId;
        return this;
    }
    public set apsHostId(apsHostId: string  | undefined) {
        this['aps_host_id'] = apsHostId;
    }
    public get apsHostId(): string | undefined {
        return this['aps_host_id'];
    }
    public withPrimaryServerGroupId(primaryServerGroupId: string): AppConnectionInfo {
        this['primary_server_group_id'] = primaryServerGroupId;
        return this;
    }
    public set primaryServerGroupId(primaryServerGroupId: string  | undefined) {
        this['primary_server_group_id'] = primaryServerGroupId;
    }
    public get primaryServerGroupId(): string | undefined {
        return this['primary_server_group_id'];
    }
    public withSecondaryServerGroupId(secondaryServerGroupId: string): AppConnectionInfo {
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