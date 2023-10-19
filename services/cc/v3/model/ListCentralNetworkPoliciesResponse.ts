import { CentralNetworkPolicy } from './CentralNetworkPolicy';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkPoliciesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_network_policies'?: Array<CentralNetworkPolicy>;
    public constructor(requestId?: string, centralNetworkPolicies?: Array<CentralNetworkPolicy>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_policies'] = centralNetworkPolicies;
    }
    public withRequestId(requestId: string): ListCentralNetworkPoliciesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkPoliciesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworkPolicies(centralNetworkPolicies: Array<CentralNetworkPolicy>): ListCentralNetworkPoliciesResponse {
        this['central_network_policies'] = centralNetworkPolicies;
        return this;
    }
    public set centralNetworkPolicies(centralNetworkPolicies: Array<CentralNetworkPolicy>  | undefined) {
        this['central_network_policies'] = centralNetworkPolicies;
    }
    public get centralNetworkPolicies(): Array<CentralNetworkPolicy> | undefined {
        return this['central_network_policies'];
    }
}