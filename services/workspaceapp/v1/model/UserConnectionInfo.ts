

export class UserConnectionInfo {
    public id?: string;
    private 'connect_type'?: string;
    private 'user_name'?: string;
    private 'desktop_group_name'?: string;
    private 'pre_conn_time'?: Date;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    private 'machine_sid'?: string;
    private 'machine_name'?: string;
    private 'failed_reason'?: string;
    private 'failed_code'?: string;
    private 'client_mac'?: string;
    private 'client_name'?: string;
    private 'client_ip'?: string;
    private 'client_version'?: string;
    private 'client_type'?: string;
    private 'agent_version'?: string;
    private 'vm_ip'?: string;
    private 'connect_flag'?: string;
    private 'wi_ip'?: string;
    private 'update_time'?: Date;
    private 'tenant_id'?: string;
    private 'virtual_ip'?: string;
    private 'public_ip'?: string;
    public constructor() { 
    }
    public withId(id: string): UserConnectionInfo {
        this['id'] = id;
        return this;
    }
    public withConnectType(connectType: string): UserConnectionInfo {
        this['connect_type'] = connectType;
        return this;
    }
    public set connectType(connectType: string  | undefined) {
        this['connect_type'] = connectType;
    }
    public get connectType(): string | undefined {
        return this['connect_type'];
    }
    public withUserName(userName: string): UserConnectionInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDesktopGroupName(desktopGroupName: string): UserConnectionInfo {
        this['desktop_group_name'] = desktopGroupName;
        return this;
    }
    public set desktopGroupName(desktopGroupName: string  | undefined) {
        this['desktop_group_name'] = desktopGroupName;
    }
    public get desktopGroupName(): string | undefined {
        return this['desktop_group_name'];
    }
    public withPreConnTime(preConnTime: Date): UserConnectionInfo {
        this['pre_conn_time'] = preConnTime;
        return this;
    }
    public set preConnTime(preConnTime: Date  | undefined) {
        this['pre_conn_time'] = preConnTime;
    }
    public get preConnTime(): Date | undefined {
        return this['pre_conn_time'];
    }
    public withStartTime(startTime: Date): UserConnectionInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): UserConnectionInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withMachineSid(machineSid: string): UserConnectionInfo {
        this['machine_sid'] = machineSid;
        return this;
    }
    public set machineSid(machineSid: string  | undefined) {
        this['machine_sid'] = machineSid;
    }
    public get machineSid(): string | undefined {
        return this['machine_sid'];
    }
    public withMachineName(machineName: string): UserConnectionInfo {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withFailedReason(failedReason: string): UserConnectionInfo {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedCode(failedCode: string): UserConnectionInfo {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withClientMac(clientMac: string): UserConnectionInfo {
        this['client_mac'] = clientMac;
        return this;
    }
    public set clientMac(clientMac: string  | undefined) {
        this['client_mac'] = clientMac;
    }
    public get clientMac(): string | undefined {
        return this['client_mac'];
    }
    public withClientName(clientName: string): UserConnectionInfo {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientIp(clientIp: string): UserConnectionInfo {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientVersion(clientVersion: string): UserConnectionInfo {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withClientType(clientType: string): UserConnectionInfo {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withAgentVersion(agentVersion: string): UserConnectionInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withVmIp(vmIp: string): UserConnectionInfo {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withConnectFlag(connectFlag: string): UserConnectionInfo {
        this['connect_flag'] = connectFlag;
        return this;
    }
    public set connectFlag(connectFlag: string  | undefined) {
        this['connect_flag'] = connectFlag;
    }
    public get connectFlag(): string | undefined {
        return this['connect_flag'];
    }
    public withWiIp(wiIp: string): UserConnectionInfo {
        this['wi_ip'] = wiIp;
        return this;
    }
    public set wiIp(wiIp: string  | undefined) {
        this['wi_ip'] = wiIp;
    }
    public get wiIp(): string | undefined {
        return this['wi_ip'];
    }
    public withUpdateTime(updateTime: Date): UserConnectionInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withTenantId(tenantId: string): UserConnectionInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withVirtualIp(virtualIp: string): UserConnectionInfo {
        this['virtual_ip'] = virtualIp;
        return this;
    }
    public set virtualIp(virtualIp: string  | undefined) {
        this['virtual_ip'] = virtualIp;
    }
    public get virtualIp(): string | undefined {
        return this['virtual_ip'];
    }
    public withPublicIp(publicIp: string): UserConnectionInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
}