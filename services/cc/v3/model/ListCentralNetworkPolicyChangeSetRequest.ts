

export class ListCentralNetworkPolicyChangeSetRequest {
    private 'policy_id'?: string;
    private 'central_network_id'?: string;
    public constructor(policyId?: string, centralNetworkId?: string) { 
        this['policy_id'] = policyId;
        this['central_network_id'] = centralNetworkId;
    }
    public withPolicyId(policyId: string): ListCentralNetworkPolicyChangeSetRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withCentralNetworkId(centralNetworkId: string): ListCentralNetworkPolicyChangeSetRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
}