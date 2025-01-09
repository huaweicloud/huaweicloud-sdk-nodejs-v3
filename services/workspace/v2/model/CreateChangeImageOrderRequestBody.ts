import { EstimateChangeImageRequestBody } from './EstimateChangeImageRequestBody';


export class CreateChangeImageOrderRequestBody {
    private 'desktop_pool_id'?: string;
    private 'desktop_ids'?: Array<string>;
    private 'promotion_plan_id'?: string;
    private 'image_spec_code'?: string;
    private 'image_id'?: string;
    private 'delay_time'?: number;
    public message?: string;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): CreateChangeImageOrderRequestBody {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withDesktopIds(desktopIds: Array<string>): CreateChangeImageOrderRequestBody {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withPromotionPlanId(promotionPlanId: string): CreateChangeImageOrderRequestBody {
        this['promotion_plan_id'] = promotionPlanId;
        return this;
    }
    public set promotionPlanId(promotionPlanId: string  | undefined) {
        this['promotion_plan_id'] = promotionPlanId;
    }
    public get promotionPlanId(): string | undefined {
        return this['promotion_plan_id'];
    }
    public withImageSpecCode(imageSpecCode: string): CreateChangeImageOrderRequestBody {
        this['image_spec_code'] = imageSpecCode;
        return this;
    }
    public set imageSpecCode(imageSpecCode: string  | undefined) {
        this['image_spec_code'] = imageSpecCode;
    }
    public get imageSpecCode(): string | undefined {
        return this['image_spec_code'];
    }
    public withImageId(imageId: string): CreateChangeImageOrderRequestBody {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withDelayTime(delayTime: number): CreateChangeImageOrderRequestBody {
        this['delay_time'] = delayTime;
        return this;
    }
    public set delayTime(delayTime: number  | undefined) {
        this['delay_time'] = delayTime;
    }
    public get delayTime(): number | undefined {
        return this['delay_time'];
    }
    public withMessage(message: string): CreateChangeImageOrderRequestBody {
        this['message'] = message;
        return this;
    }
}