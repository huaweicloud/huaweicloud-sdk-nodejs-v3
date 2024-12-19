
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteWafWhiteIpRuleResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteWafWhiteIpRuleResponse {
        this['body'] = body;
        return this;
    }
}