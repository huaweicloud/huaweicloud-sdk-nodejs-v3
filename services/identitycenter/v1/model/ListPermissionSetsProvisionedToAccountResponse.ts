import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionSetsProvisionedToAccountResponse extends SdkResponse {
    private 'permission_sets'?: Array<string>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withPermissionSets(permissionSets: Array<string>): ListPermissionSetsProvisionedToAccountResponse {
        this['permission_sets'] = permissionSets;
        return this;
    }
    public set permissionSets(permissionSets: Array<string>  | undefined) {
        this['permission_sets'] = permissionSets;
    }
    public get permissionSets(): Array<string> | undefined {
        return this['permission_sets'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListPermissionSetsProvisionedToAccountResponse {
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