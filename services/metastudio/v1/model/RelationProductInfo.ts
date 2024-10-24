

export class RelationProductInfo {
    private 'product_id'?: string;
    private 'product_title'?: string;
    public constructor() { 
    }
    public withProductId(productId: string): RelationProductInfo {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withProductTitle(productTitle: string): RelationProductInfo {
        this['product_title'] = productTitle;
        return this;
    }
    public set productTitle(productTitle: string  | undefined) {
        this['product_title'] = productTitle;
    }
    public get productTitle(): string | undefined {
        return this['product_title'];
    }
}