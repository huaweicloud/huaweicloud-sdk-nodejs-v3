
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetHtapQueryQueuesRuleResponse extends SdkResponse {
    public status?: string;
    public msg?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetHtapQueryQueuesRuleResponse {
        this['status'] = status;
        return this;
    }
    public withMsg(msg: string): SetHtapQueryQueuesRuleResponse {
        this['msg'] = msg;
        return this;
    }
}