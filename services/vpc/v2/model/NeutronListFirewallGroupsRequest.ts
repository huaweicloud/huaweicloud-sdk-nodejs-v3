

export class NeutronListFirewallGroupsRequest {
    public marker?: string;
    public limit?: number;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'ingress_firewall_policy_id'?: string | undefined;
    private 'egress_firewall_policy_id'?: string | undefined;
    public constructor() { 
    }
    public withMarker(marker: string): NeutronListFirewallGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): NeutronListFirewallGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: Array<string>): NeutronListFirewallGroupsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): NeutronListFirewallGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): NeutronListFirewallGroupsRequest {
        this['description'] = description;
        return this;
    }
    public withIngressFirewallPolicyId(ingressFirewallPolicyId: string): NeutronListFirewallGroupsRequest {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
        return this;
    }
    public set ingressFirewallPolicyId(ingressFirewallPolicyId: string | undefined) {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
    }
    public get ingressFirewallPolicyId() {
        return this['ingress_firewall_policy_id'];
    }
    public withEgressFirewallPolicyId(egressFirewallPolicyId: string): NeutronListFirewallGroupsRequest {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
        return this;
    }
    public set egressFirewallPolicyId(egressFirewallPolicyId: string | undefined) {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
    }
    public get egressFirewallPolicyId() {
        return this['egress_firewall_policy_id'];
    }
}