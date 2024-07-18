import { PageInfo } from './PageInfo';
import { VpnUser } from './VpnUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnUsersResponse extends SdkResponse {
    public users?: Array<VpnUser>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<VpnUser>): ListVpnUsersResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListVpnUsersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpnUsersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpnUsersResponse {
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