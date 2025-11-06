
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteProtectedTagResponse extends SdkResponse {
    public status?: DeleteProtectedTagResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: DeleteProtectedTagResponseStatusEnum | string): DeleteProtectedTagResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteProtectedTagResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
