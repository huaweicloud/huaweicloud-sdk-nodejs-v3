

export class ListPluginStatusRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'plugin_code'?: string;
    private 'plugin_version'?: string;
    private 'plugin_status'?: string;
    private 'host_name'?: string;
    private 'host_ids'?: Array<string>;
    private 'host_status'?: Array<ListPluginStatusRequestHostStatusEnum> | Array<string>;
    private 'agent_status'?: ListPluginStatusRequestAgentStatusEnum | string;
    private 'os_type'?: string;
    private 'os_arch'?: string;
    private 'host_type'?: string;
    public constructor(pluginCode?: string) { 
        this['plugin_code'] = pluginCode;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPluginStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListPluginStatusRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withPluginCode(pluginCode: string): ListPluginStatusRequest {
        this['plugin_code'] = pluginCode;
        return this;
    }
    public set pluginCode(pluginCode: string  | undefined) {
        this['plugin_code'] = pluginCode;
    }
    public get pluginCode(): string | undefined {
        return this['plugin_code'];
    }
    public withPluginVersion(pluginVersion: string): ListPluginStatusRequest {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withPluginStatus(pluginStatus: string): ListPluginStatusRequest {
        this['plugin_status'] = pluginStatus;
        return this;
    }
    public set pluginStatus(pluginStatus: string  | undefined) {
        this['plugin_status'] = pluginStatus;
    }
    public get pluginStatus(): string | undefined {
        return this['plugin_status'];
    }
    public withHostName(hostName: string): ListPluginStatusRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIds(hostIds: Array<string>): ListPluginStatusRequest {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withHostStatus(hostStatus: Array<ListPluginStatusRequestHostStatusEnum> | Array<string>): ListPluginStatusRequest {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: Array<ListPluginStatusRequestHostStatusEnum> | Array<string>  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): Array<ListPluginStatusRequestHostStatusEnum> | Array<string> | undefined {
        return this['host_status'];
    }
    public withAgentStatus(agentStatus: ListPluginStatusRequestAgentStatusEnum | string): ListPluginStatusRequest {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: ListPluginStatusRequestAgentStatusEnum | string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): ListPluginStatusRequestAgentStatusEnum | string | undefined {
        return this['agent_status'];
    }
    public withOsType(osType: string): ListPluginStatusRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsArch(osArch: string): ListPluginStatusRequest {
        this['os_arch'] = osArch;
        return this;
    }
    public set osArch(osArch: string  | undefined) {
        this['os_arch'] = osArch;
    }
    public get osArch(): string | undefined {
        return this['os_arch'];
    }
    public withHostType(hostType: string): ListPluginStatusRequest {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPluginStatusRequestHostStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILDING = 'BUILDING',
    ERROR = 'ERROR',
    SHUTOFF = 'SHUTOFF'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPluginStatusRequestAgentStatusEnum {
    NOT_INSTALLED = 'not_installed',
    ONLINE = 'online',
    OFFLINE = 'offline',
    INSTALL_FAILED = 'install_failed',
    INSTALLING = 'installing'
}
