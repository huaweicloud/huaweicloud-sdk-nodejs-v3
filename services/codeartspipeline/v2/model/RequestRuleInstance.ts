import { RuleInstanceContent } from './RuleInstanceContent';


export class RequestRuleInstance {
    public id?: string;
    public type?: string;
    public name?: string;
    private 'is_valid'?: boolean;
    private 'layout_content'?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_version'?: string;
    public content?: Array<RuleInstanceContent>;
    public constructor(type?: string, name?: string, content?: Array<RuleInstanceContent>) { 
        this['type'] = type;
        this['name'] = name;
        this['content'] = content;
    }
    public withId(id: string): RequestRuleInstance {
        this['id'] = id;
        return this;
    }
    public withType(type: string): RequestRuleInstance {
        this['type'] = type;
        return this;
    }
    public withName(name: string): RequestRuleInstance {
        this['name'] = name;
        return this;
    }
    public withIsValid(isValid: boolean): RequestRuleInstance {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withLayoutContent(layoutContent: string): RequestRuleInstance {
        this['layout_content'] = layoutContent;
        return this;
    }
    public set layoutContent(layoutContent: string  | undefined) {
        this['layout_content'] = layoutContent;
    }
    public get layoutContent(): string | undefined {
        return this['layout_content'];
    }
    public withPluginId(pluginId: string): RequestRuleInstance {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): RequestRuleInstance {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginVersion(pluginVersion: string): RequestRuleInstance {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withContent(content: Array<RuleInstanceContent>): RequestRuleInstance {
        this['content'] = content;
        return this;
    }
}