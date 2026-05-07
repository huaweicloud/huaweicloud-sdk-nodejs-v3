import { CreateCustomRuleConfigRequestInfo } from './CreateCustomRuleConfigRequestInfo';


export class CreateCustomRuleConfigRequest {
    public body?: CreateCustomRuleConfigRequestInfo;
    public constructor() { 
    }
    public withBody(body: CreateCustomRuleConfigRequestInfo): CreateCustomRuleConfigRequest {
        this['body'] = body;
        return this;
    }
}