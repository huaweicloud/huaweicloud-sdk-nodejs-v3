import { PolicyRuleIdRequestBody } from './PolicyRuleIdRequestBody';


export class BatchDeleteRulesRequest {
    private 'Content-Type'?: string;
    private 'rule_type'?: string;
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
    public withRuleType(ruleType: string): BatchDeleteRulesRequest {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withBody(body: PolicyRuleIdRequestBody): BatchDeleteRulesRequest {
        this['body'] = body;
        return this;
    }
}