

export class EnterpriseRouterProjectId {
    private 'enterprise_router_project_id'?: string;
    public constructor(enterpriseRouterProjectId?: string) { 
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public withEnterpriseRouterProjectId(enterpriseRouterProjectId: string): EnterpriseRouterProjectId {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        return this;
    }
    public set enterpriseRouterProjectId(enterpriseRouterProjectId: string  | undefined) {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public get enterpriseRouterProjectId(): string | undefined {
        return this['enterprise_router_project_id'];
    }
}