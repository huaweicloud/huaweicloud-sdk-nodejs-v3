

export class ResizeExclusiveLitesReq {
    private 'host_id'?: string;
    private 'order_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'product_id'?: string;
    private 'new_quantity'?: number;
    public constructor(productId?: string, newQuantity?: number) { 
        this['product_id'] = productId;
        this['new_quantity'] = newQuantity;
    }
    public withHostId(hostId: string): ResizeExclusiveLitesReq {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withOrderId(orderId: string): ResizeExclusiveLitesReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ResizeExclusiveLitesReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProductId(productId: string): ResizeExclusiveLitesReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withNewQuantity(newQuantity: number): ResizeExclusiveLitesReq {
        this['new_quantity'] = newQuantity;
        return this;
    }
    public set newQuantity(newQuantity: number  | undefined) {
        this['new_quantity'] = newQuantity;
    }
    public get newQuantity(): number | undefined {
        return this['new_quantity'];
    }
}