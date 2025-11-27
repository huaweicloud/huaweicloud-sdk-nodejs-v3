import { UpdateRuleRequestBody } from './UpdateRuleRequestBody';


export class UpdateRuleRequest {
    public ruleid?: string;
    public body?: UpdateRuleRequestBody;
    public constructor(ruleid?: string) { 
        this['ruleid'] = ruleid;
    }
    public withRuleid(ruleid: string): UpdateRuleRequest {
        this['ruleid'] = ruleid;
        return this;
    }
    public withBody(body: UpdateRuleRequestBody): UpdateRuleRequest {
        this['body'] = body;
        return this;
    }
}