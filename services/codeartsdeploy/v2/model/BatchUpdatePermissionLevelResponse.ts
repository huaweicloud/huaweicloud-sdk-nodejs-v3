
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdatePermissionLevelResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchUpdatePermissionLevelResponse {
        this['status'] = status;
        return this;
    }
}