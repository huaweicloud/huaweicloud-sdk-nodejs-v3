
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetAuditAlarmLogStatusResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): BatchSetAuditAlarmLogStatusResponse {
        this['result'] = result;
        return this;
    }
}