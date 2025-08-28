import { LlmSourceEnum } from './LlmSourceEnum';
import { McpServerBaseInfo } from './McpServerBaseInfo';
import { RoleBusinessInfo } from './RoleBusinessInfo';
import { RolePluginConfigInfo } from './RolePluginConfigInfo';


export class RoleInfo {
    private 'role_id'?: string;
    public name?: string;
    public description?: string;
    private 'role_business_list'?: Array<RoleBusinessInfo>;
    private 'llm_source'?: LlmSourceEnum;
    private 'llm_config_id'?: string;
    private 'plugin_config_list'?: Array<RolePluginConfigInfo>;
    private 'mcp_server_info_list'?: Array<McpServerBaseInfo>;
    private 'instruction_library_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withRoleId(roleId: string): RoleInfo {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withName(name: string): RoleInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): RoleInfo {
        this['description'] = description;
        return this;
    }
    public withRoleBusinessList(roleBusinessList: Array<RoleBusinessInfo>): RoleInfo {
        this['role_business_list'] = roleBusinessList;
        return this;
    }
    public set roleBusinessList(roleBusinessList: Array<RoleBusinessInfo>  | undefined) {
        this['role_business_list'] = roleBusinessList;
    }
    public get roleBusinessList(): Array<RoleBusinessInfo> | undefined {
        return this['role_business_list'];
    }
    public withLlmSource(llmSource: LlmSourceEnum): RoleInfo {
        this['llm_source'] = llmSource;
        return this;
    }
    public set llmSource(llmSource: LlmSourceEnum  | undefined) {
        this['llm_source'] = llmSource;
    }
    public get llmSource(): LlmSourceEnum | undefined {
        return this['llm_source'];
    }
    public withLlmConfigId(llmConfigId: string): RoleInfo {
        this['llm_config_id'] = llmConfigId;
        return this;
    }
    public set llmConfigId(llmConfigId: string  | undefined) {
        this['llm_config_id'] = llmConfigId;
    }
    public get llmConfigId(): string | undefined {
        return this['llm_config_id'];
    }
    public withPluginConfigList(pluginConfigList: Array<RolePluginConfigInfo>): RoleInfo {
        this['plugin_config_list'] = pluginConfigList;
        return this;
    }
    public set pluginConfigList(pluginConfigList: Array<RolePluginConfigInfo>  | undefined) {
        this['plugin_config_list'] = pluginConfigList;
    }
    public get pluginConfigList(): Array<RolePluginConfigInfo> | undefined {
        return this['plugin_config_list'];
    }
    public withMcpServerInfoList(mcpServerInfoList: Array<McpServerBaseInfo>): RoleInfo {
        this['mcp_server_info_list'] = mcpServerInfoList;
        return this;
    }
    public set mcpServerInfoList(mcpServerInfoList: Array<McpServerBaseInfo>  | undefined) {
        this['mcp_server_info_list'] = mcpServerInfoList;
    }
    public get mcpServerInfoList(): Array<McpServerBaseInfo> | undefined {
        return this['mcp_server_info_list'];
    }
    public withInstructionLibraryId(instructionLibraryId: string): RoleInfo {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
    public withCreateTime(createTime: string): RoleInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RoleInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}