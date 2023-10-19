import { CentralNetworkElementChange } from './CentralNetworkElementChange';
import { CentralNetworkPolicy } from './CentralNetworkPolicy';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyCentralNetworkPolicyResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network_policy'?: CentralNetworkPolicy;
    private 'central_network_policy_change_set'?: Array<CentralNetworkElementChange>;
    public constructor(requestId?: string, centralNetworkPolicy?: CentralNetworkPolicy, centralNetworkPolicyChangeSet?: Array<CentralNetworkElementChange>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_policy'] = centralNetworkPolicy;
        this['central_network_policy_change_set'] = centralNetworkPolicyChangeSet;
    }
    public withRequestId(requestId: string): ApplyCentralNetworkPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetworkPolicy(centralNetworkPolicy: CentralNetworkPolicy): ApplyCentralNetworkPolicyResponse {
        this['central_network_policy'] = centralNetworkPolicy;
        return this;
    }
    public set centralNetworkPolicy(centralNetworkPolicy: CentralNetworkPolicy  | undefined) {
        this['central_network_policy'] = centralNetworkPolicy;
    }
    public get centralNetworkPolicy(): CentralNetworkPolicy | undefined {
        return this['central_network_policy'];
    }
    public withCentralNetworkPolicyChangeSet(centralNetworkPolicyChangeSet: Array<CentralNetworkElementChange>): ApplyCentralNetworkPolicyResponse {
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