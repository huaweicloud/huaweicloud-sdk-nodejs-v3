import { AddWafWhiteIpRuleV2RequestBody } from './AddWafWhiteIpRuleV2RequestBody';


export class AddWafWhiteIpRuleRequest {
    public body?: AddWafWhiteIpRuleV2RequestBody;
    public constructor() { 
    }
    public withBody(body: AddWafWhiteIpRuleV2RequestBody): AddWafWhiteIpRuleRequest {
        this['body'] = body;
        return this;
    }
}