

export class EnterpriseRouterAttachmentId {
    private 'enterprise_router_attachment_id'?: string;
    public constructor() { 
    }
    public withEnterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string): EnterpriseRouterAttachmentId {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
        return this;
    }
    public set enterpriseRouterAttachmentId(enterpriseRouterAttachmentId: string  | undefined) {
        this['enterprise_router_attachment_id'] = enterpriseRouterAttachmentId;
    }
    public get enterpriseRouterAttachmentId(): string | undefined {
        return this['enterprise_router_attachment_id'];
    }
}