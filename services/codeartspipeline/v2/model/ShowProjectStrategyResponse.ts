import { RuleInstance } from './RuleInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectStrategyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public type?: string;
    public version?: string;
    public creator?: string;
    private 'create_time'?: string;
    public updater?: string;
    private 'update_time'?: string;
    private 'is_valid'?: boolean;
    private 'rule_instances'?: Array<RuleInstance>;
    public level?: string;
    private 'is_public'?: boolean;
    private 'is_legacy'?: boolean;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowProjectStrategyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowProjectStrategyResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowProjectStrategyResponse {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ShowProjectStrategyResponse {
        this['version'] = version;
        return this;
    }
    public withCreator(creator: string): ShowProjectStrategyResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: string): ShowProjectStrategyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdater(updater: string): ShowProjectStrategyResponse {
        this['updater'] = updater;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowProjectStrategyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withIsValid(isValid: boolean): ShowProjectStrategyResponse {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withRuleInstances(ruleInstances: Array<RuleInstance>): ShowProjectStrategyResponse {
        this['rule_instances'] = ruleInstances;
        return this;
    }
    public set ruleInstances(ruleInstances: Array<RuleInstance>  | undefined) {
        this['rule_instances'] = ruleInstances;
    }
    public get ruleInstances(): Array<RuleInstance> | undefined {
        return this['rule_instances'];
    }
    public withLevel(level: string): ShowProjectStrategyResponse {
        this['level'] = level;
        return this;
    }
    public withIsPublic(isPublic: boolean): ShowProjectStrategyResponse {
        this['is_public'] = isPublic;
        return this;
    }
    public set isPublic(isPublic: boolean  | undefined) {
        this['is_public'] = isPublic;
    }
    public get isPublic(): boolean | undefined {
        return this['is_public'];
    }
    public withIsLegacy(isLegacy: boolean): ShowProjectStrategyResponse {
        this['is_legacy'] = isLegacy;
        return this;
    }
    public set isLegacy(isLegacy: boolean  | undefined) {
        this['is_legacy'] = isLegacy;
    }
    public get isLegacy(): boolean | undefined {
        return this['is_legacy'];
    }
}