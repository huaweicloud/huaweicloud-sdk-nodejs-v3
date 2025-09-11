
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditScopeRuleSwitchResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetAuditScopeRuleSwitchResponse {
        this['status'] = status;
        return this;
    }
}