import { PageInfo } from './PageInfo';
import { VpnAccessPolicy } from './VpnAccessPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnAccessPoliciesResponse extends SdkResponse {
    private 'access_policies'?: Array<VpnAccessPolicy>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAccessPolicies(accessPolicies: Array<VpnAccessPolicy>): ListVpnAccessPoliciesResponse {
        this['access_policies'] = accessPolicies;
        return this;
    }
    public set accessPolicies(accessPolicies: Array<VpnAccessPolicy>  | undefined) {
        this['access_policies'] = accessPolicies;
    }
    public get accessPolicies(): Array<VpnAccessPolicy> | undefined {
        return this['access_policies'];
    }
    public withTotalCount(totalCount: number): ListVpnAccessPoliciesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpnAccessPoliciesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpnAccessPoliciesResponse {
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