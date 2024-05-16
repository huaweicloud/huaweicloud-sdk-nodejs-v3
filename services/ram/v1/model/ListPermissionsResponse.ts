import { PageInfo } from './PageInfo';
import { PermissionSummary } from './PermissionSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionsResponse extends SdkResponse {
    public permissions?: Array<PermissionSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<PermissionSummary>): ListPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPermissionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}