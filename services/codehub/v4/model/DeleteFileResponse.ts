
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteFileResponse extends SdkResponse {
    public status?: DeleteFileResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: DeleteFileResponseStatusEnum | string): DeleteFileResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteFileResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
