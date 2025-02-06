import { PageInfoDto } from './PageInfoDto';
import { ResourceAttachedManagedPolicyDto } from './ResourceAttachedManagedPolicyDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagedRolesInPermissionSetResponse extends SdkResponse {
    private 'attached_managed_roles'?: Array<ResourceAttachedManagedPolicyDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAttachedManagedRoles(attachedManagedRoles: Array<ResourceAttachedManagedPolicyDto>): ListManagedRolesInPermissionSetResponse {
        this['attached_managed_roles'] = attachedManagedRoles;
        return this;
    }
    public set attachedManagedRoles(attachedManagedRoles: Array<ResourceAttachedManagedPolicyDto>  | undefined) {
        this['attached_managed_roles'] = attachedManagedRoles;
    }
    public get attachedManagedRoles(): Array<ResourceAttachedManagedPolicyDto> | undefined {
        return this['attached_managed_roles'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListManagedRolesInPermissionSetResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}