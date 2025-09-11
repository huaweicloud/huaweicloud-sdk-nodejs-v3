
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetAuditInstanceTimeZoneResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetAuditInstanceTimeZoneResponse {
        this['status'] = status;
        return this;
    }
}