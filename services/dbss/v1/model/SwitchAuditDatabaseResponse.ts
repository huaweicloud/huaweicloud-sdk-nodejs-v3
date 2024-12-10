
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchAuditDatabaseResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SwitchAuditDatabaseResponse {
        this['status'] = status;
        return this;
    }
}