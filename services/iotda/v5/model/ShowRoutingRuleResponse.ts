import { RoutingRuleSubject } from './RoutingRuleSubject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRoutingRuleResponse extends SdkResponse {
    private 'rule_id'?: string | undefined;
    private 'rule_name'?: string | undefined;
    public description?: string;
    public subject?: RoutingRuleSubject;
    private 'app_type'?: string | undefined;
    private 'app_id'?: string | undefined;
    public select?: string;
    public where?: string;
    public active?: boolean;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): ShowRoutingRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): ShowRoutingRuleResponse {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName() {
        return this['rule_name'];
    }
    public withDescription(description: string): ShowRoutingRuleResponse {
        this['description'] = description;
        return this;
    }
    public withSubject(subject: RoutingRuleSubject): ShowRoutingRuleResponse {
        this['subject'] = subject;
        return this;
    }
    public withAppType(appType: string): ShowRoutingRuleResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string | undefined) {
        this['app_type'] = appType;
    }
    public get appType() {
        return this['app_type'];
    }
    public withAppId(appId: string): ShowRoutingRuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withSelect(select: string): ShowRoutingRuleResponse {
        this['select'] = select;
        return this;
    }
    public withWhere(where: string): ShowRoutingRuleResponse {
        this['where'] = where;
        return this;
    }
    public withActive(active: boolean): ShowRoutingRuleResponse {
        this['active'] = active;
        return this;
    }
}