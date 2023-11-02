

export class ApigChangeResourceReq {
    private 'change_mode'?: number;
    private 'resource_id'?: string;
    private 'resource_spec_code'?: string;
    private 'product_id'?: string;
    private 'promotion_info'?: string;
    public constructor(changeMode?: number, resourceId?: string, resourceSpecCode?: string) { 
        this['change_mode'] = changeMode;
        this['resource_id'] = resourceId;
        this['resource_spec_code'] = resourceSpecCode;
    }
    public withChangeMode(changeMode: number): ApigChangeResourceReq {
        this['change_mode'] = changeMode;
        return this;
    }
    public set changeMode(changeMode: number  | undefined) {
        this['change_mode'] = changeMode;
    }
    public get changeMode(): number | undefined {
        return this['change_mode'];
    }
    public withResourceId(resourceId: string): ApigChangeResourceReq {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ApigChangeResourceReq {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withProductId(productId: string): ApigChangeResourceReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withPromotionInfo(promotionInfo: string): ApigChangeResourceReq {
        this['promotion_info'] = promotionInfo;
        return this;
    }
    public set promotionInfo(promotionInfo: string  | undefined) {
        this['promotion_info'] = promotionInfo;
    }
    public get promotionInfo(): string | undefined {
        return this['promotion_info'];
    }
}