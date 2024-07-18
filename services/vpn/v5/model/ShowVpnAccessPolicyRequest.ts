

export class ShowVpnAccessPolicyRequest {
    private 'vpn_server_id'?: string;
    private 'policy_id'?: string;
    public constructor(vpnServerId?: string, policyId?: string) { 
        this['vpn_server_id'] = vpnServerId;
        this['policy_id'] = policyId;
    }
    public withVpnServerId(vpnServerId: string): ShowVpnAccessPolicyRequest {
        this['vpn_server_id'] = vpnServerId;
        return this;
    }
    public set vpnServerId(vpnServerId: string  | undefined) {
        this['vpn_server_id'] = vpnServerId;
    }
    public get vpnServerId(): string | undefined {
        return this['vpn_server_id'];
    }
    public withPolicyId(policyId: string): ShowVpnAccessPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}