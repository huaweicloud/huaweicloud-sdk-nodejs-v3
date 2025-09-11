
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditBackupRiskSwitchResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SetAuditBackupRiskSwitchResponse {
        this['result'] = result;
        return this;
    }
}