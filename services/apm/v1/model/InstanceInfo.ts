

export class InstanceInfo {
    private 'instance_id'?: number;
    private 'business_name'?: string;
    private 'business_id'?: number;
    private 'app_name'?: string;
    private 'host_name'?: string;
    private 'instance_name'?: string;
    private 'ip_address'?: string;
    private 'env_id'?: number;
    private 'agent_version'?: string;
    private 'last_heartbeat'?: number;
    private 'register_time'?: number;
    private 'last_modify_user_id'?: string;
    private 'instance_status'?: number;
    private 'last_modify_user_name'?: string;
    private 'last_modify_time'?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: number): InstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withBusinessName(businessName: string): InstanceInfo {
        this['business_name'] = businessName;
        return this;
    }
    public set businessName(businessName: string  | undefined) {
        this['business_name'] = businessName;
    }
    public get businessName(): string | undefined {
        return this['business_name'];
    }
    public withBusinessId(businessId: number): InstanceInfo {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withAppName(appName: string): InstanceInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withHostName(hostName: string): InstanceInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withInstanceName(instanceName: string): InstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withIpAddress(ipAddress: string): InstanceInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withEnvId(envId: number): InstanceInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withAgentVersion(agentVersion: string): InstanceInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withLastHeartbeat(lastHeartbeat: number): InstanceInfo {
        this['last_heartbeat'] = lastHeartbeat;
        return this;
    }
    public set lastHeartbeat(lastHeartbeat: number  | undefined) {
        this['last_heartbeat'] = lastHeartbeat;
    }
    public get lastHeartbeat(): number | undefined {
        return this['last_heartbeat'];
    }
    public withRegisterTime(registerTime: number): InstanceInfo {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: number  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): number | undefined {
        return this['register_time'];
    }
    public withLastModifyUserId(lastModifyUserId: string): InstanceInfo {
        this['last_modify_user_id'] = lastModifyUserId;
        return this;
    }
    public set lastModifyUserId(lastModifyUserId: string  | undefined) {
        this['last_modify_user_id'] = lastModifyUserId;
    }
    public get lastModifyUserId(): string | undefined {
        return this['last_modify_user_id'];
    }
    public withInstanceStatus(instanceStatus: number): InstanceInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: number  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): number | undefined {
        return this['instance_status'];
    }
    public withLastModifyUserName(lastModifyUserName: string): InstanceInfo {
        this['last_modify_user_name'] = lastModifyUserName;
        return this;
    }
    public set lastModifyUserName(lastModifyUserName: string  | undefined) {
        this['last_modify_user_name'] = lastModifyUserName;
    }
    public get lastModifyUserName(): string | undefined {
        return this['last_modify_user_name'];
    }
    public withLastModifyTime(lastModifyTime: number): InstanceInfo {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: number  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): number | undefined {
        return this['last_modify_time'];
    }
}