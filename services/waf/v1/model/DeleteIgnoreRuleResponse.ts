import { Advanced } from './Advanced';
import { Condition } from './Condition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIgnoreRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public url?: string;
    public rule?: string;
    public mode?: number;
    private 'url_logic'?: string;
    public conditions?: Array<Condition>;
    public advanced?: Array<Advanced>;
    public domains?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteIgnoreRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): DeleteIgnoreRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): DeleteIgnoreRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): DeleteIgnoreRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): DeleteIgnoreRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): DeleteIgnoreRuleResponse {
        this['url'] = url;
        return this;
    }
    public withRule(rule: string): DeleteIgnoreRuleResponse {
        this['rule'] = rule;
        return this;
    }
    public withMode(mode: number): DeleteIgnoreRuleResponse {
        this['mode'] = mode;
        return this;
    }
    public withUrlLogic(urlLogic: string): DeleteIgnoreRuleResponse {
        this['url_logic'] = urlLogic;
        return this;
    }
    public set urlLogic(urlLogic: string  | undefined) {
        this['url_logic'] = urlLogic;
    }
    public get urlLogic(): string | undefined {
        return this['url_logic'];
    }
    public withConditions(conditions: Array<Condition>): DeleteIgnoreRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAdvanced(advanced: Array<Advanced>): DeleteIgnoreRuleResponse {
        this['advanced'] = advanced;
        return this;
    }
    public withDomains(domains: Array<string>): DeleteIgnoreRuleResponse {
        this['domains'] = domains;
        return this;
    }
}