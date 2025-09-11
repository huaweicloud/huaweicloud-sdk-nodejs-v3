
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartAuditInstanceNewResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): StartAuditInstanceNewResponse {
        this['result'] = result;
        return this;
    }
}