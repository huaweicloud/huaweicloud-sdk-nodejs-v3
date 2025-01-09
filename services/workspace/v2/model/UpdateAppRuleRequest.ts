import { UpdateAppRuleReq } from './UpdateAppRuleReq';


export class UpdateAppRuleRequest {
    private 'rule_id'?: string;
    public body?: UpdateAppRuleReq;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): UpdateAppRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateAppRuleReq): UpdateAppRuleRequest {
        this['body'] = body;
        return this;
    }
}