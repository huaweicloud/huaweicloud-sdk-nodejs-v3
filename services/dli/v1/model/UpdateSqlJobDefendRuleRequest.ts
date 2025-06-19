import { SqlJobDefendRuleRequestBody } from './SqlJobDefendRuleRequestBody';


export class UpdateSqlJobDefendRuleRequest {
    private 'rule_id'?: string;
    public body?: SqlJobDefendRuleRequestBody;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): UpdateSqlJobDefendRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: SqlJobDefendRuleRequestBody): UpdateSqlJobDefendRuleRequest {
        this['body'] = body;
        return this;
    }
}