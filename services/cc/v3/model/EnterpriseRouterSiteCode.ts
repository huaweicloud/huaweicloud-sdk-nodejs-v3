

export class EnterpriseRouterSiteCode {
    private 'enterprise_router_site_code'?: string;
    public constructor(enterpriseRouterSiteCode?: string) { 
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
    }
    public withEnterpriseRouterSiteCode(enterpriseRouterSiteCode: string): EnterpriseRouterSiteCode {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
        return this;
    }
    public set enterpriseRouterSiteCode(enterpriseRouterSiteCode: string  | undefined) {
        this['enterprise_router_site_code'] = enterpriseRouterSiteCode;
    }
    public get enterpriseRouterSiteCode(): string | undefined {
        return this['enterprise_router_site_code'];
    }
}