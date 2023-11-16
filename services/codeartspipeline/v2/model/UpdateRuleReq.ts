import { RuleContent } from './RuleContent';


export class UpdateRuleReq {
    public type?: string;
    public name?: string;
    private 'layout_content'?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_version'?: string;
    public content?: Array<RuleContent>;
    public constructor(type?: string, name?: string, layoutContent?: string, content?: Array<RuleContent>) { 
        this['type'] = type;
        this['name'] = name;
        this['layout_content'] = layoutContent;
        this['content'] = content;
    }
    public withType(type: string): UpdateRuleReq {
        this['type'] = type;
        return this;
    }
    public withName(name: string): UpdateRuleReq {
        this['name'] = name;
        return this;
    }
    public withLayoutContent(layoutContent: string): UpdateRuleReq {
        this['layout_content'] = layoutContent;
        return this;
    }
    public set layoutContent(layoutContent: string  | undefined) {
        this['layout_content'] = layoutContent;
    }
    public get layoutContent(): string | undefined {
        return this['layout_content'];
    }
    public withPluginId(pluginId: string): UpdateRuleReq {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): UpdateRuleReq {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginVersion(pluginVersion: string): UpdateRuleReq {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withContent(content: Array<RuleContent>): UpdateRuleReq {
        this['content'] = content;
        return this;
    }
}