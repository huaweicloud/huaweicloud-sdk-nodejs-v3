import { ConditionGroup } from './ConditionGroup';
import { RuleAction } from './RuleAction';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRuleResponse extends SdkResponse {
    private 'rule_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'condition_group'?: ConditionGroup | undefined;
    public actions?: Array<RuleAction>;
    private 'rule_type'?: string | undefined;
    public status?: string;
    private 'app_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): UpdateRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withName(name: string): UpdateRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRuleResponse {
        this['description'] = description;
        return this;
    }
    public withConditionGroup(conditionGroup: ConditionGroup): UpdateRuleResponse {
        this['condition_group'] = conditionGroup;
        return this;
    }
    public set conditionGroup(conditionGroup: ConditionGroup | undefined) {
        this['condition_group'] = conditionGroup;
    }
    public get conditionGroup() {
        return this['condition_group'];
    }
    public withActions(actions: Array<RuleAction>): UpdateRuleResponse {
        this['actions'] = actions;
        return this;
    }
    public withRuleType(ruleType: string): UpdateRuleResponse {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType() {
        return this['rule_type'];
    }
    public withStatus(status: string): UpdateRuleResponse {
        this['status'] = status;
        return this;
    }
    public withAppId(appId: string): UpdateRuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
}