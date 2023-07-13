import { IpGroupDetail } from './IpGroupDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpGroupsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'ip_groups'?: Array<IpGroupDetail> | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListIpGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withIpGroups(ipGroups: Array<IpGroupDetail>): ListIpGroupsResponse {
        this['ip_groups'] = ipGroups;
        return this;
    }
    public set ipGroups(ipGroups: Array<IpGroupDetail> | undefined) {
        this['ip_groups'] = ipGroups;
    }
    public get ipGroups() {
        return this['ip_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListIpGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}