
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRuleResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): DeleteRuleResponse {
        this['status'] = status;
        return this;
    }
}