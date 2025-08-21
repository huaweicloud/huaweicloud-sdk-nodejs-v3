import { PermissionDto } from './PermissionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourcePermissionsResponse extends SdkResponse {
    public body?: Array<PermissionDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PermissionDto>): ShowResourcePermissionsResponse {
        this['body'] = body;
        return this;
    }
}