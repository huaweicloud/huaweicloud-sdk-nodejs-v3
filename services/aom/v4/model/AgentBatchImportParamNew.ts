import { AgentImportParamNew } from './AgentImportParamNew';
import { PluginInstallBasicParam } from './PluginInstallBasicParam';


export class AgentBatchImportParamNew {
    private 'agent_import_param_list'?: Array<AgentImportParamNew>;
    private 'proxy_region_id'?: number;
    private 'installer_agent_id'?: string;
    private 'icagent_install_flag'?: boolean;
    private 'plugin_install_base_param'?: PluginInstallBasicParam;
    public version?: string;
    private 'public_net_flag'?: boolean;
    public constructor(agentImportParamList?: Array<AgentImportParamNew>, proxyRegionId?: number, installerAgentId?: string, version?: string, publicNetFlag?: boolean) { 
        this['agent_import_param_list'] = agentImportParamList;
        this['proxy_region_id'] = proxyRegionId;
        this['installer_agent_id'] = installerAgentId;
        this['version'] = version;
        this['public_net_flag'] = publicNetFlag;
    }
    public withAgentImportParamList(agentImportParamList: Array<AgentImportParamNew>): AgentBatchImportParamNew {
        this['agent_import_param_list'] = agentImportParamList;
        return this;
    }
    public set agentImportParamList(agentImportParamList: Array<AgentImportParamNew>  | undefined) {
        this['agent_import_param_list'] = agentImportParamList;
    }
    public get agentImportParamList(): Array<AgentImportParamNew> | undefined {
        return this['agent_import_param_list'];
    }
    public withProxyRegionId(proxyRegionId: number): AgentBatchImportParamNew {
        this['proxy_region_id'] = proxyRegionId;
        return this;
    }
    public set proxyRegionId(proxyRegionId: number  | undefined) {
        this['proxy_region_id'] = proxyRegionId;
    }
    public get proxyRegionId(): number | undefined {
        return this['proxy_region_id'];
    }
    public withInstallerAgentId(installerAgentId: string): AgentBatchImportParamNew {
        this['installer_agent_id'] = installerAgentId;
        return this;
    }
    public set installerAgentId(installerAgentId: string  | undefined) {
        this['installer_agent_id'] = installerAgentId;
    }
    public get installerAgentId(): string | undefined {
        return this['installer_agent_id'];
    }
    public withIcagentInstallFlag(icagentInstallFlag: boolean): AgentBatchImportParamNew {
        this['icagent_install_flag'] = icagentInstallFlag;
        return this;
    }
    public set icagentInstallFlag(icagentInstallFlag: boolean  | undefined) {
        this['icagent_install_flag'] = icagentInstallFlag;
    }
    public get icagentInstallFlag(): boolean | undefined {
        return this['icagent_install_flag'];
    }
    public withPluginInstallBaseParam(pluginInstallBaseParam: PluginInstallBasicParam): AgentBatchImportParamNew {
        this['plugin_install_base_param'] = pluginInstallBaseParam;
        return this;
    }
    public set pluginInstallBaseParam(pluginInstallBaseParam: PluginInstallBasicParam  | undefined) {
        this['plugin_install_base_param'] = pluginInstallBaseParam;
    }
    public get pluginInstallBaseParam(): PluginInstallBasicParam | undefined {
        return this['plugin_install_base_param'];
    }
    public withVersion(version: string): AgentBatchImportParamNew {
        this['version'] = version;
        return this;
    }
    public withPublicNetFlag(publicNetFlag: boolean): AgentBatchImportParamNew {
        this['public_net_flag'] = publicNetFlag;
        return this;
    }
    public set publicNetFlag(publicNetFlag: boolean  | undefined) {
        this['public_net_flag'] = publicNetFlag;
    }
    public get publicNetFlag(): boolean | undefined {
        return this['public_net_flag'];
    }
}