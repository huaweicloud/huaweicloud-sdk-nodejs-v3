import { RepositoryFilePushPermissionDto } from './RepositoryFilePushPermissionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateRepositoryFilePushPermissionsResponse extends SdkResponse {
    public body?: Array<RepositoryFilePushPermissionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryFilePushPermissionDto>): BatchUpdateRepositoryFilePushPermissionsResponse {
        this['body'] = body;
        return this;
    }
}