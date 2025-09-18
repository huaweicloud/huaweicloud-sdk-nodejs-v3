import { RuleContent } from './RuleContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRuleResponse extends SdkResponse {
    public id?: string;
    public type?: string;
    public name?: string;
    private 'is_valid'?: boolean;
    public version?: string;
    private 'plugin_id'?: string;
    private 'plugin_name'?: string;
    private 'plugin_version'?: string;
    public creator?: string;
    private 'create_time'?: string;
    public updater?: string;
    private 'update_time'?: string;
    public content?: Array<RuleContent>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowRuleResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ShowRuleResponse {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ShowRuleResponse {
        this['name'] = name;
        return this;
    }
    public withIsValid(isValid: boolean): ShowRuleResponse {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withVersion(version: string): ShowRuleResponse {
        this['version'] = version;
        return this;
    }
    public withPluginId(pluginId: string): ShowRuleResponse {
        this['plugin_id'] = pluginId;
        return this;
    }
    public set pluginId(pluginId: string  | undefined) {
        this['plugin_id'] = pluginId;
    }
    public get pluginId(): string | undefined {
        return this['plugin_id'];
    }
    public withPluginName(pluginName: string): ShowRuleResponse {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: string  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): string | undefined {
        return this['plugin_name'];
    }
    public withPluginVersion(pluginVersion: string): ShowRuleResponse {
        this['plugin_version'] = pluginVersion;
        return this;
    }
    public set pluginVersion(pluginVersion: string  | undefined) {
        this['plugin_version'] = pluginVersion;
    }
    public get pluginVersion(): string | undefined {
        return this['plugin_version'];
    }
    public withCreator(creator: string): ShowRuleResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: string): ShowRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdater(updater: string): ShowRuleResponse {
        this['updater'] = updater;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withContent(content: Array<RuleContent>): ShowRuleResponse {
        this['content'] = content;
        return this;
    }
}