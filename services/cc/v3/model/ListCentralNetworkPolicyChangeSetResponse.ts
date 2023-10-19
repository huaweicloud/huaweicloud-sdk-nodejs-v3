import { CentralNetworkElementChange } from './CentralNetworkElementChange';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkPolicyChangeSetResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_network_policy_change_set'?: Array<CentralNetworkElementChange>;
    public constructor(requestId?: string, centralNetworkPolicyChangeSet?: Array<CentralNetworkElementChange>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_policy_change_set'] = centralNetworkPolicyChangeSet;
    }
    public withRequestId(requestId: string): ListCentralNetworkPolicyChangeSetResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkPolicyChangeSetResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworkPolicyChangeSet(centralNetworkPolicyChangeSet: Array<CentralNetworkElementChange>): ListCentralNetworkPolicyChangeSetResponse {
        this['central_network_policy_change_set'] = centralNetworkPolicyChangeSet;
        return this;
    }
    public set centralNetworkPolicyChangeSet(centralNetworkPolicyChangeSet: Array<CentralNetworkElementChange>  | undefined) {
        this['central_network_policy_change_set'] = centralNetworkPolicyChangeSet;
    }
    public get centralNetworkPolicyChangeSet(): Array<CentralNetworkElementChange> | undefined {
        return this['central_network_policy_change_set'];
    }
}