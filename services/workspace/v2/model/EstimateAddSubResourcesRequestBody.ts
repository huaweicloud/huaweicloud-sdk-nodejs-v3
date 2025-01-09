import { BatchInquiryCommonInfo } from './BatchInquiryCommonInfo';


export class EstimateAddSubResourcesRequestBody {
    private 'desktop_pool_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'promotion_plan_id'?: string;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): EstimateAddSubResourcesRequestBody {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): EstimateAddSubResourcesRequestBody {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withPromotionPlanId(promotionPlanId: string): EstimateAddSubResourcesRequestBody {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
}