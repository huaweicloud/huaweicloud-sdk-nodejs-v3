
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RebootAuditInstanceResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): RebootAuditInstanceResponse {
        this['result'] = result;
        return this;
    }
}