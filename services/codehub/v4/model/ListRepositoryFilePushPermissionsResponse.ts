import { RepositoryFilePushPermissionDto } from './RepositoryFilePushPermissionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryFilePushPermissionsResponse extends SdkResponse {
    public body?: Array<RepositoryFilePushPermissionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryFilePushPermissionDto>): ListRepositoryFilePushPermissionsResponse {
        this['body'] = body;
        return this;
    }
}