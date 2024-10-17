
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartAuditInstanceResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): StartAuditInstanceResponse {
        this['result'] = result;
        return this;
    }
}