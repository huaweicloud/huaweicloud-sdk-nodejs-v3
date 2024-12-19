import { DeleteWafWhiteIpRuleV2RequestBody } from './DeleteWafWhiteIpRuleV2RequestBody';


export class DeleteWafWhiteIpRuleRequest {
    public body?: DeleteWafWhiteIpRuleV2RequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteWafWhiteIpRuleV2RequestBody): DeleteWafWhiteIpRuleRequest {
        this['body'] = body;
        return this;
    }
}