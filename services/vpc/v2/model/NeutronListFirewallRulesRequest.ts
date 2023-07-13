

export class NeutronListFirewallRulesRequest {
    public marker?: string;
    public limit?: number;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    public action?: string;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withMarker(marker: string): NeutronListFirewallRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): NeutronListFirewallRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: Array<string>): NeutronListFirewallRulesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): NeutronListFirewallRulesRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): NeutronListFirewallRulesRequest {
        this['description'] = description;
        return this;
    }
    public withAction(action: string): NeutronListFirewallRulesRequest {
        this['action'] = action;
        return this;
    }
    public withTenantId(tenantId: string): NeutronListFirewallRulesRequest {
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