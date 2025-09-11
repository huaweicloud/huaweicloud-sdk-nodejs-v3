
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditAlarmLogStatusResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SetAuditAlarmLogStatusResponse {
        this['result'] = result;
        return this;
    }
}