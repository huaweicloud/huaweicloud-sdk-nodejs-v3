

export class ListUserConnectionReq {
    public id?: string;
    private 'connect_type'?: string;
    private 'user_name'?: string;
    private 'machine_sid'?: string;
    private 'machine_name'?: string;
    private 'failed_reason'?: string;
    private 'failed_code'?: string;
    private 'client_name'?: string;
    private 'client_version'?: string;
    private 'client_type'?: string;
    private 'agent_version'?: string;
    private 'vm_ip'?: string;
    private 'connect_flag'?: string;
    private 'wi_ip'?: string;
    private 'public_ip'?: string;
    private 'update_time'?: Date;
    private 'tenant_id'?: string;
    private 'login_start_time'?: Date;
    private 'login_end_time'?: Date;
    private 'virtual_ip'?: string;
    public constructor() { 
    }
    public withId(id: string): ListUserConnectionReq {
        this['id'] = id;
        return this;
    }
    public withConnectType(connectType: string): ListUserConnectionReq {
        this['connect_type'] = connectType;
        return this;
    }
    public set connectType(connectType: string  | undefined) {
        this['connect_type'] = connectType;
    }
    public get connectType(): string | undefined {
        return this['connect_type'];
    }
    public withUserName(userName: string): ListUserConnectionReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withMachineSid(machineSid: string): ListUserConnectionReq {
        this['machine_sid'] = machineSid;
        return this;
    }
    public set machineSid(machineSid: string  | undefined) {
        this['machine_sid'] = machineSid;
    }
    public get machineSid(): string | undefined {
        return this['machine_sid'];
    }
    public withMachineName(machineName: string): ListUserConnectionReq {
        this['machine_name'] = machineName;
        return this;
    }
    public set machineName(machineName: string  | undefined) {
        this['machine_name'] = machineName;
    }
    public get machineName(): string | undefined {
        return this['machine_name'];
    }
    public withFailedReason(failedReason: string): ListUserConnectionReq {
        this['failed_reason'] = failedReason;
        return this;
    }
    public set failedReason(failedReason: string  | undefined) {
        this['failed_reason'] = failedReason;
    }
    public get failedReason(): string | undefined {
        return this['failed_reason'];
    }
    public withFailedCode(failedCode: string): ListUserConnectionReq {
        this['failed_code'] = failedCode;
        return this;
    }
    public set failedCode(failedCode: string  | undefined) {
        this['failed_code'] = failedCode;
    }
    public get failedCode(): string | undefined {
        return this['failed_code'];
    }
    public withClientName(clientName: string): ListUserConnectionReq {
        this['client_name'] = clientName;
        return this;
    }
    public set clientName(clientName: string  | undefined) {
        this['client_name'] = clientName;
    }
    public get clientName(): string | undefined {
        return this['client_name'];
    }
    public withClientVersion(clientVersion: string): ListUserConnectionReq {
        this['client_version'] = clientVersion;
        return this;
    }
    public set clientVersion(clientVersion: string  | undefined) {
        this['client_version'] = clientVersion;
    }
    public get clientVersion(): string | undefined {
        return this['client_version'];
    }
    public withClientType(clientType: string): ListUserConnectionReq {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withAgentVersion(agentVersion: string): ListUserConnectionReq {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withVmIp(vmIp: string): ListUserConnectionReq {
        this['vm_ip'] = vmIp;
        return this;
    }
    public set vmIp(vmIp: string  | undefined) {
        this['vm_ip'] = vmIp;
    }
    public get vmIp(): string | undefined {
        return this['vm_ip'];
    }
    public withConnectFlag(connectFlag: string): ListUserConnectionReq {
        this['connect_flag'] = connectFlag;
        return this;
    }
    public set connectFlag(connectFlag: string  | undefined) {
        this['connect_flag'] = connectFlag;
    }
    public get connectFlag(): string | undefined {
        return this['connect_flag'];
    }
    public withWiIp(wiIp: string): ListUserConnectionReq {
        this['wi_ip'] = wiIp;
        return this;
    }
    public set wiIp(wiIp: string  | undefined) {
        this['wi_ip'] = wiIp;
    }
    public get wiIp(): string | undefined {
        return this['wi_ip'];
    }
    public withPublicIp(publicIp: string): ListUserConnectionReq {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withUpdateTime(updateTime: Date): ListUserConnectionReq {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withTenantId(tenantId: string): ListUserConnectionReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withLoginStartTime(loginStartTime: Date): ListUserConnectionReq {
        this['login_start_time'] = loginStartTime;
        return this;
    }
    public set loginStartTime(loginStartTime: Date  | undefined) {
        this['login_start_time'] = loginStartTime;
    }
    public get loginStartTime(): Date | undefined {
        return this['login_start_time'];
    }
    public withLoginEndTime(loginEndTime: Date): ListUserConnectionReq {
        this['login_end_time'] = loginEndTime;
        return this;
    }
    public set loginEndTime(loginEndTime: Date  | undefined) {
        this['login_end_time'] = loginEndTime;
    }
    public get loginEndTime(): Date | undefined {
        return this['login_end_time'];
    }
    public withVirtualIp(virtualIp: string): ListUserConnectionReq {
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