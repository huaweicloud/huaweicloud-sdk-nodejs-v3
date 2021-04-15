

export class NeutronListFirewallPoliciesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListFirewallPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListFirewallPoliciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): NeutronListFirewallPoliciesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): NeutronListFirewallPoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): NeutronListFirewallPoliciesRequest {
        this['description'] = description;
        return this;
    }
    public withTenantId(tenantId: string): NeutronListFirewallPoliciesRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}