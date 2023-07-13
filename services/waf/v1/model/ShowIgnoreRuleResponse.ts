import { Condition } from './Condition';
import { IgnoreAdvanced } from './IgnoreAdvanced';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIgnoreRuleResponse extends SdkResponse {
    public id?: string;
    public policyid?: string;
    public timestamp?: number;
    public description?: string;
    public status?: number;
    public url?: string;
    public rule?: string;
    public mode?: number;
    private 'url_logic'?: string | undefined;
    public conditions?: Array<Condition>;
    public advanced?: IgnoreAdvanced;
    public domain?: Array<string>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowIgnoreRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPolicyid(policyid: string): ShowIgnoreRuleResponse {
        this['policyid'] = policyid;
        return this;
    }
    public withTimestamp(timestamp: number): ShowIgnoreRuleResponse {
        this['timestamp'] = timestamp;
        return this;
    }
    public withDescription(description: string): ShowIgnoreRuleResponse {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): ShowIgnoreRuleResponse {
        this['status'] = status;
        return this;
    }
    public withUrl(url: string): ShowIgnoreRuleResponse {
        this['url'] = url;
        return this;
    }
    public withRule(rule: string): ShowIgnoreRuleResponse {
        this['rule'] = rule;
        return this;
    }
    public withMode(mode: number): ShowIgnoreRuleResponse {
        this['mode'] = mode;
        return this;
    }
    public withUrlLogic(urlLogic: string): ShowIgnoreRuleResponse {
        this['url_logic'] = urlLogic;
        return this;
    }
    public set urlLogic(urlLogic: string | undefined) {
        this['url_logic'] = urlLogic;
    }
    public get urlLogic() {
        return this['url_logic'];
    }
    public withConditions(conditions: Array<Condition>): ShowIgnoreRuleResponse {
        this['conditions'] = conditions;
        return this;
    }
    public withAdvanced(advanced: IgnoreAdvanced): ShowIgnoreRuleResponse {
        this['advanced'] = advanced;
        return this;
    }
    public withDomain(domain: Array<string>): ShowIgnoreRuleResponse {
        this['domain'] = domain;
        return this;
    }
}