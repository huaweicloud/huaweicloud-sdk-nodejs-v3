import { AssociatedPermission } from './AssociatedPermission';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceSharePermissionsResponse extends SdkResponse {
    private 'associated_permissions'?: Array<AssociatedPermission>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAssociatedPermissions(associatedPermissions: Array<AssociatedPermission>): ListResourceSharePermissionsResponse {
        this['associated_permissions'] = associatedPermissions;
        return this;
    }
    public set associatedPermissions(associatedPermissions: Array<AssociatedPermission>  | undefined) {
        this['associated_permissions'] = associatedPermissions;
    }
    public get associatedPermissions(): Array<AssociatedPermission> | undefined {
        return this['associated_permissions'];
    }
    public withPageInfo(pageInfo: PageInfo): ListResourceSharePermissionsResponse {
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