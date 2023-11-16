

export class AgentPluginInfoQueryDTO {
    private 'plugin_name'?: string;
    private 'regex_name'?: string;
    public maintainer?: string;
    private 'business_type'?: Array<string>;
    private 'plugin_attribution'?: string;
    public constructor() { 
    }
    public withPluginName(pluginName: string): AgentPluginInfoQueryDTO {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withRegexName(regexName: string): AgentPluginInfoQueryDTO {
        this['regex_name'] = regexName;
        return this;
    }
    public set regexName(regexName: string  | undefined) {
        this['regex_name'] = regexName;
    }
    public get regexName(): string | undefined {
        return this['regex_name'];
    }
    public withMaintainer(maintainer: string): AgentPluginInfoQueryDTO {
        this['maintainer'] = maintainer;
        return this;
    }
    public withBusinessType(businessType: Array<string>): AgentPluginInfoQueryDTO {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: Array<string>  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): Array<string> | undefined {
        return this['business_type'];
    }
    public withPluginAttribution(pluginAttribution: string): AgentPluginInfoQueryDTO {
        this['plugin_attribution'] = pluginAttribution;
        return this;
    }
    public set pluginAttribution(pluginAttribution: string  | undefined) {
        this['plugin_attribution'] = pluginAttribution;
    }
    public get pluginAttribution(): string | undefined {
        return this['plugin_attribution'];
    }
}