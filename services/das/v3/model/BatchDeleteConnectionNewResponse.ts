
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteConnectionNewResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): BatchDeleteConnectionNewResponse {
        this['status'] = status;
        return this;
    }
}