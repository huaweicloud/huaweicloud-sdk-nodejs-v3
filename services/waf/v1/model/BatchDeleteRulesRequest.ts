import { PolicyRuleIdRequestBody } from './PolicyRuleIdRequestBody';


export class BatchDeleteRulesRequest {
    private 'Content-Type'?: string;
    private 'rule_type'?: BatchDeleteRulesRequestRuleTypeEnum | string;
    public body?: PolicyRuleIdRequestBody;
    public constructor(contentType?: string, ruleType?: string) { 
        this['Content-Type'] = contentType;
        this['rule_type'] = ruleType;
    }
    public withContentType(contentType: string): BatchDeleteRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRuleType(ruleType: BatchDeleteRulesRequestRuleTypeEnum | string): BatchDeleteRulesRequest {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: BatchDeleteRulesRequestRuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): BatchDeleteRulesRequestRuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
    public withBody(body: PolicyRuleIdRequestBody): BatchDeleteRulesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteRulesRequestRuleTypeEnum {
    CC = 'cc',
    CUSTOM = 'custom',
    WHITEBLACKIP = 'whiteblackip',
    PRIVACY = 'privacy',
    IGNORE = 'ignore',
    GEOIP = 'geoip',
    ANTITAMPER = 'antitamper',
    ANTILEAKAGE = 'antileakage',
    IP_REPUTATION = 'ip-reputation'
}
