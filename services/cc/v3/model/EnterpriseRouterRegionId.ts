

export class EnterpriseRouterRegionId {
    private 'enterprise_router_region_id'?: string;
    public constructor(enterpriseRouterRegionId?: string) { 
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public withEnterpriseRouterRegionId(enterpriseRouterRegionId: string): EnterpriseRouterRegionId {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        return this;
    }
    public set enterpriseRouterRegionId(enterpriseRouterRegionId: string  | undefined) {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public get enterpriseRouterRegionId(): string | undefined {
        return this['enterprise_router_region_id'];
    }
}