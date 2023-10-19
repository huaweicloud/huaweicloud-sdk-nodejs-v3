import { CentralNetworkPolicy } from './CentralNetworkPolicy';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCentralNetworkPolicyResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network_policy'?: CentralNetworkPolicy;
    public constructor(requestId?: string, centralNetworkPolicy?: CentralNetworkPolicy) { 
        super();
        this['request_id'] = requestId;
        this['central_network_policy'] = centralNetworkPolicy;
    }
    public withRequestId(requestId: string): CreateCentralNetworkPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetworkPolicy(centralNetworkPolicy: CentralNetworkPolicy): CreateCentralNetworkPolicyResponse {
        this['central_network_policy'] = centralNetworkPolicy;
        return this;
    }
    public set centralNetworkPolicy(centralNetworkPolicy: CentralNetworkPolicy  | undefined) {
        this['central_network_policy'] = centralNetworkPolicy;
    }
    public get centralNetworkPolicy(): CentralNetworkPolicy | undefined {
        return this['central_network_policy'];
    }
}