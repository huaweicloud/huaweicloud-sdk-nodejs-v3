
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RetryAuditBackupTaskResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RetryAuditBackupTaskResponse {
        this['result'] = result;
        return this;
    }
}