import { DeleteCustomRuleIdsRequestInfo } from './DeleteCustomRuleIdsRequestInfo';


export class DeleteCustomRuleConfigRequest {
    public body?: DeleteCustomRuleIdsRequestInfo;
    public constructor() { 
    }
    public withBody(body: DeleteCustomRuleIdsRequestInfo): DeleteCustomRuleConfigRequest {
        this['body'] = body;
        return this;
    }
}