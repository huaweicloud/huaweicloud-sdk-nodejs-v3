
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchAuditDatabaseNewResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SwitchAuditDatabaseNewResponse {
        this['status'] = status;
        return this;
    }
}