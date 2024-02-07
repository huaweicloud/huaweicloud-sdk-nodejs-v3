import { ListAccessSites } from './ListAccessSites';
import { ListGlobalEipsResponseBodyPageInfo } from './ListGlobalEipsResponseBodyPageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessSitesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'access_sites'?: Array<ListAccessSites>;
    private 'page_info'?: ListGlobalEipsResponseBodyPageInfo;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListAccessSitesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAccessSites(accessSites: Array<ListAccessSites>): ListAccessSitesResponse {
        this['access_sites'] = accessSites;
        return this;
    }
    public set accessSites(accessSites: Array<ListAccessSites>  | undefined) {
        this['access_sites'] = accessSites;
    }
    public get accessSites(): Array<ListAccessSites> | undefined {
        return this['access_sites'];
    }
    public withPageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo): ListAccessSitesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: ListGlobalEipsResponseBodyPageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): ListGlobalEipsResponseBodyPageInfo | undefined {
        return this['page_info'];
    }
    public withXRequestId(xRequestId: string): ListAccessSitesResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}