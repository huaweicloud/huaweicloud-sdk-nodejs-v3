
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuditRiskBucketPathResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateAuditRiskBucketPathResponse {
        this['result'] = result;
        return this;
    }
}