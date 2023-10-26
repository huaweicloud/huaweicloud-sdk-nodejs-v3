
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeRuleResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): ChangeRuleResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): ChangeRuleResponse {
        this['status'] = status;
        return this;
    }
}