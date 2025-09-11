
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuditSqlRuleResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateAuditSqlRuleResponse {
        this['status'] = status;
        return this;
    }
}