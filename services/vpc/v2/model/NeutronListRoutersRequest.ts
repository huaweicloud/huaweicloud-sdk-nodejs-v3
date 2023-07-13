

export class NeutronListRoutersRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public status?: string;
    private 'tenant_id'?: string | undefined;
    private 'admin_state_up'?: boolean | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListRoutersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListRoutersRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): NeutronListRoutersRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): NeutronListRoutersRequest {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): NeutronListRoutersRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronListRoutersRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
}