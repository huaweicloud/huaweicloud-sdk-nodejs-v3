import { PermissionItem } from './PermissionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInternalEndpointPermissionsResponse extends SdkResponse {
    public permissions?: Array<PermissionItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<PermissionItem>): ListInternalEndpointPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withTotalCount(totalCount: number): ListInternalEndpointPermissionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}