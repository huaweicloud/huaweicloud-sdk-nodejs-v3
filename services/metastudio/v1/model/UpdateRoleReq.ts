import { LlmSourceEnum } from './LlmSourceEnum';
import { RoleBusinessReq } from './RoleBusinessReq';
import { RolePluginConfigInfo } from './RolePluginConfigInfo';


export class UpdateRoleReq {
    public name?: string;
    public description?: string;
    private 'role_business_list'?: Array<RoleBusinessReq>;
    private 'llm_source'?: LlmSourceEnum;
    private 'llm_config_id'?: string;
    private 'plugin_config_list'?: Array<RolePluginConfigInfo>;
    private 'mcp_server_id_list'?: Array<string>;
    private 'instruction_library_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateRoleReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRoleReq {
        this['description'] = description;
        return this;
    }
    public withRoleBusinessList(roleBusinessList: Array<RoleBusinessReq>): UpdateRoleReq {
        this['role_business_list'] = roleBusinessList;
        return this;
    }
    public set roleBusinessList(roleBusinessList: Array<RoleBusinessReq>  | undefined) {
        this['role_business_list'] = roleBusinessList;
    }
    public get roleBusinessList(): Array<RoleBusinessReq> | undefined {
        return this['role_business_list'];
    }
    public withLlmSource(llmSource: LlmSourceEnum): UpdateRoleReq {
        this['llm_source'] = llmSource;
        return this;
    }
    public set llmSource(llmSource: LlmSourceEnum  | undefined) {
        this['llm_source'] = llmSource;
    }
    public get llmSource(): LlmSourceEnum | undefined {
        return this['llm_source'];
    }
    public withLlmConfigId(llmConfigId: string): UpdateRoleReq {
        this['llm_config_id'] = llmConfigId;
        return this;
    }
    public set llmConfigId(llmConfigId: string  | undefined) {
        this['llm_config_id'] = llmConfigId;
    }
    public get llmConfigId(): string | undefined {
        return this['llm_config_id'];
    }
    public withPluginConfigList(pluginConfigList: Array<RolePluginConfigInfo>): UpdateRoleReq {
        this['plugin_config_list'] = pluginConfigList;
        return this;
    }
    public set pluginConfigList(pluginConfigList: Array<RolePluginConfigInfo>  | undefined) {
        this['plugin_config_list'] = pluginConfigList;
    }
    public get pluginConfigList(): Array<RolePluginConfigInfo> | undefined {
        return this['plugin_config_list'];
    }
    public withMcpServerIdList(mcpServerIdList: Array<string>): UpdateRoleReq {
        this['mcp_server_id_list'] = mcpServerIdList;
        return this;
    }
    public set mcpServerIdList(mcpServerIdList: Array<string>  | undefined) {
        this['mcp_server_id_list'] = mcpServerIdList;
    }
    public get mcpServerIdList(): Array<string> | undefined {
        return this['mcp_server_id_list'];
    }
    public withInstructionLibraryId(instructionLibraryId: string): UpdateRoleReq {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
}