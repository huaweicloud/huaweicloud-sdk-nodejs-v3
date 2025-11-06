import { ResponsePermissionInfo } from './ResponsePermissionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryResourcePermissionsResponse extends SdkResponse {
    public body?: Array<ResponsePermissionInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ResponsePermissionInfo>): ListRepositoryResourcePermissionsResponse {
        this['body'] = body;
        return this;
    }
}