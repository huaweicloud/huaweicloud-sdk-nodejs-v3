
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteProtectedBranchesResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchDeleteProtectedBranchesResponse {
        this['status'] = status;
        return this;
    }
}