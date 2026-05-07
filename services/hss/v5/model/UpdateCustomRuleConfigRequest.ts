import { UpdateCustomRuleConfigRequestInfo } from './UpdateCustomRuleConfigRequestInfo';


export class UpdateCustomRuleConfigRequest {
    public body?: UpdateCustomRuleConfigRequestInfo;
    public constructor() { 
    }
    public withBody(body: UpdateCustomRuleConfigRequestInfo): UpdateCustomRuleConfigRequest {
        this['body'] = body;
        return this;
    }
}