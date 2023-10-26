
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddEvent2alarmRuleResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): AddEvent2alarmRuleResponse {
        this['body'] = body;
        return this;
    }
}