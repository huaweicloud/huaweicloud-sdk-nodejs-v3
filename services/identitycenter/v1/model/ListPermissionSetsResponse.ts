import { PageInfoDto } from './PageInfoDto';
import { PermissionSetDto } from './PermissionSetDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionSetsResponse extends SdkResponse {
    private 'permission_sets'?: Array<PermissionSetDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withPermissionSets(permissionSets: Array<PermissionSetDto>): ListPermissionSetsResponse {
        this['permission_sets'] = permissionSets;
        return this;
    }
    public set permissionSets(permissionSets: Array<PermissionSetDto>  | undefined) {
        this['permission_sets'] = permissionSets;
    }
    public get permissionSets(): Array<PermissionSetDto> | undefined {
        return this['permission_sets'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListPermissionSetsResponse {
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