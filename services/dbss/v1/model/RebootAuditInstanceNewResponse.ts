
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebootAuditInstanceNewResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RebootAuditInstanceNewResponse {
        this['result'] = result;
        return this;
    }
}