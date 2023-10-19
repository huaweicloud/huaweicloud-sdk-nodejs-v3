

export class EnterpriseRouterTableId {
    private 'enterprise_router_table_id'?: string;
    public constructor(enterpriseRouterTableId?: string) { 
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public withEnterpriseRouterTableId(enterpriseRouterTableId: string): EnterpriseRouterTableId {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        return this;
    }
    public set enterpriseRouterTableId(enterpriseRouterTableId: string  | undefined) {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public get enterpriseRouterTableId(): string | undefined {
        return this['enterprise_router_table_id'];
    }
}