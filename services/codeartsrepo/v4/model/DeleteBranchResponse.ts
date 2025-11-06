
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBranchResponse extends SdkResponse {
    public status?: DeleteBranchResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: DeleteBranchResponseStatusEnum | string): DeleteBranchResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteBranchResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
