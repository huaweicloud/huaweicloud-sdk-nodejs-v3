
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryResourcePermissionsResponse extends SdkResponse {
    public status?: UpdateRepositoryResourcePermissionsResponseStatusEnum | string;
    public constructor() { 
        super();
    }
    public withStatus(status: UpdateRepositoryResourcePermissionsResponseStatusEnum | string): UpdateRepositoryResourcePermissionsResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepositoryResourcePermissionsResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail'
}
