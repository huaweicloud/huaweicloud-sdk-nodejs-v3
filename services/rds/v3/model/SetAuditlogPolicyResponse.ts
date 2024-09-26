
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditlogPolicyResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetAuditlogPolicyResponse {
        this['status'] = status;
        return this;
    }
}