import { Condition } from './Condition';
import { IgnoreAdvanced } from './IgnoreAdvanced';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateIgnoreRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public rule?: string;
    public mode?: number;
    public conditions?: Array<Condition>;
    public multiCondition?: boolean;
    public producer?: number;
    public advanced?: IgnoreAdvanced;
    public domain?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): BatchCreateIgnoreRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): BatchCreateIgnoreRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): BatchCreateIgnoreRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): BatchCreateIgnoreRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): BatchCreateIgnoreRuleResponse {
        this['status'] = status;
        return this;
    }
    public withRule(rule: string): BatchCreateIgnoreRuleResponse {
        this['rule'] = rule;
        return this;
    }
    public withMode(mode: number): BatchCreateIgnoreRuleResponse {
        this['mode'] = mode;
        return this;
    }
    public withConditions(conditions: Array<Condition>): BatchCreateIgnoreRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withMultiCondition(multiCondition: boolean): BatchCreateIgnoreRuleResponse {
        this['multiCondition'] = multiCondition;
        return this;
    }
    public withProducer(producer: number): BatchCreateIgnoreRuleResponse {
        this['producer'] = producer;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): BatchCreateIgnoreRuleResponse {
        this['advanced'] = advanced;
        return this;
    }
    public withDomain(domain: Array<string>): BatchCreateIgnoreRuleResponse {
        this['domain'] = domain;
        return this;
    }
}