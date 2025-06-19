import { SqlJobDefendRuleRequestBody } from './SqlJobDefendRuleRequestBody';


export class CreateSqlJobDefendRuleRequest {
    public body?: SqlJobDefendRuleRequestBody;
    public constructor() { 
    }
    public withBody(body: SqlJobDefendRuleRequestBody): CreateSqlJobDefendRuleRequest {
        this['body'] = body;
        return this;
    }
}