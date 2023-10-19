import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';
import { Permission } from './Permission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPermissionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public permissions?: Array<Permission>;
    public constructor(requestId?: string, permissions?: Array<Permission>) { 
        super();
        this['request_id'] = requestId;
        this['permissions'] = permissions;
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
    public withPermissions(permissions: Array<Permission>): ListPermissionsResponse {
        this['permissions'] = permissions;
        return this;
    }
}