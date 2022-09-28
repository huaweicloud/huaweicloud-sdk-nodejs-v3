import { PermissionObject } from './PermissionObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServicePermissionsDetailsResponse extends SdkResponse {
    public permissions?: Array<PermissionObject>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<PermissionObject>): ListServicePermissionsDetailsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withTotalCount(totalCount: number): ListServicePermissionsDetailsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}