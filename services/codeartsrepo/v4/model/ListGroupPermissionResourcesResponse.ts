import { PermissionResourcesDto } from './PermissionResourcesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupPermissionResourcesResponse extends SdkResponse {
    private 'use_project_permission'?: boolean;
    public resources?: Array<PermissionResourcesDto>;
    public constructor() { 
        super();
    }
    public withUseProjectPermission(useProjectPermission: boolean): ListGroupPermissionResourcesResponse {
        this['use_project_permission'] = useProjectPermission;
        return this;
    }
    public set useProjectPermission(useProjectPermission: boolean  | undefined) {
        this['use_project_permission'] = useProjectPermission;
    }
    public get useProjectPermission(): boolean | undefined {
        return this['use_project_permission'];
    }
    public withResources(resources: Array<PermissionResourcesDto>): ListGroupPermissionResourcesResponse {
        this['resources'] = resources;
        return this;
    }
}