
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuditRiskRuleResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateAuditRiskRuleResponse {
        this['status'] = status;
        return this;
    }
}