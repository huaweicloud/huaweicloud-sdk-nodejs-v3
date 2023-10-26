
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRuleGroupResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): DeleteRuleGroupResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): DeleteRuleGroupResponse {
        this['status'] = status;
        return this;
    }
}