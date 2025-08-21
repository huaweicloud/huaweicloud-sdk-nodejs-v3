
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteProtectedTagsResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchDeleteProtectedTagsResponse {
        this['status'] = status;
        return this;
    }
}