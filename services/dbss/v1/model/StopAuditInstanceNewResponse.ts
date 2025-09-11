
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopAuditInstanceNewResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): StopAuditInstanceNewResponse {
        this['result'] = result;
        return this;
    }
}