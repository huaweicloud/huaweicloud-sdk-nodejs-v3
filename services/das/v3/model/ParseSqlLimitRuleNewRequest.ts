import { ParseSqlLimitRuleNewRequestBody } from './ParseSqlLimitRuleNewRequestBody';


export class ParseSqlLimitRuleNewRequest {
    public body?: ParseSqlLimitRuleNewRequestBody;
    public constructor() { 
    }
    public withBody(body: ParseSqlLimitRuleNewRequestBody): ParseSqlLimitRuleNewRequest {
        this['body'] = body;
        return this;
    }
}