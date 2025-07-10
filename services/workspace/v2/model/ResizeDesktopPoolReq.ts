

export class ResizeDesktopPoolReq {
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    public mode?: string;
    public constructor(productId?: string) { 
        this['product_id'] = productId;
    }
    public withProductId(productId: string): ResizeDesktopPoolReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): ResizeDesktopPoolReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withMode(mode: string): ResizeDesktopPoolReq {
        this['mode'] = mode;
        return this;
    }
}