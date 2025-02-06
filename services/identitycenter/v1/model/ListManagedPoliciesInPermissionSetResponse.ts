import { AttachedManagedPolicyDto } from './AttachedManagedPolicyDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagedPoliciesInPermissionSetResponse extends SdkResponse {
    private 'attached_managed_policies'?: Array<AttachedManagedPolicyDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAttachedManagedPolicies(attachedManagedPolicies: Array<AttachedManagedPolicyDto>): ListManagedPoliciesInPermissionSetResponse {
        this['attached_managed_policies'] = attachedManagedPolicies;
        return this;
    }
    public set attachedManagedPolicies(attachedManagedPolicies: Array<AttachedManagedPolicyDto>  | undefined) {
        this['attached_managed_policies'] = attachedManagedPolicies;
    }
    public get attachedManagedPolicies(): Array<AttachedManagedPolicyDto> | undefined {
        return this['attached_managed_policies'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListManagedPoliciesInPermissionSetResponse {
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