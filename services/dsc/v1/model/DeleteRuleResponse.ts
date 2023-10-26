
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRuleResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): DeleteRuleResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): DeleteRuleResponse {
        this['status'] = status;
        return this;
    }
}