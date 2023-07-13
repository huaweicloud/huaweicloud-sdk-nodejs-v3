

export class NeutronListSecurityGroupsRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public name?: string;
    public description?: string;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListSecurityGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListSecurityGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): NeutronListSecurityGroupsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronListSecurityGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronListSecurityGroupsRequest {
        this['description'] = description;
        return this;
    }
    public withTenantId(tenantId: string): NeutronListSecurityGroupsRequest {
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