
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteProtectedBranchResponse extends SdkResponse {
    public status?: DeleteProtectedBranchResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: DeleteProtectedBranchResponseStatusEnum | string): DeleteProtectedBranchResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteProtectedBranchResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
