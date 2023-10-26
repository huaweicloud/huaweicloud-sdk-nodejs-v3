
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddRuleResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): AddRuleResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): AddRuleResponse {
        this['status'] = status;
        return this;
    }
}