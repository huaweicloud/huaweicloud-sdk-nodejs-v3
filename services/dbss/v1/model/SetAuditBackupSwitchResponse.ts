
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditBackupSwitchResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SetAuditBackupSwitchResponse {
        this['result'] = result;
        return this;
    }
}