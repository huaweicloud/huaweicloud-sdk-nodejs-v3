import { RuleInstanceContent } from './RuleInstanceContent';
import { RuleSet } from './RuleSet';


export class RuleInstance {
    public id?: string;
    public type?: string;
    public name?: string;
    public version?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_version'?: string;
    private 'is_valid'?: boolean;
    public editable?: boolean;
    public content?: Array<RuleInstanceContent>;
    public parent?: RuleSet;
    public constructor(id?: string, type?: string, name?: string, version?: string, isValid?: boolean, content?: Array<RuleInstanceContent>) { 
        this['id'] = id;
        this['type'] = type;
        this['name'] = name;
        this['version'] = version;
        this['is_valid'] = isValid;
        this['content'] = content;
    }
    public withId(id: string): RuleInstance {
        this['id'] = id;
        return this;
    }
    public withType(type: string): RuleInstance {
        this['type'] = type;
        return this;
    }
    public withName(name: string): RuleInstance {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): RuleInstance {
        this['version'] = version;
        return this;
    }
    public withPluginId(pluginId: string): RuleInstance {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): RuleInstance {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginVersion(pluginVersion: string): RuleInstance {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withIsValid(isValid: boolean): RuleInstance {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withEditable(editable: boolean): RuleInstance {
        this['editable'] = editable;
        return this;
    }
    public withContent(content: Array<RuleInstanceContent>): RuleInstance {
        this['content'] = content;
        return this;
    }
    public withParent(parent: RuleSet): RuleInstance {
        this['parent'] = parent;
        return this;
    }
}