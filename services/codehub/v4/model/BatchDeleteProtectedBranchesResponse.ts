
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteProtectedBranchesResponse extends SdkResponse {
    public status?: BatchDeleteProtectedBranchesResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: BatchDeleteProtectedBranchesResponseStatusEnum | string): BatchDeleteProtectedBranchesResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteProtectedBranchesResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
