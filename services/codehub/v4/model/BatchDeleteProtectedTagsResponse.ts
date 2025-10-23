
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteProtectedTagsResponse extends SdkResponse {
    public status?: BatchDeleteProtectedTagsResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: BatchDeleteProtectedTagsResponseStatusEnum | string): BatchDeleteProtectedTagsResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteProtectedTagsResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
