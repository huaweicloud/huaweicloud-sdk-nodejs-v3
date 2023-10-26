
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRuleGroupResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): AddRuleGroupResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): AddRuleGroupResponse {
        this['status'] = status;
        return this;
    }
}