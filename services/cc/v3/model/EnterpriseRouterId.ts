

export class EnterpriseRouterId {
    private 'enterprise_router_id'?: string;
    public constructor(enterpriseRouterId?: string) { 
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): EnterpriseRouterId {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
}