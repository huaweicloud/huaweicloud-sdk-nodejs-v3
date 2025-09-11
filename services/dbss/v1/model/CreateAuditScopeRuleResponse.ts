
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuditScopeRuleResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateAuditScopeRuleResponse {
        this['status'] = status;
        return this;
    }
}