import { EstimateResizeRequestBody } from './EstimateResizeRequestBody';


export class CreateResizeOrderRequestBody {
    private 'desktop_pool_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'promotion_plan_id'?: string;
    private 'handle_type'?: string;
    private 'product_id'?: string;
    public mode?: string;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): CreateResizeOrderRequestBody {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): CreateResizeOrderRequestBody {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withPromotionPlanId(promotionPlanId: string): CreateResizeOrderRequestBody {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withHandleType(handleType: string): CreateResizeOrderRequestBody {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): string | undefined {
        return this['handle_type'];
    }
    public withProductId(productId: string): CreateResizeOrderRequestBody {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withMode(mode: string): CreateResizeOrderRequestBody {
        this['mode'] = mode;
        return this;
    }
}