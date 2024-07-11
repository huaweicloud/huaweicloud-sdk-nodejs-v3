
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateApplicationPermissionsResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchUpdateApplicationPermissionsResponse {
        this['status'] = status;
        return this;
    }
}