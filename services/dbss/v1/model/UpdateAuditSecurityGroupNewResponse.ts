
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuditSecurityGroupNewResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateAuditSecurityGroupNewResponse {
        this['result'] = result;
        return this;
    }
}