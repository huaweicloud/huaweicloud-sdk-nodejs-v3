import { Condition } from './Condition';
import { IgnoreAdvanced } from './IgnoreAdvanced';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIgnoreRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public rule?: string;
    public mode?: number;
    public conditions?: Array<Condition>;
    public advanced?: IgnoreAdvanced;
    public domain?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateIgnoreRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): CreateIgnoreRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): CreateIgnoreRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): CreateIgnoreRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): CreateIgnoreRuleResponse {
        this['status'] = status;
        return this;
    }
    public withRule(rule: string): CreateIgnoreRuleResponse {
        this['rule'] = rule;
        return this;
    }
    public withMode(mode: number): CreateIgnoreRuleResponse {
        this['mode'] = mode;
        return this;
    }
    public withConditions(conditions: Array<Condition>): CreateIgnoreRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): CreateIgnoreRuleResponse {
        this['advanced'] = advanced;
        return this;
    }
    public withDomain(domain: Array<string>): CreateIgnoreRuleResponse {
        this['domain'] = domain;
        return this;
    }
}