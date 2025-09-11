
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuditWhitelistResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateAuditWhitelistResponse {
        this['status'] = status;
        return this;
    }
}