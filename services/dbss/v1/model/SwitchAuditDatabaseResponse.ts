
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchAuditDatabaseResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SwitchAuditDatabaseResponse {
        this['result'] = result;
        return this;
    }
}