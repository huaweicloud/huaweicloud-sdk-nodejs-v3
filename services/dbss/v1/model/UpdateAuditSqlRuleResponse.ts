
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuditSqlRuleResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateAuditSqlRuleResponse {
        this['status'] = status;
        return this;
    }
}