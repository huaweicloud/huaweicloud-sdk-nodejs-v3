
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddWafWhiteIpRuleResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): AddWafWhiteIpRuleResponse {
        this['body'] = body;
        return this;
    }
}