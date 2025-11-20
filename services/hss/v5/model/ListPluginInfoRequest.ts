

export class ListPluginInfoRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public code?: string;
    private 'plugin_version'?: string;
    private 'agent_version'?: string;
    private 'plugin_arch'?: string;
    private 'plugin_os_type'?: string;
    public constructor(code?: string) { 
        this['code'] = code;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPluginInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListPluginInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withCode(code: string): ListPluginInfoRequest {
        this['code'] = code;
        return this;
    }
    public withPluginVersion(pluginVersion: string): ListPluginInfoRequest {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withAgentVersion(agentVersion: string): ListPluginInfoRequest {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withPluginArch(pluginArch: string): ListPluginInfoRequest {
        this['plugin_arch'] = pluginArch;
        return this;
    }
    public set pluginArch(pluginArch: string  | undefined) {
        this['plugin_arch'] = pluginArch;
    }
    public get pluginArch(): string | undefined {
        return this['plugin_arch'];
    }
    public withPluginOsType(pluginOsType: string): ListPluginInfoRequest {
        this['plugin_os_type'] = pluginOsType;
        return this;
    }
    public set pluginOsType(pluginOsType: string  | undefined) {
        this['plugin_os_type'] = pluginOsType;
    }
    public get pluginOsType(): string | undefined {
        return this['plugin_os_type'];
    }
}