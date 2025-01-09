import { BatchInquiryCommonInfo } from './BatchInquiryCommonInfo';


export class EstimateChangeImageRequestBody {
    private 'desktop_pool_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'promotion_plan_id'?: string;
    private 'image_spec_code'?: string;
    private 'image_id'?: string;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): EstimateChangeImageRequestBody {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): EstimateChangeImageRequestBody {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withPromotionPlanId(promotionPlanId: string): EstimateChangeImageRequestBody {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withImageSpecCode(imageSpecCode: string): EstimateChangeImageRequestBody {
        this['image_spec_code'] = imageSpecCode;
        return this;
    }
    public set imageSpecCode(imageSpecCode: string  | undefined) {
        this['image_spec_code'] = imageSpecCode;
    }
    public get imageSpecCode(): string | undefined {
        return this['image_spec_code'];
    }
    public withImageId(imageId: string): EstimateChangeImageRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
}