import { OnePermRuleRequestInfo } from './OnePermRuleRequestInfo';


export class UpdatePermRuleRequest {
    private 'share_id'?: string;
    private 'rule_id'?: string;
    public body?: OnePermRuleRequestInfo;
    public constructor(shareId?: string, ruleId?: string) { 
        this['share_id'] = shareId;
        this['rule_id'] = ruleId;
    }
    public withShareId(shareId: string): UpdatePermRuleRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withRuleId(ruleId: string): UpdatePermRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: OnePermRuleRequestInfo): UpdatePermRuleRequest {
        this['body'] = body;
        return this;
    }
}