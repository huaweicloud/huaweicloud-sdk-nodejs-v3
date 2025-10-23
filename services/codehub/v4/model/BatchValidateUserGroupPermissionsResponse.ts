import { UserGroupPermissionDto } from './UserGroupPermissionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchValidateUserGroupPermissionsResponse extends SdkResponse {
    public body?: Array<UserGroupPermissionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<UserGroupPermissionDto>): BatchValidateUserGroupPermissionsResponse {
        this['body'] = body;
        return this;
    }
}