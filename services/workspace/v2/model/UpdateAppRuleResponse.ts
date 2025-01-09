import { Rule } from './Rule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppRuleResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public rule?: Rule;
    private 'rule_source'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAppRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateAppRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAppRuleResponse {
        this['description'] = description;
        return this;
    }
    public withRule(rule: Rule): UpdateAppRuleResponse {
        this['rule'] = rule;
        return this;
    }
    public withRuleSource(ruleSource: string): UpdateAppRuleResponse {
        this['rule_source'] = ruleSource;
        return this;
    }
    public set ruleSource(ruleSource: string  | undefined) {
        this['rule_source'] = ruleSource;
    }
    public get ruleSource(): string | undefined {
        return this['rule_source'];
    }
    public withCreateTime(createTime: Date): UpdateAppRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): UpdateAppRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}