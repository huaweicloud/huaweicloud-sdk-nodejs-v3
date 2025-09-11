
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadAuditDbConfigResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UploadAuditDbConfigResponse {
        this['result'] = result;
        return this;
    }
}