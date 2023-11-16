import { RuleInstance } from './RuleInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStrategyResponse extends SdkResponse {
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
    public constructor() { 
        super();
    }
    public withId(id: string): ShowStrategyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowStrategyResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowStrategyResponse {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ShowStrategyResponse {
        this['version'] = version;
        return this;
    }
    public withCreator(creator: string): ShowStrategyResponse {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: string): ShowStrategyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdater(updater: string): ShowStrategyResponse {
        this['updater'] = updater;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowStrategyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withIsValid(isValid: boolean): ShowStrategyResponse {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withRuleInstances(ruleInstances: Array<RuleInstance>): ShowStrategyResponse {
        this['rule_instances'] = ruleInstances;
        return this;
    }
    public set ruleInstances(ruleInstances: Array<RuleInstance>  | undefined) {
        this['rule_instances'] = ruleInstances;
    }
    public get ruleInstances(): Array<RuleInstance> | undefined {
        return this['rule_instances'];
    }
}