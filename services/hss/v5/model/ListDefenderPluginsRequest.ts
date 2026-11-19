

export class ListDefenderPluginsRequest {
    private 'enterprise_project_id'?: string;
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'agent_status'?: string;
    private 'defender_status'?: ListDefenderPluginsRequestDefenderStatusEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDefenderPluginsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostName(hostName: string): ListDefenderPluginsRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListDefenderPluginsRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPrivateIp(privateIp: string): ListDefenderPluginsRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): ListDefenderPluginsRequest {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withAgentStatus(agentStatus: string): ListDefenderPluginsRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withDefenderStatus(defenderStatus: ListDefenderPluginsRequestDefenderStatusEnum | string): ListDefenderPluginsRequest {
        this['defender_status'] = defenderStatus;
        return this;
    }
    public set defenderStatus(defenderStatus: ListDefenderPluginsRequestDefenderStatusEnum | string  | undefined) {
        this['defender_status'] = defenderStatus;
    }
    public get defenderStatus(): ListDefenderPluginsRequestDefenderStatusEnum | string | undefined {
        return this['defender_status'];
    }
    public withLimit(limit: number): ListDefenderPluginsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDefenderPluginsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDefenderPluginsRequestDefenderStatusEnum {
    NOT_INSTALLED = 'not_installed',
    INSTALL_FAILED = 'install_failed',
    ONLINE = 'online',
    OFFLINE = 'offline',
    INSTALLING = 'installing'
}
