import { PageInfo } from './PageInfo';
import { Permission } from './Permission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionsResponse extends SdkResponse {
    public permissions?: Array<Permission>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withPermissions(permissions: Array<Permission>): ListPermissionsResponse {
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
    public withRequestId(requestId: string): ListPermissionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}