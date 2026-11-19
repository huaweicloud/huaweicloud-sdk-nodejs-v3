

export class ShowDefenderPluginManualCommandRequest {
    private 'enterprise_project_id'?: string;
    public opt?: ShowDefenderPluginManualCommandRequestOptEnum | string;
    public network?: ShowDefenderPluginManualCommandRequestNetworkEnum | string;
    private 'agent_type'?: ShowDefenderPluginManualCommandRequestAgentTypeEnum | string;
    public constructor(opt?: string, agentType?: string) { 
        this['opt'] = opt;
        this['agent_type'] = agentType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDefenderPluginManualCommandRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOpt(opt: ShowDefenderPluginManualCommandRequestOptEnum | string): ShowDefenderPluginManualCommandRequest {
        this['opt'] = opt;
        return this;
    }
    public withNetwork(network: ShowDefenderPluginManualCommandRequestNetworkEnum | string): ShowDefenderPluginManualCommandRequest {
        this['network'] = network;
        return this;
    }
    public withAgentType(agentType: ShowDefenderPluginManualCommandRequestAgentTypeEnum | string): ShowDefenderPluginManualCommandRequest {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: ShowDefenderPluginManualCommandRequestAgentTypeEnum | string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): ShowDefenderPluginManualCommandRequestAgentTypeEnum | string | undefined {
        return this['agent_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDefenderPluginManualCommandRequestOptEnum {
    INSTALL = 'install',
    UNINSTALL = 'uninstall'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDefenderPluginManualCommandRequestNetworkEnum {
    PUBLIC = 'public',
    INTERNAL = 'internal'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDefenderPluginManualCommandRequestAgentTypeEnum {
    OPENCLAW = 'OpenClaw',
    SELFDEVELOPEDCLAW = 'SelfDevelopedClaw'
}
