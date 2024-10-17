
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopAuditInstanceResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): StopAuditInstanceResponse {
        this['result'] = result;
        return this;
    }
}